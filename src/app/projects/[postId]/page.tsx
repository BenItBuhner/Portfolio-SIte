import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import { ProjectStructuredData } from "@/components/StructuredData";
import { getProjectById } from "@/data/projects";
import styles from "./page.module.css";

interface ProjectPageProps {
  params: Promise<{ postId: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { postId } = await params;
  const project = getProjectById(postId);

  return (
    <div className="page-container">
      <Header />
      {project && <ProjectStructuredData project={project} />}
      <main className="page-main">
        <section className={`${styles.page} animate-fade-in-up animate-delay-200`}>
          <div className="header-wrapper">
            <h1 className="header-title">{project?.title ?? "Project not found"}</h1>
            <p className="header-subtitle">Project details</p>
          </div>

          {project ? (
            <>
              <div className={styles.metaRow}>
                <div className={styles.metaLeft}>
                  <div className={styles.tech}>
                    {project.tech.map((t, i) => (
                      <span key={i} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.links}>
                  <ShareButton
                    title={project.title}
                    text={`Check out this project: ${project.title}`}
                    url={`https://bennettbuhner.com/projects/${project.id}`}
                  />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>

              {project.image && (
                <div className={styles.headerImage}>
                  <div className={styles.imagePlaceholder}>
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
              )}

              <div 
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: project.content || project.description }}
              />
            </>
          ) : (
            <div className={styles.content}>
              Sorry, we couldn't find that project.
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}


