import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const FileUpload = ({ onFileUpload }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const storage = getStorage();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        const file = acceptedFiles[0];
        const storageRef = ref(storage, `uploads/${file.name}`);
        await uploadBytes(storageRef, file);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef);

        // Update the state with the new file object
        setUploadedFile({ file, downloadURL });

        // Pass the file information to the parent component
        onFileUpload({ file, downloadURL });
      } catch (error) {
        console.error('Error uploading file to storage:', error);
      }
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div style={{ border: '2px dashed #000', padding: '20px', width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CloudUploadIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
        <p>Drop your file here or click to upload</p>
      </div>
      {uploadedFile && (
        <ul>
          <li>{uploadedFile.file.name}</li>
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
