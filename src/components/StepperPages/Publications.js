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
import cstat from '../../assets/images/iconcstat.svg';
import ckey from '../../assets/images/iconckeyboard.svg';
import cbatch from '../../assets/images/iconcbatch.svg';
import EditableChoose from '../EditableSelectOption';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import { useState } from 'react';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import InterviewFormFooter from '../InterviewFormFooter';
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

const Publications = () => {
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

    const [PblMonth, setPblMonth] = useState('');
    const [PblYear, setPblYear] = useState('');
    const [PblDesc, setPblDesc] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const PblTitle = watch('PblTitle');
    const Publisher = watch('Publisher');
    const PblUrl = watch('PblUrl');

    const navigate = useNavigate();
    const prevPage = () => navigate('/clubsAndSocs');
    const onSubmit = (e) => {
        // e.preventDefault();
        navigate('/skilltrack')
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
            <InterviewFormHeader title='Publication' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className='Publications-Maindiv'>
                                    <div className='Publications-LeftColumn'>
                                    {/*<Box sx={{ flexGrow: 1 }}>*/}
                                    <Grid container spacing={2} >
                                      <Grid item xs={12}>
                                        
                                      <Typography ><span style={{color: 'red'}}>*</span> Publication Title</Typography>
                                          {/* <TextField type="text" variant="outlined" value={PblTitle} onChange={(event) => setPblTitle(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}} /> */}
                                          <TextField type="text" variant="outlined" fullWidth required  
                                          value={PblTitle}
                                          InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                          placeholder=''
                                          {...register("PblTitle", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                          />
                                          {errors.PblTitle &&  "Please enter only letters"}
                                      </Grid>
                                      <Grid item xs={12}>
                                        
                                      <Typography ><span style={{color: 'red'}}>*</span> Publication / Publisher</Typography>
                                          {/* <TextField type="text" variant="outlined" value={Publisher} onChange={(event) => setPublisher(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/> */}
                                          <TextField type="text" variant="outlined" fullWidth required  
                                          value={Publisher}
                                          InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                          placeholder=''
                                          {...register("Publisher", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                          />
                                          {errors.Publisher &&  "Please enter only letters"}
                                      </Grid>
                                      <Grid item xs={12} mb={1}>
                                      <Typography ><span style={{color: 'red'}}>*</span> Publication date</Typography>
                                      </Grid>
                                      <Grid item xs={6}>
                                        
                                      {/* <EditableChoose
                                      options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                      onSelect={setPblMonth}
                                      disabledOptions={[]}
                                      isRequired={true}
                                      
                                    
                                    /> */}
                                     <FormControl variant="outlined" fullWidth>
                                        <Select
                                            value={PblMonth}
                                            onChange={(event) => setPblMonth(event.target.value)}
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
                                      <Grid item xs={6}>
                                      {/* <EditableChoose
                                      options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                      onSelect={setPblYear}
                                      disabledOptions={["2024"]}
                                      isRequired={true}
                                      
                                    
                                    /> */}
                                    <FormControl variant="outlined" fullWidth>
                                      <Select
                                          value={PblYear}
                                          onChange={(event) => setPblYear(event.target.value)}
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
                                      <Grid item xs={12}>
                                        
                                      <Typography ><span style={{color: 'red'}}>*</span> Publication URL</Typography>
                                          {/* <TextField type="text" variant="outlined" value={PblUrl} onChange={(event) => SetPblUrl(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/> */}
                                          <TextField type="text" variant="outlined" fullWidth required  
                                            value={PblUrl}
                                            InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                            placeholder=''
                                            {...register("PblUrl", { maxLength: 30 })}
                                            />
                                            {/* {errors.PblUrl &&  "Please enter only letters"} */}
                                      </Grid>
                                      <Grid item xs={12}>
                                        
                                        <Typography ><span style={{color: 'red'}}>*</span> Project Description</Typography>
                                        {/* <CustomMultilineTextFields  height="115px" value={PblDesc} onChange={(event) => setPblDesc(event.target.value)} required /> */}
                                        <CustomMultilineTextFieldslimited
                                            inputHeight="150px"
                                            maxWidth="1300px"
                                            isRequired={true}
                                            value={PblDesc}
                                            onChange={(event) => setPblDesc(event.target.value)}
                                            maxWords={50} 
                                        />
                                      </Grid>
                                      
                                    </Grid>
                                  {/*</Box>*/}
                                      
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