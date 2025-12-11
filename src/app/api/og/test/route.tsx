import { ImageResponse } from 'next/og';
import { loadImageAsBase64 } from '../utils';

// Use Node.js runtime to access filesystem for images
export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const testType = searchParams.get('type') ?? 'text';
  
  // Test 1: Simple text (always works)
  if (testType === 'text') {
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
            Test OG Image - Text Only
          </h1>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }
  
  // Test 2: Local image from filesystem using base64
  if (testType === 'local') {
    const imageBase64 = await loadImageAsBase64('/account-icon.png');
    
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            color: '#0d0c4c',
            background: '#fffef2',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {imageBase64 ? (
            <img
              width="200"
              height="200"
              src={imageBase64}
              style={{ borderRadius: '50%' }}
            />
          ) : (
            <div style={{ 
              width: 200, 
              height: 200, 
              backgroundColor: '#ccc', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Failed
            </div>
          )}
          <p style={{ marginTop: 20 }}>Local Image Test (filesystem)</p>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }
  
  // Default: Show all test options
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#fffef2',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
        }}
      >
        <h1 style={{ fontSize: 48, color: '#0d0c4c', marginBottom: 20 }}>
          OG Test Routes
        </h1>
        <p style={{ fontSize: 24, color: 'rgba(13,12,76,0.6)' }}>
          ?type=text | ?type=local
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
