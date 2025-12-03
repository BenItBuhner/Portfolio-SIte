import SectionHeader from "./SectionHeader";
import styles from "./Experience.module.css";

const imgGroup34Experience = "/assets/group34-experience.svg";

const INTRO_TEXT =
  "While my experience is limited (due to school/projects), I have still contributed a few key things, all of which are useful towards ML, agents, interfaces, and design.";

const EXPERIENCE_ITEMS = [
  {
    title: "Creating & Scaling RL Environments:",
    text: "I have made prior environments, such as the \"UBench\" environment for Prime Intellect's \"prime-environments,\" and am still working on it.",
  },
  {
    title: "Training Models:",
    text: "I have made a few models, fine-tuned/distilled others, and also deployed some for Aviate (in incognito right now).",
  },
  {
    title: "Developing Agents & Frameworks:",
    text: "I have made agents such as the agent-chassis and used these for Aviate as well, and some even such as the \"Model Proxy\" has been implemented and scaled for use on a production instance that thousands of people use for Claude Code.",
  },
  {
    title: "Designing:",
    text: "I have designed for a few such as Skinvincible and Aviate, and love to do it in my past-time. My focus is primarily mobile UI/UX, but I often work on other formats as well.",
  },
];

export default function Experience({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className || ""}`}>
      <div className={styles.headerWrapper}>
        <SectionHeader
          title="Experience"
          subtitle="Freelance • Independent • Startup"
          svgSrc={imgGroup34Experience}
          svgWidth={527}
          svgHeight={46}
          titleLeft="35px"
          subtitleLeft="208px"
          titleTop="3px"
          subtitleTop="10px"
          titleSize="30px"
          subtitleSize="20px"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.intro}>{INTRO_TEXT}</p>
        <ul className={styles.list}>
          {EXPERIENCE_ITEMS.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item.title && <span className={styles.title}>{item.title}</span>}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

