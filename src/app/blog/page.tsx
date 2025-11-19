"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllBlogs, Blog } from "@/data/blogs";
import styles from "./page.module.css";

export default function BlogPage() {
  const allBlogs = getAllBlogs();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on search
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter(blog => {
      // Search filter
      const matchesSearch = searchQuery === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesSearch;
    });
  }, [allBlogs, searchQuery]);

  return (
    <div className="page-container">
      <Header className="animate-fade-in" />
      <main className="page-main">
        <section className={`${styles.blogSection} animate-fade-in-up animate-delay-200`}>
          <div className="header-wrapper">
            <h1 className="header-title">Blog</h1>
            <p className="header-subtitle">Thoughts on AI, technology, and the future of development</p>
          </div>
          <div className={styles.blogContent}>
            <p className={styles.introText}>
              Welcome to my blog where I share insights, tutorials, and thoughts about AI, machine learning, and software development.
              Here you'll find technical deep-dives, industry analysis, and practical guides.
            </p>

            {/* Search Controls */}
            <div className={`${styles.searchContainer} animate-fade-in-up animate-delay-250`}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            {/* Results count */}
            <div className={`${styles.resultsInfo} animate-fade-in-up animate-delay-300`}>
              <p>
                {filteredBlogs.length === allBlogs.length
                  ? `Showing all ${allBlogs.length} blog posts`
                  : `Showing ${filteredBlogs.length} of ${allBlogs.length} blog posts`
                }
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className={styles.clearFilters}
                  >
                    Clear search
                  </button>
                )}
              </p>
            </div>

            <div className={`${styles.blogGrid} animate-fade-in-up animate-delay-350`}>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog, index) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                    className={`animate-fade-in-up animate-delay-${Math.min(400 + index * 100, 1000)}`}
                  />
                ))
              ) : (
                <div className={styles.noResults}>
                  <p>Nothing here... yet!</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedTag("All");
                    }}
                    className={styles.clearFilters}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer className="animate-fade-in animate-delay-800" />
    </div>
  );
}
