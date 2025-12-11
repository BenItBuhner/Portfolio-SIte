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
 * Get base URL for the site.
 * On Vercel: uses VERCEL_URL or custom domain
 * In dev: uses localhost (images won't load in dev, but will work in production)
 */
function getBaseUrl(): string {
  // Vercel provides this env var
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Fallback to production domain
  return 'https://bennettbuhner.com';
}

/**
 * Get absolute URL for an image.
 * Returns full URL that @vercel/og Edge runtime can fetch.
 */
export function getImageAsBase64(imagePath: string | undefined): string | null {
  if (!imagePath) return null;

  // External URLs - return as-is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // Convert to absolute URL
  const baseUrl = getBaseUrl();
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl}${cleanPath}`;
}