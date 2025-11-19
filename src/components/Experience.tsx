import SectionHeader from "./SectionHeader";
import styles from "./Experience.module.css";

const imgGroup34Experience = "/assets/group34-experience.svg";

const INTRO_TEXT =
  "Albeit, I have very little experience so far, since I am only just finishing up school and have primarily focused on making designs and my own independent OSS projects along with minor contributions to other projects. Nonetheless, I will provide a few examples of what i have done so far just for an idea of what I've done.";

const EXPERIENCE_ITEMS = [
  {
    text: "PRs; blah blah blah, need to make PRs later.",
  },
  {
    title: "Designing for Others:",
    text: "I have designed for some others, such as a few small startups like Skinvincible AI, Aviate (still incognito), and a few personal friends. I have created interfaces, widgets, logos, and more.",
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

