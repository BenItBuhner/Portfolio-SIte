import styles from "./ChatInput.module.css";

export default function ChatInput() {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Ask about my work..."
          className={styles.input}
          aria-label="Chat input"
        />
        <button
          type="button"
          className={styles.sendButton}
          aria-label="Send message"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

