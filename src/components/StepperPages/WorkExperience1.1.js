import React, { useEffect } from 'react';
import './css/WorkExperience1.css';
import '../../pages/interviewforms/Template.css';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EditableChoose from '../EditableSelectOption';
import FormGroup from "@mui/material/FormGroup";//for the check box
import FormControlLabel from "@mui/material/FormControlLabel";//for the check box
import Checkbox from "@mui/material/Checkbox";//for the check box
import ccheck_box from '../../assets/images/iconccheck_box.svg';
import cacute from '../../assets/images/iconcacute.svg';
import ccalander from '../../assets/images/iconccalander.svg';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import { useState } from 'react';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';

const WorkExperience2 = () => {
    const Jb_SkillsAcquired = [{data:"c#"},{data:"Winforms"}];

    const [WorkExp2JobTitle, setWorkExp2JobTitle] = useState('');
    const [WorkExp2Company, setWorkExp2Company] = useState('');
    const [WorkExp2City, setWorkExp2City] = useState('');
    const [WorkExp2Postal, setWorkExp2Postal] = useState('');
    const [WorkExp2StartMonth, setWorkExp2StartMonth] = useState('');
    const [WorkExp2StartYear, setWorkExp2StartYear] = useState('');
    const [WorkExp2EndMonth, setWorkExp2EndMonth] = useState('');
    const [WorkExp2EndYear, setWorkExp2EndYear] = useState('');
    const [WorkExp2Working, setWorkExp2Working] = useState('no');
    const [WorkExp2WorkChecked, setWorkExp2WorkChecked] = useState(false);
    const [WorkExp2TaskDnWithTools, setWorkExp2TaskDnWithTools] = useState("");
    const [WorkExp2EmploymentType, setWorkExp2EmploymentType] = React.useState("");
    // the below useState for custom hook does not work yet
    const [WorkExp2JbSkillAcquired, setWorkExp2JbSkillAcquired] = useState([]);

    const handleWorkExp2WorkChecked = (event) => {
        setWorkExp2WorkChecked(event.target.checked)
    }
    
    const handleWorkExp2TaskDnWithTools = (event) => {
        //the below commented code is to test 
        // console.log(`Work => ${event.target.value}`)
        setWorkExp2TaskDnWithTools(event.target.value);
      };

    // the below handle for custom hook does not work yet
    const handleWorkExp2JbSkillAcquired = function (ev, val, reason, details) {
        if (ev.target.classList.contains('MuiSvgIcon-root')){
            // Removing Value
            const value = ev.target.parentElement.querySelector('span').innerHTML;
            setWorkExp2JbSkillAcquired(WorkExp2JbSkillAcquired.filter(item => item !== value));
        } else {
            const value = ev.target.innerHTML;
            WorkExp2JbSkillAcquired.push(value);
        }
        console.log(WorkExp2JbSkillAcquired);
    }

    useEffect(() => {
        if(!WorkExp2WorkChecked) setWorkExp2Working('no');
        else setWorkExp2Working('yes');
    }, [WorkExp2WorkChecked]);

    const navigate = useNavigate();
    const prevPage = () => navigate('/work');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/project')
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
            <InterviewFormHeader title='Second Work Experience' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                    <div className="WorkExperience1-Maindiv">
                                    <div className="WorkExperience1-LeftColumn">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span> Job Title</Typography>
                                                <TextField type="text" variant="outlined" value={WorkExp2JobTitle} onChange={(event) => setWorkExp2JobTitle(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Full Stack Developer'/>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span> Company</Typography>
                                                <TextField type="text" variant="outlined" value={WorkExp2Company} onChange={(event) => setWorkExp2Company(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Surge Global Pvt.'/>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pr={1}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span> City</Typography>
                                                <TextField type="text" variant="outlined" value={WorkExp2City} onChange={(event) => setWorkExp2City(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Colombo'/>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span> Postal code</Typography>
                                                <TextField type="text" variant="outlined" value={WorkExp2Postal} onChange={(event) => setWorkExp2Postal(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='00300'/>
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span> Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setWorkExp2StartMonth}
                                                    disabledOptions={[]}
                                                    isRequired={true}
                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setWorkExp2StartYear}
                                                    disabledOptions={["2024"]}
                                                    isRequired={true}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span> End Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setWorkExp2EndMonth}
                                                    disabledOptions={[]}
                                                    isRequired={true}
                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setWorkExp2EndYear}
                                                    disabledOptions={["2024"]}
                                                    isRequired={true}
                                                />
                                            </Grid>
                                            <Grid item xs={12} pl={2} mb={3}>
                                                <FormControlLabel control={<Checkbox checked={WorkExp2WorkChecked} onChange={handleWorkExp2WorkChecked}/>} label="Currently Work here" /> {/*if need to make this requires put required before control and if need to make it already checked put check inside the control next to the Checkbx*/}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                            <Typography><span style={{color: 'red'}}>*</span> List five significant tasks you did in your job role with the tools / software used? <small>Ex:- Developed and maintained responsive web applications using React, Angular, and Node.js.</small></Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3} className='workexperience-border' >
                                                <CustomMultilineTextFieldslimited
                                                    inputHeight="150px"
                                                    maxWidth="1300px"
                                                    isRequired={true}
                                                    value={WorkExp2TaskDnWithTools}
                                                    onChange={handleWorkExp2TaskDnWithTools}
                                                    maxWords={100} // Pass the maximum number of words as a prop
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                            <Typography><span style={{color: 'red'}}>*</span> Employment type</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <EditableChoose
                                                    options={["Full-Time", "Part-Time"]}
                                                    onSelect={setWorkExp2EmploymentType}
                                                    disabledOptions={[]}
                                                    maxWidth={300}
                                                    isRequired={true}

                                                />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <CustomizedHook onChange={handleWorkExp2JbSkillAcquired} maxWidth={1300} data={Jb_SkillsAcquired}  label={<Typography mb={1}><span style={{color: 'red'}}>*</span> Skills acquired from job ?</Typography>}/>
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className="WorkExperience1-RightColumn">
                                        <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                                            <Card variant="outlined" sx={{height:'100%',maxHeight: '450px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>                <CardContent >
                                                <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Work Experience tips</Typography>
                                                <List>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <img src={cacute} alt="Custom Icon" style={{ width: 'var(--40,40px)', height: '35.666px' }}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1' >
                                                                Fill in all the information about your most recent job to fill in this section.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            {/* <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}> */}
                                                            <Avatar sx={{borderRadius: '12px', padding: '5px'}}>
                                                                <img src={ccheck_box} alt="Custom Icon" style={{ width: 'var(--40,40px)', height: '35.666px' }} />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                If you are currently Working at the mentioned Company don't forget select the 'I currently work here' option.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                                                                <img src={ccalander} alt="Custom Icon" style={{ width: 'var(--40,40px)', height: '35.666px' }} />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Select the Accurate start and end dates for each role to maintain professionalism.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                </List>
                                            </CardContent>
                                            </Card>
                                        </div>
                                        
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
export default WorkExperience2