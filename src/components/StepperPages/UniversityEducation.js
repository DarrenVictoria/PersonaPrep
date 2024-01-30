import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../FileUpload';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';

const UniversityEducation = () => {
    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const [uniName, setUniName] = useState('');
    const [uniCity, setUniCity] = useState('');
    const [uniCountry, setUniCountry] = useState('');

    const uniNameChange = (event) => setUniName(event.target.value);
    const uniCityChange = (event) => setUniCity(event.target.value);
    const uniCountryChange = (event) => setUniCountry(event.target.value);

    return(
        <div className="personalInfo-main">
            <div className="personalInfo-leftCol">
                <Grid container>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>University</Typography>
                        <TextField type="text" variant="outlined" value={uniName} onChange={uniNameChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='NSBM Green University'/>
                    </Grid>
                    <Grid item xs={12} mb={-2}>
                        <Typography><span style={{color: 'red'}}>*</span>Degree</Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <EditableChoose
                            options={["BSc. (Hons) in Software Engineering","BSc. (Hons) in Software Engineering","BSc. (Hons) in Software Engineering"]}
                            onSelect={setDegree}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>City</Typography>
                        <TextField type="text" variant="outlined" value={uniCity} onChange={uniCityChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Homagama'/>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                        <TextField type="text" variant="outlined" value={uniCountry} onChange={uniCountryChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Sri lanka'/>
                    </Grid>
                    <Grid item xs={12} mb={-2}>
                        <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                    </Grid>
                    <Grid item xs={6} pr={1}>
                        <EditableChoose
                            options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                            onSelect={setStartMonth}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={6} mb={3} pl={1}>
                        <EditableChoose
                            options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                            onSelect={setStartYear}
                            disabledOptions={["2024"]}
                        />
                    </Grid>
                    <Grid item xs={12} mb={-2}>
                        <Typography>Current year (select year if you haven't graduated yet)</Typography>                        
                    </Grid>
                    <Grid item xs={6} mb={3}>
                        <EditableChoose
                            options={["Year 1","Year 2","Year 3","Year 4"]}
                            onSelect={setYear}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={12} mb={-2}>
                        <Typography>Graduation Date</Typography>
                    </Grid>
                    <Grid item xs={6} pr={1}>
                        <EditableChoose
                            options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                            onSelect={setEndMonth}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={6} mb={3} pl={1}>
                        <EditableChoose
                            options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                            onSelect={setEndYear}
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