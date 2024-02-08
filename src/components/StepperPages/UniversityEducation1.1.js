import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../FileUpload';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';

const UniversityEducation2 = () => {
    const [Uni2Degree, setUni2Degree] = useState('');
    const [Uni2CurrentYear, setUni2CurrentYear] = useState('');
    const [Uni2StartMonth, setUni2StartMonth] = useState('');
    const [Uni2StartYear, setUni2StartYear] = useState('');
    const [Uni2EndMonth, setUni2EndMonth] = useState('');
    const [Uni2EndYear, setUni2EndYear] = useState('');
    const [Uni2Name, setUni2Name] = useState('');
    const [Uni2City, setUni2City] = useState('');
    const [Uni2Country, setUni2Country] = useState('');

    const navigate = useNavigate();
    const prevPage = () => navigate('/university');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/work')
        // validate();

        // Check if validation passed
        // if (validation) {
        //     // Call the function to add data to Firestore
        //     addDataToFirestore();
        // } else {
        //     console.log('Validation failed');
        // }
    };

    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Second University' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="personalInfo-main">
                                    <div className="personalInfo-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>University</Typography>
                                                <TextField type="text" variant="outlined" value={Uni2Name} onChange={(event) => setUni2Name(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='NSBM Green University'/>
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>Degree</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <EditableChoose
                                                    options={["Degree Name", "BSc. (Hons) in Software Engineering","BSc. (Hons) in Computer Science","BSc. (Hons) in Cyber Security"]}
                                                    onSelect={setUni2Degree}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>City</Typography>
                                                <TextField type="text" variant="outlined" value={Uni2City} onChange={(event) => setUni2City(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Homagama'/>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                                                <TextField type="text" variant="outlined" value={Uni2Country} onChange={(event) => setUni2Country(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Sri lanka'/>
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setUni2StartMonth}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setUni2StartYear}
                                                    disabledOptions={["2024"]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography>Current year (select year if you haven't graduated yet)</Typography>                        
                                            </Grid>
                                            <Grid item xs={6} mb={3}>
                                                <EditableChoose
                                                    options={["year", "Year 1","Year 2","Year 3","Year 4"]}
                                                    onSelect={setUni2CurrentYear}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography>Graduation Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setUni2EndMonth}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setUni2EndYear}
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
                            </div>
                            <Grid container spacing={2} style={{position: 'absolute', bottom: 80}}>            
                                <Grid xs={6} paddingLeft={'10px'}>
                                    <Button startIcon={<ArrowBackIcon />} style={back} onClick={prevPage}>Go Back</Button>
                                </Grid>
                                    
                                <Grid xs={6}>
                                    <Button type='submit' style={next}>Next Step</Button>                                    
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}
export default UniversityEducation2