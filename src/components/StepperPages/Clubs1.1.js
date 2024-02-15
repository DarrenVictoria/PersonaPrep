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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { collection, doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';


const Club2 = () => {
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
    for (let year = 2023; year >= 1990; year--) {
    yearOption.push(String(year));
    }
    const [Club2Name, setClub2Name] = useState('');
    const [Club2StartMonth, setClub2StartMonth] = useState('');
    const [Club2StartYear, setClub2StartYear] = useState('');
    const [Club2EndMonth, setClub2EndMonth] = useState('');
    const [Club2EndYear, setClub2EndYear] = useState('');
    const [Club2Volunteer, setClub2Volunteer] = useState('no');
    const [Club2VolunteerChecked, setClub2VolunteerChecked] = useState(false);
   

    


    //Use state for auto complete component for RolesPlayed
    const  Clbs_RolesPlayed = ['Volunteer','Member','Council Members'];
    const [Club2RolesPlayed, setClub2RolesPlayed] = useState([]);//usestate for autocomplete Roles played
    const maxSelectionsRolesPlayed = 3;//max value for the autocomplete
    const handleClub2RolesPlayed = (event, newSkill) => {
        if (newSkill.length <= maxSelectionsRolesPlayed) {
            setClub2RolesPlayed(newSkill);
        }
    };
    const isOptionDisabledRolesPlayed = (option) => {
        return Club2RolesPlayed.length >= maxSelectionsRolesPlayed && !Club2RolesPlayed.includes(option);
    };
    
    console.log(Club2RolesPlayed);
    

//Use state for auto complete component for SkillsEarned
    const Clbs_SkillsEarned = ['Leadership#','Teamwork'];
    const [Club2SkillsEarned, setClub2SkillsEarned] = useState([]);//usestate for autocomplete skills earned
    const maxSelectionsSkillsEarned = 3;//max value for the autocomplete
    const handleClub2SkillsEarned = (event, newSkill) => {
        if (newSkill.length <= maxSelectionsSkillsEarned) {
            setClub2SkillsEarned(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return Club2SkillsEarned.length >= maxSelectionsSkillsEarned && !Club2SkillsEarned.includes(option);
    };
    
    console.log(Club2SkillsEarned);

    useEffect(() => {
      if(!Club2VolunteerChecked) setClub2Volunteer('no');
      else setClub2Volunteer('yes');
    }, [Club2VolunteerChecked]);

    const navigate = useNavigate();
    const prevPage = () => navigate('/clubsAndSocs');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            Club2Name,
            Club2StartMonth,
            Club2StartYear,
            Club2EndMonth,
            Club2EndYear,
            Club2Volunteer,
            Club2RolesPlayed,
            Club2SkillsEarned,
            Club2VolunteerChecked
        };
    
        // Send data to Firestore
        await sendClubDataToFirestore(formData);
    
        // Navigate to the next page
       
    };
    
    const sendClubDataToFirestore = async (data) => {
        try {
            const db = getFirestore();
            const userDocument = doc(collection(db, 'studentdetails'), currentUser.email);
    
            const docSnapshot = await getDoc(userDocument);
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                let clubs = userData.clubs || []; // Retrieve the clubs data array or initialize an empty array
    
                // Check if index 0 exists in the clubs data array
                if (clubs.length > 0) {
                    // Update fields of Club 1 at index 0
                    clubs[0] = {
                        ...clubs[0],
                        ...data
                    };
                } else {
                    // Create a new entry for Club 1
                    clubs.push(data);
                }
    
                // Update the document with the modified clubs data array
                await setDoc(userDocument, { clubs }, { merge: true });
                navigate('/publications')
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error adding club info to Firestore: ', error);
        }
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const userDocument = doc(collection(db, 'studentdetails'), currentUser.email);
    
                const docSnapshot = await getDoc(userDocument);
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    const clubData = userData.clubs && userData.clubs.length > 0 ? userData.clubs[0] : null;
    
                    if (clubData) {
                        setClub2Name(clubData.Club2Name || '');
                        setClub2StartMonth(clubData.Club2StartMonth || '');
                        setClub2StartYear(clubData.Club2StartYear || '');
                        setClub2EndMonth(clubData.Club2EndMonth || '');
                        setClub2EndYear(clubData.Club2EndYear || '');
                        setClub2Volunteer(clubData.Club2Volunteer || 'no');
                        setClub2RolesPlayed(clubData.Club2RolesPlayed || []);
                        setClub2SkillsEarned(clubData.Club2SkillsEarned || []);
                        setClub2VolunteerChecked(clubData.Club2VolunteerChecked || false);
                    }
                } else {
                    console.error('Document does not exist for the current user.');
                }
            } catch (error) {
                console.error('Error fetching data from Firestore: ', error);
            }
        };
    
        fetchData();
    }, [currentUser]);






    
    

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
                                <Grid item xs={12} mb={1}>
                                <Typography ><span style={{color: 'red'}}>*</span> Club / Society you were a part of ?</Typography>
                                  </Grid>
                                  <Grid item xs={12} mb={3}>
                                      {/* <EditableChoose
                                        options={["Clubs","Club2", "Club2", "Club3"]}
                                        onSelect={setClub2Name}
                                        disabledOptions={["Clubs"]}
                                        isRequired={true}
                                        //the below width did not work have to check
                                        
                                        /> */}
                                        <FormControl variant="outlined" fullWidth>
                                          <Select
                                              value={Club2Name}
                                              onChange={(event) => setClub2Name(event.target.value)}
                                              displayEmpty
                                              input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD'}} />}
                                              IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                              required
                                              
                                          >
                                              <MenuItem disabled value="">Clubs</MenuItem>
                                              <MenuItem value="Club2">Club2</MenuItem>
                                              <MenuItem value="Club2">Club2</MenuItem>
                                              <MenuItem value="Club3">Club3</MenuItem>
                                              
                                          </Select>
                                        </FormControl>
                                    
                                  </Grid>
                                  <Grid item xs={12} mb={1}>
                                  <Typography ><span style={{color: 'red'}}>*</span> Start Date</Typography>
                                  </Grid>
                                  <Grid item xs={6} mb={3} pr={1}>
                                    
                                  {/* <EditableChoose
                                  options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                  onSelect={setClub2StartMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={Club2StartMonth}
                                        onChange={(event) => setClub2StartMonth(event.target.value)}
                                        displayEmpty
                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                        required
                                    >
                                        <MenuItem disabled value="">Month</MenuItem>
                                        {monthOption.map (option => (
                                            <MenuItem  key={option.value} value={option.value}>{option.label}</MenuItem>
                                        ))}
                                    </Select>
                                  </FormControl>
                                    
                                  </Grid>
                                  <Grid item xs={6} mb={3} pl={1}>
                                  {/* <EditableChoose
                                  options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                  onSelect={setClub2StartYear}
                                  disabledOptions={["2024"]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={Club2StartYear}
                                          onChange={(event) => setClub2StartYear(event.target.value)}
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
                                  <Typography ><span style={{color: 'red'}}>*</span> End Date</Typography>
                                  </Grid>
                                  <Grid item xs={6} mb={3} pr={1}>
                                    
                                  {/* <EditableChoose
                                  options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                  onSelect={setClub2EndMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={Club2EndMonth}
                                          onChange={(event) => setClub2EndMonth(event.target.value)}
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
                                  options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                  onSelect={setClub2EndYear}
                                  disabledOptions={["2024"]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={Club2EndYear}
                                          onChange={(event) => setClub2EndYear(event.target.value)}
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
                                  {/* /*<Grid item xs={1}>
                                    {this is a blank space just to take the correct position of the below check box }
                                  </Grid>*/}



                                  <Grid item xs={12} mb={3}>
                                    
                                    <Typography mb={1} mt={3}>Roles Played</Typography>
                                      <Stack spacing={3}>
                                              <Autocomplete
                                                  multiple
                                                  id="tags-outlined"
                                                  options={Clbs_RolesPlayed}
                                                  value={Club2RolesPlayed} 
                                                  onChange={handleClub2RolesPlayed}
                                                  filterSelectedOptions
                                                  disableCloseOnSelect
                                                  getOptionDisabled={isOptionDisabledRolesPlayed}
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
                                  <Grid item xs={12} mb={3}>                                    
                                  <Typography mb={1} mt={3}>Skills Earned</Typography>
                                        <Stack spacing={3}>
                                                <Autocomplete
                                                    multiple
                                                    id="tags-outlined"
                                                    options={Clbs_SkillsEarned}
                                                    value={Club2SkillsEarned} 
                                                    onChange={handleClub2SkillsEarned}
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