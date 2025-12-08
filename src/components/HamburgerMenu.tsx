"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import ThemeToggle from "./ThemeToggle";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (isVisible) {
      setIsVisible(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    } else {
      setIsVisible(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }
  };

  const closeMenu = () => {
    if (isAnimating || !isVisible) return;

    setIsAnimating(true);
    setIsVisible(false);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match transition duration
  };

  return (
    <>
      <button
        className={styles.hamburgerButton}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isVisible}
        disabled={isAnimating}
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      {mounted &&
        createPortal(
          <>
            <div className={`${styles.overlay} ${isVisible ? styles.overlayOpen : ''}`} onClick={closeMenu} />
            <nav className={`${styles.menu} ${isVisible ? styles.menuOpen : ''}`} role="dialog" aria-modal>
              <Link
                href="/overview"
                className={`${styles.menuLink} ${styles.menuLinkDelay1} ${isVisible ? styles.menuLinkVisible : ''}`}
                onClick={closeMenu}
              >
                Overview
              </Link>
              <Link
                href="/projects"
                className={`${styles.menuLink} ${styles.menuLinkDelay2} ${isVisible ? styles.menuLinkVisible : ''}`}
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className={`${styles.menuLink} ${styles.menuLinkDelay3} ${isVisible ? styles.menuLinkVisible : ''}`}
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                href="/contact-me"
                className={`${styles.menuLink} ${styles.menuLinkDelay4} ${isVisible ? styles.menuLinkVisible : ''}`}
                onClick={closeMenu}
              >
                Contact me
              </Link>
              <div
                className={`${styles.menuLink} ${styles.menuLinkDelay5} ${isVisible ? styles.menuLinkVisible : ''}`}
              >
                <ThemeToggle />
              </div>
            </nav>
          </>,
          document.body
        )}
    </>
  );
}

