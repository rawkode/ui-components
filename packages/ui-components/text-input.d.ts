/// <reference types="react" />
import React, { CSSProperties } from 'react';
import { InputIcons } from './types/input-icons';
import { InputType } from './types/inputs';
import { Units } from './types/units';
import { Omit } from './types/utils';
export interface TextInputProps {
    children?: React.ReactNode;
    type: InputType;
    id: string;
    onChange: (event: any, value: string | number) => void;
    value?: string | number;
    name?: string;
    fullWidth?: boolean;
    icon?: InputIcons;
    isValid?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    isLarge?: boolean;
    isSearch?: boolean;
    label?: string;
    info?: React.ReactNode;
    onBlur?: (event: FocusEvent, value: string | number) => void;
    style?: CSSProperties;
    step?: number;
    units?: Units;
}
/**
 * Inorder to allow for ...attributes we need to use
 * Partial<React.InputHTMLAttributes<HTMLInputElement>>
 * to add all of those possible types. However, this component is
 * redefining the function definition for onBlur, so we must omit the
 * original event hook from the possible props.
 */
export declare type HTMLInputElementProps = Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onBlur' | 'onChange'>>;
export declare class TextInput extends React.Component<TextInputProps & HTMLInputElementProps, {
    isInputFocused: boolean;
}> {
    static defaultProps: {
        fullWidth: boolean;
        info: string;
        isDisabled: boolean;
        isLarge: boolean;
        isRequired: boolean;
        isSearch: boolean;
        isValid: boolean;
        label: string;
        style: React.CSSProperties;
        value: string;
    };
    onInputFocus: (event: any) => void;
    readonly state: {
        isInputFocused: boolean;
    };
    constructor(props: TextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>);
    readonly inputStyle: React.CSSProperties;
    onValueChange(event: any): void;
    onInputBlur(event: any): void;
    render(): JSX.Element;
}
export declare type BaseProps = TextInputProps & HTMLInputElementProps;
export declare class StatefulTextInput<ExcludedProps extends keyof BaseProps = never> extends React.Component<Omit<BaseProps, ExcludedProps>> {
    static defaultProps: Partial<TextInputProps>;
    readonly state: {
        value: string | number;
    };
    onValueChange: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
