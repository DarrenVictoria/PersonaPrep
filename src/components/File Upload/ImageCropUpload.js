import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Cropper from 'react-easy-crop';
import CircularProgress from '@mui/material/CircularProgress';
import './styles.css';

const FileUpload = ({ onFileUpload, onReset, onUploadSuccess }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const storage = getStorage();
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isUploadingCroppedImage, setIsUploadingCroppedImage] = useState(false);
  const [showCropper, setShowCropper] = useState(true);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (uploadedFile && uploadedFile.toBeDeleted) {
      const fileRef = ref(storage, `uploads/${uploadedFile.file.name}`);
      console.log(`Deleting file in useEffect: uploads/${uploadedFile.file.name}`);
      deleteObject(fileRef)
        .then(() => {
          console.log('File deleted successfully from storage in useEffect');
          setUploadedFile(null);
        })
        .catch((error) => {
          console.error('Error deleting file from storage in useEffect:', error);
        });
      onReset();
    }
  }, [uploadedFile, storage, onReset]);

  const handleReset = async () => {
    if (uploadedFile) {
      setIsResetting(true);
      const fileName = getFileNameFromUrl(uploadedFile.downloadURL);
      const fileRef = ref(storage, `uploads/${fileName}`);
      
      try {
        await deleteObject(fileRef);
        console.log(`File '${fileName}' deleted successfully from storage`);
        setUploadedFile(null);
        setImageSrc(null);
        setShowCropper(true);
        onReset();
      } catch (error) {
        console.error('Error deleting file from storage:', error);
        setError('Error deleting file from storage. Please try again.');
      } finally {
        setIsResetting(false);
      }
    }
  };
  
  const getFileNameFromUrl = (url) => {
    // Example URL: https://firebasestorage.googleapis.com/v0/b/your-app.appspot.com/o/uploads%2Fcropped_1718457211961.jpg?alt=media
    const decodedUrl = decodeURIComponent(url);
    const startIndex = decodedUrl.lastIndexOf('/') + 1;
    const endIndex = decodedUrl.lastIndexOf('?');
    return decodedUrl.substring(startIndex, endIndex);
  };
  

  

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        if (acceptedFiles.length !== 1) {
          setError('Please upload only one file at a time.');
          return;
        }

        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => setImageSrc(reader.result);
        reader.readAsDataURL(file);

        const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!imageMimeTypes.includes(file.type)) {
          setError('Please upload a valid image file.');
          return;
        }
      } catch (error) {
        console.error('Error uploading file to storage:', error);
        setError('Error uploading file to storage. Please try again.');
      }
    },
  });

  const uploadCroppedImageToFirebase = async (croppedImageBlob) => {
    setIsUploadingCroppedImage(true);
    setUploadProgress(0);

    try {
      const fileName = `cropped_${Date.now()}.jpg`;
      const storageRef = ref(storage, `uploads/${fileName}`);

      const uploadTask = uploadBytesResumable(storageRef, croppedImageBlob, {
        contentType: croppedImageBlob.type,
      });

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Error uploading cropped image to storage:', error);
          setError('Error uploading cropped image to storage. Please try again.');
        },
        () => {
          getDownloadURL(storageRef)
            .then((downloadURL) => {
              setUploadedFile({ file: croppedImageBlob, downloadURL, fileName, toBeDeleted: false });
              setUploadProgress(0);
              setError(null);
              setIsUploadingCroppedImage(false);

              const fileId = Date.now();
              onFileUpload({ file: croppedImageBlob, downloadURL, fileId });
              onUploadSuccess(downloadURL);
            })
            .catch((error) => {
              console.error('Error getting download URL:', error);
              setError('Error getting download URL. Please try again.');
              setIsUploadingCroppedImage(false);
            });
        }
      );
    } catch (error) {
      console.error('Error uploading cropped image to storage:', error);
      setError('Error uploading cropped image to storage. Please try again.');
      setIsUploadingCroppedImage(false);
    }
  };

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
          <p>Drop your file here or click to upload</p>
          <p style={{ color: 'red' }}>Insert only one file at a time</p>
        </div>

        {uploadedFile && (
          <div>
            <p>Uploaded file :</p>
            <img src={uploadedFile.downloadURL} alt={uploadedFile.fileName} style={{ maxWidth: '150px' }} />
          </div>
        )}
      </div>
      {(uploadProgress > 0 || isUploadingCroppedImage) && (
        <div style={{ marginTop: '10px' }}>
          <LinearProgress variant="determinate" value={uploadProgress} />
        </div>
      )}
      {uploadedFile && (
        <Button
          variant="contained"
          onClick={handleReset}
          style={{ backgroundColor: '#FF0000', color: '#fff', marginTop: '1.5rem', marginLeft: '1.5rem', marginBottom: '1rem' }}
          disabled={isResetting}
        >
          {isResetting ? <CircularProgress size={24} style={{ color: '#fff' }} /> : 'Reset File Uploads'}
        </Button>
      )}

      {showCropper && imageSrc && (
        <div>
          <div className="cropContainer">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onCropComplete={(croppedArea, croppedAreaPixels) => setCroppedAreaPixels(croppedAreaPixels)}
              onZoomChange={setZoom}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <button
              type="button"
              onClick={async (e) => {
                e.preventDefault();
                const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels, 0, createImage, getRadianAngle);
                uploadCroppedImageToFirebase(croppedImageBlob);
                setShowCropper(false);
              }}
              style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '25px',
                padding: '15px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'bold',
              }}
            >
              Finalize Crop
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;

export const getCroppedImg = async (imageSrc, pixelCrop, rotation = 0, createImage, getRadianAngle) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2);

  ctx.drawImage(image, safeArea / 2 - image.width / 2, safeArea / 2 - image.height / 2);

  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.putImageData(data, 0 - safeArea / 2 + image.width / 2 - pixelCrop.x, 0 - safeArea / 2 + image.height / 2 - pixelCrop.y);

  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      if (!file) {
        reject(new Error('Canvas is empty'));
        return;
      }
      file.name = 'croppedImage.png';
      resolve(file);
    }, 'image/png');
  });
};

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180;
}
