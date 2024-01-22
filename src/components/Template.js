import { Grid, Paper, badgeClasses, css, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import './Template.css';
import CustomVerticalStepper from './CustomVerticalStepper.js';
import CustomSecondVerticalStepper from './CustomSecondVerticalStepper.js';
import Button from "@mui/material/Button";
import {back} from './BackButton.js';
import {next} from './NextButton.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacultyDetails from './StepperPages/FacultyDetails.js';
import PersonalInfo from './StepperPages/PersonalInfo.js';
import ContactDetails_1 from './StepperPages/ContactDetails1.js';
import ContactDetails_2 from './StepperPages/ContactDetails2.js';
import Education_1 from './StepperPages/Education1.js';
import Education_2 from './StepperPages/Education2.js';
import UniversityEducation from './StepperPages/UniversityEducation.js';
import WorkExperience_1 from './StepperPages/WorkExperience1.js';
import WorkExperience_2 from './StepperPages/WorkExperience2.js';
import WorkExperience_3 from './StepperPages/WorkExperience3.js';
import Projects_1 from './StepperPages/Projects1.js';
import Projects_2 from './StepperPages/Projects2.js';
import Projects_3 from './StepperPages/Projects3.js';
import Summary_1 from './StepperPages/Summary1.js';
import Summary_2 from './StepperPages/Summary2.js';
import Certification_1 from './StepperPages/Certification1.js';
import Certification_2 from './StepperPages/Certification2.js';
import Publications from './StepperPages/Publications.js';
import Clubs from './StepperPages/Clubs.js';
import ExtraInformation from './StepperPages/ExtraInformation.js';
import TemplateSelection from './StepperPages/TemplateSelection.js';
import logo from '../assets/logo/Persona Prep Light.png';

const Template = () => {
    const cvs_instance = useRef();
    const secondStepperRef=useRef();
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    useEffect(()=>{
        
            console.log("secondStepperRef:",secondStepperRef);
        
    },[secondStepperRef]);
    
    const handleFirstStepperNext = () => {
        if (cvs_instance.current) {
          cvs_instance.current.handleNext();
          if (currentPageIndex < cvs_instance.current.getPageLength()) {
            setCurrentPageIndex((prev) => prev + 1);
          }
        }
      };
    
      const handleSecondStepperNext = () => {
        if (secondStepperRef.current) {
          secondStepperRef.current.handleNext();
          console.log('handleSecondStepperNext called');
          setCurrentPageIndex((prev) => prev + 1);
        }
      };
    
      const handleBack = () => {
        if (currentPageIndex <= 15 && currentPageIndex > 0) {
          if (cvs_instance.current) {
            cvs_instance.current.handleBack();
          }
          setCurrentPageIndex((prev) => prev - 1);
        } else if (currentPageIndex > 15 && secondStepperRef.current) {
          secondStepperRef.current.handleBack();
          setCurrentPageIndex((prev) => prev - 1);
        }
      };
    
      

    return(
<div className="formtemp-page">
            <div className="formtemp-header-container">
                <div className="logo"><img src={logo} alt="logo" style={{width:'120px'}}/></div>
                <div className="formtemp-variable">
                    {
                        (currentPageIndex == 0) && <p className="formtemp-variablename"></p>
                    }
                    {
                        (currentPageIndex == 1) && <p className="formtemp-variablename">Personal Information</p>
                    }
                    {
                        (currentPageIndex == 2) && <p className="formtemp-variablename">Contacts Details 1/2</p>
                    }
                    {
                        (currentPageIndex === 3) && <p className="formtemp-variablename">Contacts Details 2/2</p>
                    }
                    {
                        (currentPageIndex === 4) && <p className="formtemp-variablename">Summary Data 1/2</p>
                    }
                    {
                        (currentPageIndex === 5) && <p className="formtemp-variablename">Summary Data 2/2</p>
                    }
                    {
                        (currentPageIndex === 6) && <p className="formtemp-variablename">School Education 1/2</p>
                    }
                    {
                        (currentPageIndex === 7) && <p className="formtemp-variablename">School Education 2/2</p>
                    }
                    {
                        (currentPageIndex === 8) && <p className="formtemp-variablename">University Education</p>
                    }
                    {
                        (currentPageIndex === 9) && <p className="formtemp-variablename">Work Experience 1/3</p>
                    }
                    {
                        (currentPageIndex === 10) && <p className="formtemp-variablename">Work Experience 2/3</p>
                    }
                    {
                        (currentPageIndex === 11) && <p className="formtemp-variablename">Work Experience 3/3</p>
                    }
                    {
                        (currentPageIndex === 12) && <p className="formtemp-variablename">Project Experience 1/3</p>
                    }
                    {
                        (currentPageIndex === 13) && <p className="formtemp-variablename">Project Experience 2/3</p>
                    }
                    {
                        (currentPageIndex === 14) && <p className="formtemp-variablename">Project Experience 3/3</p>
                    }
                    {
                        (currentPageIndex === 15) && <p className="formtemp-variablename">Certification 1/2</p>
                    }
                    {
                        (currentPageIndex === 16) && <p className="formtemp-variablename">Certification 2/2</p>
                    }
                    {
                        (currentPageIndex === 17) && <p className="formtemp-variablename">Clubs and Societies</p>
                    }
                    {
                        (currentPageIndex === 18) && <p className="formtemp-variablename">Publications</p>
                    }
                    {
                        (currentPageIndex === 19) && <p className="formtemp-variablename">Extra Information</p>
                    }
                    {
                        (currentPageIndex === 20) && <p className="formtemp-variablename">Template Selection</p>
                    }
                    
                    
                </div>
            </div>
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{height: '100%'}}>
                    <Grid xs={4} style={{padding: "25px", display: "none"}}>
                        {currentPageIndex<=14?(
                        <CustomVerticalStepper ref={cvs_instance} ></CustomVerticalStepper>) : (<CustomSecondVerticalStepper ref={secondStepperRef}></CustomSecondVerticalStepper>)}
                    </Grid>
                    <Grid xs={12} style={{backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", paddingLeft: "10px"}}>
                    <form style={{height: '100%', position: 'relative'}}>
                        <div style={{marginBottom: '125px', marginRight: '75px'}}>
                            {
                                (currentPageIndex === 0) && <FacultyDetails></FacultyDetails>
                            }
                            {
                                (currentPageIndex === 1) && <PersonalInfo></PersonalInfo>
                            }
                            {
                                (currentPageIndex === 2) && <ContactDetails_1></ContactDetails_1>
                            }
                            {
                                (currentPageIndex === 3) && <ContactDetails_2></ContactDetails_2>
                            }
                            {
                                (currentPageIndex === 4) && <Summary_1></Summary_1>
                            }
                            {
                                (currentPageIndex === 5) && <Summary_2></Summary_2>
                            }
                            {
                                (currentPageIndex === 6) && <Education_1></Education_1>
                            }
                            {
                                (currentPageIndex === 7) && <Education_2></Education_2>
                            }
                            {
                                (currentPageIndex === 8) && <UniversityEducation></UniversityEducation>
                            }
                            {
                                (currentPageIndex === 9) && <WorkExperience_1></WorkExperience_1>
                            }
                            {
                                (currentPageIndex === 10) && <WorkExperience_2></WorkExperience_2>
                            }
                            {
                                (currentPageIndex === 11) && <WorkExperience_3></WorkExperience_3>
                            }
                            {
                                (currentPageIndex === 12) && <Projects_1></Projects_1>
                            }
                            {
                                (currentPageIndex === 13) && <Projects_2></Projects_2>
                            }
                            {
                                (currentPageIndex === 14) && <Projects_3></Projects_3>
                            }
                            {
                                (currentPageIndex === 15) && <Certification_1></Certification_1>
                            }
                            {
                                (currentPageIndex === 16) && <Certification_2></Certification_2>
                            }
                            {
                                (currentPageIndex === 17) && <Clubs></Clubs>
                            }
                            {
                                (currentPageIndex === 18) && <Publications></Publications>
                            }
                            {
                                (currentPageIndex === 19) && <ExtraInformation></ExtraInformation>
                            }
                            {
                                (currentPageIndex === 20) && <TemplateSelection></TemplateSelection>
                            }
                            
                            
                            
                        </div>

                        <Grid container spacing={2} style={{position: 'absolute', bottom: 10}}>
                            <Grid xs={6}>
                                <Button startIcon={<ArrowBackIcon />} style={back} onClick={() => { if (currentPageIndex <= 14 && cvs_instance.current) { cvs_instance.current.handleBack(); if (currentPageIndex > 0) { setCurrentPageIndex(currentPageIndex - 1); } } else if (secondStepperRef.current) {  secondStepperRef.current.handleBack(); setCurrentPageIndex((prevIndex) => prevIndex - 1); }}}>Go Back</Button>
                            </Grid>
                                
                            <Grid xs={6}>
                                {
                                    // Change this if you are adding any more pages
                                    (currentPageIndex < 20) && <Button style={next} onClick={() => {if(currentPageIndex<=14 && cvs_instance.current){cvs_instance.current.handleNext(); if (currentPageIndex < cvs_instance.current.getPageLength()){setCurrentPageIndex((prev)=>prev+1);}}else if(secondStepperRef.current){secondStepperRef.current.handleNext();setCurrentPageIndex((prev)=>prev+1);}}}>Next Step</Button>
                                }
                                
                            </Grid>
                        </Grid>
                    </form>
                    </Grid>
                </Grid>
            
            </div>
            
            
        </div>
    );

};
export default Template;