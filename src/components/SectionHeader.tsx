import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  svgSrc: string;
  svgWidth: number;
  svgHeight: number;
  titleLeft: string;
  subtitleLeft: string;
  titleTop?: string;
  subtitleTop?: string;
  titleSize?: string;
  subtitleSize?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  svgSrc,
  svgWidth,
  svgHeight,
  titleLeft,
  subtitleLeft,
  titleTop = "3.513px",
  subtitleTop = "11.241px",
  titleSize,
  subtitleSize,
}: SectionHeaderProps) {
  return (
    <div className={styles.container}>
      <div 
        className={styles.svgContainer}
        style={{ width: `${svgWidth}px`, height: `${svgHeight}px` }}
      >
        {svgSrc === "/assets/group34.svg" && (
          <svg
            className={styles.svg}
            viewBox="0 0 501 53"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Right trapezoid - theme-aware */}
            <g>
              <path
                d="M214.385 0H500.233L477.031 52.9003H191.184L214.385 0Z"
                style={{ fill: "var(--color-surface)" }}
              />
              <path
                d="M498.889 0.87793L476.457 52.0225H192.528L214.959 0.87793H498.889Z"
                style={{
                  stroke: "var(--color-border-subtle)",
                  strokeWidth: 1.75653,
                  fill: "none",
                }}
              />
            </g>
            {/* Left accent - theme-aware but dimmed in dark mode */}
            <g style={{ isolation: "isolate" }}>
              <path
                d="M17.5653 0H37.941L20.3757 52.6958H0L17.5653 0Z"
                style={{ fill: "var(--color-accent-cyan)" }}
              />
              <path
                d="M17.5653 0H37.941L20.3757 52.6958H0L17.5653 0Z"
                fill="black"
                fillOpacity="0.1"
                style={{ fill: "black", fillOpacity: "0.1" }}
              />
              <path
                d="M36.7227 0.87793L19.7432 51.8174H1.21875L18.1982 0.87793H36.7227Z"
                stroke="black"
                strokeOpacity="0.1"
                strokeWidth={1.75653}
                fill="none"
                style={{ stroke: "black", strokeOpacity: "0.1", fill: "none" }}
              />
            </g>
          </svg>
        )}

        {svgSrc === "/assets/group35.svg" && (
          <svg
            className={styles.svg}
            viewBox="0 0 441 54"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Right trapezoid - theme-aware */}
            <g>
              <path
                d="M148.492 0.862299L440.372 0.862299L417.17 53.7626H125.29L148.492 0.862299Z"
                style={{ fill: "var(--color-surface)" }}
              />
              <path
                d="M439.027 1.74023L416.596 52.8848H126.635L149.066 1.74023H439.027Z"
                style={{
                  stroke: "var(--color-border-subtle)",
                  strokeWidth: 1.75653,
                  fill: "none",
                }}
              />
            </g>
            {/* Left accent - theme-aware but dimmed in dark mode */}
            <g style={{ isolation: "isolate" }}>
              <path
                d="M17.5653 0H37.941L20.3757 52.6958H0L17.5653 0Z"
                style={{ fill: "var(--color-accent-purple)" }}
              />
              <path
                d="M17.5653 0H37.941L20.3757 52.6958H0L17.5653 0Z"
                fill="black"
                fillOpacity="0.1"
                style={{ fill: "black", fillOpacity: "0.1" }}
              />
              <path
                d="M36.7227 0.87793L19.7432 51.8174H1.21875L18.1982 0.87793H36.7227Z"
                stroke="black"
                strokeOpacity="0.1"
                strokeWidth={1.75653}
                fill="none"
                style={{ stroke: "black", strokeOpacity: "0.1", fill: "none" }}
              />
            </g>
          </svg>
        )}

        {svgSrc === "/assets/group36.svg" && (
          <svg
            className={styles.svg}
            viewBox="0 0 725 54"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Right trapezoid - theme-aware */}
            <g>
              <path
                d="M344.316 0.87075H724.363L701.161 53.7711H321.114L344.316 0.87075Z"
                style={{ fill: "var(--color-surface)" }}
              />
              <path
                d="M723.018 1.74868L700.587 52.8932H322.459L344.889 1.74868H723.018Z"
                style={{
                  stroke: "var(--color-border-subtle)",
                  strokeWidth: 1.75653,
                  fill: "none",
                }}
              />
            </g>
            {/* Left accent - theme-aware but dimmed in dark mode */}
            <g style={{ isolation: "isolate" }}>
              <path
                d="M17.5653 0H37.941L20.3757 52.6958H0L17.5653 0Z"
                style={{ fill: "var(--color-accent-peach)" }}
              />
              <path
                d="M17.5653 0H37.941L20.3757 52.6958H0L17.5653 0Z"
                fill="black"
                fillOpacity="0.1"
                style={{ fill: "black", fillOpacity: "0.1" }}
              />
              <path
                d="M36.7227 0.87793L19.7432 51.8174H1.21875L18.1982 0.87793H36.7227Z"
                stroke="black"
                strokeOpacity="0.1"
                strokeWidth={1.75653}
                fill="none"
                style={{ stroke: "black", strokeOpacity: "0.1", fill: "none" }}
              />
            </g>
          </svg>
        )}

        {svgSrc === "/assets/group34-experience.svg" && (
          <svg
            className={styles.svg}
            viewBox="0 0 1328 116"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Right trapezoid - theme-aware */}
            <g>
              <path
                d="M509 1.87598H1328L1278 115.876H459L509 1.87598Z"
                style={{ fill: "var(--color-surface)" }}
              />
              <path
                d="M1325.1 3.76855L1276.76 113.983H461.896L510.236 3.76855H1325.1Z"
                style={{
                  stroke: "var(--color-border-subtle)",
                  strokeWidth: 3.78531,
                  fill: "none",
                }}
              />
            </g>
            {/* Left accent - theme-aware but dimmed in dark mode */}
            <g style={{ isolation: "isolate" }}>
              <path
                d="M37.8531 0H81.7627L43.9096 113.559H0L37.8531 0Z"
                style={{ fill: "var(--color-accent-green)" }}
              />
              <path
                d="M37.8531 0H81.7627L43.9096 113.559H0L37.8531 0Z"
                fill="black"
                fillOpacity="0.1"
                style={{ fill: "black", fillOpacity: "0.1" }}
              />
              <path
                d="M79.1367 1.89258L42.5459 111.667H2.62598L39.2168 1.89258H79.1367Z"
                stroke="black"
                strokeOpacity="0.1"
                strokeWidth={3.78531}
                fill="none"
                style={{ stroke: "black", strokeOpacity: "0.1", fill: "none" }}
              />
            </g>
          </svg>
        )}

        {svgSrc === "/assets/group35-education.svg" && (
          <svg
            className={styles.svg}
            viewBox="0 0 1024 116"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Right trapezoid - theme-aware */}
            <g>
              <path
                d="M473 1.87598L1023.5 1.87598L973.5 115.876H423L473 1.87598Z"
                style={{ fill: "var(--color-surface)" }}
              />
              <path
                d="M1020.6 3.76855L972.264 113.983H425.896L474.236 3.76855H1020.6Z"
                style={{
                  stroke: "var(--color-border-subtle)",
                  strokeWidth: 3.78531,
                  fill: "none",
                }}
              />
            </g>
            {/* Left accent - theme-aware but dimmed in dark mode */}
            <g style={{ isolation: "isolate" }}>
              <path
                d="M37.8531 0H81.7627L43.9096 113.559H0L37.8531 0Z"
                style={{ fill: "var(--color-accent-pink)" }}
              />
              <path
                d="M37.8531 0H81.7627L43.9096 113.559H0L37.8531 0Z"
                fill="black"
                fillOpacity="0.1"
                style={{ fill: "black", fillOpacity: "0.1" }}
              />
              <path
                d="M79.1367 1.89258L42.5459 111.667H2.62598L39.2168 1.89258H79.1367Z"
                stroke="black"
                strokeOpacity="0.1"
                strokeWidth={3.78531}
                fill="none"
                style={{ stroke: "black", strokeOpacity: "0.1", fill: "none" }}
              />
            </g>
          </svg>
        )}
      </div>
      <p 
        className={styles.title} 
        style={{ 
          left: titleLeft, 
          top: titleTop,
          fontSize: titleSize 
        }}
      >
        {title}
      </p>
      <p 
        className={styles.subtitle} 
        style={{ 
          left: subtitleLeft, 
          top: subtitleTop,
          fontSize: subtitleSize 
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

