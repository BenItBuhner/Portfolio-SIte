import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
export default function OverviewPage() {
  return (
    <div className="page-container">
      <Header className="animate-fade-in" />
      <main className="page-main">
        <section className="animate-fade-in-up animate-delay-200">
          <div className="header-wrapper">
            <h1 className="header-title">Overview</h1>
            <p className="header-subtitle">About Me • Experience • Projects</p>
          </div>
        </section>
        <Summary className="animate-fade-in-up animate-delay-300" />
        <Skills className="animate-fade-in-up animate-delay-400" />
        <Projects className="animate-fade-in-up animate-delay-500" />
        <Experience className="animate-fade-in-up animate-delay-600" />
        <Education className="animate-fade-in-up animate-delay-700" />
      </main>
      <Footer className="animate-fade-in animate-delay-800" />
    </div>
  );
}
