import styles from "./QuickPrompts.module.css";

const PROMPTS = [
  "Tell me about Agent Chassis",
  "What's your experience with AI?",
  "Show me your projects",
  "What technologies do you use?",
];

export default function QuickPrompts() {
  return (
    <div className={styles.promptsContainer}>
      <p className={styles.promptsLabel}>Try asking:</p>
      <div className={styles.promptsList}>
        {PROMPTS.map((prompt, index) => (
          <button
            key={index}
            className={styles.promptButton}
            type="button"
            aria-label={`Ask: ${prompt}`}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}

