"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import WindowHeader from "./WindowHeader";
import styles from "./Window.module.css";

interface WindowProps {
  children: React.ReactNode;
  className?: string;
  defaultWidth?: number;
  defaultHeight?: number;
  defaultX?: number;
  defaultY?: number;
}

export default function Window({
  children,
  className = "",
  defaultWidth = 600,
  defaultHeight = 650,
  defaultX = 0,
  defaultY = 0,
}: WindowProps) {
  const [isClosed, setIsClosed] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: defaultX, y: defaultY });
  const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  
  // Store previous position/size for restore from maximize
  const [previousState, setPreviousState] = useState<{
    position: { x: number; y: number };
    size: { width: number; height: number };
  } | null>(null);

  const windowRef = useRef<HTMLDivElement>(null);
  const resizeHandleRef = useRef<HTMLDivElement>(null);

  const handleMinimize = useCallback(() => {
    setIsClosed(true);
  }, []);

  const handleMaximize = useCallback(() => {
    if (isMaximized) {
      // Restore previous state
      if (previousState) {
        setPosition(previousState.position);
        setSize(previousState.size);
        setPreviousState(null);
      }
      setIsMaximized(false);
    } else {
      // Save current state
      setPreviousState({
        position: { ...position },
        size: { ...size },
      });
      setIsMaximized(true);
    }
  }, [isMaximized, position, size, previousState]);

  const handleClose = useCallback(() => {
    setIsClosed(true);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  }, [position, isMaximized]);

  const handleResizeMouseDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMaximized) return;
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    });
  }, [size, isMaximized]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;
        
        // Constrain to viewport
        const maxX = window.innerWidth - size.width;
        const maxY = window.innerHeight - size.height;
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      } else if (isResizing && !isMaximized) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;
        
        const minWidth = 400;
        const minHeight = 300;
        const maxWidth = window.innerWidth - position.x;
        const maxHeight = window.innerHeight - position.y;
        
        setSize({
          width: Math.max(minWidth, Math.min(resizeStart.width + deltaX, maxWidth)),
          height: Math.max(minHeight, Math.min(resizeStart.height + deltaY, maxHeight)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, resizeStart, size, position, isMaximized]);

  // Handle window resize to update maximized size
  useEffect(() => {
    const handleResize = () => {
      if (isMaximized) {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMaximized]);

  // If closed, don't render anything
  if (isClosed) {
    return null;
  }

  return (
    <div
      ref={windowRef}
      className={`${styles.window} ${isMaximized ? styles.maximized : ""} ${className}`}
      style={{
        left: isMaximized ? 0 : `${position.x}px`,
        top: isMaximized ? 0 : `${position.y}px`,
        width: isMaximized ? "100vw" : `${size.width}px`,
        height: isMaximized ? "100vh" : `${size.height}px`,
      }}
    >
      <WindowHeader
        onMinimize={handleMinimize}
        onMaximize={handleMaximize}
        onClose={handleClose}
        isMaximized={isMaximized}
        onMouseDown={handleMouseDown}
      />
      <div className={styles.content}>
        {children}
      </div>
      {!isMaximized && (
        <div
          ref={resizeHandleRef}
          className={styles.resizeHandle}
          onMouseDown={handleResizeMouseDown}
        />
      )}
    </div>
  );
}

