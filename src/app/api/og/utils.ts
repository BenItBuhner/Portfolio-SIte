/**
 * Shared utilities and constants for OG image generation.
 * These values mirror the CSS design system in globals.css.
 */

import { readFile } from 'fs/promises';
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
 * Get content type from file extension
 */
function getContentType(filePath: string): string {
  const ext = filePath.toLowerCase().split('.').pop();
  switch (ext) {
    case 'png': return 'image/png';
    case 'jpg':
    case 'jpeg': return 'image/jpeg';
    case 'gif': return 'image/gif';
    case 'webp': return 'image/webp';
    case 'svg': return 'image/svg+xml';
    default: return 'image/png';
  }
}

/**
 * Load an image from the public folder and return as base64 data URL.
 * Works in both local development and Vercel production (Node.js runtime).
 */
export async function loadImageAsBase64(imagePath: string | undefined): Promise<string | null> {
  if (!imagePath) return null;

  try {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    
    // In Vercel, files are in the root. In local dev, they're in public/
    // Try multiple paths
    const possiblePaths = [
      join(process.cwd(), 'public', cleanPath),  // Local dev
      join(process.cwd(), cleanPath),             // Vercel production
    ];

    let fileBuffer: Buffer | null = null;
    
    for (const fullPath of possiblePaths) {
      try {
        fileBuffer = await readFile(fullPath);
        break;
      } catch {
        // Try next path
      }
    }

    if (!fileBuffer) {
      console.error(`Image not found: ${imagePath}`);
      return null;
    }

    const base64 = fileBuffer.toString('base64');
    const contentType = getContentType(cleanPath);
    
    return `data:${contentType};base64,${base64}`;
  } catch (error) {
    console.error('Failed to load image as base64:', error);
    return null;
  }
}