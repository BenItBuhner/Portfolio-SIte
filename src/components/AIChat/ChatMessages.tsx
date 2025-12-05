import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import ToolCall from "./ToolCall";
import styles from "./ChatMessages.module.css";

export interface Message {
  id: number;
  type: "user" | "ai";
  text: string;
  timestamp: Date;
  toolCalls?: Array<{ 
    tool: string; 
    toolType?: "project" | "skills" | "experience" | "search" | "database" | "api";
    status?: "calling" | "success" | "error" 
  }>;
}

interface ChatMessagesProps {
  messages: Message[];
  isTyping?: boolean;
}

export default function ChatMessages({ messages, isTyping = false }: ChatMessagesProps) {
  return (
    <div className={styles.messagesContainer}>
      <div className={styles.messagesList}>
        {messages.map((message) => (
          <div key={message.id}>
            {message.type === "ai" && message.toolCalls && message.toolCalls.length > 0 && (
              <div className={styles.toolCallsContainer}>
                {message.toolCalls.map((toolCall, index) => (
                  <ToolCall
                    key={index}
                    tool={toolCall.tool}
                    toolType={toolCall.toolType || "api"}
                    status={toolCall.status || "calling"}
                  />
                ))}
              </div>
            )}
            <MessageBubble message={message} />
          </div>
        ))}
        {isTyping && <TypingIndicator />}
      </div>
    </div>
  );
}

