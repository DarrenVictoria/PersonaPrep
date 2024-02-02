import React, { useState } from 'react';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';

const SkillTrack_2 = () => {
    const [skillContrib, setSkillContrib] = useState('');
    const dataset = [{data:"c#"},{data:"Java"}];
    
    return(
        <div>
            <CustomizedHook height={100} maxWidth={1300} data={dataset} label={<Typography mb={1}><span style={{color: 'red'}}>*</span> What soft skills do you believe are your strengths? Min 3 / Max 5</Typography>}/>
            <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> How do these skills contribute to your overall effectiveness in the workplace?</Typography>
            <CustomMultilineTextFields inputHeight={100} maxWidth={1300} value={skillContrib} onChange={(event) => setSkillContrib(event.target.value)} isRequired={true} mb={10}/>            
        </div>
    )

}
export default SkillTrack_2