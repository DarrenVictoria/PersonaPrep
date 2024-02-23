import * as React from "react";
import { useEffect,useState } from 'react';
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
import { collection, doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const WorkExperience1 = () => {
    const { currentUser } = useAuth();

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
    const Jb_SkillsAcquired = ["c#","Winforms"];
    
    const [WorkExp1StartMonth, setWorkExp1StartMonth] = useState('');
    const [WorkExp1StartYear, setWorkExp1StartYear] = useState('');
    const [WorkExp1EndMonth, setWorkExp1EndMonth] = useState('');
    const [WorkExp1EndYear, setWorkExp1EndYear] = useState('');
    const [WorkExp1Working, setWorkExp1Working] = useState('');
    const [WorkExp1TaskDnWithTools, setWorkExp1TaskDnWithTools] = useState("");
    const [WorkExp1EmploymentType, setWorkExp1EmploymentType] = React.useState("");

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const WorkExp1JobTitle = watch('WorkExp1JobTitle');
    const WorkExp1Company = watch('WorkExp1Company');
    const WorkExp1City = watch('WorkExp1City');
    const WorkExp1Postal = watch('WorkExp1Postal');


    // the below useState for custom hook does not work yet
    const [WorkExp1JbSkillAcquired, setWorkExp1JbSkillAcquired] = useState([]);
    const maxSelections = 3;//max value for the autocomplete
    const handleWorkExp1JbSkillAcquired = (event, newSkill) => {
        if (newSkill.length <= maxSelections) {
            setWorkExp1JbSkillAcquired(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return WorkExp1JbSkillAcquired.length >= maxSelections && !WorkExp1JbSkillAcquired.includes(option);
    };
    
    const handleWorkExp1TaskDnWithTools = (event) => {
        //the below commented code is to test 
        // console.log(`Work => ${event.target.value}`)
        setWorkExp1TaskDnWithTools(event.target.value);
      };
    

    const navigate = useNavigate();
    const prevPage = () => navigate('/university');
    
    const onSubmit = async (e) => {
        const formData = {
            WorkExp1JobTitle,
            WorkExp1Company,
            WorkExp1City,
            WorkExp1Postal,
            WorkExp1StartMonth,
            WorkExp1StartYear,
            WorkExp1EndMonth,
            WorkExp1EndYear,
            WorkExp1Working,
            WorkExp1TaskDnWithTools,
            WorkExp1EmploymentType,
            WorkExp1JbSkillAcquired,
        };

        // Send data to Firestore
        await sendWorkDataToFirestore(formData);
        handleClickOpen();
        
    };

    const sendWorkDataToFirestore = async (data) => {
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const userDocument = doc(studentDetailsCollection, currentUser.email); // Use the email as document ID

            const docSnapshot = await getDoc(userDocument);
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                let work = docData.work || []; // Retrieve the work data array or initialize an empty array

                // Check if index 0 exists in the work data array
                if (work.length > 0) {
                    // Update fields of Work Experience 1 at index 0
                    work[0] = {
                        ...work[0],
                        ...data
                    };
                } else {
                    // Create a new entry for Work Experience 1
                    work.push(data);
                }

                // Update the document with the modified work data array
                await setDoc(userDocument, { work }, { merge: true });
                handleClickOpen();
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error adding work info to Firestore: ', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const userDocument = doc(collection(db, 'studentdetails'), currentUser.email);

                const docSnapshot = await getDoc(userDocument);
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    const workData = userData.work && userData.work.length > 0 ? userData.work[0] : null;

                    if (workData) {
                        // setWorkExp1JobTitle(workData.WorkExp1JobTitle || '');
                        // setWorkExp1Company(workData.WorkExp1Company || '');
                        // setWorkExp1City(workData.WorkExp1City || '');
                        // setWorkExp1Postal(workData.WorkExp1Postal || '');
                        setValue('WorkExp1JobTitle', workData.WorkExp1JobTitle || '');
                        setValue('WorkExp1Company', workData.WorkExp1Company || '');
                        setValue('WorkExp1City', workData.WorkExp1City || '');
                        setValue('WorkExp1Postal', workData.WorkExp1Postal || '');
                        setWorkExp1StartMonth(workData.WorkExp1StartMonth || '');
                        setWorkExp1StartYear(workData.WorkExp1StartYear || '');
                        setWorkExp1EndMonth(workData.WorkExp1EndMonth || '');
                        setWorkExp1EndYear(workData.WorkExp1EndYear || '');
                        setWorkExp1Working(workData.WorkExp1Working || '');
                        setWorkExp1TaskDnWithTools(workData.WorkExp1TaskDnWithTools || '');
                        setWorkExp1EmploymentType(workData.WorkExp1EmploymentType || '');
                        setWorkExp1JbSkillAcquired(workData.WorkExp1JbSkillAcquired || []);
                    }
                } else {
                    console.error('Document does not exist for the current user.');
                }
            } catch (error) {
                console.error('Error fetching data from Firestore: ', error);
            }
        };

        fetchData();
    }, [currentUser, setValue]);

    //below code for dialog
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleYes = () =>  navigate('/secondWork');
    const handleNo = () => navigate('/project');


    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Work Experience' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                    <div className="WorkExperience1-Maindiv">
                                    <div className="WorkExperience1-LeftColumn">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}>Job Title</Typography>
                                                {/* <TextField type="text" variant="outlined" value={WorkExp1JobTitle} onChange={(event) => setWorkExp1JobTitle(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Full Stack Developer'/> */}
                                                <TextField type="text" variant="outlined" fullWidth   
                                                value={WorkExp1JobTitle}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Full Stack Developer'
                                                {...register("WorkExp1JobTitle", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.WorkExp1JobTitle &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}>Company</Typography>
                                                {/* <TextField type="text" variant="outlined" value={WorkExp1Company} onChange={(event) => setWorkExp1Company(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Surge Global Pvt.'/> */}
                                                <TextField type="text" variant="outlined" fullWidth   
                                                value={WorkExp1Company}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Surge Global Pvt.'
                                                {...register("WorkExp1Company", { maxLength: 30, pattern: /^[a-zA-Z\s.,@]+$/ })}
                                                />
                                                {errors.WorkExp1Company &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={6} mb={3} pr={1}>
                                                <Typography mb={1}>City</Typography>
                                                {/* <TextField type="text" variant="outlined" value={WorkExp1City} onChange={(event) => setWorkExp1City(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Colombo'/> */}
                                                <TextField type="text" variant="outlined" fullWidth   
                                                value={WorkExp1City}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Colombo'
                                                {...register("WorkExp1City", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.WorkExp1City &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <Typography mb={1}>Postal code</Typography>
                                                {/* <TextField type="text" variant="outlined" value={WorkExp1Postal} onChange={(event) => setWorkExp1Postal(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='00300'/> */}
                                                <TextField type="text" variant="outlined" fullWidth   
                                                value={WorkExp1Postal}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='10300'
                                                {...register("WorkExp1Postal", { maxLength: 30, pattern: /^[0-9]+$/ })}
                                                />
                                                {errors.WorkExp1Postal &&  "Please enter only numbers"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography>Start Date</Typography>
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
                                                        // required
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
                                                        // required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {yearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography>End Date</Typography>
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
                                                        // required
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
                                                        // required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {yearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Typography>Currently work here</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={2} pl={2}>
                                                <FormControl>
                                                    <RadioGroup row name="project-working-status" value={WorkExp1Working} onChange={(event) => setWorkExp1Working(event.target.value)}>
                                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                            <Typography>List five significant tasks you did in your job role with the tools / software used? <small>Ex:- Developed and maintained responsive web applications using React, Angular, and Node.js.</small></Typography>
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
                                            <Typography>Employment type</Typography>
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
                                                        // required
                                                        
                                                    >
                                                        <MenuItem disabled value="">Type</MenuItem>
                                                        <MenuItem value="Full-Time">Full-Time</MenuItem>
                                                        <MenuItem value="Part-Time">Part-Time</MenuItem>
                                                        
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} >
                                                    <Typography mb={1} mt={3}>Skills acquired from job ?</Typography>
                                                    <Stack spacing={3}>
                                                            <Autocomplete
                                                                multiple
                                                                id="tags-outlined"
                                                                options={Jb_SkillsAcquired}
                                                                value={WorkExp1JbSkillAcquired} 
                                                                onChange={handleWorkExp1JbSkillAcquired}
                                                                filterSelectedOptions
                                                                disableCloseOnSelect
                                                                getOptionDisabled={isOptionDisabled}
                                                                renderInput={(params) => (
                                                                <TextField
                                                                    {...params}
                                                                    
                                                                    placeholder="Pick your job roles"
                                                                    sx={{
                                                                        "& .MuiOutlinedInput-root": {
                                                                            borderRadius: "25px", 
                                                                            backgroundColor:'white',
                                                                            minHeight:"100px"
                                                                        },
                                                                        "& .MuiChip-label": {
                                                                            color: "white",
                                                                        },
                                                                        "& .MuiChip-deleteIcon": {
                                                                            color:"white !important",
                                                                        },
                                                                        "& .MuiChip-root": {
                                                                            backgroundColor:"black",
                                                                        },
                                                                    }}
                                                                />
                                                                )}
                                                            />
                                                    </Stack>
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
                                    <Button type='submit' style={next}>Next Step</Button>     
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