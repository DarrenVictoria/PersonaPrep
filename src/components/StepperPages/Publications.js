import React from 'react';
import './css/Publication.css';
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
import { useState,useEffect } from 'react';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { useForm } from "react-hook-form";
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';


const Publications = () => {
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
    for (let year = 2023; year >= 2015; year--) {
    yearOption.push(String(year));
    }

    const [PblMonth, setPblMonth] = useState('');
    const [PblYear, setPblYear] = useState('');
    const [PblDesc, setPblDesc] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const PblTitle = watch('PblTitle');
    const Publisher = watch('Publisher');
    const PblUrl = watch('PblUrl');

    const navigate = useNavigate();
    const prevPage = () => navigate('/clubsAndSocs');
    const onSubmit = async (data) => {
      try {
          await sendPublicationDataToFirestore(data); // Send form data to Firestore
          navigate('/skilltrack'); // Navigate to the next page after data is sent
      } catch (error) {
          console.error('Error submitting publication data:', error);
      }
  };

  const sendPublicationDataToFirestore = async (data) => {
    try {
        const db = getFirestore();
        const userDocumentRef = doc(db, 'studentdetails', currentUser.email); // Assuming 'studentdetails' is your collection

        const docSnapshot = await getDoc(userDocumentRef);
        if (docSnapshot.exists()) {
            const docData = docSnapshot.data();
            let publications = docData.publications || [];

            if (publications.length >= 1) {
                publications[0] = { ...data, PblMonth, PblYear, PblDesc }; // Update existing publication data at index 0
            } else {
              publications.push({ ...data, PblMonth, PblYear, PblDesc }); // Add new publication data
            }

            await setDoc(userDocumentRef, { publications }, { merge: true }); // Set updated document
        } else {
            console.error('Document does not exist for the current user.');
        }
    } catch (error) {
        console.error('Error adding publication info to Firestore:', error);
        throw error; // Propagate the error back to the caller (onSubmit)
    }
};

useEffect(() => {
    const fetchPublicationData = async () => {
        try {
            const db = getFirestore();
            const userDocumentRef = doc(db, 'studentdetails', currentUser.email);

            const docSnapshot = await getDoc(userDocumentRef);
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                if (docData.publications && docData.publications.length >= 1) {
                    const publicationData = docData.publications[0]; 
                    // Populate form fields with publicationData
                    setValue('PblTitle', publicationData.PblTitle || '');
                    setValue('Publisher', publicationData.Publisher || '');
                    setValue('PblUrl', publicationData.PblUrl || '');
                    setPblMonth(publicationData.PblMonth || ''); // Set publication month
                    setPblYear(publicationData.PblYear || ''); // Set publication year
                    setPblDesc(publicationData.PblDesc || ''); // Set publication description
                    // Populate other fields similarly...
                }
            }
        } catch (error) {
            console.error('Error fetching publication info from Firestore:', error);
        }
    };
    fetchPublicationData();
}, [currentUser.email, setValue]);
    
    return(
      <div className="formtemp-page">
            <InterviewFormHeader title='Your Latest/Top Publication' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className='Publications-Maindiv'>
                                    <div className='Publications-LeftColumn'>
                                    <Grid container spacing={2} >
                                      <Grid item xs={12}>
                                        
                                      <Typography >Publication Title</Typography>
                                          <TextField type="text" variant="outlined" fullWidth   
                                          value={PblTitle}
                                          InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                          placeholder=''
                                          {...register("PblTitle", { maxLength: 30, pattern: /^[a-zA-Z\s0-9]+$/ })}
                                          />
                                          {errors.PblTitle && errors.PblTitle.type === "maxLength" ? "Max word limit is 30" : errors.PblTitle && "Please enter only letters"}
                                      </Grid>
                                      <Grid item xs={12}>
                                        
                                      <Typography>Publication / Publisher</Typography>
                                          <TextField type="text" variant="outlined" fullWidth   
                                          value={Publisher}
                                          InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                          placeholder=''
                                          {...register("Publisher", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                          />
                                          {errors.Publisher && errors.Publisher.type === "maxLength" ? "Max word limit is 30" : errors.Publisher && "Please enter only letters"}
                                      </Grid>
                                      <Grid item xs={12} mb={1}>
                                      <Typography >Publication date</Typography>
                                      </Grid>
                                      <Grid item xs={6}>
                                     <FormControl variant="outlined" fullWidth>
                                        <Select
                                            value={PblMonth}
                                            onChange={(event) => setPblMonth(event.target.value)}
                                            displayEmpty
                                            input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                            IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}                                            
                                        >
                                            <MenuItem disabled value="">Month</MenuItem>
                                            {monthOption.map (option => (
                                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                            ))}
                                        </Select>
                                      </FormControl>
                                        
                                      </Grid>
                                      <Grid item xs={6}>
                                    <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={PblYear}
                                          onChange={(event) => setPblYear(event.target.value)}
                                          displayEmpty
                                          input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                          IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}                                          
                                      >
                                          <MenuItem disabled value="">Year</MenuItem>
                                          {yearOption.map(year => (
                                              <MenuItem key={year} value={year}>{year}</MenuItem>
                                          ))}
                                      </Select>
                                    </FormControl>

                                        
                                      </Grid>
                                      <Grid item xs={12}>
                                        
                                      <Typography >Publication URL</Typography>
                                          <TextField type="text" variant="outlined" fullWidth   
                                            value={PblUrl}
                                            InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                            placeholder=''
                                            {...register("PblUrl")}
                                            />
                                      </Grid>
                                      <Grid item xs={12}>
                                        
                                        <Typography >Publication Description</Typography>
                                        <CustomMultilineTextFieldslimited
                                            inputHeight="150px"
                                            maxWidth="1300px"
                                            value={PblDesc}
                                            onChange={(event) => setPblDesc(event.target.value)}
                                            maxWords={50} 
                                        />
                                      </Grid>
                                      
                                    </Grid>
                                      
                              </div>
                                    

                              

                            
                              <div className='Publications-RightColumn'>
                                <Card variant="outlined" sx={{ height:'100%',maxHeight: '450px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:769px)':{overflowY:'hidden',}}}className='Contactdetails2-RightColumnCard'>
                                  <CardContent >
                                    <Typography variant="h5" component="div"sx={{ textAlign: 'center' }}>
                                    Publication tips
                                    </Typography>
                                    <List>
                                      <ListItem >
                                      <ListItemAvatar>
                                        <Avatar sx={{borderRadius: '12px'}}>
                                        <TrendingUpIcon sx={{color:'black'}}/>
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
                                      <KeyboardIcon sx={{color:'black'}}/>
                                      </Avatar>
                                      </ListItemAvatar>
                                      <ListItemText>
                                      <Typography variant='body1'>
                                      Use keywords when mentioning your skills to showcase your unique abilities.
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
                                      Emphasize your accomplishments and impact in each role for engaging description.
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
          {/*</Box>*/}
              
      </div>
            

      

     
      
    </div>
    )

}
export default Publications