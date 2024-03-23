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
    const StartyearOption = ["2024"];
        for (let year = 2023; year >= 2015; year--) {
            StartyearOption.push(String(year));
        }
        const EndyearOption = ["2023"];
        for (let year = 2024; year <= 2025; year++) {
            EndyearOption.push(String(year));
        }
    const [ClubName, setClubName] = useState('');
    const [ClubStartMonth, setClubStartMonth] = useState('');
    const [ClubStartYear, setClubStartYear] = useState('');
    const [ClubEndMonth, setClubEndMonth] = useState('');
    const [ClubEndYear, setClubEndYear] = useState('');
    const [ClubVolunteer, setClubVolunteer] = useState('no');
    const [ClubVolunteerChecked, setClubVolunteerChecked] = useState(false);
   

    


    //Use state for auto complete component for RolesPlayed
    const  Clbs_RolesPlayed = [
        'Volunteer',
        'Top board',
        'Executive committee',
        'President',
        'Vice president',
        'Secretary',
        'Assistant secretary',
        'Treasurer',
        'Assistant treasurer',
        'Designer',
        'Director – social media',
        'Director – arts',
        'Media coordinator',
        'Event coordinator',
        'Director of events',
        'Editor',
        'Content writer',
        'Executive member',
        'Council member',
        'Chairperson',
        'Vice chairperson'
    ];
    const [ClubRolesPlayed, setClubRolesPlayed] = useState([]);//usestate for autocomplete Roles played
    const maxSelectionsRolesPlayed = 3;//max value for the autocomplete
    const handleClubRolesPlayed = (event, newSkill) => {
        if (newSkill.length <= maxSelectionsRolesPlayed) {
            setClubRolesPlayed(newSkill);
        }
    };
    const isOptionDisabledRolesPlayed = (option) => {
        return ClubRolesPlayed.length >= maxSelectionsRolesPlayed && !ClubRolesPlayed.includes(option);
    };
    
    console.log(ClubRolesPlayed);
    

    //Use state for auto complete component for SkillsEarned
    const Clbs_SkillsEarned = [
        "Teamwork",
        "Leadership",
        "Communication",
        "Problem-solving",
        "Time management",
        "Adaptability",
        "Critical thinking",
        "Creativity",
        "Networking",
        "Project management"
    ];
    const [ClubSkillsEarned, setClubSkillsEarned] = useState([]);//usestate for autocomplete skills earned
    const maxSelectionsSkillsEarned = 3;//max value for the autocomplete
    const handleClubSkillsEarned = (event, newSkill) => {
        if (newSkill.length <= maxSelectionsSkillsEarned) {
            setClubSkillsEarned(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return ClubSkillsEarned.length >= maxSelectionsSkillsEarned && !ClubSkillsEarned.includes(option);
    };
    
    console.log(ClubSkillsEarned);

    useEffect(() => {
      if(!ClubVolunteerChecked) setClubVolunteer('no');
      else setClubVolunteer('yes');
    }, [ClubVolunteerChecked]);

    const navigate = useNavigate();
    const prevPage = () => navigate('/clubsAndSocs');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            ClubName,
            ClubStartMonth,
            ClubStartYear,
            ClubEndMonth,
            ClubEndYear,
            ClubVolunteer,
            ClubRolesPlayed,
            ClubSkillsEarned,
            ClubVolunteerChecked
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
                    clubs[1] = {
                        ...clubs[1],
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
                    const clubData = userData.clubs && userData.clubs.length > 1 ? userData.clubs[1] : null;
    
                    if (clubData) {
                        setClubName(clubData.ClubName || '');
                        setClubStartMonth(clubData.ClubStartMonth || '');
                        setClubStartYear(clubData.ClubStartYear || '');
                        setClubEndMonth(clubData.ClubEndMonth || '');
                        setClubEndYear(clubData.ClubEndYear || '');
                        setClubVolunteer(clubData.ClubVolunteer || 'no');
                        setClubRolesPlayed(clubData.ClubRolesPlayed || []);
                        setClubSkillsEarned(clubData.ClubSkillsEarned || []);
                        setClubVolunteerChecked(clubData.ClubVolunteerChecked || false);
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
            <InterviewFormHeader title='Club 2/2' />
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
                                        options={["Clubs","Club", "Club", "Club3"]}
                                        onSelect={setClubName}
                                        disabledOptions={["Clubs"]}
                                        isRequired={true}
                                        //the below width did not work have to check
                                        
                                        /> */}
                                        <FormControl variant="outlined" fullWidth>
                                          <Select
                                              value={ClubName}
                                              onChange={(event) => setClubName(event.target.value)}
                                              displayEmpty
                                              input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD'}} />}
                                              IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                              required
                                              
                                          >
                                              <MenuItem disabled value="">Clubs</MenuItem>
                                              <MenuItem value="Club">Club</MenuItem>
                                              <MenuItem value="Club">Club</MenuItem>
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
                                  onSelect={setClubStartMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={ClubStartMonth}
                                        onChange={(event) => setClubStartMonth(event.target.value)}
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
                                  onSelect={setClubStartYear}
                                  disabledOptions={["2024"]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={ClubStartYear}
                                          onChange={(event) => setClubStartYear(event.target.value)}
                                          displayEmpty
                                          input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                          IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                          required
                                      >
                                          <MenuItem disabled value="">Year</MenuItem>
                                          {StartyearOption.map(year => (
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
                                  onSelect={setClubEndMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={ClubEndMonth}
                                          onChange={(event) => setClubEndMonth(event.target.value)}
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
                                  onSelect={setClubEndYear}
                                  disabledOptions={["2024"]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={ClubEndYear}
                                          onChange={(event) => setClubEndYear(event.target.value)}
                                          displayEmpty
                                          input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                          IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                          required
                                      >
                                          <MenuItem disabled value="">Year</MenuItem>
                                          {EndyearOption.map(year => (
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
                                                  value={ClubRolesPlayed} 
                                                  onChange={handleClubRolesPlayed}
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
                                                    value={ClubSkillsEarned} 
                                                    onChange={handleClubSkillsEarned}
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
                                    
                                    <FormControlLabel control={<Checkbox checked={ClubVolunteerChecked} onChange={(event) => setClubVolunteerChecked(event.target.checked)}/>} label="Currently Volunteering" /> {/*if need to make this requires put required before control and if need to make it already checked put check inside the control next to the Checkbx*/}
                                    
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