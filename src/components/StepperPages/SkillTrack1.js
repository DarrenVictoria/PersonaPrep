
import React, { useState } from 'react';
import '../../pages/interviewforms/Template.css';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';


const SkillTrack_1 = () => {
    const Skilldataset = [{data:"c#"},{data:"Java"},{data:"c"},{data:"python"}];
    const SoftSkilldataset = [{data:"team"},{data:"confid"}];

    const [leadership, setLeadership] = useState('');
    const [leadershipEx, setLeadershipEx] = useState('');
    const [skillContrib, setSkillContrib] = useState('');
    const [keySkills, setKeySkills] = useState([]);
    const [SoftSkills, setSoftSkills] = useState([]);
    
    const handleLeadership = (e) => {
        console.log(`LS => ${e.target.value}`)
        setLeadership(e.target.value)
    };

    const handleLeadershipEx = (e) => {
        console.log(`LE => ${e.target.value}`)
        setLeadershipEx(e.target.value)
    };

    const handleSkillContrib = (e) => {
        console.log(`SC => ${e.target.value}`)
        setSkillContrib(e.target.value)
    };


    const handleKeySkills = function (ev, val, reason, details) {
        if (ev.target.classList.contains('MuiSvgIcon-root')){
            // Removing Value
            const value = ev.target.parentElement.querySelector('span').innerHTML;
            setKeySkills(keySkills.filter(item => item !== value));
        } else {
            const value = ev.target.innerHTML;
            keySkills.push(value);
        }
        console.log(keySkills);
    }

    const handleSoftSkills = function (ev, val, reason, details) {
        if (ev.target.classList.contains('MuiSvgIcon-root')){
            // Removing Value
            const value = ev.target.parentElement.querySelector('span').innerHTML;
            setSoftSkills(SoftSkills.filter(item => item !== value));
        } else {
            const value = ev.target.innerHTML;
            SoftSkills.push(value);
        }
        console.log(SoftSkills);
    }


    const navigate = useNavigate();
    const prevPage = () => navigate('/publications');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/summary')
        // validate();

        // Check if validation passed
        // if (validation) {
        //     // Call the function to add data to Firestore
        //     addDataToFirestore();
        // } else {
        //     console.log('Validation failed');
        // }
    };

    
    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Skill Track' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div>
                                    <CustomizedHook onChange={handleKeySkills} height={100} maxWidth={1300} data={Skilldataset} label={<Typography mb={1}><span style={{color: 'red'}}>*</span> What would you say are your core competencies or key skills? Min 3 / Max 5</Typography>}/>
                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> If applicable, how would you describe your leadership style?</Typography>
                                    <CustomMultilineTextFieldslimited inputHeight={100} maxWidth={1300} value={leadership} onChange={handleLeadership} maxWords={20} isRequired={true}/>
                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> If applicable can you share examples of how you've led teams or projects?</Typography>
                                    <CustomMultilineTextFieldslimited inputHeight={100} maxWidth={1300} value={leadershipEx} onChange={handleLeadershipEx} maxWords={20} isRequired={true}/>
                                    <CustomizedHook onChange={handleSoftSkills} height={100} maxWidth={1300} data={SoftSkilldataset} label={<Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> What soft skills do you believe are your strengths? Min 3 / Max 5</Typography>}/>
                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> How do these skills contribute to your overall effectiveness in the workplace?</Typography>
                                    <CustomMultilineTextFieldslimited inputHeight={100} maxWidth={1300} value={skillContrib} onChange={handleSkillContrib} maxWords={20} isRequired={true} mb={10}/>
                                </div>
                            </div>
                            <Grid container spacing={2} style={{position: 'absolute', bottom: 80}}>            
                                <Grid xs={6} paddingLeft={'10px'}>
                                    <Button startIcon={<ArrowBackIcon />} style={back} onClick={prevPage}>Go Back</Button>
                                </Grid>
                                    
                                <Grid xs={6}>
                                    <Button type='submit' style={next}>Next Step</Button>                                    
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>

            </div>
        </div>
    )

}
export default SkillTrack_1