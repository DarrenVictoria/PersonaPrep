import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../FileUpload';
import TestAutoComplete from '../TestAutoComplete';
import { CustomizedHook } from '../TextfieldButtonDataDisplay';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import cphone from '../../assets/images/iconcphone.svg';
import { useState } from 'react';

const PersonalInfo = () => {
    const job_roles = [{data:"role1"}, {data:"role2"}, {data:"role3"}];
    const [phone, setPhone] = useState('');

    const phoneChange = (event) => setPhone(event.target.value);
    
    return(
        <div className="personalInfo-main">
            <div className="personalInfo-leftCol">
                <Grid container>
                    <Grid item xs={12} mb={3}>
                        <Typography><span style={{color: 'red'}}>*</span>Phone</Typography>
                        <TextField type="text" variant="outlined" value={phone} onChange={phoneChange} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography mb={1}><span style={{color: 'red'}}>*</span>Profile Picture</Typography>
                        <FileUpload />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <CustomizedHook data={job_roles} label={<Typography mb={1}><span style={{color: 'red'}}>*</span>What job roles are you aspiring for? Min 1 / Max 3</Typography>}/>
                    </Grid>
                </Grid>
            </div>

            <div className="personalInfo-rightCol">
                <Card variant="outlined" sx={{ height:'100%',maxHeight: '450px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:769px)':{overflowY:'hidden',},}}>
                    <CardContent >
                        <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Personal Info Tips</Typography>
                        <List>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar sx={{borderRadius: '12px'}}>
                                        <img src={cphone} alt="Custom Icon" style={{ width: '27px', height: '31px' }}/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant='body1' >
                                        Provide your complete and accurate full name, as it's essential for your professional identity.
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
                                        Add a professional profile picture to make your CV personal and leave a strong impression
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
                                        Mention your current job or the field you're interested in. This helps to match your CV to your career or academic goals
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
export default PersonalInfo