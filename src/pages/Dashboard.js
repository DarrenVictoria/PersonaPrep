import React,{useState} from 'react';
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

import {useForm, Controller} from 'react-hook-form';
import { getFirestore, addDoc, collection,updateDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';



const UserProfileDiv = () => {
  return (
    <div  className="UserProfileDiv">
      <div   style={{ display: 'flex', alignItems: 'center' }}>
        <div  style={{ marginRight: '20px' }}>
          {/* Change the src attribute to the path of your avatar image */}
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" sx={{ width: 120, height: 120 }} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '50px', margin: 0 }}>John Doe</h1>
          <p style={{ fontFamily: 'Inter', fontSize: '20px', margin: '5% 0' }}>BSc.(Hons) in Software Engineering</p>
          <p style={{ fontFamily: 'Inter', fontSize: '16px', margin: '8% 0' , }}>CV Status: <Button variant="contained" style={{ backgroundColor: '#00FF00', color: '#000', fontWeight: 'bold' }}>
            Created
          </Button></p>
          
        </div>
      </div>
    </div>
  );
}


const RecruitmentStatus = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      // Specify the name of your Firestore collection
      const collectionRef = collection(getFirestore(), 'recruitmentStatus');
      await addDoc(collectionRef, data);
      console.log('Recruitment Status Data successfully added to Firestore');
    } catch (error) {
      console.error('Error adding Recruitment Status data to Firestore:', error);
    }
  };

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
          <div className="cv-box" style={{ 
            padding: '35px', 
            textAlign: 'left',
            background: `
              linear-gradient(0deg, #FFDFDF 0%, #FFDFDF 100%),
              linear-gradient(0deg, #FFC5C5 0%, #FFC5C5 100%),
              #FFC5C5`,
            border: '3px solid #000',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <h1>Edit your CV</h1>
              <p>Make seamless adjustments, update information, and elevate your CV effortlessly.</p>
            </div>
            
          </div>
        </div>
  
        {/* Right Section (Four Buttons) */}
        <div className="right-section" style={{ 
          width: '40%', 
          display: 'flex', 
          flexDirection: 'column',
          padding:'15px'
        }}>
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
          const { control, handleSubmit } = useForm();
        const firestore = getFirestore();

        const [uploadedFile, setUploadedFile] = useState([]);

        const onSubmit = async (data) => {
          try {
            // If there is an uploaded file, get the file path from the state
            const filePaths = uploadedFile.map((file) => file.downloadURL);

            // Merge the file path with the rest of the form data
            const formData = { ...data, files: filePaths };

            const collectionRef = collection(firestore, 'feedback');
            const docRef = await addDoc(collectionRef, formData);

            console.log('Data successfully added to Firestore', formData);
          } catch (error) {
            console.error('Error adding data to Firestore:', error);
          }
        };

        const handleFileUpload = (fileInfo) => {
          // Handle the file information (e.g., store it in state or use it as needed)
          setUploadedFile((prevFiles) => [...prevFiles, fileInfo]);
        };
  
    return (
      <div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0', marginLeft: '2%' }}>Feedback</h2>
  
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
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#000000',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
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
                render={({ field }) => <FileUpload {...field} onFileUpload={handleFileUpload} />}
              />
            </FormControl>

  
            <br />
  
            <Button type="submit" variant="contained" style={{ backgroundColor: '#000', color: '#fff', marginTop: '1.5rem' }}>
              Submit Feedback
            </Button>
          </form>
        </div>
      </div>
    );
  };
  

const Dashboard =() =>{
    return(

        <div>
            <NavBar/>
            <p style={{marginBottom:'2rem'}}><span class="fancy">User Dashboard</span></p>
            <UserProfileDiv/>
            <RecruitmentStatus/>
            <CVGenerator/>
            <AIInterview/>
            <Feedback/>
        </div>

        

    );
}

export default Dashboard;

