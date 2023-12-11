import NavBar from '../components/Navbar';
import './Home.css';
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import IconButton from "@mui/material/IconButton";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import KeyIcon from '@mui/icons-material/Key';
import DiversityPicture from '../assets/images/DiversityPicture.svg';
import NForceLogo from '../assets/images/NForceLogo.svg';
import Marquee from "react-fast-marquee";
import Footer from '../components/footer'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const GrayDiv = () => {
  return (
    <div style={{ 
      backgroundColor: '#D3D3D3', // Gray color
      border: '2px solid #000', // Black border
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      marginTop: 'auto',
     
      paddingTop:'3%',
      paddingBottom:'3%',
      marginLeft: '2%', // 3% left margin
      marginRight: '2%', // 3% right margin
    }}>
      <div style={{ 
        opacity: 0.2, // Low opacity
        width: '100%',
        height: '150px',
        position: 'absolute',
        bottom: 0,
        right: 0
      }}></div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'  }}>
          <img
            src={NForceLogo}
            alt="NForce Logo"
            style={{ width: '50px', height: 'auto', marginRight: '20px' }} // Adjust the size as needed
          />
          <h2 style={{ fontFamily: 'Inter', fontWeight: '900', margin: 0 ,fontSize:'40px'}}>Who are we at NSBM NFORCE</h2>
        </div>
        <p style={{ fontFamily: 'Inter', marginBottom: '20px',paddingLeft:'8%',paddingRight:'8%' }}>
          NFORCE – NSBM for Career and Entrepreneurship is the Unit belonging to NSBM Green University which prepares the students for the world of work. For the first time in Sri Lanka, NSBM Green University, positioned the university career guidance as a corporate entity NFORCE, to give the exposure of corporates to the students from the beginning itself. NFORCE is responsible for making the graduates’ future ready to win the corporate world as well as to promote entrepreneurship among students.
        </p>
              <button
        style={{
          borderRadius: '10px',
          background: '#000',
          padding: '12px',
          color: '#FFFFFF',
          fontFamily: 'Inter',
          transition: 'box-shadow 0.3s ease', // Add a smooth transition for a better visual effect
          boxShadow: '0 0 10px rgba(0, 0, 0, 0)', // Initial box shadow (transparent)
          ':hover': {
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Drop shadow on hover
          },
        }}
      >
        Meet the devs
      </button>
      </div>
    </div>
  );
}





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));




function RowAndColumnSpacing({ redirectTo }) {
const gridItems = [
    {
      id: 1,
      title: "5 Top Mistakes in CV's",
      position: 'relative',
      background: `
        linear-gradient(0deg, #F9EAC5 0%, #F9EAC5 100%),
        linear-gradient(0deg, #FFC5C5 0%, #FFC5C5 100%),
        #FFC5C5
      `,
      height: '9rem',
      border: '3px solid #000',
      url: '/insightblog',
    },
    {
      id: 2,
      title: "Reasons for CV to be rejected ",
      position: 'relative',
      background: `
        linear-gradient(0deg, #C5F9E7 0%, #C5F9E7 100%),
        linear-gradient(0deg, #C5F9E7 0%, #C5F9E7 100%),
        #C5F9E7
      `,
      height: '9rem',
      border: '3px solid #000',
      url: 'https://www.example.com/page2',
    },
    {
      id: 3,
      title: "Cv Design Inconsistencies ",
      position: 'relative',
      background: `
      linear-gradient(0deg, #C5CAF9 0%, #C5CAF9 100%),
      linear-gradient(0deg, #C5CAF9 0%, #C5CAF9 100%),
      #C5CAF9
    `,
      height: '9rem',
      border: '3px solid #000',
      url: 'https://www.example.com/page2',
    },
    {
      id: 4,
      title: "Interview Mistake Bank ",
      position: 'relative',
      background: `
      linear-gradient(0deg, #708090 0%, #708090 100%),
      linear-gradient(0deg, #708090 0%, #708090 100%),
      #708090
    `,
      height: '9rem',
      border: '3px solid #000',
      url: 'https://www.example.com/page2',
    },
    {
      id: 5,
      title: "Weak CV Objectives",
      position: 'relative',
      background: `
        linear-gradient(0deg, #F9C5ED 0%, #F9C5ED 100%),
        linear-gradient(0deg, #F9C5ED 0%, #F9C5ED 100%),
        #F9C5ED
      `,
      height: '9rem',
      border: '3px solid #000',
      url: 'https://www.example.com/page2',
    },
    {
      id: 6,
      title: "Interview Anxiety/Nerves",
      position: 'relative',
      background: `
        linear-gradient(0deg, #FDC883 0%, #FDC883 100%),
        linear-gradient(0deg, #FDC883 0%, #FDC883 100%),
        #FDC883
      `,
      height: '9rem',
      border: '3px solid #000',
      url: 'https://www.example.com/page2',
    },
    
  ];



  const TotalIB = {
    paddingLeft: '5%',
    paddingRight: '5%',
    
  };

  const readmorealign = {
    position: 'absolute',
    bottom: '10px', // Adjust this value for your desired padding
    left: '10px', // Adjust this value for your desired padding
  };

  
    
  
  return (
    <Box style={TotalIB} sx={{ width: '100%' }}>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}>
      {gridItems.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} className={`grid-item ${item.title.toLowerCase().replace(/ /g, '-')}`} onClick={() => redirectTo(item.url)}>
          <Item style={{ ...item }}>
            <h1 className="IBText">{item.title}</h1>
            <ReadMoreIcon style={readmorealign} />
          </Item>
        </Grid>
      ))}
    </Grid>
  </Box>
  );
}



export default function SplitLayout() {

    const TotalIB = {
      paddingLeft: '5%',
      paddingRight: '5%',
    };

    const readmorealign = {
      position: 'absolute',
      bottom: '10px', // Adjust this value for your desired padding
      left: '10px', // Adjust this value for your desired padding
    };

    const redirectToStartForm = () => {
        window.location.href = '/startform';
      };
    
      const redirectToYoutube = () => {
        window.location.href = 'https://www.youtube.com/';
      };

      const redirectTo = (url) => {
        window.location.href = url;
      };

  return (

    <div>
    <NavBar />
    
    <div className="split-container">
  <div className="left-box">
    <h1 className="inter-picturebox">Resumes Refined ,<br /> Interviews Perfected</h1>
  </div>
  <div className="right-box">
    <div className="top-right-box cv-box" onClick={redirectToStartForm}>
      <div className="box-content">
        <div>
          <h2 className="inter-top">CV Generator</h2>
          <p className="inter">
            Craft your professional journey effortlessly with our user-friendly CV Generator
          </p>
        </div>
        <div className="arrow-icon">
          <ArrowForwardIcon style={{ fontSize: '2.5rem',marginRight:'1rem' }} />
        </div>
      </div>
    </div>
    <div className="bottom-right-box interview-box" onClick={redirectToYoutube}>
      <div className="box-content">
        <div>
          <h2 className="inter-top">Interview Simulator</h2>
          <p className="inter">
            Sharpen your interview skills and boost your confidence with our AI-driven Mock Interview experience
          </p>
        </div>
        <div className="arrow-icon">
          <ArrowForwardIcon style={{ fontSize: '2.5rem',marginRight:'1rem' }}/>
        </div>
      </div>
    </div>
  </div>
</div>





    <Marquee style={{marginTop:'1%',marginBottom:'1%'}}> 

    <div className="professional-text-container">
    <h3 className="professional-text">Streamline</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Enhance</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Optimize</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Expedite</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Simplify</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Automate</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Facilitate</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Customize</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Accelerate</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Refine</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Tailor</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Improve</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Personalize</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Revolutionize</h3>
</div>

<div className="professional-text-container">
    <h3 className="professional-text">Modernize</h3>
</div>
<div className="professional-text-container">
    <h3 className="professional-text">Fasttrack</h3>
</div>
<div className="professional-text-container">
    <h3 className="professional-text">Personalise</h3>
</div>

    
    </Marquee>
     <h1 style={{textAlign:'center',marginTop:'3%'}}>Insight Bank</h1>
      
      
      <RowAndColumnSpacing redirectTo={redirectTo} />



      <h1 style={{textAlign:'center',marginTop:'3%'}}>Additional Features</h1>

      

      <Box style={TotalIB} sx={{ width: '100%' }}>
  <Grid container rowSpacing={2} columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}>
    <Grid item xs={12} sm={6} md={6} className={`grid-item additional-feature-item-1`} onClick={() => redirectTo('https://www.example.com/feature1')}>
      <Item style={{ backgroundColor: '#973381', height: '7rem', position: 'relative', border: '3px solid #000' }}>
        <h1 className="IBText">Interview Bank</h1>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          <IconButton>
            <RecordVoiceOverIcon style={{ fontSize: '3rem' }} />
          </IconButton>
        </div>
      </Item>
    </Grid>

    <Grid item xs={12} sm={6} md={6} className={`grid-item additional-feature-item-2`} onClick={() => redirectTo('https://www.example.com/feature2')}>
      <Item style={{ backgroundColor: '#DEB113', height: '7rem', position: 'relative', border: '3px solid #000' }}>
        <h1 className="IBText">Corporate Login</h1>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          <IconButton>
            <KeyIcon style={{ fontSize: '3rem' }} />
          </IconButton>
        </div>
      </Item>
    </Grid>
  </Grid>
</Box>

    <h1 style={{textAlign:'center',marginTop:'3%'}}>Team Behind the Project</h1>

<GrayDiv/>
       
    

    <h1 style={{textAlign:'center'}}>Get in Touch</h1>

          <Grid style={{ margin: '1%' }} container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <Grid item xs={4}>
          <Item style={{ border: '5px solid #000', background: '#D9D9D9', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: 0 }}>
            Phone: +9438472948<br />
            Fax: +94873738787<br />
            into@hgmlegal.com
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{ border: '5px solid #000', background: '#D9D9D9', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: 0 }}>
            PO Box 105-900<br />
            Auckland City<br />
            Auckland 1143 New
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{ border: '5px solid #000', background: '#D9D9D9', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: 0 }}>
            Physical<br />
            Level 16<br />
            45 Queen Street<br />
            Auckland 1010
          </Item>
        </Grid>
      </Grid>

      


   
   
      <Footer/>




    
    </div>

    


  );
}

