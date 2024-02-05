import React, { useEffect, useState } from 'react';
import './css/Clubs.css';
import Typography from '@mui/material/Typography'; //this is for the card in the right column
import Grid from "@mui/material/Grid";
import EditableChoose from '../EditableSelectOption';
import { styled } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";//for the check box
import FormControlLabel from "@mui/material/FormControlLabel";//for the check box
import Checkbox from "@mui/material/Checkbox";//for the check box
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';

const Clubs = () => {
    const [clubName, setClubName] = useState('');
    const [clubStartMonth, setClubStartMonth] = useState('');
    const [clubStartYear, setClubStartYear] = useState('');
    const [clubEndMonth, setClubEndMonth] = useState('');
    const [clubEndYear, setClubEndYear] = useState('');
    const [volunteer, setvolunteer] = useState('no');
    const [volunteerChecked, setvolunteerChecked] = useState(false);

    const RolesPlayed = [{data:"Volunteer"},{data:"Council Member"}];
    const SkillsEarned = [{data:"Leadership"},{data:"Teamwork"}];

    useEffect(() => {
      if(!volunteerChecked) setvolunteer('no');
      else setvolunteer('yes');
    }, [volunteerChecked]);

    const navigate = useNavigate();
    const prevPage = () => navigate('/certification');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/publications')
        // validate();

        // Check if validation passed
        // if (validation) {
        //     // Call the function to add data to Firestore
        //     addDataToFirestore();
        // } else {
        //     console.log('Validation failed');
        // }
    };
    

    return(
      <div className="formtemp-page">
            <InterviewFormHeader title='Clubs and Societies' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className='Clubs-Maindiv'>
                                <div className='Clubs-LeftColumn'>
                                {/*<Box sx={{ flexGrow: 1 }}>*/}
                                <Grid container>
                                <Grid item xs={12} mb={-2}>
                                <Typography ><span style={{color: 'red'}}>*</span> Club / Society you were a part of ?</Typography>
                                  </Grid>
                                  <Grid item xs={12} mb={3}>
                                      <EditableChoose
                                        options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                        onSelect={setClubName}
                                        disabledOptions={[]}
                                        isRequired={true}
                                        //the below width did not work have to check
                                        
                                        />
                                    
                                  </Grid>
                                  <Grid item xs={12} mb={-2}>
                                  <Typography ><span style={{color: 'red'}}>*</span> Start Date</Typography>
                                  </Grid>
                                  <Grid item xs={6} mb={3} pr={1}>
                                    
                                  <EditableChoose
                                  options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                  onSelect={setClubStartMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                />
                                    
                                  </Grid>
                                  <Grid item xs={6} mb={3} pl={1}>
                                  <EditableChoose
                                  options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                  onSelect={setClubStartYear}
                                  disabledOptions={["2024"]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                />
                                    
                                  </Grid>
                                  <Grid item xs={12} mb={-2}>
                                  <Typography ><span style={{color: 'red'}}>*</span> End Date</Typography>
                                  </Grid>
                                  <Grid item xs={6} mb={3} pr={1}>
                                    
                                  <EditableChoose
                                  options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                  onSelect={setClubEndMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                />
                                    
                                  </Grid>
                                  <Grid item xs={6} mb={3} pl={1}>
                                  <EditableChoose
                                  options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                  onSelect={setClubEndYear}
                                  disabledOptions={["2024"]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                />
                                    
                                  </Grid>
                                  {/* /*<Grid item xs={1}>
                                    {this is a blank space just to take the correct position of the below check box }
                                  </Grid>*/}
                                  <Grid item xs={12} mb={3}>
                                    
                                    <CustomizedHook data={RolesPlayed} label={<Typography>Roles Played</Typography>}/>
                                  
                                    
                                  </Grid>
                                  <Grid item xs={12} mb={3}>                                    
                                    <CustomizedHook data={SkillsEarned} label={<Typography>Skills Earned</Typography>}/>
                                  </Grid>
                                  <Grid item xs={12}  mb={3} pl={2} sx={{"@media (max-width: 376px)": {pl: 0}}}>
                                    
                                    <FormControlLabel control={<Checkbox checked={volunteerChecked} onChange={(event) => setvolunteerChecked(event.target.checked)}/>} label="Currently Volunteering" /> {/*if need to make this requires put required before control and if need to make it already checked put check inside the control next to the Checkbx*/}
                                    
                                  </Grid>
                                  
                                </Grid>
                              {/*</Box>*/}
                                  
                          </div>
                                
                            <div className='Clubs-RightColumn'>
                              {/* <CustomizedHookLarge width={360}  height={373} data={SkillsEarned} label={<Typography>Skills Earned</Typography>}/> */}
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
export default Clubs;