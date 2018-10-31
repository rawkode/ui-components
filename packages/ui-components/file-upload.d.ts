/// <reference types="react" />
import { Component } from 'react';
import { IconType } from './types/icons';
export interface FileUploadProps {
    onDragEnd?: (event: any) => void;
    onDragLeave?: (event: any) => void;
    onDragOver?: (event: any, files?: DataTransferItemList) => void;
    onDrop?: (event: any, file: FileList) => void;
    onFileSelect?: (files: FileList) => any;
    onInvalidFile?: (files: FileList) => void;
    render: FileUploadRenderCallback;
    supportedType: string;
    supportedExtensions?: Array<string>;
    validateFile?: (files: DataTransferItemList | FileList) => boolean;
}
export interface FileUploadRenderCallbackArguments {
    hasFile: boolean;
    file?: File;
    handleRemove: (event: any) => void;
    handleSelect: (event: any) => void;
    hovered: boolean;
    invalid: boolean;
    FileSelectLink: (args: {
        children: string;
    }) => JSX.Element;
}
export declare type FileUploadRenderCallback = (args: FileUploadRenderCallbackArguments) => JSX.Element;
export interface FileUploadState {
    files?: FileList;
    hovered: boolean;
    invalid: boolean;
}
export interface FileSelectProps {
    children: string | JSX.Element;
    className?: string;
    icon?: IconType;
}
export interface DroppedFileProps {
    className?: string;
    file: File;
    icon?: IconType;
    onRemove: (event: any) => void;
}
export declare class FileSelect extends Component<FileSelectProps> {
    static defaultProps: {
        icon: string;
    };
    style: {
        alignItems: string;
        display: string;
    };
    render(): JSX.Element;
}
export declare class DroppedFile extends Component<DroppedFileProps> {
    static defaultProps: {
        icon: string;
    };
    style: {
        alignItems: string;
        display: string;
    };
    handleRemove: (event: any) => void;
    render(): JSX.Element;
}
export declare class FileUpload extends Component<FileUploadProps, FileUploadState> {
    static defaultProps: Partial<FileUploadProps>;
    state: FileUploadState;
    fileInput: HTMLInputElement;
    handleDragOver: (event: any) => void;
    handleDragLeave: (event: any) => void;
    handleDrop: (event: any) => void;
    handleSelect: (event: any) => void;
    FileSelectLink: ({ children }: {
        children: string;
    }) => JSX.Element;
    handleRemove: (event: any) => void;
    handleChange: (event: any) => void;
    fileIsValid: (files: FileList | DataTransferItemList) => boolean;
    fileTypeIsSupported: (files: FileList | DataTransferItemList) => boolean;
    render(): JSX.Element;
    private updateCurrentFile;
}
export default FileUpload;
