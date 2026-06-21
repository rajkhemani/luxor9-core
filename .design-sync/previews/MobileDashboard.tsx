import React from 'react';
import { MobileDashboard } from '@luxor9/ui';

// MobileDashboard targets a 480px-max PWA viewport, so it is framed inside a
// phone-sized device shell. Self-contained (mock agents, inline styles).
export function Default() {
  return (
    <div style={{ background: '#0a0a0f', padding: 20, display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: 420,
          height: 780,
          overflow: 'hidden',
          borderRadius: 28,
          border: '1px solid #1e1e3e',
          boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
        }}
      >
        <MobileDashboard />
      </div>
    </div>
  );
}
