import * as React from "react";
import { useEffect } from 'react';
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
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Dialog from "@mui/material/Dialog";//dialog
import DialogActions from "@mui/material/DialogActions";//dialog
import DialogContent from "@mui/material/DialogContent";//dialog
import DialogContentText from "@mui/material/DialogContentText";//dialog
import DialogTitle from "@mui/material/DialogTitle";//dialog
import useMediaQuery from "@mui/material/useMediaQuery";//dialog
import { useTheme } from "@mui/material/styles";//dialog
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const WorkExperience1 = () => {

    const monthOption = [
        {value: 'January', label: 'January'},
        {value: 'February', label: 'February'},
        {value: 'March', label: 'March'},
        {value: 'April', label: 'April'},
        {value: 'May', label: 'May'},
        {value: 'June', label: 'June'},
        {value: 'July', label: 'July'},
        {value: 'August', label: 'August'},
        {value: 'September', label: 'September'},
        {value: 'October', label: 'October'},
        {value: 'November', label: 'November'},
        {value: 'December', label: 'December'}
    ];
    const yearOption = ["2024"];
        for (let year = 2023; year >= 1990; year--) {
        yearOption.push(String(year));
        }
    const Jb_SkillsAcquired = [{data:"c#"},{data:"Winforms"}];

    const [WorkExp1JobTitle, setWorkExp1JobTitle] = useState('');
    const [WorkExp1Company, setWorkExp1Company] = useState('');
    const [WorkExp1City, setWorkExp1City] = useState('');
    const [WorkExp1Postal, setWorkExp1Postal] = useState('');
    const [WorkExp1StartMonth, setWorkExp1StartMonth] = useState('');
    const [WorkExp1StartYear, setWorkExp1StartYear] = useState('');
    const [WorkExp1EndMonth, setWorkExp1EndMonth] = useState('');
    const [WorkExp1EndYear, setWorkExp1EndYear] = useState('');
    const [WorkExp1Working, setWorkExp1Working] = useState('no');
    const [WorkExp1WorkChecked, setWorkExp1WorkChecked] = useState(false);
    const [WorkExp1TaskDnWithTools, setWorkExp1TaskDnWithTools] = useState("");
    const [WorkExp1EmploymentType, setWorkExp1EmploymentType] = React.useState("");
    // the below useState for custom hook does not work yet
    const [WorkExp1JbSkillAcquired, setWorkExp1JbSkillAcquired] = useState([]);

    const handleWorkExp1WorkChecked = (event) => {
        setWorkExp1WorkChecked(event.target.checked)
    }
    
    const handleWorkExp1TaskDnWithTools = (event) => {
        //the below commented code is to test 
        // console.log(`Work => ${event.target.value}`)
        setWorkExp1TaskDnWithTools(event.target.value);
      };

    // the below handle for custom hook does not work yet
    const handleWorkExp1JbSkillAcquired = function (ev, val, reason, details) {
        if (ev.target.classList.contains('MuiSvgIcon-root')){
            // Removing Value
            const value = ev.target.parentElement.querySelector('span').innerHTML;
            setWorkExp1JbSkillAcquired(WorkExp1JbSkillAcquired.filter(item => item !== value));
        } else {
            const value = ev.target.innerHTML;
            WorkExp1JbSkillAcquired.push(value);
        }
        console.log(WorkExp1JbSkillAcquired);
    }

    useEffect(() => {
        if(!WorkExp1WorkChecked) setWorkExp1Working('no');
        else setWorkExp1Working('yes');
    }, [WorkExp1WorkChecked]);

    const navigate = useNavigate();
    const prevPage = () => navigate('/university');
    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate('/secondWork')
        // validate();

        // Check if validation passed
        // if (validation) {
        //     // Call the function to add data to Firestore
        //     addDataToFirestore();
        // } else {
        //     console.log('Validation failed');
        // }
    };

    //below code for dialog
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleYes = () => {
        
            navigate('/secondWork')
        
    };
    const handleNo = () => {
        
        navigate('/project')
    
    }; 


    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Work Experience' />
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
                                                <TextField type="text" variant="outlined" value={WorkExp1JobTitle} onChange={(event) => setWorkExp1JobTitle(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Full Stack Developer'/>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span> Company</Typography>
                                                <TextField type="text" variant="outlined" value={WorkExp1Company} onChange={(event) => setWorkExp1Company(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Surge Global Pvt.'/>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pr={1}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span> City</Typography>
                                                <TextField type="text" variant="outlined" value={WorkExp1City} onChange={(event) => setWorkExp1City(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Colombo'/>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span> Postal code</Typography>
                                                <TextField type="text" variant="outlined" value={WorkExp1Postal} onChange={(event) => setWorkExp1Postal(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='00300'/>
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span> Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setWorkExp1StartMonth}
                                                    disabledOptions={[]}
                                                    isRequired={true}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={WorkExp1StartMonth}
                                                        onChange={(event) => setWorkExp1StartMonth(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem disabled value="">Month</MenuItem>
                                                        {monthOption.map (option => (
                                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                {/* <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setWorkExp1StartYear}
                                                    disabledOptions={["2024"]}
                                                    isRequired={true}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={WorkExp1StartYear}
                                                        onChange={(event) => setWorkExp1StartYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {yearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span> End Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setWorkExp1EndMonth}
                                                    disabledOptions={[]}
                                                    isRequired={true}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={WorkExp1EndMonth}
                                                        onChange={(event) => setWorkExp1EndMonth(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem disabled value="">Month</MenuItem>
                                                        {monthOption.map (option => (
                                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                {/* <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setWorkExp1EndYear}
                                                    disabledOptions={["2024"]}
                                                    isRequired={true}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={WorkExp1EndYear}
                                                        onChange={(event) => setWorkExp1EndYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {yearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} pl={2} mb={3}>
                                                <FormControlLabel control={<Checkbox checked={WorkExp1WorkChecked} onChange={handleWorkExp1WorkChecked}/>} label="Currently Work here" /> {/*if need to make this requires put required before control and if need to make it already checked put check inside the control next to the Checkbx*/}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                            <Typography><span style={{color: 'red'}}>*</span> List five significant tasks you did in your job role with the tools / software used? <small>Ex:- Developed and maintained responsive web applications using React, Angular, and Node.js.</small></Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3} className='workexperience-border' >
                                                <CustomMultilineTextFieldslimited
                                                    inputHeight="150px"
                                                    maxWidth="1300px"
                                                    isRequired={true}
                                                    value={WorkExp1TaskDnWithTools}
                                                    onChange={handleWorkExp1TaskDnWithTools}
                                                    maxWords={100} // Pass the maximum number of words as a prop
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                            <Typography><span style={{color: 'red'}}>*</span> Employment type</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                {/* <EditableChoose
                                                    options={["Full-Time", "Part-Time"]}
                                                    onSelect={setWorkExp1EmploymentType}
                                                    disabledOptions={[]}
                                                    maxWidth={300}
                                                    isRequired={true}

                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={WorkExp1EmploymentType}
                                                        onChange={(event) => setWorkExp1EmploymentType(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD',maxWidth:300}} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                        
                                                    >
                                                        <MenuItem disabled value="">Type</MenuItem>
                                                        <MenuItem value="Full-Time">Full-Time</MenuItem>
                                                        <MenuItem value="Part-Time">Part-Time</MenuItem>
                                                        
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <CustomizedHook onChange={handleWorkExp1JbSkillAcquired} maxWidth={1300} data={Jb_SkillsAcquired}  label={<Typography mb={1}><span style={{color: 'red'}}>*</span> Skills acquired from job ?</Typography>}/>
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
                                                                <AccessTimeFilledIcon sx={{color:'black'}}/>
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
                                                            
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <CheckBoxIcon sx={{color:'black'}}/>
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
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                               <CalendarMonthIcon sx={{color:'black'}}/>
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
                                    <Button type='submit' onClick={handleClickOpen} style={next}>Next Step</Button>     
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                        sx={{backdropFilter: "blur(5px)"}}
                                    >
                                        <DialogTitle id="responsive-dialog-title">
                                        {"Do you have more work experience?"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                          If you wish to add more work experience please click on Yes.If you wish to skip to next page click on No  
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button autoFocus onClick={handleNo} >
                                            No
                                        </Button>
                                        <Button onClick={handleYes} autoFocus >
                                            Yes
                                        </Button>
                                        </DialogActions>
                                    </Dialog>                                    
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}
export default WorkExperience1