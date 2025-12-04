"use client";

import { useEffect, useState } from "react";
import ChatMessages from "./AIChat/ChatMessages";
import QuickPrompts from "./AIChat/QuickPrompts";
import ChatInput from "./AIChat/ChatInput";
import Window from "./AIChat/Window";
import styles from "./AIChat.module.css";

export default function AIChat({ className }: { className?: string }) {
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);

  useEffect(() => {
    const calculateInitialPosition = () => {
      const marker = document.getElementById("hero-right-marker");
      if (marker) {
        const rect = marker.getBoundingClientRect();
        setInitialPosition({
          x: rect.left + (rect.width - 600) / 2, // Center the 600px window in the heroRight area
          y: rect.top + (rect.height - 650) / 2, // Center the 650px window in the heroRight area
        });
        setIsPositioned(true);
      }
    };

    // Wait for layout to settle
    const timeout = setTimeout(calculateInitialPosition, 100);
    window.addEventListener("resize", calculateInitialPosition);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", calculateInitialPosition);
    };
  }, []);

  // Placeholder: Mock messages for demo
  const mockMessages = [
    {
      id: 1,
      type: "user" as const,
      text: "Tell me about Agent Chassis",
      timestamp: new Date(),
    },
    {
      id: 2,
      type: "ai" as const,
      text: "Agent Chassis is a modular agent foundation I developed with native MCP and local tool support. It includes pre-routed authentication, versatile state management, and more for rapid agent deployment.",
      timestamp: new Date(),
      toolCalls: [
        { tool: "Fetched project details", toolType: "project", status: "success" },
        { tool: "Retrieved repository data", toolType: "database", status: "success" },
      ],
    },
  ];

  const showQuickPrompts = mockMessages.length === 0;

  if (!isPositioned) {
    return null; // Don't render until we know where to position it
  }

  return (
    <Window
      className={className}
      defaultWidth={600}
      defaultHeight={650}
      defaultX={initialPosition.x}
      defaultY={initialPosition.y}
    >
      <div className={styles.chatContainer}>
        <div className={styles.chatContent}>
          <ChatMessages messages={mockMessages} />
          {showQuickPrompts && <QuickPrompts />}
        </div>
        <ChatInput />
      </div>
    </Window>
  );
}

