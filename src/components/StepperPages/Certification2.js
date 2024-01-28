import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../FileUpload';
import { CustomizedHook } from '../TextfieldButtonDataDisplay';
import { useState } from 'react';


const Certification_2 = () => {
    const skills = [{data: 'c#'}, {data: 'java'}, {data: 'react'}];
    const [certificationLInk, setCertificationLink] = useState('');

    const certificationLInkChange = (event) => setCertificationLink(event.target.value);

    return(
        <div className="personalInfo-main">
            <div className="personalInfo-leftCol">
                <Grid container pl={1}>
                    <Grid item xs={12} mb={3}>
                        <CustomizedHook data={skills} label={<Typography mb={1}><span style={{color: 'red'}}>*</span>Skills acquired from the project?</Typography>}/>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>Certification evidence link</Typography>
                        <TextField type="text" variant="outlined" value={certificationLInk} onChange={certificationLInkChange} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/>
                    </Grid>
                    <Grid item xs={12} mb={2} style={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>-OR-</Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <FileUpload />
                    </Grid>
                </Grid>
            </div>
            <div className="personalInfo-rightCol certifaction2"></div>
        </div>
    )

}
export default Certification_2