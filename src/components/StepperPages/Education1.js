import './css/personalInfo.css';
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
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';

const Education_1 = () => {
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [schoolCity, setSchoolCity] = useState('');
    const [schoolCountry, setSchoolCountry] = useState('');

    const schoolNameChange = (event) => setSchoolName(event.target.value);
    const schoolCityChange = (event) => setSchoolCity(event.target.value);
    const schoolCountryChange = (event) => setSchoolCountry(event.target.value);

    return(
        <div className="personalInfo-main">
            <div className="personalInfo-leftCol">
                <Grid container>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>School Name</Typography>
                        <TextField type="text" variant="outlined" value={schoolName} onChange={schoolNameChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='St. Thomas Catholic International'/>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>School experience or description</Typography>
                        <CustomMultilineTextFields height='100px' />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>City</Typography>
                        <TextField type="text" variant="outlined" value={schoolCity} onChange={schoolCityChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                        <TextField type="text" variant="outlined" value={schoolCountry} onChange={schoolCountryChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
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
                    
                        
                </Grid>
            </div>

            <div className="personalInfo-rightCol">
                <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                    <Card variant="outlined" sx={{height:'100%',maxHeight: '400px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>                    <CardContent >
                        <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Educational Experience Tips</Typography>
                        <List>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar sx={{borderRadius: '12px'}}>
                                        <img src={cphone} alt="Custom Icon" style={{ width: '27px', height: '31px' }}/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant='body1' >
                                        Start with your most recent educational institution.
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
                                        Mention any outstanding grades or awards / qualifications you may have.
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
                                        Provide links for your digital certificates and be prepared to upload any physical certificates when required.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )

}
export default Education_1