import styles from "./WindowControls.module.css";

interface WindowControlsProps {
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  isMaximized?: boolean;
}

export default function WindowControls({ 
  onMinimize, 
  onMaximize, 
  onClose,
  isMaximized = false 
}: WindowControlsProps) {
  return (
    <div className={styles.controls}>
      <button
        className={`${styles.controlButton} ${styles.close}`}
        onClick={onClose}
        aria-label="Close"
        type="button"
      />
      <button
        className={`${styles.controlButton} ${styles.minimize}`}
        onClick={onMinimize}
        aria-label="Minimize"
        type="button"
      />
      <button
        className={`${styles.controlButton} ${styles.maximize}`}
        onClick={onMaximize}
        aria-label={isMaximized ? "Restore" : "Maximize"}
        type="button"
      />
    </div>
  );
}

