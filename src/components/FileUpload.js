import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject  } from 'firebase/storage';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

const FileUpload = ({ onFileUpload, onReset, onUploadSuccess  }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const storage = getStorage();

  useEffect(() => {
    // Cleanup when component unmounts or when onReset is called
    return () => {
      if (uploadedFile && uploadedFile.toBeDeleted) {
        // Delete the uploaded file from Firebase storage
        const fileRef = ref(storage, `uploads/${uploadedFile.file.name}`);
        onUploadSuccess(uploadedFile.downloadURL);
        deleteObject(fileRef)
          .then(() => {
            console.log('File deleted successfully from storage');
            setUploadedFile(null);
          })
          .catch((error) => {
            console.error('Error deleting file from storage:', error);
          });

        // Notify the parent component that the file has been deleted
        onReset();
      }
    };
  }, [uploadedFile, storage, onReset, onUploadSuccess]);

  const handleReset = () => {
    // Set a flag to mark the file for deletion in the cleanup
    setUploadedFile((prevFile) => (prevFile ? { ...prevFile, toBeDeleted: true } : null));
  };

  const { getRootProps, getInputProps, isDragActive  } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        if (acceptedFiles.length !== 1) {
          setError('Please upload only one file at a time.');
          return;
        }

        const file = acceptedFiles[0];

        const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!imageMimeTypes.includes(file.type)) {
          setError('Please upload a valid image file.');
          return;
        }


          const storageRef = ref(storage, `uploads/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on('state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(progress);
            },
            (error) => {
              console.error('Error uploading file to storage:', error);
              setError('Error uploading file to storage. Please try again.');
            },
            () => {
              // Upload completed successfully, get download URL
              getDownloadURL(storageRef).then((downloadURL) => {
                // Update the state with the new file object
                setUploadedFile({ file, downloadURL, toBeDeleted: false });
                setUploadProgress(0); // Reset progress
                setError(null); // Clear any previous errors

                // Pass the file information to the parent component with a unique identifier
                const fileId = Date.now(); // Unique identifier based on timestamp
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
        
        <div style={{ border: `2px dashed ${isDragActive ? 'green' : '#000'}`, padding: '20px', width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CloudUploadIcon style={{ fontSize: '3rem', marginBottom: '10px' }} />
          <p>Drop your file here or click to upload</p>
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
      {uploadProgress > 0 &&  (
        <div style={{ marginTop: '10px' }}>
          <LinearProgress variant="determinate" value={uploadProgress} />
        </div>
      )}
      <Button
              variant="contained"
              onClick={handleReset}
              style={{ backgroundColor: '#FF0000', color: '#fff', marginTop: '1.5rem', marginLeft: '1.5rem' }}
            >
              Reset File Uploads
            </Button>
    </div>

    
  );
};

export default FileUpload;
