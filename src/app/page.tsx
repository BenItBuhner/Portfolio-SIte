import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedSection from "@/components/FeaturedSection";
import RecentBlogs from "@/components/RecentBlogs";
import styles from "./page.module.css";

export default function PortfolioLandingPage() {
  return (
    <div className="page-container">
      <Header className="animate-fade-in" />
      <main className="page-main">
        <section className={`${styles.hero} animate-fade-in-up animate-delay-200`}>
          <div className={styles.heroLeft}>
            <div className={styles.heroContent}>
              <div className={`${styles.profileImage} animate-fade-in-up animate-delay-300`}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src="/account-icon.png"
                    alt="Bennett Buhner"
                    width={200}
                    height={200}
                    className={styles.profileImg}
                    priority
                  />
                </div>
              </div>
              <div className={`${styles.heroText} animate-fade-in-up animate-delay-400`}>
                <h1 className={styles.title}>Hi, I'm Bennett!</h1>
                <p className={styles.subtitle}>AI Engineer, Developer, Machine Learning Enthusiast</p>
                <p className={styles.description}>
                  Pushing the boundaries of generative AI/RL, design, and tech.
                  Building agents and tools that scale beyond imagination.
                </p>
              </div>
              <div className={`${styles.heroActions} animate-fade-in-up animate-delay-500`}>
                <Link href="/projects" className="btn-primary">
                  Explore My Work
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/contact-me" className="btn-secondary">
                  Get In Touch
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.heroRight}>
            {/* Right column - empty for now */}
          </div>
        </section>

        <FeaturedSection className="animate-fade-in-up animate-delay-600" />
        <RecentBlogs className="animate-fade-in-up animate-delay-700" />
      </main>
      <Footer className="animate-fade-in animate-delay-800" />
    </div>
  );
}



