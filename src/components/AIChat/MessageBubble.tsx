import styles from "./MessageBubble.module.css";

interface Message {
  id: number;
  type: "user" | "ai";
  text: string;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.type === "user";

  if (isUser) {
    return (
      <div className={`${styles.messageWrapper} ${styles.userWrapper}`}>
        <div className={styles.userBubble}>
          <p className={styles.text}>{message.text}</p>
        </div>
      </div>
    );
  }

  // AI messages are open/expanded, not in bubbles
  return (
    <div className={styles.messageWrapper}>
      <div className={styles.aiMessage}>
        <p className={styles.text}>{message.text}</p>
      </div>
    </div>
  );
}

