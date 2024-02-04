<<<<<<< Updated upstream
import React from 'react';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
=======
import React, { useState } from 'react';
import '../../pages/interviewforms/Template.css';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

>>>>>>> Stashed changes
const SkillTrack_1 = () => {
    const dataset = [{data:"c#"},{data:"Java"}];
    return(
<<<<<<< Updated upstream
        <div>
            <CustomizedHook height={100} maxWidth={1300} data={dataset} label={<Typography mb={1}><span style={{color: 'red'}}>*</span> What would you say are your core competencies or key skills? Min 3 / Max 5</Typography>}/>
            <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> If applicable, how would you describe your leadership style?</Typography>
            <CustomMultilineTextFields inputHeight={100} maxWidth={1300} isRequired={true}/>
            <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> If applicable can you share examples of how you've led teams or projects?</Typography>
            <CustomMultilineTextFields inputHeight={100} maxWidth={1300} isRequired={true}/>
=======
        <div className="formtemp-page">
            <InterviewFormHeader title='Skill Track' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div>
                                    <CustomizedHook height={100} maxWidth={1300} data={dataset} label={<Typography mb={1}><span style={{color: 'red'}}>*</span> What would you say are your core competencies or key skills? Min 3 / Max 5</Typography>}/>
                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> If applicable, how would you describe your leadership style?</Typography>
                                    <CustomMultilineTextFields inputHeight={100} maxWidth={1300} value={leadership} onChange={(event) => setLeadership(event.target.value)} isRequired={true}/>
                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> If applicable can you share examples of how you've led teams or projects?</Typography>
                                    <CustomMultilineTextFields inputHeight={100} maxWidth={1300} value={leadershipEx} onChange={(event) => setLeadershipEx(event.target.value)} isRequired={true}/>
                                    
                                </div>
                            </div>
                        <InterviewFormFooter nextForm='/summary' prevForm='/publications'/>
                    </form>
                </Grid>
            </Grid>
>>>>>>> Stashed changes
        </div>
    </div>
    )

}
export default SkillTrack_1