/// <reference types="react" />
import React from 'react';
export interface LabelProps {
    className?: string;
    text: string;
    type: 'sent' | 'delivered' | 'live' | 'success' | 'scheduled' | 'pick-winner' | 'draft' | 'global' | 'list' | 'progress' | 'bounced' | 'canceled' | 'disabled' | 'paused' | 'error' | 'optimized';
}
export declare const Label: React.SFC<LabelProps>;
export default Label;
