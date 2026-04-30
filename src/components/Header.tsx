import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

const imgFrame44 = "/assets/frame44.png";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={`${styles.header} ${className || ""}`}>
      <div className={styles.headerInner}>
        <div className={styles.backgroundImage}>
          <Image
            alt=""
            src={imgFrame44}
            fill
            className={styles.bgImage}
            style={{ objectPosition: "50% 50%" }}
            priority
          />
        </div>
        <div className={styles.content}>
          <div className={styles.nameContainer}>
            <Link href="/" className={styles.nameLink}>
              <p className={styles.name}>Bennett Buhner</p>
            </Link>
          </div>
        </div>
        <nav className={styles.tagContainer}>
          <div className={styles.tagBackground}>
            <svg
              className={styles.tagSvg}
              viewBox="0 0 436 53"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1 0H435.2L412.1 52.9003H0L24.1 0Z"
                style={{ fill: "var(--color-tag-surface)" }}
              />
              <path
                d="M434.0 0.87793L411.5 52.0225H1.4L24.9 0.87793H434.0Z"
                style={{
                  stroke: "var(--color-tag-border)",
                  fill: "none",
                  strokeWidth: 1.75653,
                }}
              />
            </svg>
          </div>
              <div className={styles.navLinks}>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <span className={styles.bullet}>•</span>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <span className={styles.bullet}>•</span>
            <Link href="/contact-me" className="nav-link">
              Contact me
            </Link>
            <span className={styles.bullet}>•</span>
            <ThemeToggle />
          </div>
        </nav>
        <div className={styles.hamburgerContainer}>
          <HamburgerMenu />
        </div>
      </div>
      <div className={styles.headerFade} aria-hidden />
    </header>
  );
}

