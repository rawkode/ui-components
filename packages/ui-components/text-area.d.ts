/// <reference types="react" />
import React, { Component } from 'react';
import { TooltipDirection } from './tooltip';
export interface TextAreaProps {
    disabled?: boolean;
    error?: boolean;
    id: string;
    info?: string;
    label: string;
    maxHeight?: number;
    required?: boolean;
    scrollable?: boolean;
    tooltip?: string;
    tooltipDirection?: TooltipDirection;
    value: string;
}
export declare class TextArea extends Component<TextAreaProps & React.InputHTMLAttributes<HTMLTextAreaElement>> {
    static defaultProps: {
        disabled: boolean;
        error: boolean;
        maxHeight: number;
        required: boolean;
        scrollable: boolean;
    };
    state: {
        focused: boolean;
        height: string;
    };
    textareaMeasurer: HTMLTextAreaElement;
    componentDidUpdate({value: previousValue}: TextAreaProps): void;
    calculateHeight: () => string;
    setFocused: () => void;
    setBlurred: () => void;
    render(): JSX.Element;
}
export default TextArea;
