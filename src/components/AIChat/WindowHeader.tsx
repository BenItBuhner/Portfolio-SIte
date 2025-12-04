import WindowControls from "./WindowControls";
import styles from "./WindowHeader.module.css";

interface WindowHeaderProps {
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  isMaximized?: boolean;
  onMouseDown?: (e: React.MouseEvent) => void;
}

export default function WindowHeader({
  onMinimize,
  onMaximize,
  onClose,
  isMaximized = false,
  onMouseDown,
}: WindowHeaderProps) {
  return (
    <div className={styles.header} onMouseDown={onMouseDown}>
      <WindowControls
        onMinimize={onMinimize}
        onMaximize={onMaximize}
        onClose={onClose}
        isMaximized={isMaximized}
      />
    </div>
  );
}

