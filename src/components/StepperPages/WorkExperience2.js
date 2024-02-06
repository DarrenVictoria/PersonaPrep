import React from 'react';
import { useState } from 'react';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import EditableChoose from '../EditableSelectOption';
import Grid from '@mui/material/Grid';
// import { useEffect } from 'react';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import Typography from '@mui/material/Typography';
import './css/WorkExperience2.css';

const WorkExperience_2 = () => {
    //the max words and WorkExp2Task is for CustomMultilineTextFieldslimited
    const [TaskDnWithTools, setTaskDnWithTools] = useState("");
    

    const SkillsAcquired = [{data:"c#"},{data:"Winforms"}];

    //the handleChange is for CustomMultilineTextFieldslimited
    const handleTaskDnWithTools = (event) => {
        //the below commented code is to test 
        // console.log(`Work => ${event.target.value}`)
        setTaskDnWithTools(event.target.value);
      };
      
    // The below code is for the editablechoose
    const [Employmenttype, setEmploymentType] = React.useState("");
    //below commented code is to test that the variable Employmenttype has stored the value for it to work uncomment the import of useEffect
    // useEffect(() => {
    //     console.log('Employmenttype:', Employmenttype);
    // }, [Employmenttype]);
    const [selectedValues, setSelectedValues] = useState([]);

    const handleSelectedValues = (values) => {
        setSelectedValues(values);
        console.log("Selected values:", values);
    };
    return (
        <div className='workexperiencemaindiv'>
            <h1>Work Experience</h1>

            <Grid container spacing={2}>
                <Grid item xs={12} mb={1}>
                    <Typography><span style={{color: 'red'}}>*</span> List five significant tasks you did in your job role with the tools / software used? <small>Ex:- Developed and maintained responsive web applications using React, Angular, and Node.js.</small></Typography>
                </Grid>
                <Grid item xs={12} className='workexperience-border' >
                <CustomMultilineTextFieldslimited
                    inputHeight="150px"
                    maxWidth="1300px"
                    isRequired={true}
                    value={TaskDnWithTools}
                    onChange={handleTaskDnWithTools}
                    maxWords={100} // Pass the maximum number of words as a prop
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
                    <CustomizedHook maxWidth={1300} data={SkillsAcquired} value={selectedValues} onChange={handleSelectedValues} label={<Typography mb={1}><span style={{color: 'red'}}>*</span> Skills acquired from job ?</Typography>}/>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default WorkExperience_2;
