import * as React from "react";
import './css/Project.css';
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
import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import EventIcon from '@mui/icons-material/Event';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
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
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { collection, doc, setDoc, getFirestore,getDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';


const Projects1 = () => {
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
    const yearOption = ["2024"];
        for (let year = 2023; year >= 1990; year--) {
        yearOption.push(String(year));
        }
    
    const [Proj1Type, setProj1Type] = useState('');
    const [Proj1Status, setProj1Status] = useState('');

    

    const [Proj1StartMonth, setProj1StartMonth] = useState('');
    const [Proj1StartYear, setProj1StartYear] = useState('');
    const [Proj1EndMonth, setProj1EndMonth] = useState('');
    const [Proj1EndYear, setProj1EndYear] = useState('');
    const [Proj1Place, setProj1Place] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const Proj1Name = watch('Proj1Name');
    const Proj1Role = watch('Proj1Role');
    const Proj1Evidence = watch('Proj1Evidence');

    const Proj_Skills = ['c#','react','java'];
    const [Proj1Skills, setProj1Skills] = useState([]);//usestate for autocomplete
    const [ProjectEvdUrl, setProjectEvdUrl] = useState('');
    const [ProjectEvdFetchUrl, setProjectEvdFetchUrl] = useState('');

    const maxSelections = 3;//max value for the autocomplete

    const handleProj1Skills = (event, newSkill) => {
        if (newSkill.length <= maxSelections) {
            setProj1Skills(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return Proj1Skills.length >= maxSelections && !Proj1Skills.includes(option);
    };

    const handleFileUploadSuccess = (url) => {
        setProjectEvdUrl(url.downloadURL);
        console.log(url);
      };

      const handleReset = () => {
        // Your reset logic here
        console.log('Reset button clicked');
      };

    
    


    const navigate = useNavigate();
    const prevPage = () => navigate('/work');
    
    const onSubmit = async () => {
        try {
            const finalProjectEvd = ProjectEvdUrl || ProjectEvdFetchUrl;

            const formData = {
                Proj1Name,
                Proj1Type,
                Proj1Status,
                Proj1Role,
                Proj1StartMonth,
                Proj1StartYear,
                Proj1EndMonth,
                Proj1EndYear,
                Proj1Place,
                Proj1Evidence,
                Proj1Skills,
                ProjectEvdUrl: finalProjectEvd,
            };

            await sendProjectDataToFirestore(formData);

            navigate('/secondProject');
        } catch (error) {
            console.error('Error adding project to Firestore: ', error);
        }
    };

    const sendProjectDataToFirestore = async (data) => {
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const userDocument = doc(studentDetailsCollection, currentUser.email); // Use the email as document ID

            const docSnapshot = await getDoc(userDocument);
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                let projects = docData.projects || []; // Retrieve the projects array or initialize an empty array

                // Check if index 0 exists in the projects array
                if (projects.length > 0) {
                    // Update fields of Project 1 at index 0
                    projects[0] = {
                        ...projects[0],
                        ...data
                    };
                } else {
                    // Create a new entry for Project 1
                    projects.push(data);
                }

                // Update the document with the modified projects array
                await setDoc(userDocument, { projects }, { merge: true });
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error adding project info to Firestore: ', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const userDocument = doc(collection(db, 'studentdetails'), currentUser.email);
                const docSnapshot = await getDoc(userDocument);

                if (docSnapshot.exists()) {
                    const projectData = docSnapshot.data().projects && docSnapshot.data().projects.length > 0 ? docSnapshot.data().projects[0] : null;

                    if (projectData) {
                        

                        setValue('Proj1Name', projectData.Proj1Name || '');
                        setValue('Proj1Evidence', projectData.Proj1Evidence || '');
                        setValue('Proj1Role', projectData.Proj1Role || '');

                        setProj1Type(projectData.Proj1Type || '');
                        setProj1Status(projectData.Proj1Status || '');
                        setProj1StartMonth(projectData.Proj1StartMonth || '');
                        setProj1StartYear(projectData.Proj1StartYear || '');
                        setProj1EndMonth(projectData.Proj1EndMonth || '');
                        setProj1EndYear(projectData.Proj1EndYear || '');
                        setProj1Place(projectData.Proj1Place || '');
                        setProj1Skills(projectData.Proj1Skills || []);
                        setProjectEvdFetchUrl(projectData.ProjectEvdUrl|| null);
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

    //below code for dialog
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleYes = () => navigate('/secondProject');
    const handleNo = () => navigate('/certification');

    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Project' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>

                                <div className="Project-main">
                                    <div className="Project-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Project Name</Typography>
                                                {/* <TextField type="text" variant="outlined" value={Proj1Name} onChange={(event) => setProj1Name(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Proj1Name}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='CV Builder'
                                                {...register("Proj1Name", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Proj1Name &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Was it an individual or a group project?</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6} mb={3}>
                                                {/* <EditableChoose
                                                    options={["Project Type", "Group Project","Individual Project"]}
                                                    onSelect={setProj1Type}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj1Type}
                                                        onChange={(event) => setProj1Type(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD'}} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                        
                                                    >
                                                        <MenuItem disabled value="">Project Type</MenuItem>
                                                        <MenuItem value="Group Project">Group Project</MenuItem>
                                                        <MenuItem value="Individual Project">Individual Project</MenuItem>
                                                        
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>What was your role in the project</Typography>
                                                {/* <TextField type="text" variant="outlined" value={Proj1Role} onChange={(event) => setProj1Role(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Full stack developer'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Proj1Role}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Full stack developer'
                                                {...register("Proj1Role", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Proj1Role &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Typography><span style={{color: 'red'}}>*</span>Are you still working on the project?</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={2} pl={2}>
                                                <FormControl>
                                                    <RadioGroup row name="project-working-status" value={Proj1Status} onChange={(event) => setProj1Status(event.target.value)}>
                                                        <FormControlLabel value="yes" control={<Radio />} label="Yes"   required/>
                                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span>Skills acquired from job ?</Typography>
                                                    <Stack spacing={3}>
                                                            <Autocomplete
                                                                multiple
                                                                id="tags-outlined"
                                                                options={Proj_Skills}
                                                                value={Proj1Skills} 
                                                                onChange={handleProj1Skills}
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
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Project Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setProj1StartMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj1StartMonth}
                                                        onChange={(event) => setProj1StartMonth(event.target.value)}
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
                                                    onSelect={setProj1StartYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj1StartYear}
                                                        onChange={(event) => setProj1StartYear(event.target.value)}
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
                                                <Typography><span style={{color: 'red'}}>*</span>Project End Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setProj1EndMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj1EndMonth}
                                                        onChange={(event) => setProj1EndMonth(event.target.value)}
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
                                                    onSelect={setProj1EndYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj1EndYear}
                                                        onChange={(event) => setProj1EndYear(event.target.value)}
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
                                                <Typography>Where this project took place (optional)</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={5} mb={3}>
                                                {/* <EditableChoose
                                                    options={["Place", "University","University"]}
                                                    onSelect={setProj1Place}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj1Place}
                                                        onChange={(event) => setProj1Place(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD'}} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        // required
                                                        
                                                    >
                                                        <MenuItem disabled value="">Place</MenuItem>
                                                        <MenuItem value="University">University</MenuItem>
                                                        <MenuItem value="School">School</MenuItem>
                                                        
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Project evidence</Typography>
                                                {/* <TextField type="text" variant="outlined" value={Proj1Evidence} onChange={(event) => setProj1Evidence(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Proj1Evidence}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("Proj1Evidence", { maxLength: 30, pattern: /^[a-zA-Z\s0-9.,@]+$/})}
                                                />
                                                {errors.Proj1Evidence &&  "Only accepts letters, numbers and (. , @)"}
                                            </Grid>
                                            <Grid item xs={12} mb={2} style={{display: 'flex', justifyContent: 'center'}}>
                                                <Typography>-OR-</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                            <FileUpload onFileUpload={handleFileUploadSuccess} onUploadSuccess={handleFileUploadSuccess} onReset={handleReset}    />
                                                {ProjectEvdFetchUrl && ProjectEvdFetchUrl !== ' ' &&  <p style={{marginTop:'1rem',marginLeft:'1rem'}}>Your Project Evidence</p>}
                                                {ProjectEvdFetchUrl && ProjectEvdFetchUrl !== ' ' && <img src={ProjectEvdFetchUrl} alt="Profile Picture"  style={{ width: '15rem', height: '10rem', objectFit: 'cover',marginLeft:'1rem',border: '1px solid black' }}  />}
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className="Project-rightCol">
                                        <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                                            <Card variant="outlined" sx={{height:'100%',maxHeight: '650px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>
                                            <CardContent >
                                                <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Project Experience Tips</Typography>
                                                <List>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <TrendingUpIcon sx={{color:'black'}}/>
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
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <PersonIcon sx={{color:'black'}}/>
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
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <KeyboardIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Choose keywords from the preset list when adding your skills gained from the project.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <EventIcon sx={{color:'black'}}/>
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
                                                            
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <ZoomInMapIcon sx={{color:'black'}} />
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
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <ScreenshotMonitorIcon sx={{color:'black'}}/>
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
                                </div>
                                
                            </div>
                            <Grid container spacing={2} style={{position: 'absolute', bottom: 80}}>            
                                <Grid xs={6} paddingLeft={'10px'}>
                                    <Button startIcon={<ArrowBackIcon />} style={back} onClick={prevPage}>Go Back</Button>
                                </Grid>
                                    
                                <Grid xs={6}>
                                    <Button type='submit' style={next}>Next Step</Button>  
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                        sx={{backdropFilter: "blur(5px)"}}
                                    >
                                        <DialogTitle id="responsive-dialog-title">
                                        {"Do you have more projects?"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                          If you wish to add more projects please click on Yes.If you wish to skip to next page click on No  
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
export default Projects1