import React from 'react';
import { AgentBuilder } from '@luxor9/ui';

// AgentBuilder is fully self-contained (manages its own LUXOR9 hierarchy state),
// so the only story is the default canvas on the brand's deep-void background.
export function Default() {
  return (
    <div className="dark" style={{ background: '#050505', padding: 24, minHeight: 600 }}>
      <AgentBuilder />
    </div>
  );
}
