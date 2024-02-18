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


const Projects3 = () => {
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
    
    const [Proj3Type, setProj3Type] = useState('');
    const [Proj3Status, setProj3Status] = useState('');

    const [Proj3StartMonth, setProj3StartMonth] = useState('');
    const [Proj3StartYear, setProj3StartYear] = useState('');
    const [Proj3EndMonth, setProj3EndMonth] = useState('');
    const [Proj3EndYear, setProj3EndYear] = useState('');
    const [Proj3Place, setProj3Place] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const Proj3Name = watch('Proj3Name');
    const Proj3Role = watch('Proj3Role');
    const Proj3Evidence = watch('Proj3Evidence');

    const Proj_Skills = ['c#','react','java'];
    const [Proj3Skills, setProj3Skills] = useState([]);//usestate for autocomplete
    const [ProjectEvdUrl, setProjectEvdUrl] = useState('');
    const [ProjectEvdFetchUrl, setProjectEvdFetchUrl] = useState('');

    const maxSelections = 3;//max value for the autocomplete

    const handleProj3Skills = (event, newSkill) => {
        if (newSkill.length <= maxSelections) {
            setProj3Skills(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return Proj3Skills.length >= maxSelections && !Proj3Skills.includes(option);
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
    const prevPage = () => navigate('/secondProject');
    const onSubmit = async () => {
        try {
            const finalProjectEvd = ProjectEvdUrl || ProjectEvdFetchUrl;

            const formData = {
                Proj3Name,
                Proj3Type,
                Proj3Status,
                Proj3Role,
                Proj3StartMonth,
                Proj3StartYear,
                Proj3EndMonth,
                Proj3EndYear,
                Proj3Place,
                Proj3Evidence,
                Proj3Skills,
                ProjectEvdUrl: finalProjectEvd,
            };

            await sendProjectDataToFirestore(formData);

            navigate('/certification');
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
                if (projects.length > 2) {
                    // Update fields of Project 1 at index 0
                    projects[2] = {
                        ...projects[2],
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
                    const projectData = docSnapshot.data().projects && docSnapshot.data().projects.length > 2 ? docSnapshot.data().projects[2] : null;

                    if (projectData) {
                        

                        setValue('Proj3Name', projectData.Proj3Name || '');
                        setValue('Proj3Evidence', projectData.Proj3Evidence || '');
                        setValue('Proj3Role', projectData.Proj3Role || '');

                        setProj3Type(projectData.Proj3Type || '');
                        setProj3Status(projectData.Proj3Status || '');
                        setProj3StartMonth(projectData.Proj3StartMonth || '');
                        setProj3StartYear(projectData.Proj3StartYear || '');
                        setProj3EndMonth(projectData.Proj3EndMonth || '');
                        setProj3EndYear(projectData.Proj3EndYear || '');
                        setProj3Place(projectData.Proj3Place || '');
                        setProj3Skills(projectData.Proj3Skills || []);
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

    
    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Third Project' />
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
                                                {/* <TextField type="text" variant="outlined" value={Proj3Name} onChange={(event) => setProj3Name(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Proj3Name}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='CV Builder'
                                                {...register("Proj3Name", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Proj3Name &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Was it an individual or a group project?</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6} mb={3}>
                                                {/* <EditableChoose
                                                    options={["Project Type", "Group Project","Individual Project"]}
                                                    onSelect={setProj3Type}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj3Type}
                                                        onChange={(event) => setProj3Type(event.target.value)}
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
                                                {/* <TextField type="text" variant="outlined" value={Proj3Role} onChange={(event) => setProj3Role(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Full stack developer'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Proj3Role}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Full stack developer'
                                                {...register("Proj3Role", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Proj3Role &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Typography><span style={{color: 'red'}}>*</span>Are you still working on the project?</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={2} pl={2}>
                                                <FormControl>
                                                    <RadioGroup row name="project-working-status" value={Proj3Status} onChange={(event) => setProj3Status(event.target.value)}>
                                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" required/>
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
                                                                value={Proj3Skills} 
                                                                onChange={handleProj3Skills}
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
                                                    onSelect={setProj3StartMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj3StartMonth}
                                                        onChange={(event) => setProj3StartMonth(event.target.value)}
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
                                                    onSelect={setProj3StartYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj3StartYear}
                                                        onChange={(event) => setProj3StartYear(event.target.value)}
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
                                                    onSelect={setProj3EndMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                 <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj3EndMonth}
                                                        onChange={(event) => setProj3EndMonth(event.target.value)}
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
                                                    onSelect={setProj3EndYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj3EndYear}
                                                        onChange={(event) => setProj3EndYear(event.target.value)}
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
                                                    onSelect={setProj3Place}
                                                    disabledOptions={[]}
                                                /> */}
                                                 <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Proj3Place}
                                                        onChange={(event) => setProj3Place(event.target.value)}
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
                                                {/* <TextField type="text" variant="outlined" value={Proj3Evidence} onChange={(event) => setProj3Evidence(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Proj3Evidence}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("Proj3Evidence", { maxLength: 30, pattern: /^[a-zA-Z\s0-9.,@]+$/ })}
                                                />
                                                {errors.Proj3Evidence &&  "Only accepts letters, numbers and (. , @)"}
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
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}
export default Projects3