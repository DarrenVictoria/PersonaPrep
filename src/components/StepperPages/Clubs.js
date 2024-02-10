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
import Dialog from "@mui/material/Dialog";//dialog
import DialogActions from "@mui/material/DialogActions";//dialog
import DialogContent from "@mui/material/DialogContent";//dialog
import DialogContentText from "@mui/material/DialogContentText";//dialog
import DialogTitle from "@mui/material/DialogTitle";//dialog
import useMediaQuery from "@mui/material/useMediaQuery";//dialog
import { useTheme } from "@mui/material/styles";//dialog
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const Club1 = () => {
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
    const [Club1Name, setClub1Name] = useState('');
    const [Club1StartMonth, setClub1StartMonth] = useState('');
    const [Club1StartYear, setClub1StartYear] = useState('');
    const [Club1EndMonth, setClub1EndMonth] = useState('');
    const [Club1EndYear, setClub1EndYear] = useState('');
    const [Club1Volunteer, setClub1Volunteer] = useState('no');
    const [Club1VolunteerChecked, setClub1VolunteerChecked] = useState(false);
    const [Club1RolesPlayed, setClub1RolesPlayed] = useState([]);
    const [Club1SkillsEarned, setClub1SkillsEarned] = useState([]);

    const Clbs_RolesPlayed = [{data:"Volunteer"},{data:"Council Member"},{data:"Council Members"},{data:"Council Memberv"},{data:"Council Membere"},{data:"Council Memberw"}];
    const Clbs_SkillsEarned = [{data:"Leadership"},{data:"Teamwork"}];


    const handleClub1RolesPlayed = function (ev, val, reason, details) {
      if (ev.target.classList.contains('MuiSvgIcon-root')){
          // Removing Value
          const value = ev.target.parentElement.querySelector('span').innerHTML;
          setClub1RolesPlayed(Club1RolesPlayed.filter(item => item !== value));
      } else {
          const value = ev.target.innerHTML;
          Club1RolesPlayed.push(value);
      }
      console.log(Club1RolesPlayed);
    }

    const handleClub1SkillsEarned = function (ev, val, reason, details) {
      if (ev.target.classList.contains('MuiSvgIcon-root')){
          // Removing Value
          const value = ev.target.parentElement.querySelector('span').innerHTML;
          setClub1SkillsEarned(Club1SkillsEarned.filter(item => item !== value));
      } else {
          const value = ev.target.innerHTML;
          Club1SkillsEarned.push(value);
      }
      console.log(Club1SkillsEarned);
  }

    useEffect(() => {
      if(!Club1VolunteerChecked) setClub1Volunteer('no');
      else setClub1Volunteer('yes');
    }, [Club1VolunteerChecked]);

    const navigate = useNavigate();
    const prevPage = () => navigate('/certification');
    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate('/Secondclub')
        // validate();

        // Check if validation passed
        // if (validation) {
        //     // Call the function to add data to Firestore
        //     addDataToFirestore();
        // } else {
        //     console.log('Validation failed');
        // }
    };
    //below code for dialog
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleYes = () => {
        
      navigate('/Secondclub')
        
    };
    const handleNo = () => {
        
      navigate('/publications')
    
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
                                <Grid item xs={12} mb={1}>
                                <Typography ><span style={{color: 'red'}}>*</span> Club / Society you were a part of ?</Typography>
                                  </Grid>
                                  <Grid item xs={12} mb={3}>
                                      {/* <EditableChoose
                                        options={["Clubs","Club1", "Club2", "Club3"]}
                                        onSelect={setClub1Name}
                                        disabledOptions={["Clubs"]}
                                        isRequired={true}
                                        //the below width did not work have to check
                                        
                                        /> */}
                                        <FormControl variant="outlined" fullWidth>
                                          <Select
                                              value={Club1Name}
                                              onChange={(event) => setClub1Name(event.target.value)}
                                              displayEmpty
                                              input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD'}} />}
                                              IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                              required
                                              
                                          >
                                              <MenuItem disabled value="">Clubs</MenuItem>
                                              <MenuItem value="Club1">Club1</MenuItem>
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
                                  onSelect={setClub1StartMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                  <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={Club1StartMonth}
                                        onChange={(event) => setClub1StartMonth(event.target.value)}
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
                                  onSelect={setClub1StartYear}
                                  disabledOptions={["2024"]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                  <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={Club1StartYear}
                                          onChange={(event) => setClub1StartYear(event.target.value)}
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
                                  onSelect={setClub1EndMonth}
                                  disabledOptions={[]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                    <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={Club1EndMonth}
                                          onChange={(event) => setClub1EndMonth(event.target.value)}
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
                                  onSelect={setClub1EndYear}
                                  disabledOptions={["2024"]}
                                  isRequired={true}
                                  //the below width did not work have to check
                                
                                /> */}
                                    <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={Club1EndYear}
                                          onChange={(event) => setClub1EndYear(event.target.value)}
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
                                    
                                    <CustomizedHook onChange={handleClub1RolesPlayed} data={Clbs_RolesPlayed} label={<Typography>Roles Played</Typography>}/>
                                  
                                    
                                  </Grid>
                                  <Grid item xs={12} mb={3}>                                    
                                    <CustomizedHook onChange={handleClub1SkillsEarned} data={Clbs_SkillsEarned} label={<Typography>Skills Earned</Typography>}/>
                                  </Grid>

                                  <Grid item xs={12}  mb={3} pl={2} sx={{"@media (max-width: 376px)": {pl: 0}}}>
                                    
                                    <FormControlLabel control={<Checkbox checked={Club1VolunteerChecked} onChange={(event) => setClub1VolunteerChecked(event.target.checked)}/>} label="Currently Volunteering" /> {/*if need to make this requires put required before control and if need to make it already checked put check inside the control next to the Checkbx*/}
                                    
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
                                <Button type='submit' onClick={handleClickOpen} style={next}>Next Step</Button>         
                                <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                        sx={{backdropFilter: "blur(5px)"}}
                                    >
                                        <DialogTitle id="responsive-dialog-title">
                                        {"Do you have more clubs?"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                          If you wish to add more clubs please click on Yes.If you wish to skip to next page click on No  
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button autoFocus onClick={handleNo} >
                                            No
                                        </Button>
                                        <Button onClick={handleYes} autoFocus >
                                            Yes
                                        </Button>
                                        </DialogActions>
                                    </Dialog>                                      
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    </div> 

    )

}
export default Club1;