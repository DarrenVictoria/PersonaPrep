import './css/personalInfo.css';
import '../../pages/interviewforms/Template.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../FileUpload';
// import TestAutoComplete from '../TestAutoComplete';
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import cphone from '../../assets/images/iconcphone.svg';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import { useState } from 'react';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
    // const job_roles = [{data:"role1"},{data:"role2"},{data:"role3"},{data:"role4"},{data:"role5"},{data:"role6"},{data:"role7"},{data:"role8"}];
    
    const [phone, setPhone] = useState('');
    const [selectedValues, setSelectedValues] = useState([]);

    const phoneChange = (event) => setPhone(event.target.value);

    const navigate = useNavigate();
    const prevPage = () => navigate('/faculty');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/contactDetMain')
        // validate();

        // Check if validation passed
        // if (validation) {
        //     // Call the function to add data to Firestore
        //     addDataToFirestore();
        // } else {
        //     console.log('Validation failed');
        // }
    };
    
    const handleValueChange = (newValue) => {
        setSelectedValues(newValue);
        console.log("Selected values:", newValue);
    };
    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Personal Information' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
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
                                                <CustomizedHook 
                                                data={[{data:'Option 1'},{data:'Option 2'},{ data: 'Option 3' }]}
                                                label={<Typography mb={1}><span style={{color: 'red'}}>*</span>What job roles are you aspiring for? Min 1 / Max 3</Typography>}
                                                value={selectedValues}
                                                onChange={handleValueChange}
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className="personalInfo-rightCol">
                                        <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                                            <Card variant="outlined" sx={{height:'100%',maxHeight: '450px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>                    <CardContent >
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
export default PersonalInfo