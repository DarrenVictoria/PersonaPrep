import { Grid, Paper, badgeClasses, css, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import './Template.css';
import CustomVerticalStepper from '../../components/CustomVerticalStepper.js';
import CustomSecondVerticalStepper from '../../components/CustomSecondVerticalStepper.js';
import Button from "@mui/material/Button";
import {back} from '../../components/BackButton.js';
import {next} from '../../components/NextButton.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacultyDetails from '../../components/StepperPages/FacultyDetails.js';
import PersonalInfo from '../../components/StepperPages/PersonalInfo.js';
import ContactDetails_1 from '../../components/StepperPages/ContactDetails1.js';
import ContactDetails_2 from '../../components/StepperPages/ContactDetails2.js';
import Education_1 from '../../components/StepperPages/Education1.js';
import Education_2 from '../../components/StepperPages/Education2.js';
import UniversityEducation from '../../components/StepperPages/UniversityEducation.js';
import WorkExperience_1 from '../../components/StepperPages/WorkExperience1.js';
import WorkExperience_2 from '../../components/StepperPages/WorkExperience2.js';
import WorkExperience_3 from '../../components/StepperPages/WorkExperience3.js';
import Projects_1 from '../../components/StepperPages/Projects1.js';
import Projects_2 from '../../components/StepperPages/Projects2.js';
import Projects_3 from '../../components/StepperPages/Projects3.js';
import Summary_1 from '../../components/StepperPages/Summary1.js';
import Summary_2 from '../../components/StepperPages/Summary2.js';
import SkillTrack_1 from '../../components/StepperPages/SkillTrack1.js';
import SkillTrack_2 from '../../components/StepperPages/SkillTrack2.js';
import Certification_1 from '../../components/StepperPages/Certification1.js';
import Certification_2 from '../../components/StepperPages/Certification2.js';
import Publications from '../../components/StepperPages/Publications.js';
import Clubs from '../../components/StepperPages/Clubs.js';
import ExtraInformation from '../../components/StepperPages/ExtraInformation.js';
import TemplateSelection from '../../components/StepperPages/TemplateSelection.js';
import logo from '../../assets/logo/Persona Prep Light.png';
import CvFeedback from '../../components/StepperPages/CvFeedback.js';
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
                        (currentPageIndex === 6) && <p className="formtemp-variablename">SkillTrack 1/2</p>
                    }
                    {
                        (currentPageIndex === 7) && <p className="formtemp-variablename">SkillTrack 2/2</p>
                    }
                    {
                        (currentPageIndex === 8) && <p className="formtemp-variablename">School Education 1/2</p>
                    }
                    {
                        (currentPageIndex === 9) && <p className="formtemp-variablename">School Education 2/2</p>
                    }
                    {
                        (currentPageIndex === 10) && <p className="formtemp-variablename">University Education</p>
                    }
                    {
                        (currentPageIndex === 11) && <p className="formtemp-variablename">Work Experience 1/3</p>
                    }
                    {
                        (currentPageIndex === 12) && <p className="formtemp-variablename">Work Experience 2/3</p>
                    }
                    {
                        (currentPageIndex === 13) && <p className="formtemp-variablename">Work Experience 3/3</p>
                    }
                    {
                        (currentPageIndex === 14) && <p className="formtemp-variablename">Project Experience 1/3</p>
                    }
                    {
                        (currentPageIndex === 15) && <p className="formtemp-variablename">Project Experience 2/3</p>
                    }
                    {
                        (currentPageIndex === 16) && <p className="formtemp-variablename">Project Experience 3/3</p>
                    }
                    {
                        (currentPageIndex === 17) && <p className="formtemp-variablename">Certification 1/2</p>
                    }
                    {
                        (currentPageIndex === 18) && <p className="formtemp-variablename">Certification 2/2</p>
                    }
                    {
                        (currentPageIndex === 19) && <p className="formtemp-variablename">Clubs and Societies</p>
                    }
                    {
                        (currentPageIndex === 20) && <p className="formtemp-variablename">Publications</p>
                    }
                    {
                        (currentPageIndex === 21) && <p className="formtemp-variablename">Extra Information</p>
                    }
                    {
                        (currentPageIndex === 22) && <p className="formtemp-variablename">Template Selection</p>
                    }
                    {
                        (currentPageIndex === 23) && <p className="formtemp-variablename">Feedback</p>
                    }
                    
                    
                </div>
            </div>
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{height: '100%'}}>
                    <Grid xs={4} style={{padding: "25px", display: "none"}}>
                        {currentPageIndex<=14?(
                        <CustomVerticalStepper ref={cvs_instance} ></CustomVerticalStepper>) : (<CustomSecondVerticalStepper ref={secondStepperRef}></CustomSecondVerticalStepper>)}
                    </Grid>
                    <Grid xs={12} style={{backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                    <form style={{height: '100%', position: 'relative'}}>
                        <div style={{marginBottom: '125px',marginTop:'80px', marginRight: '25px',marginLeft:'25px'}}>
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
                                (currentPageIndex === 6) && <SkillTrack_1></SkillTrack_1>
                            }
                            {
                                (currentPageIndex === 7) && <SkillTrack_2></SkillTrack_2>
                            }
                            {
                                (currentPageIndex === 8) && <Education_1></Education_1>
                            }
                            {
                                (currentPageIndex === 9) && <Education_2></Education_2>
                            }
                            {
                                (currentPageIndex === 10) && <UniversityEducation></UniversityEducation>
                            }
                            {
                                (currentPageIndex === 11) && <WorkExperience_1></WorkExperience_1>
                            }
                            {
                                (currentPageIndex === 12) && <WorkExperience_2></WorkExperience_2>
                            }
                            {
                                (currentPageIndex === 13) && <WorkExperience_3></WorkExperience_3>
                            }
                            {
                                (currentPageIndex === 14) && <Projects_1></Projects_1>
                            }
                            {
                                (currentPageIndex === 15) && <Projects_2></Projects_2>
                            }
                            {
                                (currentPageIndex === 16) && <Projects_3></Projects_3>
                            }
                            {
                                (currentPageIndex === 17) && <Certification_1></Certification_1>
                            }
                            {
                                (currentPageIndex === 18) && <Certification_2></Certification_2>
                            }
                            {
                                (currentPageIndex === 19) && <Clubs></Clubs>
                            }
                            {
                                (currentPageIndex === 20) && <Publications></Publications>
                            }
                            {
                                (currentPageIndex === 21) && <ExtraInformation></ExtraInformation>
                            }
                            {
                                (currentPageIndex === 22) && <TemplateSelection></TemplateSelection>
                            }
                            {
                                (currentPageIndex === 23) && <CvFeedback></CvFeedback>
                            }
                            
                        </div>

                        <Grid container spacing={2} style={{position: 'absolute', bottom: 80}}>
                            <Grid xs={6} paddingLeft={'10px'}>
                                <Button startIcon={<ArrowBackIcon />} style={back} onClick={() => { if (currentPageIndex <= 14 && cvs_instance.current) { cvs_instance.current.handleBack(); if (currentPageIndex > 0) { setCurrentPageIndex(currentPageIndex - 1); } } else if (secondStepperRef.current) {  secondStepperRef.current.handleBack(); setCurrentPageIndex((prevIndex) => prevIndex - 1); }}}>Go Back</Button>
                            </Grid>
                                
                            <Grid xs={6}>
                                {
                                    // Change this if you are adding any more pages
                                    (currentPageIndex < 23) && <Button style={next} onClick={() => {if(currentPageIndex<=14 && cvs_instance.current){cvs_instance.current.handleNext(); if (currentPageIndex < cvs_instance.current.getPageLength()){setCurrentPageIndex((prev)=>prev+1);}}else if(secondStepperRef.current){secondStepperRef.current.handleNext();setCurrentPageIndex((prev)=>prev+1);}}}>Next Step</Button>
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