"use client";

import { useMemo, useState } from "react";
import styles from "./Timeline.module.css";
import { getTimeline, TimelineEntry } from "@/data/timeline";

const FILTERS: string[] = [
  "All",
  "Experience",
  "Education",
  "Project",
  "Open Source",
  "Other",
];

export default function Timeline({ className }: { className?: string }) {
  const all = getTimeline();
  const [filter, setFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const entries = useMemo(() => {
    if (filter === "All") return all;
    return all.filter((e) => e.type === filter);
  }, [all, filter]);

  const toggle = (id: string) => {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  };

  return (
    <section className={`${styles.timelineSection} ${className || ""}`}>
      <div className={styles.controls}>
        {FILTERS.map((f) => (
          <button
            key={String(f)}
            onClick={() => setFilter(String(f))}
            className={`${styles.filterBtn} ${filter === f ? styles.filterBtnActive : ""}`}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.timelineWrap}>
        <div className={styles.line} aria-hidden />

        {entries.map((entry) => (
          <article key={entry.id} className={styles.item}>
            <div className={styles.dateCol} aria-hidden>
              {entry.date}
            </div>

            <div className={styles.markerWrap}>
              <div className={styles.marker} aria-hidden />
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.headerContent}>
                  <span className={styles.mobileDate}>{entry.date}</span>
                  <h3 className={styles.title}>{entry.title}</h3>
                  <div className={styles.subtitle}>{entry.subtitle} {entry.location ? `• ${entry.location}` : ""}</div>
                </div>
                <div className={styles.typeTag}>{entry.type}</div>
              </div>

              <div className={styles.details}>
                {entry.description}
                {entry.highlights && (
                  <ul style={{ marginTop: 8 }}>
                    {entry.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
                {entry.links && (
                  <div style={{ marginTop: 8 }}>
                    {entry.links.map((l, i) => (
                      <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: 12, color: 'var(--color-accent)' }}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <button
                className={styles.expandBtn}
                onClick={() => toggle(entry.id)}
                aria-expanded={!!expanded[entry.id]}
              >
                {expanded[entry.id] ? "Collapse" : "Expand"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
