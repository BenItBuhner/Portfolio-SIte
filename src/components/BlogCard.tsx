import Link from "next/link";
import Image from "next/image";
import { formatDateUTC } from "@/lib/dateUtils";
import styles from "./BlogCard.module.css";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  comingSoon?: boolean;
}

interface BlogCardProps {
  blog: Blog;
  className?: string;
}

export default function BlogCard({ blog, className }: BlogCardProps) {
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/^\/+|\/+$/g, "")
      .replace(/^blog\//, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  const slugFromProp = (blog.slug || "").replace(/^\/+|\/+$/g, "").split("/").pop();
  const slugSegment = slugFromProp || slugify(blog.title) || String(blog.id);
  return (
    <article className={`${styles.blogCard} ${className || ""}`}>
      {blog.comingSoon && (
        <div className={styles.comingSoon}>
          <span className={styles.comingSoonBadge}>Coming Soon</span>
        </div>
      )}
      <div className={styles.blogImage}>
        <div className={styles.imagePlaceholder}>
          {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className={styles.blogImg}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <span>Blog Image</span>
          )}
        </div>
      </div>

      <div className={styles.blogContent}>
        <div className={styles.blogHeader}>
          <div className={styles.blogMeta}>
            <span className={styles.blogDate}>
              {formatDateUTC(blog.date)}
            </span>
            {!blog.comingSoon && (
              <span className={styles.blogReadTime}>{blog.readTime}</span>
            )}
          </div>
          <h3 className={styles.blogTitle}>{blog.title}</h3>
        </div>

        <p className={styles.blogExcerpt}>
          {blog.excerpt}
        </p>

        <div className={styles.blogFooter}>
          <div className={styles.blogTags}>
            {blog.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <Link href={`/blog/${slugSegment}`} className={styles.readMoreLink}>
            <span>Read More</span>
            <svg
              className={styles.arrowIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
