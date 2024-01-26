import React from 'react';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
const SkillTrack_1 = () => {
    const dataset = [{data:"c#"},{data:"Java"}];
    return(
        <div>
            <CustomizedHook height={100} maxWidth={1300} data={dataset} label={<Typography mb={1}><span style={{color: 'red'}}>*</span> What would you say are your core competencies or key skills? Min 3 / Max 5</Typography>}/>
            <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> If applicable, how would you describe your leadership style?</Typography>
            <CustomMultilineTextFields inputHeight={100} maxWidth={1300} isRequired={true}/>
            <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> If applicable can you share examples of how you've led teams or projects?</Typography>
            <CustomMultilineTextFields inputHeight={100} maxWidth={1300} isRequired={true}/>
        </div>
    )

}
export default SkillTrack_1