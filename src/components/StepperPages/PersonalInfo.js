import './css/personalInfo.css';
import '../../pages/interviewforms/Template.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../FileUpload';
// import TestAutoComplete from '../TestAutoComplete';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import cphone from '../../assets/images/iconcphone.svg';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import React,{ useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc,doc , getDoc, setDoc, getFirestore, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

const PersonalInfo = () => {
    const { currentUser } = useAuth();
    const [profilePictureUrl, setProfilePictureUrl] = useState('');
    const [profilePictureFetchUrl, setProfilePictureFetchUrl] = useState('');
   
    const job_roles = [
        "Software Engineer",
        "Web Developer",
        "Mobile App Developer",
        "Full-Stack Developer",
        "Front-End Developer",
        "Back-End Developer",
        "UI/UX Designer",
        "UI/UX Engineer",
        "Quality Assurance (QA) Engineer",
        "Database Administrator (DBA)",
        "Systems Administrator",
        "Network Administrator",
        "IT Support Engineer",
        "Cybersecurity Analyst",
        "Data Analyst",
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Engineer",
        "Cloud Engineer",
        "DevOps Engineer",
        "Business Analyst (IT)",
        "System Analyst",
        "Virtual Reality (VR)/Augmented Reality (AR) Developer",
        "Product Manager (Tech)",
        "IT Project Manager"
    ];

    // const [Proname, setProname] = useState('');
    const [PJobRoles, setPJobRoles] = useState([]);
    const maxSelections = 3;//max value for the autocomplete
    const handleOnChange = (event, newRole) => {
        if (newRole.length <= maxSelections) {
            setPJobRoles(newRole);
        }
    };
    const isOptionDisabled = (option) => {
        return PJobRoles.length >= maxSelections && !PJobRoles.includes(option);
    };
    
    console.log(PJobRoles);

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();
    const Proname = watch('Proname');
    
    const handleFileUploadSuccess = (url) => {
        setProfilePictureUrl(url.downloadURL);
        console.log(url);
      };

      const handleReset = () => {
        // Your reset logic here
        console.log('Reset button clicked');
      };

    // const phoneChange = (event) => setProname(event.target.value);

    const navigate = useNavigate();
    
    const onSubmit = async (e) => {
        // e.preventDefault();
        
        try {
            console.log("Profile Picture URL:", profilePictureUrl); // Log profilePictureUrl before calling setDoc
        console.log("Proname:", Proname);
        console.log("PJobRoles:", PJobRoles);

            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const userDocument = doc(studentDetailsCollection, currentUser.email); // Use the email as document ID

            const finalProfilePictureUrl = profilePictureUrl || profilePictureFetchUrl;
    
            await setDoc(userDocument, {
                Proname,
                PJobRoles,
                profilePictureUrl: finalProfilePictureUrl,
                userId: currentUser.uid // assuming you have a user ID to associate with the data
            }, { merge: true }); // Merge with existing document if it exists
            
            navigate('/contactDetMain');
        } catch (error) {
            console.error('Error adding personal info to Firestore: ', error);
        }
    };
    
    useEffect(() => {
        // Load data from Firestore when the page loads
        const fetchPersonalInfo = async () => {
            try {
                const db = getFirestore();
                const studentDetailsCollection = collection(db, 'studentdetails');
                const userDocument = doc(studentDetailsCollection, currentUser.email); // Use the email as document ID
    
                const docSnapshot = await getDoc(userDocument);
                if (docSnapshot.exists()) {
                    const docData = docSnapshot.data();
                    // setProname(docData.Proname || '');
                    setValue('Proname', docData.Proname || '');
                    setPJobRoles(docData.PJobRoles || []);
                    setProfilePictureFetchUrl(docData.profilePictureUrl || null);
                    console.log(profilePictureUrl);
                   
                }
            } catch (error) {
                console.error('Error fetching personal info from Firestore: ', error);
            }
        };
        fetchPersonalInfo();
    }, [currentUser.email, setValue]); // Use currentUser.email instead of currentUser.uid
    

    const prevPage = () => navigate('/faculty');
    
    const handlePJobRoles = function (ev, val, reason, details) {
        if (ev.target.classList.contains('MuiSvgIcon-root')){
            // Removing Value
            const value = ev.target.parentElement.querySelector('span').innerHTML;
        } else {
            const value = ev.target.innerHTML;
            PJobRoles.push(value);
            console.log(PJobRoles);
        }
    };

   
    


    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Personal Information' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="personalInfo-main">
                                    <div className="personalInfo-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography><span style={{color: 'red'}}>*</span> Full Name</Typography>
                                                <TextField type="text" variant="outlined" value={Proname} fullWidth required  
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                {...register("Proname", {maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Proname && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span> Profile Picture</Typography>
                                                <FileUpload onFileUpload={handleFileUploadSuccess} onUploadSuccess={handleFileUploadSuccess} onReset={handleReset}    />
                                                {profilePictureFetchUrl && profilePictureFetchUrl !== ' ' &&  <p style={{marginTop:'1rem',marginLeft:'1rem'}}>Your current profile picture</p>}
                                                {profilePictureFetchUrl && profilePictureFetchUrl !== ' ' && <img src={profilePictureFetchUrl} alt="Profile Picture"  style={{ width: '100px', height: '100px', objectFit: 'cover',marginLeft:'1rem',border: '1px solid black' }}  />}
                                                
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> What job roles are you aspiring for? <b>Min1</b>/Max3</Typography>
                                                <Stack spacing={3}>
                                                    <Autocomplete
                                                        multiple
                                                        id="tags-outlined"
                                                        options={job_roles}
                                                        value={PJobRoles} 
                                                        onChange={handleOnChange}
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

                                    <div className="personalInfo-rightCol">
                                        <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                                            <Card variant="outlined" sx={{height:'100%',maxHeight: '450px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>                    <CardContent >
                                                <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Personal Info Tips</Typography>
                                                <List>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <EditIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1' >
                                                                Provide your complete and accurate full name, as it's essential for your professional identity.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <AccountCircleIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Add a professional profile picture to make your CV personal and leave a strong impression
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <LocalPhoneIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Mention your current job or the field you're interested in. This helps to match your CV to your career or academic goals
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
export default PersonalInfo