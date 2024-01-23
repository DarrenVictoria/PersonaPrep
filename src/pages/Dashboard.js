import React,{useState} from 'react';
import NavBar from '../components/Navbar'
import "./Dashboard.css"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OutboxIcon from '@mui/icons-material/Outbox';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AddLinkIcon from '@mui/icons-material/AddLink';
import ShareIcon from '@mui/icons-material/Share';
import TextField from '@mui/material/TextField';
import FileUpload from '../components/FileUpload';



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

//handle submit of the form below 
const handleSubmit = (event) => {
  event.preventDefault();
  // Add logic for handling form submission here
};

const RecruitementStatus = () => {
    return (
  <div>
    <h2 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0',marginLeft:'2%' }}>Recruitement Status</h2>
<div className="recruitment-status-container">
  <h5 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0' }}>Please select your current recruitement status ?</h5>
  <form onSubmit={handleSubmit}>
      <FormControl style={{ width: '20%', marginTop: '1%' }}>
        <Select defaultValue="Select Status" style={{ minWidth: '150px' }}>
          <MenuItem value="" disabled>Select Status</MenuItem>
          <MenuItem value="inProgress">Recruited</MenuItem>
          <MenuItem value="completed">Recruitment Pending</MenuItem>
          <MenuItem value="pending">Not Recruited</MenuItem>
          <MenuItem value="pending">Offer Extended</MenuItem>
          <MenuItem value="pending">On hold</MenuItem>
        </Select>
      </FormControl>
      <br />
      

      <Button type="submit" variant="contained" style={{ backgroundColor: '#000', color: '#fff', marginTop: '1.5rem' }}>
        Update status
      </Button>
    </form>
</div>
</div>

    );
  }

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
      const [description, setDescription] = useState('');

      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
  };

    return (
      <div>
        <h2 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0',marginLeft:'2%' }}>Feedback</h2>
      
      <div style={{ 
        backgroundColor: '#D3D3D3', // Gray color
        border: '2px solid #000', // Black border
        padding: '20px',
        textAlign: 'left', 
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start' 
      }}>
        
        <h2>Which component did you spot the issue in ?</h2>

        <Select defaultValue="Select Option" style={{ minWidth: '150px', margin: '10px 0', width:'20%' }}>
          <MenuItem value="" disabled>Place</MenuItem>
          <MenuItem value="option1">CV Generator</MenuItem>
          <MenuItem value="option2">Mock Interview Simulator</MenuItem>
          <MenuItem value="option3">Other interface</MenuItem>
        </Select>
  
        <h2>Description</h2>
        {/* Textarea for Description */}
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
          variant="outlined"
          style={{
            width: '100%',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#000000', // Change this to the desired color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#000000', // Change this to the desired color on hover
            },
          }}
        />
      
  
        {/* Title for Type */}
        <h2>Type</h2>
  
        {/* Another React Select Box */}
        <Select defaultValue="" style={{ minWidth: '150px', margin: '10px 0',width:'20%' }}>
          <MenuItem value="">Type</MenuItem>
          <MenuItem value="type1">Bug</MenuItem>
          <MenuItem value="type2">Benefit</MenuItem>
          <MenuItem value="type3">Error</MenuItem>
        </Select>
  
        {/* Drop to Upload Box */}
        <h2>Upload File</h2>

        <FileUpload/>
        
        
        
  
        {/* Submit Feedback Button */}
        <Button variant="contained" style={{ backgroundColor: '#000', color: '#fff', marginTop: '1.5rem' }}>
          Submit Feedback
        </Button>
      </div>
      </div>
    );
  }
  


const Dashboard =() =>{
    return(

        <div>
            <NavBar/>
            <p style={{marginBottom:'2rem'}}><span class="fancy">User Dashboard</span></p>
            <UserProfileDiv/>
            <RecruitementStatus/>
            <CVGenerator/>
            <AIInterview/>
            <Feedback/>
        </div>

        

    );
}

export default Dashboard;

