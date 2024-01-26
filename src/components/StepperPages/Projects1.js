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
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { CustomizedHook } from '../TextfieldButtonDataDisplay';

const Projects_1 = () => {
    const [projType, setProjType] = useState('');
    const skills = [{data: 'c#',}, {data: 'react'}, {data: 'java'}];

    return(
        <div className="personalInfo-main">
            <div className="personalInfo-leftCol">
                <Grid container>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>Project Name</Typography>
                        <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/>
                    </Grid>
                    <Grid item xs={12} mb={-2}>
                        <Typography><span style={{color: 'red'}}>*</span>Was it an individual or a group project?</Typography>
                    </Grid>
                    <Grid item xs={12} md={5} mb={3}>
                        <EditableChoose
                            options={["Group Project","Individual Project"]}
                            onSelect={setProjType}
                            disabledOptions={[]}
                        />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>What was your role in the project</Typography>
                        <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Full stack developer'/>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography><span style={{color: 'red'}}>*</span>Are you still working on the project?</Typography>
                    </Grid>
                    <Grid item xs={12} mb={2} pl={2}>
                        <FormControl>
                            <RadioGroup row name="project-working-status">
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} >
                        <CustomizedHook data={skills} label={<Typography mb={1}><span style={{color: 'red'}}>*</span>What are the skills gained from the project?</Typography>}/>
                    </Grid>
                </Grid>
            </div>

            <div className="personalInfo-rightCol">
                <Card variant="outlined" sx={{ height:'100%',maxHeight: '350px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:768px)':{overflowY:'hidden',},}}>
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
                                        Fill in all the information about your most recent Project to fill in this section.
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
                                        Clearly state your role in each project for a more insight.
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
                                        Choose keywords from the preset list when adding your skills gained from the project.
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
export default Projects_1