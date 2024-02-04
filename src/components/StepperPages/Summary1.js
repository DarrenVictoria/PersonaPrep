import React from 'react';
import { useState } from 'react';
import '../../pages/interviewforms/Template.css';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import Typography from '@mui/material/Typography';
import './css/Summary1_2.css';
import Grid from "@mui/material/Grid";
const Summary_1 = () => {
    const [industryExperience, setIndustryExperience] = useState("");
    const [notableProjects, setNotableProjects] = useState("");
    const [careerHighlights, setCareerHighlights] = useState("");
    const [promotions, setPromotions] = useState('');
    const [futureCareer, setFutureCareer] = useState('');
    const [uniqueSkills, setUniqueSkills] = useState('');

    const handleIndustryExperienceChange = e => {
        // console.log(`IE => ${e.target.value}`)
        setIndustryExperience(e.target.value);
    };

    const handleNotableProjectsChange = (e) => {
        // console.log(`NP => ${e.target.value}`)
        setNotableProjects(e.target.value);
    };

    const handleCareerHighlightsChange = (e) => {
        // console.log(`CH => ${e.target.value}`)
        setCareerHighlights(e.target.value);
    };

    const handlePromotions = (e) => {
        // console.log(`P => ${e.target.value}`)
        setPromotions(e.target.value)
    };

    const handleFutureCareer = (e) => {
        // console.log(`FE => ${e.target.value}`)
        setFutureCareer(e.target.value)
    };

    const handleUniqueSkills = (e) => {
        // console.log(`US => ${e.target.value}`)
        setUniqueSkills(e.target.value)
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
                                            <CustomMultilineTextFieldslimited value={industryExperience} onChange={handleIndustryExperienceChange} inputHeight={100} maxWidth={1300} maxWords={20} isRequired={true}/> 
                                            <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Have you led any projects or initiatives that had a notable impact?</Typography>
                                            <CustomMultilineTextFieldslimited value={notableProjects} onChange={handleNotableProjectsChange} inputHeight={100} maxWidth={1300} maxWords={20} isRequired={true}/>
                                            <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Any highlights in your career so far you would like to describe about?</Typography>
                                            <CustomMultilineTextFieldslimited value={careerHighlights} onChange={handleCareerHighlightsChange} inputHeight={100} maxWidth={1300} maxWords={20} isRequired={true}/>
                                            <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Are there specific milestones or promotions that stand out?</Typography>
                                            <CustomMultilineTextFieldslimited inputHeight={100} maxWidth={1300} value={promotions} onChange={handlePromotions} maxWords={20} isRequired={true}/>
                                            <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Where do you see your career heading in the next few years?</Typography>
                                            <CustomMultilineTextFieldslimited inputHeight={100} maxWidth={1300} value={futureCareer} onChange={handleFutureCareer} maxWords={20} isRequired={true}/>
                                            <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> What sets you apart from others in your field?</Typography>
                                            <CustomMultilineTextFieldslimited inputHeight={100} maxWidth={1300} value={uniqueSkills} onChange={handleUniqueSkills} maxWords={20} isRequired={true}/>
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