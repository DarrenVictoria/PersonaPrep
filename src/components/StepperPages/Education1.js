import * as React from "react";
import './css/Education.css';
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
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, addDoc, getFirestore, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useForm } from "react-hook-form";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

import Dialog from "@mui/material/Dialog";//dialog
import DialogActions from "@mui/material/DialogActions";//dialog
import DialogContent from "@mui/material/DialogContent";//dialog
import DialogContentText from "@mui/material/DialogContentText";//dialog
import DialogTitle from "@mui/material/DialogTitle";//dialog
import useMediaQuery from "@mui/material/useMediaQuery";//dialog
import { useTheme } from "@mui/material/styles";//dialog


const School1 = () => {

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
    const StartyearOption = ["2024"];
        for (let year = 2023; year >= 2000; year--) {
            StartyearOption.push(String(year));
        }
    const EndyearOption = ["2024"];
        for (let year = 2023; year >= 2015; year--) {
            EndyearOption.push(String(year));
        }
    const { currentUser } = useAuth();

    const [School1StartMonth, setSchool1StartMonth] = useState('');
    const [School1StartYear, setSchool1StartYear] = useState('');
    const [School1EndMonth, setSchool1EndMonth] = useState('');
    const [School1EndYear, setSchool1EndYear] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const School1Name = watch('School1Name');
    const School1Experience = watch('School1Experience');
    const School1City = watch('School1City');
    const School1Country = watch('School1Country');

    const navigate = useNavigate();
    const prevPage = () => navigate('/contactDetSocial');

    const fetchUserData = async () => {
    try {
        const db = getFirestore();
        const studentDetailsCollection = collection(db, 'studentdetails');
        const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
        const existingDoc = querySnapshot.docs[0];

        if (existingDoc) {
            const userData = existingDoc.data();
            // Populate the form fields with fetched data

            if (userData.schools && userData.schools.length > 0) {
                // Retrieve the first school details from the array
                const firstSchool = userData.schools[0];
                // Populate the form fields with fetched data
                setValue('School1Name', firstSchool.SchoolName || '');
                setValue('School1City', firstSchool.SchoolCity || '');
                setValue('School1Country', firstSchool.SchoolCountry || '');
                setValue('School1Experience', firstSchool.SchoolExperience || '');
                setSchool1StartMonth(firstSchool.SchoolStartMonth || '');
                setSchool1StartYear(firstSchool.SchoolStartYear || '');
                setSchool1EndMonth(firstSchool.SchoolEndMonth || '');
                setSchool1EndYear(firstSchool.SchoolEndYear || '');
            }

        }
    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
    };

    useEffect(() => {    
        fetchUserData();
    }, [currentUser.email, setValue]);

    const onSubmit = async (e) => {
        
    
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
            const existingDoc = querySnapshot.docs[0];
    
            if (existingDoc) {
                const existingData = existingDoc.data();
                const existingSchools = existingData.schools || [];
    
                // Check if index 0 exists in the schools array
                const firstSchoolExists = existingSchools.length > 0;
    
                // If index 0 exists, update its fields with the new values
                if (firstSchoolExists) {
                    existingSchools[0].SchoolName = School1Name;
                    existingSchools[0].SchoolCity = School1City;
                    existingSchools[0].SchoolCountry = School1Country;
                    existingSchools[0].SchoolExperience = School1Experience;
                    existingSchools[0].SchoolStartMonth = School1StartMonth;
                    existingSchools[0].SchoolStartYear = School1StartYear;
                    existingSchools[0].SchoolEndMonth = School1EndMonth;
                    existingSchools[0].SchoolEndYear = School1EndYear;
                } else {
                    // If index 0 does not exist, create a new entry for School 1
                    existingSchools.push({
                        SchoolName: School1Name,
                        SchoolCity: School1City,
                        SchoolCountry: School1Country,
                        SchoolExperience: School1Experience,
                        SchoolStartMonth: School1StartMonth,
                        SchoolStartYear: School1StartYear,
                        SchoolEndMonth: School1EndMonth,
                        SchoolEndYear: School1EndYear
                    });
                }
    
                // Update the document with the modified schools array
                const existingDocRef = doc(db, 'studentdetails', existingDoc.id);
                await updateDoc(existingDocRef, { schools: existingSchools });
    
                console.log('Document updated with ID: ', existingDoc.id);
                
                handleClickOpen();
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };
    
    //below code for dialog
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleYes = () => navigate('/secondSchool');        
    const handleNo = () => navigate('/exams');

    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Latest School (School 1/2)' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="Education-main">
                                    <div className="Education-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>School Name</Typography>
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={School1Name}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white', pattern: "^[a-zA-Z]+$"}}} 
                                                placeholder='St. Thomas Catholic International'
                                                {...register("School1Name", { required: true, maxLength: 50, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.School1Name && errors.School1Name.type === "maxLength" ? "Max word limit is 50" : errors.School1Name && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>School experience or description</Typography>
                                                <TextField
                                                    multiline
                                                    rows={4}
                                                    fullWidth
                                                    value={School1Experience}
                                                    InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                                    required
                                                    {...register("School1Experience", { required: true, maxLength: 100, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.School1Experience && errors.School1Experience.type === "maxLength" ? "Max word limit is 100" : errors.School1Experience && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>City</Typography>
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={School1City}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("School1City", { required: true, maxLength: 50, pattern: /^[a-zA-Z0-9\s]+$/ })}
                                                />
                                                {errors.School1City && errors.School1City.type === "maxLength" ? "Max word limit is 50" : errors.School1City && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={School1Country}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''                                                
                                                {...register("School1Country", { required: true, maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.School1Country && errors.School1Country.type === "maxLength" ? "Max word limit is 30" : errors.School1Country && "Please enter only letters and numbers"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={School1StartMonth}
                                                        onChange={(event) => setSchool1StartMonth(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem value="">Month</MenuItem>
                                                        {monthOption.map (option => (
                                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={School1StartYear}
                                                        onChange={(event) => setSchool1StartYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem value="">Year</MenuItem>
                                                        {StartyearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>End Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={School1EndMonth}
                                                        onChange={(event) => setSchool1EndMonth(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem value="">Month</MenuItem>
                                                        {monthOption.map (option => (
                                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={School1EndYear}
                                                        onChange={(event) => setSchool1EndYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem value="">Year</MenuItem>
                                                        {EndyearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            
                                                
                                        </Grid>
                                    </div>

                                    <div className="Education-rightCol">
                                        <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                                            <Card variant="outlined" sx={{height:'100%',maxHeight: '400px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>                    <CardContent >
                                                <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Educational Experience Tips</Typography>
                                                <List>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <AccessTimeFilledIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1' >
                                                                Start with your most recent educational institution.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <EmojiEventsIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Mention any outstanding grades or awards / qualifications you may have.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <WorkspacePremiumIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Provide links for your digital certificates and be prepared to upload any physical certificates when required.
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
                                        {"Do you have another school ?"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                          If you wish to add another school please click on Yes. <br />If you wish to skip to the next page please click on No.  
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
export default School1