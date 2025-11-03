import SectionHeader from "./SectionHeader";
import styles from "./Projects.module.css";

const imgGroup36 = "/assets/group36.svg";

const INTRO_TEXT =
  "I have made numerous projects (and models) as of recent and have helped out in other ways to scale reasoning, maximize intelligence, and offer numerous contributions to the OSS community, as well as to better my ability and practice.";

const PROJECTS = [
  {
    title: "Athena Heavy Agent:",
    description:
      "This is my most powerful long-horizon reasoning agent ever, and whilst it does go overboard sometimes, it's generally very thorough when it comes to research, debugging, and reasoning over longer than typical spans in parallel.",
    subItems: ["To see more on Athena Heavy, you can see the repo here: "],
  },
  {
    title: "Athena Heavy Website:",
    description:
      "This is the Athena Heavy site, enabling anyone and everyone to use and even host it themselves. It has been designed with simplicity and built with the help of Figma's MCP.",
    subItems: ["You can check the website repository on GitHub here: "],
  },
  {
    title: "Athena Heavy CLI:",
    description:
      "Although there is more than enough CLIs as it stands, I figured making a simplistic one would help me more deeply integrate Athena Heavy into local environments for more rigorous hands-on work.",
    subItems: ["You can check the repo on GitHub here: "],
  },
  {
    title: "Gemma 3 270M DeepSeek Distill:",
    description:
      "This was more basic project, but fine-tuning Gemma was no easy feat without a ton of compute to make it as rapid as possible. The goal here was to use SFT to instill reasoning, even if not fully fathful, the overall responses have improved drastically as a result.",
    subItems: ["You can read more in the Hugging Face here: "],
  },
  {
    title: "Athena 1 Paracursive:",
    description:
      'This is the most unique and impressive "SLM" in recent time, designed to be recursive, think deeply, call tools, and more, all at one of the smallest sizes yet outranking most LLMs to date on a multitude of benchmarks. The best part is there is still more room to scale unknown paradigms I\'ve been tinkering with.',
    subItems: ["To see more on this, you can check out the Hugging Face here: "],
  },
];

const OUTRO_TEXT =
  "These are the core and most significant projects I have made in recent time and aim to do even greater.";

export default function Projects() {
  return (
    <section className={styles.section}>
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

