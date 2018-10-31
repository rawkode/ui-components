import React, { Fragment, PureComponent } from 'react';
import Dropzone from './dropzone';
import FileUpload, { DroppedFile, FileSelect } from './file-upload';
class CSVUpload extends PureComponent {
    constructor() {
        super(...arguments);
        this.handleRemove = (callback) => {
            return (event) => {
                const { onRemove } = this.props;
                if (onRemove) {
                    onRemove(event);
                }
                callback(event);
            };
        };
    }
    render() {
        const { onChange, onRemove } = this.props;
        return (React.createElement(FileUpload, { onFileSelect: onChange, render: ({ hasFile, handleRemove, hovered, invalid, file, FileSelectLink, }) => (React.createElement(Dropzone, { active: hasFile, hovered: hovered, invalid: invalid }, file ? (React.createElement(DroppedFile, { file: file, onRemove: this.handleRemove(handleRemove) })) : (React.createElement(FileSelect, null,
                React.createElement(Fragment, null,
                    "Drag and drop your CSV file here or",
                    ' ',
                    React.createElement(FileSelectLink, null, "select a CSV file to upload"),
                    "."))))), supportedType: 'text/csv', supportedExtensions: ['csv'] }));
    }
}
export default CSVUpload;
//# sourceMappingURL=csv-upload.js.map