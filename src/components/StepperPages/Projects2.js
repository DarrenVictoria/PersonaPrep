import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../FileUpload';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import cphone from '../../assets/images/iconcphone.svg';
import { useState } from 'react';
import EditableChoose from '../EditableSelectOption';


const Projects_2 = () => {
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const [projPlace, setProjPlace] = useState('');
    const [projEvidence, setProjEvidence] = useState('');

    const projEvidenceChange = (event) => setProjEvidence(event.target.value);

    return(
        <div className="personalInfo-main">
            <div className="personalInfo-leftCol">
                <Grid container>
                <Grid item xs={12} mb={-2}>
                        <Typography><span style={{color: 'red'}}>*</span>Project Start Date</Typography>
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
                        <Typography><span style={{color: 'red'}}>*</span>Project End Date</Typography>
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
                    <Grid item xs={12} mb={-2}>
                        <Typography>Where this project took place (optional)</Typography>
                    </Grid>
                    <Grid item xs={12} md={5} mb={3}>
                        <EditableChoose
                            options={["Place", "University","University"]}
                            onSelect={setProjPlace}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>Project evidence</Typography>
                        <TextField type="text" variant="outlined" value={projEvidence} onChange={projEvidenceChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/>
                    </Grid>
                    <Grid item xs={12} mb={2} style={{display: 'flex', justifyContent: 'center'}}>
                        <Typography>-OR-</Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <FileUpload />
                    </Grid>
                </Grid>
            </div>

            <div className="personalInfo-rightCol">

                <Card variant="outlined" sx={{ height:'100%',maxHeight: '400px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:769px)':{overflowY:'hidden',},}}>

                    <CardContent >
                        <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Project Experience Tips</Typography>
                        <List>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar sx={{borderRadius: '12px'}}>
                                        <img src={cphone} alt="Custom Icon" style={{ width: '27px', height: '31px' }}/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant='body1' >
                                        Provide accurate project start and end dates for a clear timeline.
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
                                        Be specific about what the project is associated with for better understanding.
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
                                        Add clear and relevant screenshots to show your project evidence effectively.
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
export default Projects_2