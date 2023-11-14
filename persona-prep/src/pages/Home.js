import NavBar from '../components/Navbar';
import './Home.css';


import React from 'react';


const GridItem = ({ text, buttonText, buttonImage }) => (
  <div className="grid-item">
    <div className="text-container">
      <p>{text}</p>
    </div>
    <div className="button-container">
      <img src={buttonImage} alt={buttonText} />
    </div>
  </div>
);

const Grid = () => {
  const boxData = [
    { text: 'Text 1', buttonText: 'Button 1', buttonImage: 'your-button-image-1.png' },
    { text: 'Text 2', buttonText: 'Button 2', buttonImage: 'your-button-image-2.png' },
    { text: 'Text 3', buttonText: 'Button 3', buttonImage: 'your-button-image-3.png' },
    // Add more data for each box
  ];

  return (
    <div className="grid-container">
      {boxData.map((data, index) => (
        <GridItem key={index} {...data} />
      ))}
    </div>
  );
};




export default function SplitLayout() {
    const redirectToGoogle = () => {
        window.location.href = 'https://www.google.com/';
      };
    
      const redirectToYoutube = () => {
        window.location.href = 'https://www.youtube.com/';
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
     <h1>Insight Bank</h1>
    <Grid />
    </div>

    


  );
}

