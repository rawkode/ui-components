import React, { Fragment } from 'react';

import Dropzone from './dropzone';
import FileUpload, { DroppedFile, FileSelect } from './file-upload';

interface CSVUploadProps {
  onChange: (event: any) => void;
}

const CSVUpload: React.SFC<CSVUploadProps> = ({ onChange }) => (
  <FileUpload
    onFileSelect={onChange}
    render={({
      hasFile,
      hovered,
      invalid,
      file,
      handleRemove,
      FileSelectLink,
    }) => (
      <Dropzone active={hasFile} hovered={hovered} invalid={invalid}>
        {file ? (
          <DroppedFile file={file} onRemove={handleRemove} />
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

export default CSVUpload;
