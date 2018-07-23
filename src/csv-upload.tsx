import React, { Fragment, PureComponent } from 'react';

import Dropzone from './dropzone';
import FileUpload, { DroppedFile, FileSelect } from './file-upload';

export interface CSVUploadProps {
  onChange: (event: any) => void;
  onRemove: (event: any) => void;
}

class CSVUpload extends PureComponent<CSVUploadProps> {
  public handleRemove = (
    callback: (event: any) => void
  ): ((event: any) => void) => {
    return (event: any) => {
      this.props.onRemove(event);
      callback(event);
    };
  };

  public render() {
    const { onChange, onRemove } = this.props;

    return (
      <FileUpload
        onFileSelect={onChange}
        render={({
          hasFile,
          handleRemove,
          hovered,
          invalid,
          file,
          FileSelectLink,
        }) => (
          <Dropzone active={hasFile} hovered={hovered} invalid={invalid}>
            {file ? (
              <DroppedFile
                file={file}
                onRemove={this.handleRemove(handleRemove)}
              />
            ) : (
              <FileSelect>
                <Fragment>
                  Drag and drop your CSV file here or{' '}
                  <FileSelectLink>select a CSV file to upload</FileSelectLink>.
                </Fragment>
              </FileSelect>
            )}
          </Dropzone>
        )}
        supportedType={'text/csv'}
      />
    );
  }
}

export default CSVUpload;
