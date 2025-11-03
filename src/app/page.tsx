import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function PortfolioLandingPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* Landing page content can be added here if needed */}
      </main>
      <Footer />
    </div>
  );
}
