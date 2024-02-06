import './css/personalInfo.css';
import '../../pages/interviewforms/Template.css';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography'; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import github from '../../assets/images/icongithub.svg';
import linkedIn from '../../assets/images/iconlinkedin.svg';
import twitter from '../../assets/images/icontwitter.svg';
import stackoverflow from '../../assets/images/iconstackoverflow.png';
import medium from '../../assets/images/iconmedium.svg';
import chand from '../../assets/images/iconchand.svg';
import clinkedin from '../../assets/images/iconclinkedin.svg';
import cgithub from '../../assets/images/iconcgithub.svg';
import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js'; 

const ContactDetails_2 = () => {
    const { currentUser } = useAuth();
    const [gitTxt, setGitTxt] = useState('');
    const [linkedInTxt, setLinkedInTxt] = useState('');
    const [twitterTxt, setTwitterTxt] = useState('');
    const [soTxt, setSoTxt] = useState('');
    const [mediumTxt, setMediumTxt] = useState('');

    const navigate = useNavigate();
    const prevPage = () => navigate('/contactDetMain');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if text fields have values before sending to the database
        const dataToUpdate = {};
        if (gitTxt.trim() !== '') dataToUpdate.gitTxt = gitTxt;
        if (linkedInTxt.trim() !== '') dataToUpdate.linkedInTxt = linkedInTxt;
        if (twitterTxt.trim() !== '') dataToUpdate.twitterTxt = twitterTxt;
        if (soTxt.trim() !== '') dataToUpdate.soTxt = soTxt;
        if (mediumTxt.trim() !== '') dataToUpdate.mediumTxt = mediumTxt;
    
        // Update Firestore document with filtered data
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
            const existingDoc = querySnapshot.docs[0];
    
            if (existingDoc) {
                const existingDocRef = doc(db, 'studentdetails', existingDoc.id);
                await updateDoc(existingDocRef, dataToUpdate);
    
                console.log('Document updated with ID: ', existingDoc.id);
                navigate('/school');
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchUserData = async () => {
            try {
                const db = getFirestore();
                const studentDetailsCollection = collection(db, 'studentdetails');

                // Check if a document with the user's email already exists
                const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
                const existingDoc = querySnapshot.docs[0];

                if (existingDoc) {
                    const userData = existingDoc.data();
                    // Set the state variables based on the fetched data
                    setGitTxt(userData.gitTxt || '');
                    setLinkedInTxt(userData.linkedInTxt || '');
                    setTwitterTxt(userData.twitterTxt || '');
                    setSoTxt(userData.soTxt || '');
                    setMediumTxt(userData.mediumTxt || '');
                }
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };

        // Call the function to fetch user data
        fetchUserData();
    }, [currentUser.email]);

    const btn = (event) => {
        event.preventDefault();
        if (gitTxt === '') console.log('git null');
        if (linkedInTxt === '') console.log('linked null');
        if (twitterTxt === '') console.log('twitter null');
        if (soTxt === '') console.log('so null');
        if (mediumTxt === '') console.log('medium null');
        console.log(`${gitTxt} ${linkedInTxt} ${twitterTxt} ${soTxt} ${mediumTxt}`);
    }

    return ( 
        <div className="formtemp-page">
            <InterviewFormHeader title='Contact Details 2/2' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="personalInfo-main">
                                    <div className="personalInfo-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography variant='h4' mb={1} sx={{fontWeight:'bold'}}>Social network accounts</Typography>
                                                <Typography mb={1}>Indicate the desired communication method</Typography>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={1}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="GitHub" src={github} />
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <TextField value={gitTxt} onChange={(e) => setGitTxt(e.target.value)} variant="outlined" fullWidth InputProps={{ style: { borderRadius: '25px', backgroundColor: 'white' }}} placeholder='GitHub Username'/>
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={1}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="LinkedIn" src={linkedIn} />
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <TextField value={linkedInTxt} onChange={(e) => setLinkedInTxt(e.target.value)} variant="outlined" fullWidth InputProps={{ style: { borderRadius: '25px', backgroundColor: 'white' }}} placeholder='LinkedIn Username'/>
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={1}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="Twitter" src={twitter} />
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <TextField value={twitterTxt} onChange={(e) => setTwitterTxt(e.target.value)} variant="outlined" fullWidth InputProps={{ style: { borderRadius: '25px', backgroundColor: 'white' }}} placeholder='Twitter Username'/>
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={1}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="StackOverflow" src={stackoverflow} />
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <TextField value={soTxt} onChange={(e) => setSoTxt(e.target.value)} variant="outlined" fullWidth InputProps={{ style: { borderRadius: '25px', backgroundColor: 'white' }}} placeholder='StackOverflow Username'/>
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={1}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="Medium" src={medium} />
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <TextField value={mediumTxt} onChange={(e) => setMediumTxt(e.target.value)} variant="outlined" fullWidth InputProps={{ style: { borderRadius: '25px', backgroundColor: 'white' }}} placeholder='Medium Username'/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className="personalInfo-rightCol">
                                        <Card variant="outlined" sx={{ height:'100%',maxHeight: '420px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:769px)':{overflowY:'hidden',},}}>
                                            <CardContent>
                                                <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Social Media Tips</Typography>
                                                <List>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <img src={chand} alt="Custom Icon" style={{ width: '27px', height: '31px' }}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1' >
                                                                Choose social media platforms that match with your professional goals.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px', padding: '5px'}}>
                                                                <img src={clinkedin} alt="Custom Icon" style={{ width: 'var(--40,40px)', height: '35.666px' }} />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                <span style={{fontWeight: 'bold'}}>LinkedIn</span> is ideal for showcasing skills, connecting with industry professionals, and highlighting educational background.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                                                                <img src={cgithub} alt="Custom Icon" style={{ width: '41px', height: '39px' ,}} />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                <span style={{fontWeight: 'bold'}}>Github</span> is useful to showcase technical skills and coding projects, collaborating with the coding community.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                </List>
                                            </CardContent>
                                        </Card>
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
    );
}

export default ContactDetails_2;
