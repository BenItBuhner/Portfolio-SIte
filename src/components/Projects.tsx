import SectionHeader from "./SectionHeader";
import styles from "./Projects.module.css";

const imgGroup36 = "/assets/group36.svg";

const INTRO_TEXT =
  "I am actively making and maintaining a few significant projects of mine, which make agents/LLMs more powerful and accessible to all! These show off my ability to write, scale, and make experiences like no other:";

const PROJECTS = [
  {
    title: "Athena Recursive:",
    description:
      "Trained a high-performance ~256M parameter SLM using new and unique \"recursive\" and synthetic data training methods such as TRM, the SYNTH dataset, and rigorous RL.",
    subItems: [],
  },
  {
    title: "Athena Cloud Code Agent:",
    description:
      "Architected a multi-agent orchestration system capable of long-horizon software engineering tasks. Can edit, test, debug, and iterate, file PRs for your autonomously.",
    subItems: [],
  },
  {
    title: "Agent Chassis:",
    description:
      "Developed a modular agent foundation with native MCP and local tool support. Includes pre-routed authentication, versatile state management, and more for rapid agent deployment.",
    subItems: [],
  },
  {
    title: "Model Proxy & Claude Code Tunnel:",
    description:
      "Built a resilient inference gateway that offers API key, provider, and model-level fallbacks. Forked and created a custom version for using any model with Claude Code easily.",
    subItems: [],
  },
];

const OUTRO_TEXT =
  "These are some of my most recent projects, and I hope to keep making a ton! You can check them out at my site or on my GitHub (at the top).";

export default function Projects({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className || ""}`}>
      <div className={styles.headerWrapper}>
        <SectionHeader
          title="Projects & Models"
          subtitle="Agentic • Autonomous • Intelligent"
          svgSrc={imgGroup36}
          svgWidth={615}
          svgHeight={46}
          titleLeft="35px"
          subtitleLeft="298px"
          titleTop="3px"
          subtitleTop="10px"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.intro}>{INTRO_TEXT}</p>
        <ul className={styles.list}>
          {PROJECTS.map((project, index) => (
            <li key={index} className={styles.listItem}>
              <span className={styles.title}>{project.title}</span>
              <span>{project.description}</span>
              {project.subItems && (
                <ul className={styles.subList}>
                  {project.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className={styles.subListItem}>
                      <span className={styles.subText}>{subItem}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <p className={styles.outro}>{OUTRO_TEXT}</p>
      </div>
    </section>
  );
}

