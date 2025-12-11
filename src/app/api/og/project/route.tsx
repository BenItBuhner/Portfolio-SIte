import { ImageResponse } from '@vercel/og';
import { getProjectById } from '@/data/projects';
import {
  THEME,
  OG_WIDTH,
  OG_HEIGHT,
  PADDING,
  IMAGE_BORDER_RADIUS,
  PROFILE_IMAGE_SIZE,
  FONTS,
  getImageSrc,
} from '../utils';

// Use Node.js runtime for file system access
export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  // Get profile image as base64
  const profileImageSrc = getImageSrc('/account-icon.png');

  if (!id) {
    return generateFallbackImage('Projects', profileImageSrc);
  }

  const project = getProjectById(id);

  // If project not found or no header image, use fallback (page-style) design
  if (!project || !project.image) {
    const title = project?.title ?? 'Project';
    return generateFallbackImage(title, profileImageSrc);
  }

  // Get header image as base64
  const headerImageSrc = getImageSrc(project.image);

  // Calculate image dimensions (~75% of height)
  const imageHeight = Math.floor((OG_HEIGHT - PADDING * 2) * 0.85);
  const imageWidth = Math.floor(imageHeight * 1.2);

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
        {/* Header image at LEFT (~75% area) */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: PADDING,
            left: PADDING,
            width: imageWidth,
            height: imageHeight,
            overflow: 'hidden',
            borderRadius: IMAGE_BORDER_RADIUS,
            border: `2px solid ${THEME.borderSubtle}`,
            backgroundColor: THEME.surface,
          }}
        >
          {headerImageSrc && (
            <img
              src={headerImageSrc}
              width={imageWidth}
              height={imageHeight}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
        </div>

        {/* Title at RIGHT of image */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: PADDING,
            left: PADDING + imageWidth + 40,
            right: PADDING,
          }}
        >
          <h1
            style={{
              ...FONTS.title,
              fontSize: 52,
              color: THEME.textPrimary,
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h1>
        </div>

        {/* Small profile image / branding at bottom RIGHT */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            position: 'absolute',
            bottom: PADDING,
            right: PADDING,
          }}
        >
          <span
            style={{
              ...FONTS.subtitle,
              color: THEME.textSecondary,
              fontSize: 20,
            }}
          >
            Bennett Buhner
          </span>
          {profileImageSrc && (
            <img
              src={profileImageSrc}
              width={48}
              height={48}
              style={{
                borderRadius: '50%',
                border: `2px solid ${THEME.borderSubtle}`,
              }}
            />
          )}
        </div>
      </div>
    ),
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
    }
  );
}

/**
 * Fallback image when project has no header image.
 * Shows large profile picture on LEFT, title on RIGHT.
 * NO small profile picture since the main image IS the profile picture.
 */
function generateFallbackImage(title: string, profileImageSrc: string | null) {
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
          {profileImageSrc && (
            <img
              src={profileImageSrc}
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

        {/* Title at RIGHT of image */}
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
        </div>

        {/* Branding at bottom left - just website, no profile pic */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
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
}
