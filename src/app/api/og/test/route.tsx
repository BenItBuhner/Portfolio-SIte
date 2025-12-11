import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#fffef2',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontSize: 64, color: '#0d0c4c' }}>
          Test OG Image
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
