import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function OverviewPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Summary />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
