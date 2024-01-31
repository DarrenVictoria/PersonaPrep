import React from 'react';
import { useState } from 'react';
import TextArea from '../TextArea';
import EditableChoose from '../EditableSelectOption';
import Grid from '@mui/material/Grid';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import Typography from '@mui/material/Typography';
import './css/WorkExperience2.css';

const WorkExperience_2 = () => {
    const SkillsAcquired = [{data:"c#"},{data:"Winforms"}];
    // The below code is for the textarea
    const [workexperience, setWorkExperience] = useState("");
    const workexpdescription = (value) => {
        setWorkExperience(value);
    }

    // The below code is for the editablechoose
    const [Employmenttype, setEmploymentType] = React.useState("");

    return (
        <div className='workexperiencemaindiv'>
            <h1>Work Experience</h1>

            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Typography><span style={{color: 'red'}}>*</span> List five significant tasks you did in your job role with the tools / software used? <small>Ex:- Developed and maintained responsive web applications using React, Angular, and Node.js.</small></Typography>
                </Grid>
                <Grid item xs={12} className='workexperience-border' style={{padding: '4px 0px', marginLeft: '18px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: 1300,paddingBottom:'10px'}}>
                    <TextArea
                        maxWords={300}
                        value={workexperience}
                        onInputChange={workexpdescription}
                        ClassName="workexperience"
                        maxWidth={1300}
                    />
                </Grid>
                <Grid item xs={12} mb={-4}>
                    <Typography><span style={{color: 'red'}}>*</span> Employment type</Typography>
                </Grid>
                <Grid item xs={12} >
                    <EditableChoose
                        options={["Full-Time", "Part-Time"]}
                        onSelect={setEmploymentType}
                        disabledOptions={[]}
                        maxWidth={300}
                        isRequired={true}

                    />
                </Grid>
                <Grid item xs={12} >
                    <CustomizedHook maxWidth={1300} data={SkillsAcquired} label={<Typography mb={1}><span style={{color: 'red'}}>*</span> Skills acquired from job ?</Typography>}/>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default WorkExperience_2;
