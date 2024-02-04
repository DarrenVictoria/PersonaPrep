import React from 'react';
import { useState } from 'react';
import '../../pages/interviewforms/Template.css';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
import './css/Summary1_2.css';
import Grid from "@mui/material/Grid";
const Summary_1 = () => {
    const [industryExperience, setIndustryExperience] = useState("");
    const [notableProjects, setNotableProjects] = useState("");
    const [careerHighlights, setCareerHighlights] = useState("");

    const handleIndustryExperienceChange = e => {
        console.log(`Typed => ${e.target.value}`)
        setIndustryExperience(e.target.value);
    };

    const handleNotableProjectsChange = (e) => {
        console.log(`Typed => ${e.target.value}`)
        setNotableProjects(e.target.value);
    };

    const handleCareerHighlightsChange = (e) => {
        console.log(`Typed => ${e.target.value}`)
        setCareerHighlights(e.target.value);
    };

   
    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Summary' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                    <div className='summarymaindiv'>
                                            <Typography mb={1}><span style={{color: 'red'}}>*</span> In which key industries have you worked in, and what were your key roles in each?</Typography>
                                            <CustomMultilineTextFields value={industryExperience} onChange={handleIndustryExperienceChange} inputHeight={100} maxWidth={1300} isRequired={true}/> 
                                            <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> Have you led any projects or initiatives that had a notable impact?</Typography>
                                            <CustomMultilineTextFields value={notableProjects} onChange={handleNotableProjectsChange} inputHeight={100} maxWidth={1300} isRequired={true}/>
                                            <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> Any highlights in your career so far you would like to describe about?</Typography>
                                            <CustomMultilineTextFields value={careerHighlights} onChange={handleCareerHighlightsChange} inputHeight={100} maxWidth={1300} isRequired={true}/>
                                            
                                    </div>
                                </div>
                        <InterviewFormFooter nextForm='/extraInfo' prevForm='/skilltrack'/>
                    </form>
                </Grid>
            </Grid>
        </div>
    </div>
    )

}
export default Summary_1