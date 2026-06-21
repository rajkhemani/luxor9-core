import React from 'react';
import { AuditReportCard } from '@luxor9/ui';

// AuditReportCard renders a structured security/audit result. Two stories sweep
// the primary axis (findings present vs. a clean pass) and exercise every
// severity color. Wrapped in `.dark` so the brand's dark variants apply.
const base = { id: 'aud_1', target: 'luxor9-core/api', timestamp: Date.parse('2026-06-19T14:32:00Z') };

export function CriticalFindings() {
  const report = {
    ...base,
    score: 62,
    summary:
      'Surface scan of the orchestration API found 4 issues across auth, CORS, and rate-limiting. Two require attention before the next deploy.',
    findings: [
      { id: 'f1', severity: 'critical', title: 'Unauthenticated metrics endpoint', description: '/metrics is reachable without an API key and leaks agent-tier counts.', remediation: 'Gate /metrics behind the same key check as /agents.' },
      { id: 'f2', severity: 'high', title: 'CORS allow-all outside development', description: 'An empty cors_origins falls through to a permissive policy when ENVIRONMENT != development.', remediation: 'Fail closed unless cors_origins is set.' },
      { id: 'f3', severity: 'medium', title: 'In-memory rate limiter resets on restart', description: 'Sliding-window counters are process-local; horizontal scaling lets bursts through.', remediation: 'Back the limiter with Redis.' },
      { id: 'f4', severity: 'low', title: 'Verbose error bodies', description: 'Stack traces are returned to clients in some 500 responses.' },
    ],
  };
  return (
    <div className="dark" style={{ background: '#050505', padding: 24 }}>
      <AuditReportCard report={report} />
    </div>
  );
}

export function HealthyPass() {
  const report = {
    ...base,
    target: 'luxor9-core/ui',
    score: 96,
    summary: 'No critical issues detected. PWA bundle, headers, and dependency tree are all within policy.',
    findings: [],
  };
  return (
    <div className="dark" style={{ background: '#050505', padding: 24 }}>
      <AuditReportCard report={report} />
    </div>
  );
}
