import './css/personalInfo.css';
import '../../pages/interviewforms/Template.css';
import InterviewFormHeader from '../InterviewFormHeader';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography'; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import github from '../../assets/images/icongithub.svg';
import linkedIn from '../../assets/images/iconlinkedin.svg';
import twitter from '../../assets/images/icontwitter.svg';
import stackoverflow from '../../assets/images/iconstackoverflow.png';
import medium from '../../assets/images/iconmedium.svg';
import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js'; 
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useForm } from "react-hook-form";


const ContactDetails_2 = () => {
    const { currentUser } = useAuth();
    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();
    const GitHubUN = watch('GitHubUN');
    const LinkedInUN = watch('LinkedInUN');
    const TwitterUN = watch('TwitterUN');
    const StackOverUN = watch('StackOverUN');
    const MediumUN = watch('MediumUN');

    const navigate = useNavigate();
    const prevPage = () => navigate('/contactDetMain');
    
    const onSubmit = async (e) => {
        // Check if text fields have values before sending to the database
        const dataToUpdate = {};
        if (GitHubUN.trim() !== '') dataToUpdate.GitHubUN = GitHubUN;
        if (LinkedInUN.trim() !== '') dataToUpdate.LinkedInUN = LinkedInUN;
        // dataToUpdate.LinkedInUN = LinkedInUN;
        if (TwitterUN.trim() !== '') dataToUpdate.TwitterUN = TwitterUN;
        if (StackOverUN.trim() !== '') dataToUpdate.StackOverUN = StackOverUN;
        if (MediumUN.trim() !== '') dataToUpdate.MediumUN = MediumUN;
    
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
                    setValue('GitHubUN', userData.GitHubUN || '');
                    setValue('LinkedInUN', userData.LinkedInUN || '');
                    setValue('TwitterUN', userData.TwitterUN || '');
                    setValue('StackOverUN', userData.StackOverUN || '');
                    setValue('MediumUN', userData.MediumUN || '');
                }
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };

        // Call the function to fetch user data
        fetchUserData();
    }, [currentUser.email, setValue]);

    return ( 
        <div className="formtemp-page">
            <InterviewFormHeader title='Social Media Details' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="personalInfo-main">
                                    <div className="personalInfo-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography variant='h4' mb={1} sx={{fontWeight:'bold'}}>Social network accounts</Typography>
                                                <Typography mb={1}>Indicate the desired communication method</Typography>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={2}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="GitHub" src={github} />
                                                </Grid>
                                                <Grid item xs={10} ml={-1}>
                                                    <TextField type="text" variant="outlined" 
                                                    value={GitHubUN}
                                                    fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                    placeholder='GitHub Username'
                                                    {...register("GitHubUN", {maxLength: 30})}
                                                    />
                                                    {errors.GitHubUN && 'Max character limit is 30'}
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={2}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="LinkedIn" src={linkedIn} />
                                                </Grid>
                                                <Grid item xs={10} ml={-1}>
                                                    <TextField type="text" variant="outlined" 
                                                    value={LinkedInUN}
                                                    fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                    placeholder='LinkedIn Username'
                                                    {...register("LinkedInUN", {maxLength: 30})}
                                                    />
                                                    {errors.LinkedInUN && 'Max character limit is 30'}
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={2}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="Twitter" src={twitter} />
                                                </Grid>
                                                <Grid item xs={10} ml={-1}>
                                                    <TextField type="text" variant="outlined" 
                                                    value={TwitterUN}
                                                    fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                    placeholder='Twitter Username'
                                                    {...register("TwitterUN", {maxLength: 30})}
                                                    />
                                                    {errors.TwitterUN && 'Max character limit is 30'}
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={2}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="StackOverflow" src={stackoverflow} />
                                                </Grid>
                                                <Grid item xs={10} ml={-1}>
                                                    <TextField type="text" variant="outlined" 
                                                    value={StackOverUN}
                                                    fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                    placeholder='StackOverflow Username'
                                                    {...register("StackOverUN", {maxLength: 30})}
                                                    />
                                                    {errors.StackOverUN && 'Max character limit is 30'}
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} alignItems="center" mb={2}>
                                                <Grid item xs={2}>
                                                    <Avatar sx={{ width: 40, height: 40 }} alt="Medium" src={medium} />
                                                </Grid>
                                                <Grid item xs={10} ml={-1}>
                                                    <TextField type="text" variant="outlined" 
                                                    value={MediumUN}
                                                    fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                    placeholder='Medium Username'
                                                    {...register("MediumUN", {maxLength: 30})}
                                                    />
                                                    {errors.MediumUN && 'Max character limit is 30'}
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
                                                                <PanToolAltIcon sx={{color:'black'}}/>
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
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <LinkedInIcon sx={{color:'black'}}/>
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
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <GitHubIcon sx={{color:'black'}}/>
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
