/**
 * Shared utilities and constants for OG image generation.
 * These values mirror the CSS design system in globals.css.
 */
import { readFileSync } from 'fs';
import { join } from 'path';

// Light theme colors (matching :root in globals.css)
export const THEME = {
  pageBg: '#fffef2',
  textPrimary: '#0d0c4c',
  textSecondary: 'rgba(13, 12, 76, 0.5)',
  surface: 'rgb(230, 229, 213)',
  borderSubtle: 'rgba(0, 0, 0, 0.1)',
};

// OG image dimensions (standard)
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

// Layout constants
export const PADDING = 60;
export const IMAGE_BORDER_RADIUS = 12;
export const PROFILE_IMAGE_SIZE = 320;

// Font configuration
export const FONTS = {
  title: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 100 as const,
    fontSize: 64,
    lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 300 as const,
    fontSize: 24,
    lineHeight: 1.4,
  },
};

/**
 * Read a local image file and convert to base64 data URI.
 */
function getLocalImageAsBase64(imagePath: string): string | null {
  try {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    const fullPath = join(process.cwd(), 'public', cleanPath);
    const imageBuffer = readFileSync(fullPath);
    
    // Determine MIME type from extension
    const ext = imagePath.split('.').pop()?.toLowerCase();
    let mimeType = 'image/png';
    if (ext === 'jpg' || ext === 'jpeg') mimeType = 'image/jpeg';
    else if (ext === 'gif') mimeType = 'image/gif';
    else if (ext === 'webp') mimeType = 'image/webp';
    else if (ext === 'svg') mimeType = 'image/svg+xml';
    
    return `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
  } catch {
    return null;
  }
}

/**
 * Get image source as base64 for local files, or URL for external images.
 */
export function getImageSrc(imagePath: string | undefined): string | null {
  if (!imagePath) return null;
  
  // If it's an external URL, return as-is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // For local images, convert to base64
  return getLocalImageAsBase64(imagePath);
}
