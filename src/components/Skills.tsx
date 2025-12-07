import SectionHeader from "./SectionHeader";
import styles from "./Skills.module.css";

const imgGroup35 = "/assets/group35.svg";

const SKILLS = [
  {
    title: "Primary Languages:",
    description: "Python, JavaScript and TypeScript",
  },
  {
    title: "Full-Stack Frameworks:",
    description: "FastAPI, Django, Next.js",
  },
  {
    title: "Generative AI & ML Engineering:",
    description:
      "PyTorch, TensorFlow, language model tuning/distillation, RL environment design, model architecture design.",
  },
  {
    title: "Agentic Systems & Orchestration:",
    description:
      "Long-horizon multi-agent orchestration, efficient agent tool usage, persistent agentic frameworks",
  },
  {
    title: "Tools & Platforms:",
    description: "Docker, Git/GitHub, Vercel, Figma",
  },
];

export default function Skills({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className || ""}`}>
      <div className={styles.headerWrapper}>
        <SectionHeader
          title="Skills"
          subtitle="Creativity • Design • SWE"
          svgSrc={imgGroup35}
          svgWidth={374}
          svgHeight={46}
          titleLeft="35px"
          subtitleLeft="132px"
          titleTop="3px"
          subtitleTop="10px"
        />
      </div>
      <ul className={styles.list}>
        {SKILLS.map((skill, index) => (
          <li key={index} className={styles.listItem}>
            <span className={styles.title}>{skill.title}</span>
            <span className={styles.description}> {skill.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

