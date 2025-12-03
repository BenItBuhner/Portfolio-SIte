import SectionHeader from "./SectionHeader";
import styles from "./Summary.module.css";

const imgGroup34 = "/assets/group34.svg";

const SUMMARY_TEXT =
  "Passionate generative AI developer. Creating and improving agentic frameworks, developing RL/eval environments, scaling SLMs with new paradigms. Thrives in fast-paced workspaces and committed to shipping advanced AI systems.";

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

