import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import styles from "./page.module.css";

export default function TimelinePage() {
  return (
    <div className="page-container">
      <Header className="animate-fade-in" />
      <main className="page-main">
        <section className={`${styles.timelineSection} animate-fade-in-up animate-delay-200`}>
          <div className="header-wrapper">
            <h1 className="header-title">Timeline</h1>
            <p className="header-subtitle">A curated timeline of projects, education, and open-source work</p>
          </div>

          <Timeline />
        </section>
      </main>
      <Footer className="animate-fade-in animate-delay-800" />
    </div>
  );
}
