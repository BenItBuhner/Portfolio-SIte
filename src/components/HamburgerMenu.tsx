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
    setMounted(true);
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
        style={{
          pointerEvents: isAnimating ? 'none' : 'auto'
        }}
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
                className={`${styles.menuLink} ${isVisible ? styles.menuLinkVisible : ''}`}
                onClick={closeMenu}
                style={{
                  transitionDelay: isVisible ? '0.1s' : '0.3s',
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              >
                Overview
              </Link>
              <Link
                href="/projects"
                className={`${styles.menuLink} ${isVisible ? styles.menuLinkVisible : ''}`}
                onClick={closeMenu}
                style={{
                  transitionDelay: isVisible ? '0.2s' : '0.2s',
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className={`${styles.menuLink} ${isVisible ? styles.menuLinkVisible : ''}`}
                onClick={closeMenu}
                style={{
                  transitionDelay: isVisible ? '0.3s' : '0.1s',
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              >
                Blog
              </Link>
              <Link
                href="/contact-me"
                className={`${styles.menuLink} ${isVisible ? styles.menuLinkVisible : ''}`}
                onClick={closeMenu}
                style={{
                  transitionDelay: isVisible ? '0.4s' : '0s',
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              >
                Contact me
              </Link>
              <div
                className={`${styles.menuLink} ${isVisible ? styles.menuLinkVisible : ''}`}
                style={{
                  transitionDelay: isVisible ? '0.5s' : '0s',
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
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

