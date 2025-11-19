"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects, Project } from "@/data/projects";
import styles from "./page.module.css";

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on search
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesSearch;
    });
  }, [allProjects, searchQuery]);

  return (
    <div className="page-container">
      <Header className="animate-fade-in" />
      <main className="page-main">
        <section className={`${styles.projectsSection} animate-fade-in-up animate-delay-200`}>
          <div className="header-wrapper">
            <h1 className="header-title">Projects</h1>
            <p className="header-subtitle">Building the Future of Technology</p>
          </div>
          <div className={styles.projectsContent}>
            <p className={styles.introText}>
              Here are some of the projects I've worked on, ranging from AI and machine learning to distributed systems and web development.
              Each project represents a unique challenge and learning opportunity.
            </p>

            {/* Search Controls */}
            <div className={`${styles.searchContainer} animate-fade-in-up animate-delay-250`}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            {/* Results count */}
            <div className={`${styles.resultsInfo} animate-fade-in-up animate-delay-300`}>
              <p>
                {filteredProjects.length === allProjects.length
                  ? `Showing all ${allProjects.length} projects`
                  : `Showing ${filteredProjects.length} of ${allProjects.length} projects`
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

            <div className={`${styles.projectsGrid} animate-fade-in-up animate-delay-350`}>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    className={`animate-fade-in-up animate-delay-${Math.min(400 + index * 100, 1000)}`}
                  />
                ))
              ) : (
                <div className={styles.noResults}>
                  <p>Big things are coming... soon!</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                    }}
                    className={styles.clearFilters}
                  >
                    Clear search
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
