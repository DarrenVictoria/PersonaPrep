import React from 'react';
import { useState } from 'react';
import TextArea from '../TextArea';
import EditableChoose from '../EditableSelectOption';
import Grid from '@mui/material/Grid';
import '../WorkExperience2.css';

const WorkExperience_2 = () => {
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
                <Grid item xs={12}>
                    <div className='textareasubdiv'>
                        A comprehensive description of the responsibilities you held during this job role
                        <br /> and any achievements and accomplishments you achieved during the period ?
                    </div>
                    <TextArea
                        maxWords={10}
                        value={workexperience}
                        onInputChange={workexpdescription}
                        ClassName="workexperience"
                    />
                </Grid>

                <Grid item xs={5} >
                    <EditableChoose
                        options={["Full-Time", "Part-Time"]}
                        onSelect={setEmploymentType}
                        disabledOptions={[]}
                        width="312px"
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default WorkExperience_2;
