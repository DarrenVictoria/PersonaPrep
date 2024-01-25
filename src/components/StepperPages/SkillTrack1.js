import React from 'react';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
const SkillTrack_1 = () => {
    const dataset = [{data:"c#"},{data:"Java"}];
    return(
        <div>
            <CustomizedHook height={100} data={dataset} label='Roles Played'/>
            <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span>Have you led any projects or initiatives that had a notable impact?</Typography>
            <CustomMultilineTextFields height='100px' />
            <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span>Have you led any projects or initiatives that had a notable impact?</Typography>
            <CustomMultilineTextFields height='100px' />
        </div>
    )

}
export default SkillTrack_1