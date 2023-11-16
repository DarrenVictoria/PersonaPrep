import { Grid, Paper, badgeClasses, css, useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';
import './Template.css';
import CustomVerticalStepper from './CustomVerticalStepper.js';
import Button from "@mui/material/Button";
import {back} from './BackButton.js';
import {next} from './NextButton.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacultyDetails from './StepperPages/FacultyDetails.js';
import PersonalInfo from './StepperPages/PersonalInfo.js';
import ContactDetails_1 from './StepperPages/ContactDetails1.js'
import ContactDetails_2 from './StepperPages/ContactDetails2.js'
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
const Template = () => {
    const cvs_instance = useRef();
    const [currentPageIndex, setCurrentPageIndex] = useState(0)

    return(
<div className="page" style={{backgroundColor: "white"}}>
            <div className="container">
                <div class="logo"><img src="/Logo/Persona1.png" alt="logo"/></div>
                <div className="variable">
                    {
                        (currentPageIndex == 0) && <p className="variablename"></p>
                    }
                    {
                        (currentPageIndex == 1) && <p className="variablename">Personal Information</p>
                    }
                    {
                        (currentPageIndex == 2) && <p className="variablename">Contacts Details 1/2</p>
                    }
                    {
                        (currentPageIndex == 3) && <p className="variablename">Contacts Details 2/2</p>
                    }
                    {
                        (currentPageIndex == 4) && <p className="variablename">Summary Data 1/2</p>
                    }
                    {
                        (currentPageIndex == 5) && <p className="variablename">Summary Data 2/2</p>
                    }
                    {
                        (currentPageIndex == 6) && <p className="variablename">School Education 1/2</p>
                    }
                    {
                        (currentPageIndex == 7) && <p className="variablename">School Education 2/2</p>
                    }
                    {
                        (currentPageIndex == 8) && <p className="variablename">University Education</p>
                    }
                    {
                        (currentPageIndex == 9) && <p className="variablename">Work Experience 1/3</p>
                    }
                    {
                        (currentPageIndex == 10) && <p className="variablename">Work Experience 2/3</p>
                    }
                    {
                        (currentPageIndex == 11) && <p className="variablename">Work Experience 3/3</p>
                    }
                    {
                        (currentPageIndex == 12) && <p className="variablename">Project Experience 1/3</p>
                    }
                    {
                        (currentPageIndex == 13) && <p className="variablename">Project Experience 2/3</p>
                    }
                    {
                        (currentPageIndex == 14) && <p className="variablename">Project Experience 3/3</p>
                    }
                    
                </div>
            </div>
            <div className="bodyform">
                <Grid container spacing={2}>
                    <Grid xs={4} style={{padding: "25px"}}>
                        <CustomVerticalStepper ref={cvs_instance}></CustomVerticalStepper>
                    </Grid>
                    <Grid xs={8} style={{backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", paddingLeft: "10px", borderLeft: "2px solid black"}}>
                    <form style={{height: '100%', position: 'relative'}}>
                        <div style={{marginBottom: '75px'}}>
                            {
                                (currentPageIndex == 0) && <FacultyDetails></FacultyDetails>
                            }
                            {
                                (currentPageIndex == 1) && <PersonalInfo></PersonalInfo>
                            }
                            {
                                (currentPageIndex == 2) && <ContactDetails_1></ContactDetails_1>
                            }
                            {
                                (currentPageIndex == 3) && <ContactDetails_2></ContactDetails_2>
                            }
                            {
                                (currentPageIndex == 4) && <Summary_1></Summary_1>
                            }
                            {
                                (currentPageIndex == 5) && <Summary_2></Summary_2>
                            }
                            {
                                (currentPageIndex == 6) && <Education_1></Education_1>
                            }
                            {
                                (currentPageIndex == 7) && <Education_2></Education_2>
                            }
                            {
                                (currentPageIndex == 8) && <UniversityEducation></UniversityEducation>
                            }
                            {
                                (currentPageIndex == 9) && <WorkExperience_1></WorkExperience_1>
                            }
                            {
                                (currentPageIndex == 10) && <WorkExperience_2></WorkExperience_2>
                            }
                            {
                                (currentPageIndex == 11) && <WorkExperience_3></WorkExperience_3>
                            }
                            {
                                (currentPageIndex == 12) && <Projects_1></Projects_1>
                            }
                            {
                                (currentPageIndex == 13) && <Projects_2></Projects_2>
                            }
                            {
                                (currentPageIndex == 14) && <Projects_3></Projects_3>
                            }
                            
                        </div>

                        <Grid container spacing={2} style={{position: 'absolute', bottom: 10}}>
                            <Grid xs={6}>
                                <Button startIcon={<ArrowBackIcon />} style={back} onClick={() => {cvs_instance.current.handleBack(); if (currentPageIndex > 0){setCurrentPageIndex(currentPageIndex - 1)}}}>Go Back</Button>
                            </Grid>
                                
                            <Grid xs={6}>
                                <Button style={next} onClick={() => {cvs_instance.current.handleNext(); if (currentPageIndex < cvs_instance.current.getPageLength()){setCurrentPageIndex(currentPageIndex + 1)}}}>Next Step</Button>
                            </Grid>
                        </Grid>
                    </form>
                    </Grid>
                </Grid>
            
            </div>
            
            
        </div>
    )

}
export default Template