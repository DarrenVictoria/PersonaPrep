import React, { useEffect, useState } from 'react';
import { collection, addDoc, getFirestore, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import './css/ContactDetails1.css';
import Card from '@mui/material/Card'; //this is for the card in the right column
import CardContent from '@mui/material/CardContent'; //this is for the card in the right column
import Typography from '@mui/material/Typography'; //this is for the card in the right column
import Avatar from '@mui/material/Avatar';// for the right column
import List from '@mui/material/List';// for the right column
import ListItem from '@mui/material/ListItem';// for the right column
import ListItemText from '@mui/material/ListItemText';// for the right column
import ListItemAvatar from '@mui/material/ListItemAvatar';// for the right column
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js'; 
import { useForm } from "react-hook-form";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';


const ContactDetails_1 = () => {
  const { currentUser } = useAuth();
  //react hook form stuff
  const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

  const phone = watch('phone');
  const pemail = watch('pemail');
  const district = watch('district');
  const city = watch('city');
  const postal = watch('postal');
  const country = watch('country');
  const portfolioSite = watch('portfolioSite');

  

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
                setValue('phone', userData.phone || ''); 
                setValue('pemail', userData.pemail || ''); 
                setValue('district', userData.district || ''); 
                setValue('city', userData.city || ''); 
                setValue('postal', userData.postal || ''); 
                setValue('country', userData.country || ''); 
                setValue('portfolioSite', userData.portfolioSite || '');
            }
        } catch (error) {
            console.error('Error fetching user data: ', error);
        }
    };

    // Call the function to fetch user data
    fetchUserData();
}, [currentUser.email, setValue]);

const navigate = useNavigate();
const prevPage = () => navigate('/personalInfo');

const onSubmit = async (formData) => {
    try {
        const db = getFirestore();
        const studentDetailsCollection = collection(db, 'studentdetails');

        // Check if a document with the user's email already exists
        const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
        const existingDoc = querySnapshot.docs[0];

        if (existingDoc) {
            // Update the existing document
            const existingDocRef = doc(db, 'studentdetails', existingDoc.id);
            await updateDoc(existingDocRef, {
                phone: formData.phone,
                pemail: formData.pemail,
                district: formData.district,
                city: formData.city,
                postal: formData.postal,
                country: formData.country,
                portfolioSite: formData.portfolioSite,
                // ... (We can add more fields as needed)
            });

            console.log('Document updated with ID: ', existingDoc.id);
        } else {
            // Create a new document
            const newDocRef = await addDoc(studentDetailsCollection, {
                phone: formData.phone,
                pemail: formData.pemail,
                district: formData.district,
                city: formData.city,
                postal: formData.postal,
                country: formData.country,
                portfolioSite: formData.portfolioSite,
                // ... (We can add more fields as needed)
            });

            console.log('Document written with ID: ', newDocRef.id);
        }

        // Navigate to the next page
        navigate('/contactDetSocial');
    } catch (error) {
        console.error('Error adding/updating document: ', error);
    }
};


    return(
      <div className="formtemp-page">
            <InterviewFormHeader title='Basic Contact Details' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                  <div className='Contactdetails1-Maindiv'>
                                  
                                      
                                    <div className='Contactdetails1-LeftColumn'>
                                          <Grid container spacing={2} >
                                            <Grid item xs={6}>
                                              
                                              <Typography ><span style={{color: 'red'}}>*</span> Phone</Typography>
                                              <TextField type="text" variant="outlined" 
                                                value={phone}
                                                fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Full Stack Developer'
                                                {...register("phone", { required: true, maxLength: 30, pattern: /^[0-9]+$/  })}
                                                />
                                                {errors.phone && errors.phone.type === "maxLength" ? "Max word limit is 30" : errors.phone && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> Email</Typography>
                                                <TextField type="email" variant="outlined" 
                                                value={pemail}
                                                fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                {...register("pemail", { required: true })}
                                                />
                                                {errors.pemail && "This field is required"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> District</Typography>
                                                <TextField type="text" variant="outlined" 
                                                value={district}
                                                fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                {...register("district", { required: true, maxLength: 30, pattern: /^[a-zA-Z\s]+$/})}
                                                />
                                                {errors.district && errors.district.type === "maxLength" ? "Max word limit is 30" : errors.district && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> City</Typography>
                                                <TextField type="text" variant="outlined" 
                                                value={city}
                                                fullWidth  required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                {...register("city", { required: true, maxLength: 50, pattern: /^[a-zA-Z\s]+$/  })}
                                                />
                                                {errors.city && errors.city.type === "maxLength" ? "Max word limit is 50" : errors.city && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> Postalcode</Typography>
                                                <TextField type="text" variant="outlined" 
                                                value={postal}
                                                fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                {...register("postal", { required: true, maxLength: 30, pattern: /^[0-9]+$/  })}
                                                />
                                                {errors.postal && errors.postal.type === "maxLength" ? "Max word limit is 30" : errors.postal && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> Country</Typography>
                                                <TextField type="text" variant="outlined" 
                                                value={country}
                                                fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                {...register("country", { required: true, maxLength: 30  })}
                                                />
                                                {errors.country && errors.country.type === "maxLength" ? "Max word limit is 30" : errors.country && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> Portfolio Website</Typography>
                                                <TextField type="text" variant="outlined" 
                                                value={portfolioSite}
                                                fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                {...register("portfolioSite", { required: true})}
                                                />
                                                {errors.portfolioSite && "This field is required"}
                                            </Grid>
                                            
                                          </Grid>
                                            
                                    </div>
                                          

                                    

                                  
                                    <div className='Contactdetails1-RightColumn'>
                                      <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                                        <Card variant="outlined" sx={{height:'100%',maxHeight: '450px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>          <CardContent >
                                        <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                              Contact Detail Tips
                                          </Typography>
                                          <List>
                                            <ListItem >
                                            <ListItemAvatar>
                                              <Avatar sx={{borderRadius: '12px'}}>
                                               <LocalPhoneIcon sx={{color:'black'}}/>
                                              </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText>
                                              <Typography variant='body1' >
                                                  Provide a dependable and reliable phone number for effective communication.
                                              </Typography>
                                            </ListItemText>
                                            </ListItem>
                                            <ListItem >
                                            <ListItemAvatar>
                                              <Avatar sx={{borderRadius: '12px'}}>
                                                <EmailIcon sx={{color:'black'}}/>
                                              </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText>
                                            <Typography variant='body1'>
                                              Use a professional email address, that includes your first and last name.
                                            </Typography>
                                            </ListItemText>
                                            </ListItem>
                                            <ListItem >
                                            <ListItemAvatar>
                                              <Avatar sx={{borderRadius: '12px'}}>
                                              <FolderCopyIcon sx={{color:'black'}}/>
                                              </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText>
                                            <Typography variant='body1'>
                                              Include a link to your portfolio website or profiles like <b>LinkedIn</b> to showcase your work, qualifications and skills.
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
export default ContactDetails_1