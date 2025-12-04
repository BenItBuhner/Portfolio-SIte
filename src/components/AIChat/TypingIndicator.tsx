import styles from "./TypingIndicator.module.css";

export default function TypingIndicator() {
  return (
    <div className={styles.typingWrapper}>
      <div className={styles.typingBubble}>
        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
}

