import styles from "./ChatHeader.module.css";

export default function ChatHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerIcon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className={styles.headerText}>
          <h3 className={styles.title}>Ask About My Work</h3>
          <p className={styles.subtitle}>AI Portfolio Assistant</p>
        </div>
      </div>
    </div>
  );
}

