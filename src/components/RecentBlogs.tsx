"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getAllBlogs } from "@/data/blogs";
import styles from "./RecentBlogs.module.css";

export default function RecentBlogs({ className }: { className?: string }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const blogPosts = getAllBlogs();

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const hasOverflow = scrollWidth > clientWidth;
    const threshold = 5;

    setCanScrollLeft(hasOverflow && scrollLeft > threshold);
    setCanScrollRight(hasOverflow && scrollLeft < scrollWidth - clientWidth - threshold);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const checkState = () => {
      setTimeout(updateScrollState, 100);
    };

    updateScrollState();
    checkState();

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", checkState);

    const resizeObserver = new ResizeObserver(checkState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", checkState);
      resizeObserver.disconnect();
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector(".card") as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth : Math.round(el.clientWidth * 0.8);
    const gap = 24;
    const amount = cardWidth + gap;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });

    setTimeout(() => {
      updateScrollState();
    }, 300);
  };

  return (
    <section className={`${styles.blogSection} ${className || ""}`}>
      <div className={styles.blogHeader}>
        <div className="header-wrapper">
          <h2 className="header-title">Recent Blogs</h2>
          <p className="header-subtitle">Thoughts on AI, technology, and the future of development</p>
        </div>
        <Link href="/blog" className={styles.blogArrow}>
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer}>
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
              aria-label="Scroll left"
            >
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }}>
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          <div className={`${styles.fadeLeft} ${canScrollLeft ? styles.fadeShow : ""}`} aria-hidden />
          <div className={styles.blogContent} ref={scrollContainerRef}>
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <div key={post.id} className="card">
                  <div className={styles.blogCard}>
                    <div className={styles.blogMeta}>
                      <span className={styles.blogDate}>{post.date}</span>
                      <span className={styles.blogReadTime}>{post.readTime}</span>
                    </div>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className={styles.blogLink}>
                      Read More
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>Nothing here... yet!</p>
              </div>
            )}
          </div>
          <div className={`${styles.fadeRight} ${canScrollRight ? styles.fadeShow : ""}`} aria-hidden />
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
              aria-label="Scroll right"
            >
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
