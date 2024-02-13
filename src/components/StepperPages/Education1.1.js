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
import cphone from '../../assets/images/iconcphone.svg';
import EditableChoose from '../EditableSelectOption';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import InterviewFormFooter from '../InterviewFormFooter';
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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { useForm } from "react-hook-form";

const School2 = () => {
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
    const { currentUser } = useAuth();
    const [School2StartMonth, setSchool2StartMonth] = useState('');
    const [School2StartYear, setSchool2StartYear] = useState('');
    const [School2EndMonth, setSchool2EndMonth] = useState('');
    const [School2EndYear, setSchool2EndYear] = useState('');
    // const [School2Name, setSchool2Name] = useState('');
    // const [School2City, setSchool2City] = useState('');
    // const [School2Country, setSchool2Country] = useState('');
    // const [School2Experience, setSchool2Experience] = useState('');


    // const School2NameChange = (e) => setSchool2Name(e.target.value);
    // const School2CityChange = (e) => setSchool2City(e.target.value);
    // const School2CountryChange = (e) => setSchool2Country(e.target.value);
    // const School2ExperienceChange = (e) => setSchool2Experience(e.target.value);

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const School2Name = watch('School2Name');
    const School2Experience = watch('School2Experience');
    const School2City = watch('School2City');
    const School2Country = watch('School2Country');
    
    const navigate = useNavigate();
      const prevPage = () => navigate('/school');

      const fetchUserData = async () => {
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
            const existingDoc = querySnapshot.docs[0];

            if (existingDoc) {
                const userData = existingDoc.data();
                // Populate the form fields with fetched data
                if (userData.schools && userData.schools.length >= 2) {
                    // Retrieve the second school details from the array
                    const secondSchool = userData.schools[1];
                    // Populate the form fields with fetched data
                    setValue('School2Name', secondSchool.SchoolName || '');
                    setValue('School2City', secondSchool.SchoolCity || '');
                    setValue('School2Country', secondSchool.SchoolCountry || '');
                    setValue('School2Experience', secondSchool.SchoolExperience || '');
                    setSchool2StartMonth(secondSchool.SchoolStartMonth || '');
                    setSchool2StartYear(secondSchool.SchoolStartYear || '');
                    setSchool2EndMonth(secondSchool.SchoolEndMonth || '');
                    setSchool2EndYear(secondSchool.SchoolEndYear || '');
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
        // e.preventDefault();
    
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
            const existingDoc = querySnapshot.docs[0];
    
            if (existingDoc) {
                const existingDocRef = doc(db, 'studentdetails', existingDoc.id);
                const userData = existingDoc.data();
                
                // Preserve the existing schools array or create a new one if it doesn't exist
                const updatedSchools = userData.schools ? [...userData.schools] : [];
                
                // Check if the second school data already exists
                const secondSchoolExists = updatedSchools.length >= 2;
    
                if (secondSchoolExists) {
                    // Update the existing second school data
                    updatedSchools[1] = {
                        SchoolName: School2Name,
                        SchoolCity: School2City,
                        SchoolCountry: School2Country,
                        SchoolExperience: School2Experience,
                        SchoolStartMonth: School2StartMonth,
                        SchoolStartYear: School2StartYear,
                        SchoolEndMonth: School2EndMonth,
                        SchoolEndYear: School2EndYear
                    };
                } else {
                    // Create a new entry for the second school data
                    updatedSchools.push({
                        SchoolName: School2Name,
                        SchoolCity: School2City,
                        SchoolCountry: School2Country,
                        SchoolExperience: School2Experience,
                        SchoolStartMonth: School2StartMonth,
                        SchoolStartYear: School2StartYear,
                        SchoolEndMonth: School2EndMonth,
                        SchoolEndYear: School2EndYear
                    });
                }
    
                // Update the document with the updated schools array
                await updateDoc(existingDocRef, { schools: updatedSchools });
                console.log('Document updated with ID: ', existingDoc.id);
                navigate('/exams');
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };
    
  

    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='last school' />
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
                                                {/* <TextField type="text" variant="outlined" value={School2Name} onChange={School2NameChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='St. Thomas Catholic International'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={School2Name}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white', pattern: "^[a-zA-Z]+$"}}} 
                                                placeholder='St. Thomas Catholic International'
                                                {...register("School2Name", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.School2Name && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>School experience or description</Typography>
                                                {/* <CustomMultilineTextFieldslimited
                                                    inputHeight="150px"
                                                    maxWidth="1300px"
                                                    isRequired={true}
                                                    value={School2Experience}
                                                    onChange={School2ExperienceChange}
                                                    maxWords={50} 
                                                /> */}
                                                <TextField
                                                    multiline
                                                    rows={4}
                                                    fullWidth
                                                    value={School2Experience}
                                                    InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                                    required
                                                    {...register("School2Experience", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.School2Experience &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>City</Typography>
                                                {/* <TextField type="text" variant="outlined" value={School2City} onChange={School2CityChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={School2City}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white', pattern: "^[a-zA-Z]+$"}}} 
                                                placeholder=''
                                                {...register("School2City", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.School2City && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                                                {/* <TextField type="text" variant="outlined" value={School2Country} onChange={School2CountryChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={School2Country}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white', pattern: "^[a-zA-Z]+$"}}} 
                                                placeholder=''
                                                {...register("School2Country", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.School2Country && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setSchool2StartMonth}
                                                    disabledOptions={["Month"]}
                                                    defaultValue={School2StartMonth}
                                                /> */}
                                                 <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={School2StartMonth}
                                                        onChange={(event) => setSchool2StartMonth(event.target.value)}
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
                                                    options={option}
                                                    onSelect={setSchool2StartYear}
                                                    disabledOptions={["Year"]}
                                                    defaultValue={School2StartYear}
                                                /> */}

                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={School2StartYear}
                                                        onChange={(event) => setSchool2StartYear(event.target.value)}
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
                                                <Typography><span style={{color: 'red'}}>*</span>End Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setSchool2EndMonth}
                                                    disabledOptions={["Month"]}
                                                    defaultValue={School2EndMonth}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={School2EndMonth}
                                                        onChange={(event) => setSchool2EndMonth(event.target.value)}
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
                                                    options={option}
                                                    onSelect={setSchool2EndYear}
                                                    disabledOptions={["Year"]}
                                                    defaultValue={School2EndYear}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={School2EndYear}
                                                        onChange={(event) => setSchool2EndYear(event.target.value)}
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
                                                            {/* <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}> */}
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
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>

            
        </div>

    

    )

}
export default School2