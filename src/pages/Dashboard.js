import React,{useEffect,useState} from 'react';
import NavBar from '../components/Navbar'
import "./Dashboard.css"
import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OutboxIcon from '@mui/icons-material/Outbox';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AddLinkIcon from '@mui/icons-material/AddLink';
import ShareIcon from '@mui/icons-material/Share';
import FileUpload from '../components/FileUpload';

import {useForm, Controller, useWatch } from 'react-hook-form';
import { getFirestore, addDoc, collection,updateDoc, doc, setDoc, getDoc, serverTimestamp  } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';




const UserProfileDiv = () => {
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
   const [cvStatus, setCvStatus] = useState('');

   useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (currentUser) {
          const { displayName } = currentUser;
          const username = displayName.toLowerCase().replace(/\s/g, '');

          // Fetch user data from Firestore based on the username
          const userCollectionRef = doc(getFirestore(), 'recruitmentStatus', username);
          const userDocSnap = await getDoc(userCollectionRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setCvStatus(userData['Cv-Status'] || '');
          }
        }
      } catch (error) {
        console.error('Error fetching user data from Firestore:', error);
      }
    };

    const fetchProfileData = async () => {
      try {
        if (currentUser) {
          const { displayName, email, photoURL } = currentUser;
          setUserName(displayName || 'Username');
          setUserEmail(email || 'studentname@students.nsbm.ac.lk');
          setProfilePicture(photoURL || '');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchUserData();
    fetchProfileData();
  }, [currentUser]);

  const getInitials = (name) => {
    return name.split(' ').map((part) => part[0]).join('').toUpperCase();
  };

  return (
    <div  className="UserProfileDiv">
      <div   style={{ alignItems: 'center' }}>
      
      <div className='AvatarImage'>
          {/* Change the src attribute to the path of your avatar image */}
          {profilePicture ? (
            <Avatar alt="User Avatar" src={profilePicture} sx={{ width: 100, height: 100 }} />
          ) : (
            <Avatar alt="User Avatar" sx={{ width: 100, height: 100 }}>
              {getInitials(userName)}
            </Avatar>
          )}
          
        </div>
        <div style={{ textAlign: 'left',marginTop:'1rem'}}>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '50px'}} className="user-name">{userName}</h1>
          <p style={{ fontFamily: 'Inter', fontSize: '20px', margin: '5% 0' }} className="user-email">{userEmail}</p>
          <p style={{ fontFamily: 'Inter', fontSize: '16px', margin: '8% 0' , }}>
          CV Status:{' '}
            <Button
              variant="contained"
              style={{
                backgroundColor: cvStatus === 'created' ? '#00FF00' : 'red',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              {cvStatus === 'created' ? 'Created' : 'Not Created'}
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}


const RecruitmentStatus = () => {
  const { control, handleSubmit, setValue } = useForm();
  const { currentUser } = useAuth();
  const selectedStatus = useWatch({ control, name: 'Recruitment-Status' });

  const updateUserRecruitmentStatus = async (email, data) => {
    try {
      const collectionRef = collection(getFirestore(), 'studentdetails');
      const userDocRef = doc(collectionRef, email);

      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        // Document exists, check if "Recruitment-Status" field is present
        const userData = docSnap.data();

        if ('Recruitment-Status' in userData) {
          // "Recruitment-Status" field is present, update it
          await updateDoc(userDocRef, {
            'Recruitment-Status': data['Recruitment-Status'],
            // You can add additional fields or update timestamp if needed
            updatedAt: serverTimestamp(),
          });
        } else {
          // "Recruitment-Status" field is not present, add it
          await setDoc(userDocRef, {
            'Recruitment-Status': data['Recruitment-Status'],
            // You can add additional fields or set timestamp if needed
            createdAt: serverTimestamp(),
          }, { merge: true });
        }
        console.log('Recruitment Status Data successfully added/updated in Firestore');
      } else {
        console.error('User document not found in studentdetails collection.');
      }
    } catch (error) {
      console.error('Error updating Recruitment Status data in Firestore:', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (currentUser) {
        const { email } = currentUser;
        await updateUserRecruitmentStatus(email, data);
      } else {
        console.error('User not logged in.');
      }
    } catch (error) {
      console.error('Error adding/updating Recruitment Status data to Firestore:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser) {
          const { email } = currentUser;

          const collectionRef = collection(getFirestore(), 'studentdetails');
          const userDocRef = doc(collectionRef, email);

          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            // Set the initial value for the 'Recruitment-Status' field in the form
            setValue('Recruitment-Status', userData['Recruitment-Status'] || '');
          }
        }
      } catch (error) {
        console.error('Error fetching Recruitment Status data from Firestore:', error);
      }
    };

    fetchData();
  }, [currentUser, setValue]);

  


  return (
    <div>
      <h2 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0', marginLeft: '2%' }}>Recruitment Status</h2>
      <div className="recruitment-status-container">
        <h5 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0' }}>Please select your current recruitment status ?</h5>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl style={{ width: '20%', marginTop: '1%' }}>
            <Controller
              name="Recruitment-Status"
              control={control}
              defaultValue=" "
              render={({ field }) => (
                <Select {...field} style={{ minWidth: '150px' }}>
                  <MenuItem value=" " disabled>
                    Select Status
                  </MenuItem>
                  <MenuItem value="recruited">Recruited</MenuItem>
                  <MenuItem value="pending">Recruitment Pending</MenuItem>
                  <MenuItem value="not-recruited">Not Recruited</MenuItem>
                  <MenuItem value="offer-extended">Offer Extended</MenuItem>
                  <MenuItem value="on-hold">On hold</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <br />

          <Button type="submit" variant="contained" style={{ backgroundColor: '#000', color: '#fff', marginTop: '1.5rem' }}>
            Update status
          </Button>
        </form>
      </div>
    </div>
  );
};

  const CVGenerator = () => {
    return (
      <div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0',marginLeft:'2%' }}>CV Generator</h2>
      <div className="cv-container" style={{ 
        display: 'flex',
        backgroundColor: '#D3D3D3',
        border: '2px solid #000',
        margin: '20px',
        padding:'1rem'
      }}>
        {/* Left Section (Replica of CV Generator Box) */}
        <div className="left-section" style={{ 
          width: '60%', 
          padding: '20px',
          boxSizing: 'border-box',
        }}>
          {/* CV Generator Box Replica */}
          <div className="cv-box-new" >
            <div>
              <h1>Edit your CV</h1>
              <p>Make seamless adjustments, update information, and elevate your CV effortlessly.</p>
            </div>
            
          </div>
        </div>
  
        {/* Right Section (Four Buttons) */}
        <div className="right-section" >
          <Button className='cv-gen-butt' style={{ flex: 1, margin: '1%', border: '3px solid #000', backgroundColor: '#ffffff',color:'#000000' }} >Export CV <OutboxIcon style={{marginLeft:'3%'}}/> </Button>
          <Button className='cv-gen-butt' style={{ flex: 1, margin: '1%', border: '3px solid #000', backgroundColor: '#ffffff',color:'#000000' }}>Quick View <SlideshowIcon style={{marginLeft:'3%'}}/></Button>
          <Button className='cv-gen-butt' style={{ flex: 1, margin: '1%', border: '3px solid #000', backgroundColor: '#ffffff',color:'#000000' }}>Export Link <AddLinkIcon style={{marginLeft:'3%'}}/></Button>
          <Button className='cv-gen-butt'style={{ flex: 1, margin: '1%', border: '3px solid #000', backgroundColor: '#ffffff',color:'#000000' }}>Social Share <ShareIcon style={{marginLeft:'3%'}}/></Button>
        </div>
      </div>
      </div>
    );
  }


  const AIInterview = () => {
    return (
      <div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0',marginLeft:'2%' }}>AI Mock Interview Simulator</h2>
      <div style={{ 
        display: 'flex',
        backgroundColor: '#D3D3D3',
        border: '2px solid #000',
        margin: '20px',
        padding:'1rem'
      }}>
        {/* Left Section (Replica of CV Generator Box) */}
        <div style={{ 
          width: '100%', 
          padding: '20px',
          boxSizing: 'border-box',
        }}>
          {/* CV Generator Box Replica */}
          <div className="interview-box" style={{ 
            padding: '35px', 
            textAlign: 'left',
            background: `
              linear-gradient(0deg, #EFFFDE 0%, #EFFFDE 100%),
              linear-gradient(0deg, #EFFFDE 0%, #EFFFDE 100%),
              #FFC5C5`,
            border: '3px solid #000',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <h1>Take an AI Interview</h1>
              <p>Sharpen your interview skills and boost your confidence with our AI-driven Mock Interview experience.</p>
            </div>
            
          </div>
        </div>
  
        
        <div style={{ 
          width: '0%', 
          display: 'flex', 
          flexDirection: 'column',
        }}>
          
        </div>
      </div>
      </div>
    );
  }

  const Feedback = () => {
          const { control, handleSubmit, reset  } = useForm();
        const firestore = getFirestore();

        const [uploadedFiles, setUploadedFiles] = useState([]);
        const [fileUploadKey, setFileUploadKey] = useState(0);

        const onResetFeedback = () => {
          reset();
          setFileUploadKey((prevKey) => prevKey + 1);
          setUploadedFiles([]); // Clear uploaded files
        };
        const onFileUpload = (fileInfo) => {
          setUploadedFiles((prevFiles) => [...prevFiles, fileInfo]);
        };

        const onSubmit = async (data) => {
          try {
            // If there are uploaded files, get their information
              const filesData = uploadedFiles.map((fileInfo) => ({
                downloadURL: fileInfo.downloadURL,
                fileId: fileInfo.fileId,
              }));

              console.log('Form data:', data);
              console.log('Files data:', filesData);

            // Merge the file path with the rest of the form data
            const formData = { ...data, files: filesData };

            console.log('Final formData:', formData);

            const collectionRef = collection(firestore, 'feedback');
            const docRef = await addDoc(collectionRef, formData);

            console.log('Data successfully added to Firestore', formData);

            reset();

            // Increment the key to force a re-render of FileUpload component
            setFileUploadKey((prevKey) => prevKey + 1);

            // Reset the uploaded files state
            setUploadedFiles([]);

          } catch (error) {
            console.error('Error adding data to Firestore:', error);
          }
        };

        const handleFileUpload = (fileInfo) => {
          // Handle the file information (e.g., store it in state or use it as needed)
          setUploadedFiles((prevFiles) => [...prevFiles, fileInfo]);
        };
  
    return (
      <div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0', marginLeft: '2%' }}>Anonymous Feedback</h2>
  
        <div style={{
          backgroundColor: '#D3D3D3',
          border: '2px solid #000',
          padding: '20px',
          textAlign: 'left',
          margin: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
  
          <h2>Which component did you spot the issue in ?</h2>
  
          <form onSubmit={handleSubmit(onSubmit)}>
  
            <FormControl style={{ width: '20%', marginTop: '1%' }}>
              <Controller
                name="place"
                control={control}
                defaultValue=" "
                render={({ field }) => (
                  <Select {...field} style={{ minWidth: '150px' }}>
                    <MenuItem value=" " disabled>
                      Place
                    </MenuItem>
                    <MenuItem value="cv-gen">CV Generator</MenuItem>
                    <MenuItem value="mock-interview">Mock Interview Simulator</MenuItem>
                    <MenuItem value="other-interface">Other interface</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
  
            <h2>Description</h2>
            <FormControl style={{ width: '100%', marginTop: '1%' }}>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{
                      width: '100%',
                      '& .MuiOutlinedInputNotchedOutline': {
                        borderColor: '#000000',
                      },
                      '&:hover .MuiOutlinedInputNotchedOutline': {
                        borderColor: '#000000',
                      },
                    }}
                  />
                )}
              />
            </FormControl>
  
            <h2>Type</h2>
  
            <FormControl style={{ width: '20%', marginTop: '1%' }}>
              <Controller
                name="type"
                control={control}
                defaultValue=" "
                render={({ field }) => (
                  <Select {...field} style={{ minWidth: '150px' }}>
                    <MenuItem value=" " disabled>Type</MenuItem>
                    <MenuItem value="bug">Bug</MenuItem>
                    <MenuItem value="benefit">Benefit</MenuItem>
                    <MenuItem value="error">Error</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
  
            <h2>Upload File</h2>
  
            <FormControl>
              <Controller
                name="file"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FileUpload
                    key={fileUploadKey}
                    onFileUpload={onFileUpload}
                    onReset={onResetFeedback} // Pass the onReset function
                  />
                )}
              />
            </FormControl>

  
            <br />
  
            <Button type="submit" variant="contained" style={{ backgroundColor: '#000', color: '#fff', marginTop: '1.5rem',marginLeft:'1.5rem' }}>
              Submit Feedback
            </Button>

            

            
          </form>
        </div>
      </div>
    );
  };
  

const Dashboard =() =>{
  const { currentUser } = useAuth();
    return(

        <div>
            <NavBar/>
            <h1 style={{marginLeft:'1rem'}}><b>User Dashboard</b></h1>
            
            <UserProfileDiv/>
            <RecruitmentStatus/>
            <CVGenerator/>
            <AIInterview/>
            <Feedback/>
        </div>

        

    );
}

export default Dashboard;

