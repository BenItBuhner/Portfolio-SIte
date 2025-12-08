/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { BlogStructuredData } from "@/components/StructuredData";
import { getBlogById } from "@/data/blogs";
import styles from "./page.module.css";

interface BlogPageProps {
  params: Promise<{ postId: string }>;
}

/**
 * Safely extracts the final segment from a blog slug for URL construction.
 * Handles edge cases like empty slugs, missing slashes, and undefined values.
 */
function getBlogSlugSegment(slug: string | undefined): string {
  if (!slug || typeof slug !== "string") {
    return "";
  }
  
  // Remove leading/trailing slashes and whitespace
  const trimmed = slug.trim().replace(/^\/+|\/+$/g, "");
  
  if (!trimmed) {
    return "";
  }
  
  // Split by '/' and get the last segment
  const segments = trimmed.split("/").filter(segment => segment.length > 0);
  
  // Return the last segment, or the whole trimmed slug if no slashes found
  return segments.length > 0 ? segments[segments.length - 1] : trimmed;
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { postId } = await params;
  const blog = getBlogById(postId);

  // Safely construct the blog URL
  const slugSegment = getBlogSlugSegment(blog?.slug);
  const blogUrl = blog
    ? (slugSegment
        ? `https://bennettbuhner.com/blog/${slugSegment}`
        : `https://bennettbuhner.com/blog/${blog.id}`)
    : "https://bennettbuhner.com/blog";

  return (
    <div className="page-container">
      <Header />
      {blog && <BlogStructuredData blog={blog} />}
      <main className="page-main">
        <section className={`${styles.page} animate-fade-in-up animate-delay-200`}>
          {blog ? (
            <>
              <div className="header-wrapper">
                <h1 className="header-title">{blog.title}</h1>
              </div>

              <div className={styles.metaRow}>
                <div className={styles.metaLeft}>
                  <div className={styles.meta}>
                    <span>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  {blog.tags?.length ? (
                    <div className={styles.tags}>
                      {blog.tags.map((t, i) => (
                        <span key={i} className={styles.tag}>{t}</span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className={styles.links}>
                  <ShareButton 
                    title={blog.title} 
                    text={`Read this article: ${blog.title}`}
                    url={blogUrl} 
                  />
                </div>
              </div>
              <div className={styles.headerImage}>
                <div className={styles.imagePlaceholder}>
                  {blog.image ? (
                    <img src={blog.image} alt={blog.title} />
                  ) : (
                    <span>Blog Image</span>
                  )}
                </div>
              </div>
              <div className={styles.content} dangerouslySetInnerHTML={{ __html: blog.content }} />
            </>
          ) : (
            <>
              <div className="header-wrapper">
                <h1 className="header-title">Post not found</h1>
              </div>
              <div className={styles.content}>
                Sorry, we couldn&apos;t find that post.
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}


