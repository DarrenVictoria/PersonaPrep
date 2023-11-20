import NavBar from '../components/Navbar';
import './Home.css';
import * as React from "react";
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
import Testemonials from '../components/Testemonials';
import Footer from '../components/footer'







const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const LeftSide = () => (
  <div style={{ width: '40%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ textAlign: 'center' }}>
    

     
    </div>
    <div style={{ width: '100%', maxHeight: '500px', overflow: 'hidden', marginTop: '20px' }}>
    <h1 style={{ marginTop: '10%',marginLeft:'8%',fontFamily: 'Inter'}}>Team behind{'\n'} the project</h1>
      <img
        src={DiversityPicture}
        alt="GroupIcon"
        style={{ width: '100%', height: 'auto', objectFit: 'contain',padding:'5%',maxHeight:'600px' }}
      />
    </div>
  </div>
);

const RightSide = () => (
  <div style={{ width: '60%', padding: '10px', boxSizing: 'border-box', backgroundColor: '#D9D9D9', border: '4px solid #000', margin:'5%' }}>
    <div>
    <img
        src={NForceLogo}
        alt="NForce Logo"
        style={{ width: '10%', height: 'auto', objectFit: 'contain',marginBottom:'-2%',marginTop:'2%',marginLeft:'2%' }}
        
      />
      <h2  style={{padding: '2%',fontFamily: 'Inter', fontWeight: '900'}}>Who are we at NSBM NFORCE</h2>
      <p style={{paddingLeft: '2%',paddingBottom: '2%',fontFamily: 'Inter'}} >NFORCE – NSBM for Career and Entrepreneurship is the Unit belonging to NSBM Green University which prepares the students for the world of work. For the first time in Sri Lanka, NSBM Green University, positioned the university career guidance as a corporate entity NFORCE, to give the exposure of corporates to the students from the beginning itself. NFORCE is responsible for making the graduates’ future ready to win the corporate world as well as to promote entrepreneurship among students.</p>
    </div>
    <button style={{  borderRadius: '20px', background: '#000', paddingLeft: '6%',paddingRight: '6%' }}>
  <h2 style={{ color: '#FFFFFF', fontFamily: 'Inter' }}>Meet the devs</h2>
</button>


  </div>
);

const ThreeColumnLayout = () => (
  <div style={{ display: 'flex' }}>
    <LeftSide />
    <RightSide />
  </div>
);

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
      url: 'https://www.example.com/page1',
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

    const redirectToGoogle = () => {
        window.location.href = 'https://www.google.com/';
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
        <h1 className="inter">Resumes Refined ,<br /> Interviews Perfected</h1>
      </div>
      <div className="right-box">
            
            <div className="top-right-box" onClick={redirectToGoogle}>
                    <h2 className="inter-top">CV Generator</h2>
                    <p className="inter">Craft your professional journey effortlessly with our user-friendly CV Generator</p>
            </div>
            
            
            <div className="bottom-right-box" onClick={redirectToYoutube}>
                    <h2 className="inter-top">Interview Simulator</h2>
                    <p className="inter">Sharpen your interview skills and boost your confidence with our AI-driven Mock Interview experience.</p>
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
     <h1 className="inter-bold ">Insight Bank</h1>
      
      
      <RowAndColumnSpacing redirectTo={redirectTo} />



      <h1 className="inter-bold-center">Additional Features</h1>

      

          <Box style={TotalIB} sx={{ width: '100%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}>
                <Grid item xs={12} sm={6} md={6} className={`grid-item additional-feature-item-1`} onClick={() => redirectTo('https://www.example.com/feature1')}>
            <Item style={{ backgroundColor: '#973381', height: '7rem', position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: '1rem', paddingRight: '2rem', border: '3px solid #000' }}>
              <h1 className="IBText">Interview Bank</h1>
              <IconButton
                style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)' }}
              >
                <RecordVoiceOverIcon style={{ fontSize: '4rem' }} />
              </IconButton>
            </Item>
          </Grid>

            <Grid item xs={12} sm={6} md={6} className={`grid-item additional-feature-item-2`} onClick={() => redirectTo('https://www.example.com/feature2')}>
        <Item style={{ backgroundColor: '#DEB113', height: '7rem', position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: '1rem', paddingRight: '2rem', border: '3px solid #000' }}>
          <h1 className="IBText">Corporate Login</h1>
          <IconButton
            style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)' }}
          >
            <KeyIcon style={{ fontSize: '4rem' }} />
          </IconButton>
        </Item>
      </Grid>

      </Grid>
    </Box>
    

   
       
    <ThreeColumnLayout/>

    <h1 className="inter-bold-center">Get in Touch</h1>

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

