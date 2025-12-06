import Link from "next/link";
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
        {blog.image ? (
          <img src={blog.image} alt={blog.title} />
        ) : (
          <div className={styles.imagePlaceholder}>
            Blog Image
          </div>
        )}
      </div>

      <div className={styles.blogContent}>
        <div className={styles.blogHeader}>
          <div className={styles.blogMeta}>
            <span className={styles.blogDate}>
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
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
