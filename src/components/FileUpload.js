import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      // Call your backend API endpoint to upload files
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div style={{ border: '2px dashed #000', padding: '20px', width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CloudUploadIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
          <p>Drop your file here or click to upload</p>
        </div>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default FileUpload;