import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../FileUpload';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';

const UniversityEducation = () => {
    const [degree, setDegree] = useState('');
    const [curUniYear, setCurUniYear] = useState('');
    const [uniStartMonth, setUniStartMonth] = useState('');
    const [uniStartYear, setUniStartYear] = useState('');
    const [uniEndMonth, setUniEndMonth] = useState('');
    const [uniEndYear, setUniEndYear] = useState('');
    const [uniName, setUniName] = useState('');
    const [uniCity, setUniCity] = useState('');
    const [uniCountry, setUniCountry] = useState('');

    return(
        <div className="personalInfo-main">
            <div className="personalInfo-leftCol">
                <Grid container>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>University</Typography>
                        <TextField type="text" variant="outlined" value={uniName} onChange={(event) => setUniName(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='NSBM Green University'/>
                    </Grid>
                    <Grid item xs={12} mb={-2}>
                        <Typography><span style={{color: 'red'}}>*</span>Degree</Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <EditableChoose
                            options={["BSc. (Hons) in Software Engineering","BSc. (Hons) in Computer Science","BSc. (Hons) in Cyber Security"]}
                            onSelect={setDegree}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>City</Typography>
                        <TextField type="text" variant="outlined" value={uniCity} onChange={(event) => setUniCity(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Homagama'/>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                        <TextField type="text" variant="outlined" value={uniCountry} onChange={(event) => setUniCountry(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Sri lanka'/>
                    </Grid>
                    <Grid item xs={12} mb={-2}>
                        <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                    </Grid>
                    <Grid item xs={6} pr={1}>
                        <EditableChoose
                            options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                            onSelect={setUniStartMonth}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={6} mb={3} pl={1}>
                        <EditableChoose
                            options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                            onSelect={setUniStartYear}
                            disabledOptions={["2024"]}
                        />
                    </Grid>
                    <Grid item xs={12} mb={-2}>
                        <Typography>Current year (select year if you haven't graduated yet)</Typography>                        
                    </Grid>
                    <Grid item xs={6} mb={3}>
                        <EditableChoose
                            options={["Year 1","Year 2","Year 3","Year 4"]}
                            onSelect={setCurUniYear}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={12} mb={-2}>
                        <Typography>Graduation Date</Typography>
                    </Grid>
                    <Grid item xs={6} pr={1}>
                        <EditableChoose
                            options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                            onSelect={setUniEndMonth}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={6} mb={3} pl={1}>
                        <EditableChoose
                            options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                            onSelect={setUniEndYear}
                            disabledOptions={["2024"]}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="personalInfo-rightCol university-fileUpload">
                <Typography mb={2}>Graduation Transcript Upload</Typography>
                <FileUpload />
            </div>
        </div>
    )

}
export default UniversityEducation