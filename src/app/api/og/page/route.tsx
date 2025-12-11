import { ImageResponse } from 'next/og';
import {
  THEME,
  OG_WIDTH,
  OG_HEIGHT,
  PADDING,
  PROFILE_IMAGE_SIZE,
  FONTS,
  loadImageAsBase64,
} from '../utils';

// Use Node.js runtime to access filesystem for images
export const runtime = 'nodejs';

const PAGE_TITLES: Record<string, string> = {
  home: 'My Portfolio',
  homepage: 'My Portfolio',
  landing: 'My Portfolio',
  overview: 'Overview',
  about: 'About Me',
  projects: 'Projects',
  blog: 'Blog',
  blogs: 'Blog',
  timeline: 'Timeline',
  contact: 'Contact Me',
  'contact-me': 'Contact Me',
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') ?? 'home';
    const customTitle = searchParams.get('title');

    const title = customTitle ?? PAGE_TITLES[type.toLowerCase()] ?? 'My Portfolio';
    
    // Load profile image as base64 from filesystem
    const profileImageBase64 = await loadImageAsBase64('/account-icon.png');

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: THEME.pageBg,
            padding: PADDING,
            position: 'relative',
          }}
        >
          {/* Profile image at LEFT */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              top: PADDING,
              left: PADDING,
              width: PROFILE_IMAGE_SIZE,
              height: PROFILE_IMAGE_SIZE,
              overflow: 'hidden',
              borderRadius: '50%',
              border: `2px solid ${THEME.borderSubtle}`,
              backgroundColor: THEME.surface,
            }}
          >
            {profileImageBase64 && (
              <img
                src={profileImageBase64}
                width={PROFILE_IMAGE_SIZE}
                height={PROFILE_IMAGE_SIZE}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
          </div>

          {/* Title and tagline at RIGHT */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: PADDING,
              left: PADDING + PROFILE_IMAGE_SIZE + 40,
              right: PADDING,
              justifyContent: 'center',
              height: PROFILE_IMAGE_SIZE,
            }}
          >
            <h1
              style={{
                ...FONTS.title,
                color: THEME.textPrimary,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                ...FONTS.subtitle,
                color: THEME.textSecondary,
                marginTop: 16,
              }}
            >
              AI Engineer • Developer • Machine Learning Enthusiast
            </p>
          </div>

          {/* Branding at bottom left */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              bottom: PADDING,
              left: PADDING,
            }}
          >
            <span
              style={{
                ...FONTS.subtitle,
                color: THEME.textSecondary,
                fontSize: 20,
              }}
            >
              bennettbuhner.com
            </span>
          </div>
        </div>
      ),
      {
        width: OG_WIDTH,
        height: OG_HEIGHT,
      }
    );
  } catch (e) {
    return new Response(`Error generating OG image: ${e}`, { status: 500 });
  }
}
