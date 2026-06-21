import * as React from 'react';

/**
 * AuditReportCard — from @luxor9/ui@1.0.0.
 */
export interface AuditReportCardProps {
report: { id: string; target: string; timestamp: number; score: number; summary: string; findings: Array<{ id: string; severity: 'critical' | 'high' | 'medium' | 'low'; title: string; description: string; remediation?: string; affectedComponent?: string }> }
}

export declare const AuditReportCard: React.ComponentType<AuditReportCardProps>;
