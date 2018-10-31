import every from 'lodash/every';
import includes from 'lodash/includes';
import slice from 'lodash/slice';
import some from 'lodash/some';
import React, { Component } from 'react';
import Icon from './icon';
const toArray = slice;
const margin = '12px';
const getDraggedFiles = (event) => event.dataTransfer.items;
const getDroppedFiles = (event) => event.dataTransfer.files;
export class FileSelect extends Component {
    constructor() {
        super(...arguments);
        this.style = {
            alignItems: 'center',
            display: 'flex',
        };
    }
    render() {
        const { children, className, icon } = this.props;
        return (React.createElement("div", { className: className, style: this.style },
            React.createElement(Icon, { size: 30, style: { marginRight: margin }, type: icon }),
            React.createElement("span", null, children)));
    }
}
FileSelect.defaultProps = {
    icon: 'csv',
};
export class DroppedFile extends Component {
    constructor() {
        super(...arguments);
        this.style = {
            alignItems: 'center',
            display: 'flex',
        };
        this.handleRemove = (event) => {
            event.preventDefault();
            const { onRemove } = this.props;
            onRemove(event);
        };
    }
    render() {
        const { className, file, icon } = this.props;
        return (React.createElement("div", { className: className, style: this.style },
            React.createElement(Icon, { size: 30, style: { marginRight: margin }, type: icon }),
            React.createElement("span", null, file.name),
            React.createElement("a", { href: "#", onClick: this.handleRemove, style: { marginLeft: margin } }, "Remove")));
    }
}
DroppedFile.defaultProps = {
    icon: 'csv',
};
export class FileUpload extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            files: null,
            hovered: false,
            invalid: false,
        };
        this.fileInput = null;
        this.handleDragOver = (event) => {
            event.preventDefault();
            event.stopPropagation();
            const files = getDraggedFiles(event);
            const isSupported = this.fileIsValid(files);
            this.setState({ hovered: isSupported, invalid: !isSupported });
            this.props.onDragOver(event, files);
        };
        this.handleDragLeave = (event) => {
            event.preventDefault();
            this.setState({ hovered: false, invalid: false });
            this.props.onDragLeave(event);
        };
        this.handleDrop = (event) => {
            event.preventDefault();
            const files = getDroppedFiles(event);
            this.setState({ hovered: false, invalid: false });
            this.updateCurrentFile(files, event);
        };
        this.handleSelect = (event) => {
            event.preventDefault();
            this.fileInput.click();
        };
        this.FileSelectLink = ({ children }) => {
            return (React.createElement("a", { href: "#", onClick: this.handleSelect }, children));
        };
        this.handleRemove = (event) => {
            this.setState({ files: null }, () => {
                this.fileInput.value = null;
                this.props.onFileSelect(null);
            });
        };
        this.handleChange = (event) => {
            event.preventDefault();
            const files = event.target.files;
            this.updateCurrentFile(files, event);
        };
        this.fileIsValid = (files) => {
            const validations = [this.fileTypeIsSupported];
            const { validateFile } = this.props;
            if (validateFile) {
                validations.push(validateFile);
            }
            return every(validations, validation => validation(files));
        };
        this.fileTypeIsSupported = (files) => {
            const { supportedType, supportedExtensions } = this.props;
            return some(files, (file) => {
                // windows files, plus osx directories & apps have type of empty string.
                return ((!!file.type && includes(supportedType, file.type)) ||
                    some(supportedExtensions, supportedExtension => !!file.name && file.name.includes(`.${supportedExtension}`)));
            });
        };
        this.updateCurrentFile = (files, event) => {
            if (!this.fileIsValid(files)) {
                this.props.onInvalidFile(files);
                return;
            }
            this.setState({ files, hovered: false }, () => {
                this.props.onDrop(event, files);
                this.props.onFileSelect(files);
            });
        };
    }
    render() {
        const { FileSelectLink, handleRemove, handleSelect } = this;
        const { hovered, files, invalid } = this.state;
        const { render, supportedType } = this.props;
        const [file] = toArray(files);
        const hasFile = !!file;
        return (React.createElement("section", { onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDrop: this.handleDrop, onDragEnd: this.handleDrop },
            render({
                FileSelectLink,
                file,
                handleRemove,
                handleSelect,
                hasFile,
                hovered,
                invalid,
            }),
            React.createElement("input", { type: "file", style: { display: 'none' }, ref: input => (this.fileInput = input), onChange: this.handleChange, accept: supportedType })));
    }
}
FileUpload.defaultProps = {
    onDragEnd: () => { },
    onDragLeave: () => { },
    onDragOver: () => { },
    onDrop: () => { },
    onFileSelect: () => { },
    onInvalidFile: () => { },
    supportedExtensions: [],
};
export default FileUpload;
//# sourceMappingURL=file-upload.js.map