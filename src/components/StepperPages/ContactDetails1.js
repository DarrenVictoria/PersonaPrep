import React, { useEffect, useState } from 'react';
import { collection, addDoc, getFirestore, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import InterviewFormFooter from '../InterviewFormFooter';
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
//import { styled } from "@mui/material/styles";
//import Box from "@mui/material/Box"; //did not use this for the grid since it effects some css i have applied and comented temperory incase any issue come we can  uncomment it
//import Paper from "@mui/material/Paper";
//import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close';
//import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import cphone from '../../assets/images/iconcphone.svg';
import cmail from '../../assets/images/iconcmail.svg';
import cfolder from '../../assets/images/iconcfolder.svg';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js'; 
import { useForm } from "react-hook-form";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';

const predefinedButtonName = ['github','figma','behance','linkedin','facebook','whatsapp','instragram','twitter'];
const ContactDetails_1 = () => {
  const { currentUser } = useAuth();
  // const [phone, setPhone] = useState('');
  // const [pemail, setEmail] = useState('');
  // const [district, setDistrict] = useState('');
  // const [city, setCity] = useState('');
  // const [postal, setPostal] = useState('');
  // const [country, setCountry] = useState('');
  // const [portfolioSite, setPortfolioSite] = useState('');

  //below usestate is to keep the user entered url
  const [inputUrl, setInputUrl] = useState(''); 
  //to keep array of already shown buttons
  const[shownbuttons,setShownButtons] = useState([]);
  const checkUrl = () =>{
    //converting the url to lowercase
    const lowerCaseUrl = inputUrl.toLowerCase();

    //checking the lowerCaseUrl with the predefined button for matches
    const matchedresult = predefinedButtonName.filter(buttonName => lowerCaseUrl.includes(buttonName));

    // updating the shownbutton 
    setShownButtons(prevButtons =>{
      const uniqueButtons = Array.from(new Set([...prevButtons,...matchedresult]));
      return uniqueButtons
    });
  };
  const removeButton = (buttonName) => {
    setShownButtons(prevButtons => prevButtons.filter(button => button !== buttonName));
  };

  //react hook form stuff
  const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

  const phone = watch('phone');
  const pemail = watch('pemail');
  const district = watch('district');
  const city = watch('city');
  const postal = watch('postal');
  const country = watch('country');
  const portfolioSite = watch('portfolioSite');

  // const onSubmit = (e) => {
  //     // e.preventDefault();
  //     // Call the function to add data to Firestore
  //     addDataToFirestore();
  // };

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
                console.log(userData)
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
                // ... (Add more fields as needed)
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
                // ... (Add more fields as needed)
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
            <InterviewFormHeader title='Contact Details 1/2' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                  <div className='Contactdetails1-Maindiv'>
                                  
                                      
                                    <div className='Contactdetails1-LeftColumn'>
                                          {/*<Box sx={{ flexGrow: 1 }}>*/}
                                          <Grid container spacing={2} >
                                            <Grid item xs={6}>
                                              
                                              <Typography ><span style={{color: 'red'}}>*</span> Phone</Typography>
                                              {/* <TextField type="text" variant="outlined" value={phone} onChange={(event) => setPhone(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}} /> */}
                                              <TextField type="text" variant="outlined" 
                                                // value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} 
                                                value={phone}
                                                fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Full Stack Developer'
                                                {...register("phone", { required: true, maxLength: 10, pattern: /^[0-9]+$/  })}
                                                />
                                                {errors.phone && errors.phone.type === "required" ? "This field is required" : errors.phone && "Please enter only numbers"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> Email</Typography>
                                                {/* <TextField type="email" variant="outlined" value={pemail} onChange={(event) => setEmail(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/> */}
                                                <TextField type="email" variant="outlined" 
                                                // value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} 
                                                value={pemail}
                                                fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                // placeholder='Full Stack Developer'
                                                {...register("pemail", { required: true })}
                                                />
                                                {errors.pemail && "This field is required"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> District</Typography>
                                                {/* <TextField type="text" variant="outlined" value={district} onChange={(event) => setDistrict(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/> */}
                                                <TextField type="text" variant="outlined" 
                                                // value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} 
                                                value={district}
                                                fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                // placeholder='Full Stack Developer'
                                                {...register("district", { required: true, maxLength: 10, pattern: /^[a-zA-Z\s]+$/})}
                                                />
                                                {errors.district && errors.district.type === "required" ? "This field is required" : errors.district && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> City</Typography>
                                                {/* <TextField type="text" variant="outlined" value={city} onChange={(event) => setCity(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/> */}
                                                <TextField type="text" variant="outlined" 
                                                // value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} 
                                                value={city}
                                                fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                // placeholder='Full Stack Developer'
                                                {...register("city", { required: true, maxLength: 10, pattern: /^[a-zA-Z\s]+$/  })}
                                                />
                                                {errors.city && errors.city.type === "required" ? "This field is required" : errors.city && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> Postalcode</Typography>
                                                {/* <TextField type="text" variant="outlined" value={postal} onChange={(event) => setPostal(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/> */}
                                                <TextField type="text" variant="outlined" 
                                                // value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} 
                                                value={postal}
                                                fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                // placeholder='Full Stack Developer'
                                                {...register("postal", { required: true, maxLength: 10, pattern: /^[0-9]+$/  })}
                                                />
                                                {errors.postal && errors.postal.type === "required" ? "This field is required" : errors.postal && "Please enter only numbers"}
                                            </Grid>
                                            <Grid item xs={6}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> Country</Typography>
                                                {/* <TextField type="text" variant="outlined" value={country} onChange={(event) => setCountry(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/> */}
                                                <TextField type="text" variant="outlined" 
                                                // value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} 
                                                value={country}
                                                fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                // placeholder='Full Stack Developer'
                                                {...register("country", { required: true, maxLength: 10  })}
                                                />
                                                {errors.country && errors.country.type === "required" ? "This field is required" : errors.country && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12}>
                                              
                                            <Typography ><span style={{color: 'red'}}>*</span> Portfolio Website</Typography>
                                                {/* <TextField type="text" variant="outlined" value={portfolioSite} onChange={(event) => setPortfolioSite(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/> */}
                                                <TextField type="text" variant="outlined" 
                                                // value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} 
                                                value={portfolioSite}
                                                fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                // placeholder='Full Stack Developer'
                                                {...register("portfolioSite", { required: true, maxLength: 10, pattern: /^[a-zA-Z\s]+$/  })}
                                                />
                                                {errors.portfolioSite && errors.portfolioSite.type === "required" ? "This field is required" : errors.portfolioSite && "Please enter only letters"}
                                            </Grid>
                                            
                                          </Grid>
                                        {/*</Box>*/}
                                            
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
                                               <LocalPhoneOutlinedIcon sx={{color:'black'}}/>
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
                                                <EmailOutlinedIcon sx={{color:'black'}}/>
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
                                              <FolderCopyOutlinedIcon sx={{color:'black'}}/>
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