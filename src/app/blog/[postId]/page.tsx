import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { BlogStructuredData } from "@/components/StructuredData";
import { getBlogById } from "@/data/blogs";
import styles from "./page.module.css";

interface BlogPageProps {
  params: Promise<{ postId: string }>;
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { postId } = await params;
  const blog = getBlogById(postId);

  return (
    <div className="page-container">
      <Header />
      <BlogStructuredData blog={blog} />
      <main className="page-main">
        <section className={styles.page}>
          {blog ? (
            <>
              <div className="header-wrapper">
                <h1 className="header-title">{blog.title}</h1>
                <div className={styles.shareWrapper}>
                  <ShareButton 
                    title={blog.title} 
                    text={`Read this article: ${blog.title}`}
                    url={`https://bennettbuhner.com/blog/${blog.slug.split("/").pop()}`} 
                  />
                </div>
              </div>
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
                Sorry, we couldn't find that post.
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}


