import Image from "next/image";
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
        <Image
          alt=""
          src={svgSrc}
          width={svgWidth}
          height={svgHeight}
          className={styles.svg}
        />
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

