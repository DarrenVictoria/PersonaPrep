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
const School1 = () => {

    const option = ["Year"];
            for (let year = 2024; year >= 1990; year--) {
            option.push(String(year));
            }
    const { currentUser } = useAuth();

    const [School1StartMonth, setSchool1StartMonth] = useState('');
    const [School1StartYear, setSchool1StartYear] = useState('');
    const [School1EndMonth, setSchool1EndMonth] = useState('');
    const [School1EndYear, setSchool1EndYear] = useState('');
    const [School1Name, setSchool1Name] = useState('');
    const [School1City, setSchool1City] = useState('');
    const [School1Country, setSchool1Country] = useState('');
    const [School1Experience, setSchool1Experience] = useState('');



    const School1NameChange = (e) => setSchool1Name(e.target.value);
    const School1CityChange = (e) => setSchool1City(e.target.value);
    const School1CountryChange = (e) => setSchool1Country(e.target.value);
    const School1ExperienceChange = (e) => setSchool1Experience(e.target.value);

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

                setSchool1Name(userData.School1Name || '');
                setSchool1City(userData.School1City || '');
                setSchool1Country(userData.School1Country || '');
                setSchool1Experience(userData.School1Experience || '');
                setSchool1StartMonth(userData.School1StartMonth || '');
                setSchool1StartYear(userData.School1StartYear || '');
                setSchool1EndMonth(userData.School1EndMonth || '');
                setSchool1EndYear(userData.School1EndYear || '');

            }
        } catch (error) {
            console.error('Error fetching user data: ', error);
        }
    };

    useEffect(() => {
    
        fetchUserData();
    }, [currentUser.email]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare the data to append to Firestore document
        const dataToUpdate = {

            School1Name,
            School1City,
            School1Country,
            School1Experience,
            School1StartMonth,
            School1StartYear,
            School1EndMonth,
            School1EndYear,

        };

        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
            const existingDoc = querySnapshot.docs[0];

            if (existingDoc) {
                const existingDocRef = doc(db, 'studentdetails', existingDoc.id);
                await updateDoc(existingDocRef, dataToUpdate);
                console.log('Document updated with ID: ', existingDoc.id);

                navigate('/secondSchool');

            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };
  

    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Latest School' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="Education-main">
                                    <div className="Education-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>School Name</Typography>
                                                <TextField type="text" variant="outlined" value={School1Name} onChange={School1NameChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='St. Thomas Catholic International'/>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>School experience or description</Typography>
                                                <CustomMultilineTextFieldslimited
                                                    inputHeight="150px"
                                                    maxWidth="1300px"
                                                    isRequired={true}
                                                    value={School1Experience}
                                                    onChange={School1ExperienceChange}
                                                    maxWords={50} 
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>City</Typography>
                                                <TextField type="text" variant="outlined" value={School1City} onChange={School1CityChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                                                <TextField type="text" variant="outlined" value={School1Country} onChange={School1CountryChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}

                                                    onSelect={setSchool1StartMonth}
                                                    disabledOptions={["Month"]}
                                                    defaultValue={School1StartMonth}

                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={option}

                                                    onSelect={setSchool1StartYear}
                                                    disabledOptions={["Year"]}
                                                    defaultValue={School1StartYear}

                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>End Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}

                                                    onSelect={setSchool1EndMonth}
                                                    disabledOptions={["Month"]}
                                                    defaultValue={School1EndMonth}

                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={option}

                                                    onSelect={setSchool1EndYear}
                                                    disabledOptions={["Year"]}
                                                    defaultValue={School1EndYear}

                                                />
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
export default School1