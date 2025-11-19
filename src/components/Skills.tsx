import SectionHeader from "./SectionHeader";
import styles from "./Skills.module.css";

const imgGroup35 = "/assets/group35.svg";

const SKILLS = [
  {
    title: "Python & FastAPI:",
    description:
      "I am proficient with Python and have made multiple Django and FastAPI backends with Python; I have made multiple agentic frameworks, tools, and automations to make AI do the heavy-lifting.",
  },
  {
    title: "Docker:",
    description:
      "I am able and have used Docker on numerous occasions, and multiple of my projects use Docker or have presets to easily allow deployment for reference.",
  },
  {
    title: "Creative & Unique LLM & RL Ability and Experience:",
    description:
      "For being a bit more recent to scaling these, I have been able to successfully scale multiple unique paradigms at small scales efficiently, and it's only a mere fraction of what I have planned; some of my projects show-case this.",
  },
  {
    title: "PyTorch & JAX:",
    description:
      "I have been learning more on PyTorch and have been experimenting heavily with it lately to experiment with attention, sequence length scaling, recursive scaling with smaller models, and more. I also enjoy JAX more when it comes to training on large arrays of TPUs.",
  },
  {
    title: "Adaptability & SWE:",
    description:
      "I have quickly adapted and learned with the usage of generative AI, which has helped guide me and also assist in numerous projects as well.",
  },
  {
    title: "Design:",
    description:
      "I truly love to design a lot with Figma and have designed for many and myself, and have been able to transfer these over to CSS/Tailwind CSS rapidly with the usage of the Figma MCP server.",
  },
  {
    title: "Basic SEO & Social Media Management:",
    description: "I have scaled my own X account, excel at grammar, and more.",
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

