import React from 'react';
import { useState } from 'react';

import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
import './css/Summary1_2.css';
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
        <div className='summarymaindiv'>
                <Typography mb={1}><span style={{color: 'red'}}>*</span> In which key industries have you worked in, and what were your key roles in each?</Typography>
                <CustomMultilineTextFields value={industryExperience} onChange={handleIndustryExperienceChange} inputHeight={100} maxWidth={1300} isRequired={true}/> 
                <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> Have you led any projects or initiatives that had a notable impact?</Typography>
                <CustomMultilineTextFields value={notableProjects} onChange={handleNotableProjectsChange} inputHeight={100} maxWidth={1300} isRequired={true}/>
                <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> Any highlights in your career so far you would like to describe about?</Typography>
                <CustomMultilineTextFields value={careerHighlights} onChange={handleCareerHighlightsChange} inputHeight={100} maxWidth={1300} isRequired={true}/>
                
        </div>
    )

}
export default Summary_1