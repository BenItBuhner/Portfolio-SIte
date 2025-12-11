import { ImageResponse } from '@vercel/og';
import { getBlogById } from '@/data/blogs';
import {
  THEME,
  OG_WIDTH,
  OG_HEIGHT,
  PADDING,
  IMAGE_BORDER_RADIUS,
  PROFILE_IMAGE_SIZE,
  FONTS,
  getImageUrl,
} from '../utils';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

  const blog = getBlogById(id ?? undefined);
  const profileImageSrc = getImageUrl('/account-icon.png');

  // If blog not found or no header image, use fallback design
  if (!blog || !blog.image) {
    const title = blog?.title ?? 'Blog';
    return generateFallbackImage(title, profileImageSrc);
  }

  const headerImageSrc = getImageUrl(blog.image);
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
        {/* Header image at LEFT */}
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
            {blog.title}
          </h1>
        </div>

        {/* Small profile + name at bottom RIGHT */}
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
  } catch (e) {
    return new Response(`Error generating OG image: ${e}`, { status: 500 });
  }
}

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

        {/* Website at bottom left */}
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
}
