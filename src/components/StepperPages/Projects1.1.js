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
import { CustomizedHook } from '../TextfieldButtonDataDisplay';
import FileUpload from '../FileUpload';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';

const Projects2 = () => {
    const Proj_Skills = [{data: 'c#',}, {data: 'react'}, {data: 'java'}];
    const [Proj2Type, setProj2Type] = useState('');
    const [Proj2Name, setProj2Name] = useState('');
    const [Proj2Role, setProj2Role] = useState('');
    const [Proj2Status, setProj2Status] = useState('');

    const [Proj2Skills, setProj2Skills] = useState([]);


    const [Proj2StartMonth, setProj2StartMonth] = useState('');
    const [Proj2StartYear, setProj2StartYear] = useState('');
    const [Proj2EndMonth, setProj2EndMonth] = useState('');
    const [Proj2EndYear, setProj2EndYear] = useState('');
    const [Proj2Place, setProj2Place] = useState('');
    const [Proj2Evidence, setProj2Evidence] = useState('');


    const handleProj2Skills = function (ev, val, reason, details) {
        if (ev.target.classList.contains('MuiSvgIcon-root')){
            // Removing Value
            const value = ev.target.parentElement.querySelector('span').innerHTML;
            setProj2Skills(Proj2Skills.filter(item => item !== value));
        } else {
            const value = ev.target.innerHTML;
            Proj2Skills.push(value);
        }
        console.log(Proj2Skills);
    }


    const navigate = useNavigate();
    const prevPage = () => navigate('/project');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/thirdProject')
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
            <InterviewFormHeader title='Second Project' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>

                                <div className="personalInfo-main">
                                    <div className="personalInfo-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Project Name</Typography>
                                                <TextField type="text" variant="outlined" value={Proj2Name} onChange={(event) => setProj2Name(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/>
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>Was it an individual or a group project?</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6} mb={3}>
                                                <EditableChoose
                                                    options={["Project Type", "Group Project","Individual Project"]}
                                                    onSelect={setProj2Type}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>What was your role in the project</Typography>
                                                <TextField type="text" variant="outlined" value={Proj2Role} onChange={(event) => setProj2Role(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Full stack developer'/>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Typography><span style={{color: 'red'}}>*</span>Are you still working on the project?</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={2} pl={2}>
                                                <FormControl>
                                                    <RadioGroup row name="project-working-status" value={Proj2Status} onChange={(event) => setProj2Status(event.target.value)}>
                                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={12} mb={3}>
                                                <CustomizedHook onChange={handleProj2Skills} data={Proj_Skills} label={<Typography mb={1}><span style={{color: 'red'}}>*</span>What are the skills gained from the project?</Typography>}/>

                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>Project Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setProj2StartMonth}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setProj2StartYear}
                                                    disabledOptions={["2024"]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>Project End Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setProj2EndMonth}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setProj2EndYear}
                                                    disabledOptions={["2024"]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography>Where this project took place (optional)</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={5} mb={3}>
                                                <EditableChoose
                                                    options={["Place", "University","University"]}
                                                    onSelect={setProj2Place}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Project evidence</Typography>
                                                <TextField type="text" variant="outlined" value={Proj2Evidence} onChange={(event) => setProj2Evidence(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/>
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
                                        <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                                            <Card variant="outlined" sx={{height:'100%',maxHeight: '350px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>
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
export default Projects2