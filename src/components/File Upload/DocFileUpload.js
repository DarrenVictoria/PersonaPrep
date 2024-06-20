import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

const FileUpload = ({ onFileUpload, onReset, onUploadSuccess }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const storage = getStorage();

  useEffect(() => {
    return () => {
      if (uploadedFile && uploadedFile.toBeDeleted) {
        const fileRef = ref(storage, `uploads/${uploadedFile.file.name}`);
        deleteObject(fileRef)
          .then(() => {
            console.log('File deleted successfully from storage');
            setUploadedFile(null);
            onReset();
          })
          .catch((error) => {
            console.error('Error deleting file from storage:', error);
          });
      }
    };
  }, [uploadedFile, storage, onReset]);

  const handleReset = () => {
    if (uploadedFile) {
      const fileRef = ref(storage, `uploads/${uploadedFile.file.name}`);
      deleteObject(fileRef)
        .then(() => {
          console.log('File deleted successfully from storage');
          setUploadedFile(null);
          onReset();
        })
        .catch((error) => {
          console.error('Error deleting file from storage:', error);
          setError('Error deleting file from storage. Please try again.');
        });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        if (acceptedFiles.length !== 1) {
          setError('Please upload only one file at a time.');
          return;
        }

        const file = acceptedFiles[0];

        const pdfMimeTypes = ['application/pdf'];
        if (!pdfMimeTypes.includes(file.type)) {
          setError('Please upload a valid PDF file.');
          return;
        }

        const storageRef = ref(storage, `uploads/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error('Error uploading file to storage:', error);
            setError('Error uploading file to storage. Please try again.');
          },
          () => {
            getDownloadURL(storageRef).then((downloadURL) => {
              setUploadedFile({ file, downloadURL });
              setUploadProgress(0);
              setError(null);

              const fileId = Date.now();
              onFileUpload({ file, downloadURL, fileId });
            });
          }
        );
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

        <div
          style={{
            border: `2px dashed ${isDragActive ? 'green' : '#000'}`,
            padding: '20px',
            width: '100%',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CloudUploadIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
          <p>Drop your PDF file here or click to upload</p>
          <p style={{ color: 'red' }}>Insert only one file at a time</p>
        </div>

        {uploadedFile && (
          <div>
            <ul>
              <li>{uploadedFile.file.name}</li>
            </ul>
          </div>
        )}
      </div>

      {uploadProgress > 0 && (
        <div style={{ marginTop: '10px' }}>
          <LinearProgress variant="determinate" value={uploadProgress} />
        </div>
      )}

      {uploadedFile && (
        <Button
          variant="contained"
          onClick={handleReset}
          style={{ backgroundColor: '#FF0000', color: '#fff', marginTop: '1.5rem', marginLeft: '1.5rem' }}
        >
          Reset File Uploads
        </Button>
      )}
    </div>
  );
};

export default FileUpload;
