import SectionHeader from "./SectionHeader";
import styles from "./Education.module.css";

const imgGroup35Education = "/assets/group35-education.svg";

const INTRO_TEXT =
  "I am a bit early and proactive, as I am taking HS and am also using PSEO to my advantage, enabling me to take college classes and having them count as both HS and college credits.";

const EDUCATION_ITEMS = [
  {
    title: "High School:",
    text: "I am currently enrolled at Adrian, MN's high school, currently in grade 12 and nearing the end of semester one.",
  },
  {
    title: "College:",
    text: "I am currently taking college classes through PSEO online, allowing me to do them asynchronously anywhere. I am nearing my A.A. in Liberal Arts as well, and due to receive it by the end of the second semester in spring.",
  },
];

const OUTRO_TEXT =
  "This may sound immensely ambiguous, but I have already found I've been able to take five three-point classes concurrently and still have time for a full-time job; I want to get ahead and really make a difference where it matters.";

export default function Education() {
  return (
    <section className={styles.section}>
      <div className={styles.headerWrapper}>
        <SectionHeader
          title="Education"
          subtitle="High School • College"
          svgSrc={imgGroup35Education}
          svgWidth={406}
          svgHeight={46}
          titleLeft="35px"
          subtitleLeft="193px"
          titleTop="3px"
          subtitleTop="10px"
          titleSize="30px"
          subtitleSize="20px"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.intro}>{INTRO_TEXT}</p>
        <ul className={styles.list}>
          {EDUCATION_ITEMS.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <span className={styles.title}>{item.title}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <p className={styles.outro}>{OUTRO_TEXT}</p>
      </div>
    </section>
  );
}

