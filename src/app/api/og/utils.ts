/**
 * Shared utilities and constants for OG image generation.
 * These values mirror the CSS design system in globals.css.
 */

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
 * Get base URL - always use production domain for reliability
 */
function getBaseUrl(): string {
  // Always use the production domain - this is more reliable than VERCEL_URL
  // which can point to preview deployments
  return 'https://bennettbuhner.com';
}

/**
 * Fetch an image and return as ArrayBuffer for @vercel/og
 */
export async function fetchImageAsArrayBuffer(imagePath: string | undefined): Promise<ArrayBuffer | null> {
  if (!imagePath) return null;

  try {
    let url = imagePath;
    
    // Convert relative paths to absolute URLs
    if (!imagePath.startsWith('http://') && !imagePath.startsWith('https://')) {
      const baseUrl = getBaseUrl();
      const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
      url = `${baseUrl}${cleanPath}`;
    }

    const response = await fetch(url);
    if (!response.ok) return null;
    
    return await response.arrayBuffer();
  } catch {
    return null;
  }
}

/**
 * Get image URL for use in img src (simpler approach)
 */
export function getImageUrl(imagePath: string | undefined): string | null {
  if (!imagePath) return null;

  // External URLs - return as-is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // Convert to absolute URL using production domain
  const baseUrl = getBaseUrl();
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl}${cleanPath}`;
}