import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject  } from 'firebase/storage';

const FileUpload = ({ onFileUpload, onReset }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(null);
  const storage = getStorage();

  useEffect(() => {
    // Cleanup when component unmounts or when onReset is called
    return () => {
      if (uploadedFile) {
        // Delete the uploaded file from Firebase storage
        const fileRef = ref(storage, `uploads/${uploadedFile.file.name}`);
        deleteObject(fileRef).catch((error) => {
          console.error('Error deleting file from storage:', error);
        });

        // Notify the parent component that the file has been deleted
        onReset();
      }
    };
  }, [uploadedFile, storage, onReset]);

  const { getRootProps, getInputProps, isDragActive  } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        if (acceptedFiles.length !== 1) {
          setError('Please upload only one file at a time.');
          return;
        }

        const file = acceptedFiles[0];
        const storageRef = ref(storage, `uploads/${file.name}`);
        await uploadBytes(storageRef, file);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef);

        // Update the state with the new file object
        setUploadedFile({ file, downloadURL });
        setError(null); // Clear any previous errors

        // Pass the file information to the parent component with a unique identifier
        const fileId = Date.now(); // Unique identifier based on timestamp
        onFileUpload({ file, downloadURL, fileId });
        
      } catch (error) {
        console.error('Error uploading file to storage:', error);
        setError('Error uploading file to storage. Please try again.');
      }
    },
  });

  return (
    <div>
      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          <strong>{error}</strong>
        </div>
      )}

      <div {...getRootProps()} style={{ pointerEvents: uploadedFile ? 'none' : 'auto' }}>
        <input {...getInputProps()} />
        <div style={{ border: `2px dashed ${isDragActive ? 'green' : '#000'}`, padding: '20px', width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CloudUploadIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
          <p>Drop your file here or click to upload</p>
          <p style={{ color: 'red' }}>Insert only one file at a time</p>
        </div>
        {uploadedFile && (
          <ul>
            <li>{uploadedFile.file.name}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
