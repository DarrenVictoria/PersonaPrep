import React from 'react';
import './css/WorkExperience1.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import cphone from '../../assets/images/iconcphone.svg';
import EditableChoose from '../EditableSelectOption';
import FormGroup from "@mui/material/FormGroup";//for the check box
import FormControlLabel from "@mui/material/FormControlLabel";//for the check box
import Checkbox from "@mui/material/Checkbox";//for the check box
import { useState } from 'react';

const WorkExperience = () => {
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    return(
        <div className="WorkExperience1-Maindiv">
        <div className="WorkExperience1-LeftColumn">
            <Grid container>
                <Grid item xs={12} mb={3}>
                    <Typography mb={1}><span style={{color: 'red'}}>*</span>Job Title</Typography>
                    <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Full Stack Developer'/>
                </Grid>
                <Grid item xs={12} mb={3}>
                    <Typography mb={1}><span style={{color: 'red'}}>*</span>Company</Typography>
                    <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Surge Global Pvt.'/>
                </Grid>
                <Grid item xs={6} mb={3} pr={1}>
                    <Typography mb={1}><span style={{color: 'red'}}>*</span>City</Typography>
                    <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Colombo'/>
                </Grid>
                <Grid item xs={6} mb={3} pl={1}>
                    <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                    <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='00300'/>
                </Grid>
                <Grid item xs={12} mb={-2}>
                    <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                </Grid>
                <Grid item xs={6} pr={1}>
                    <EditableChoose
                        options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                        onSelect={setStartMonth}
                        disabledOptions={[]}
                    />
                </Grid>
                <Grid item xs={6} mb={3} pl={1}>
                    <EditableChoose
                        options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                        onSelect={setStartYear}
                        disabledOptions={["2024"]}
                    />
                </Grid>
                <Grid item xs={12} mb={-2}>
                    <Typography><span style={{color: 'red'}}>*</span>End Date</Typography>
                </Grid>
                <Grid item xs={6} pr={1}>
                    <EditableChoose
                        options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                        onSelect={setEndMonth}
                        disabledOptions={[]}
                    />
                </Grid>
                <Grid item xs={6} mb={3} pl={1}>
                    <EditableChoose
                        options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                        onSelect={setEndYear}
                        disabledOptions={["2024"]}
                    />
                </Grid>
                <Grid item xs={12} mb={3} pl={2}>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Currently Work here" /> {/*if need to make this requires put required before control and if need to make it already checked put check inside the control next to the Checkbx*/}
                    </FormGroup>
                </Grid>
                    
            </Grid>
        </div>

        <div className="WorkExperience1-RightColumn">
            <Card variant="outlined" sx={{ height:'100%',maxHeight: '400px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:768px)':{overflowY:'hidden',},}}>
                <CardContent >
                    <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Work Experience tips</Typography>
                    <List>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar sx={{borderRadius: '12px'}}>
                                    <img src={cphone} alt="Custom Icon" style={{ width: '27px', height: '31px' }}/>
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
                                {/* <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}> */}
                                <Avatar sx={{borderRadius: '12px', padding: '5px'}}>
                                    <img src={cphone} alt="Custom Icon" style={{ width: 'var(--40,40px)', height: '35.666px' }} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant='body1'>
                                    If you are currently working at the mentioned company don't forget select the 'I currently work here' option.
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                                    <img src={cphone} alt="Custom Icon" style={{ width: '41px', height: '39px' ,}} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant='body1'>
                                    Select the Accurate start and end dates for each role to maintain professionalism.
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    </div>
    )

}
export default WorkExperience