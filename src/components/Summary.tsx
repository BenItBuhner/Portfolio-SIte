import SectionHeader from "./SectionHeader";
import styles from "./Summary.module.css";

const imgGroup34 = "/assets/group34.svg";

const SUMMARY_TEXT =
  "I am very interested in generative AI, design, and more. Creating agentic abilities and scaling the limits of existing models as well as trying to create and improve upon models is my dream. I have been working a lot lately at multiple projects to further this ability and display what I can do, as I hope to scale generative AI farther than anyone else could have ever imagined. The OSS and AI community is where I live, and I love it. Overall, I am ultra-ambitious and work ahead endlessly to achieve unique and amazing things, just as I have with school thus far and as I hope to do career-wise and advancing tech as a whole.";

export default function Summary({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className || ""}`}>
      <div className={styles.headerWrapper}>
        <SectionHeader
          title="Summary"
          subtitle="Interests • Goals • Talent"
          svgSrc={imgGroup34}
          svgWidth={425}
          svgHeight={45}
          titleLeft="35px"
          subtitleLeft="189px"
          titleTop="3px"
          subtitleTop="10px"
        />
      </div>
      <p className={styles.text}>{SUMMARY_TEXT}</p>
    </section>
  );
}

