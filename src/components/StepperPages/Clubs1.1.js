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

const Club2 = () => {
    const [Club2Name, setClub2Name] = useState('');
    const [Club2StartMonth, setClub2StartMonth] = useState('');
    const [Club2StartYear, setClub2StartYear] = useState('');
    const [Club2EndMonth, setClub2EndMonth] = useState('');
    const [Club2EndYear, setClub2EndYear] = useState('');
    const [Club2Volunteer, setClub2Volunteer] = useState('no');
    const [Club2VolunteerChecked, setClub2VolunteerChecked] = useState(false);
    const [Club2RolesPlayed, setClub2RolesPlayed] = useState([]);
    const [Club2SkillsEarned, setClub2SkillsEarned] = useState([]);

    const Clbs_RolesPlayed = [{data:"Volunteer"},{data:"Council Member"},{data:"Council Members"},{data:"Council Memberv"},{data:"Council Membere"},{data:"Council Memberw"}];
    const Clbs_SkillsEarned = [{data:"Leadership"},{data:"Teamwork"}];


    const handleClub2RolesPlayed = function (ev, val, reason, details) {
      if (ev.target.classList.contains('MuiSvgIcon-root')){
          // Removing Value
          const value = ev.target.parentElement.querySelector('span').innerHTML;
          setClub2RolesPlayed(Club2RolesPlayed.filter(item => item !== value));
      } else {
          const value = ev.target.innerHTML;
          Club2RolesPlayed.push(value);
      }
      console.log(Club2RolesPlayed);
    }

    const handleClub2SkillsEarned = function (ev, val, reason, details) {
      if (ev.target.classList.contains('MuiSvgIcon-root')){
          // Removing Value
          const value = ev.target.parentElement.querySelector('span').innerHTML;
          setClub2SkillsEarned(Club2SkillsEarned.filter(item => item !== value));
      } else {
          const value = ev.target.innerHTML;
          Club2SkillsEarned.push(value);
      }
      console.log(Club2SkillsEarned);
  }

    useEffect(() => {
      if(!Club2VolunteerChecked) setClub2Volunteer('no');
      else setClub2Volunteer('yes');
    }, [Club2VolunteerChecked]);

    const navigate = useNavigate();
    const prevPage = () => navigate('/clubsAndSocs');
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
            <InterviewFormHeader title='Second Club' />
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
                                        options={["Clubs","Club1", "Club2", "Club3"]}
                                        onSelect={setClub2Name}
                                        disabledOptions={["Clubs"]}
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
                                  onSelect={setClub2StartMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                />
                                    
                                  </Grid>
                                  <Grid item xs={6} mb={3} pl={1}>
                                  <EditableChoose
                                  options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                  onSelect={setClub2StartYear}
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
                                  onSelect={setClub2EndMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                />
                                    
                                  </Grid>
                                  <Grid item xs={6} mb={3} pl={1}>
                                  <EditableChoose
                                  options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                  onSelect={setClub2EndYear}
                                  disabledOptions={["2024"]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                />
                                    
                                  </Grid>
                                  {/* /*<Grid item xs={1}>
                                    {this is a blank space just to take the correct position of the below check box }
                                  </Grid>*/}



                                  <Grid item xs={12} mb={3}>
                                    
                                    <CustomizedHook onChange={handleClub2RolesPlayed} data={Clbs_RolesPlayed} label={<Typography>Roles Played</Typography>}/>
                                  
                                    
                                  </Grid>
                                  <Grid item xs={12} mb={3}>                                    
                                    <CustomizedHook onChange={handleClub2SkillsEarned} data={Clbs_SkillsEarned} label={<Typography>Skills Earned</Typography>}/>
                                  </Grid>

                                  <Grid item xs={12}  mb={3} pl={2} sx={{"@media (max-width: 376px)": {pl: 0}}}>
                                    
                                    <FormControlLabel control={<Checkbox checked={Club2VolunteerChecked} onChange={(event) => setClub2VolunteerChecked(event.target.checked)}/>} label="Currently Volunteering" /> {/*if need to make this requires put required before control and if need to make it already checked put check inside the control next to the Checkbx*/}
                                    
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
export default Club2;