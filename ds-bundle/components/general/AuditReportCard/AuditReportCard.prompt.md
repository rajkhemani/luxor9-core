AuditReportCard from @luxor9/ui. Use via `window.Luxor9UI.AuditReportCard` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface AuditReportCardProps {
report: { id: string; target: string; timestamp: number; score: number; summary: string; findings: Array<{ id: string; severity: 'critical' | 'high' | 'medium' | 'low'; title: string; description: string; remediation?: string; affectedComponent?: string }> }
}
```
