"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import styles from "./FeaturedSection.module.css";


export default function FeaturedSection({ className }: { className?: string }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const featuredProjects = getFeaturedProjects();

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
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth : Math.round(el.clientWidth * 0.8);
    const gap = 24;
    const amount = cardWidth + gap;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    
    setTimeout(() => {
      updateScrollState();
    }, 300);
  };

  return (
    <section className={`${styles.featuredSection} ${className || ""}`}>
      <div className={styles.featuredHeader}>
        <div className="header-wrapper">
          <h2 className="header-title">Featured Work</h2>
          <p className="header-subtitle">Latest projects and achievements</p>
        </div>
        <Link href="/projects" className={styles.featuredArrow}>
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
          <div className={styles.featuredContent} ref={scrollContainerRef}>
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project) => (
                <Link key={project.id} href="/projects" className={styles.featuredCard}>
                  <div className={styles.featuredImage}>
                    <div className={styles.imagePlaceholder}>
                      Project Image
                    </div>
                  </div>
                  <div className={styles.featuredCardContent}>
                    <div className={styles.featuredCardHeader}>
                      <h3 className={styles.featuredTitle}>{project.title}</h3>
                    </div>
                    <p className={styles.featuredDescription}>
                      {project.description}
                    </p>
                    <div className={styles.featuredFooter}>
                      <div className={styles.featuredTech}>
                        {project.tech.slice(0, 2).map((tech, index) => (
                          <span key={index} className={styles.featuredTechTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>Big things are coming... soon!</p>
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

