"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default function FlipProfile() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Add a temporary class to trigger the initial flip animation
    el.classList.add(styles.initialFlip);

    const handleAnimationEnd: EventListener = () => {
      el.classList.remove(styles.initialFlip);
    };

    el.addEventListener("animationend", handleAnimationEnd);

    // Safety: remove the class after 3s in case animationend doesn't fire
    const timeout = setTimeout(() => {
      handleAnimationEnd(new Event("animationend") as Event);
    }, 3000);

    return () => {
      el.removeEventListener("animationend", handleAnimationEnd);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Image
            src="/account-icon.png"
            alt="Bennett Buhner - Profile"
            width={200}
            height={200}
            className={styles.profileImg}
            priority
          />
        </div>
        <div className={styles.flipCardBack}>
          <Image
            src="/account-icon.png"
            alt="Bennett Buhner - Face"
            width={200}
            height={200}
            className={styles.profileImg}
            priority
          />
        </div>
      </div>
    </div>
  );
}
