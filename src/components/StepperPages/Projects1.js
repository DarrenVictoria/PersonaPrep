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
import FileUpload from '../File Upload/DocFileUpload.js';
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
    const StartyearOption = ["2024"];
        for (let year = 2023; year >= 2015; year--) {
            StartyearOption.push(String(year));
        }
    const EndyearOption = ["2024"];
        for (let year = 2023; year >= 2015; year--) {
            EndyearOption.push(String(year));
        }
    
    const [ProjType, setProjType] = useState('');
    const [ProjStatus, setProjStatus] = useState('');

    

    const [ProjStartMonth, setProjStartMonth] = useState('');
    const [ProjStartYear, setProjStartYear] = useState('');
    const [ProjEndMonth, setProjEndMonth] = useState('');
    const [ProjEndYear, setProjEndYear] = useState('');
    const [ProjPlace, setProjPlace] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const ProjName = watch('ProjName');
    const ProjRole = watch('ProjRole');
    const ProjEvidence = watch('ProjEvidence');

    const Proj_Skills = [
        "C#",
        "Winforms",
        "Apache Groovy",
        "C",
        "C#",
        "Clojure",
        "Crystal",
        "CSS3",
        "Dart",
        "Elixir",
        "Elm",
        "Erlang",
        "Fortran",
        "Go/Golang",
        "GraphQL",
        "Haskell",
        "HTML5",
        "Java",
        "JavaScript",
        "Julia",
        "Kotlin",
        "LaTeX",
        "Lua",
        "Markdown",
        "Nim",
        "Nix",
        "Objective-C",
        "Octave",
        "Org Mode",
        "Perl",
        "PHP",
        "PowerShell",
        "Python",
        "R",
        "Rescript",
        "Ruby",
        "Rust",
        "Scala",
        "Shell Script",
        "Solidity",
        "Swift",
        "TypeScript",
        "Windows Terminal",
        "Zig",
        "Alibaba Cloud",
        "AWS",
        "Azure",
        "Cloudflare",
        "Codeberg",
        "Datadog",
        "DigitalOcean",
        "Firebase",
        "GitHub Pages",
        "Glitch",
        "Google Cloud",
        "Heroku",
        "Linode",
        "Netlify",
        "Oracle",
        "OpenStack",
        "OVH",
        "Render",
        "Scaleway",
        "Vercel",
        "Vultr",
        ".NET",
        "AdonisJS",
        "Anaconda",
        "Angular",
        "Angular.js",
        "Ant Design",
        "Apache Spark",
        "Apache Kafka",
        "Apache Hadoop",
        "Apache Hive",
        "Apollo GraphQL",
        "Aurelia",
        "Blazor",
        "Bootstrap",
        "Buefy",
        "Bulma",
        "Bun",
        "Chakra UI",
        "Chart.js",
        "Code Igniter",
        "DaisyUI",
        "Deno JS",
        "Directus",
        "Django",
        "DjangoREST",
        "Drupal",
        "Electron.js",
        "Ember",
        "Expo",
        "Express.js",
        "FastAPI",
        "Fastify",
        "Flask",
        "Flutter",
        "Gatsby.js",
        "Green Sock",
        "Gulp",
        "Insomnia",
        "Hugo",
        "Ionic",
        "Jasmine",
        "Jinja",
        "Joomla",
        "jQuery",
        "JWT/JSON Web Token",
        "Laravel",
        "Less",
        "MUI",
        "Meteor JS",
        "MaxCompute",
        "NPM",
        "NestJS",
        "Next.js",
        "Node.js",
        "Nodemon",
        "Node-RED",
        "Nuxt.js",
        "NX",
        "OpenCV",
        "OpenGL",
        "P5JS",
        "PNPM",
        "Prefect",
        "Pug",
        "Qt",
        "Quasar",
        "ROS",
        "RabbitMQ",
        "Rails",
        "React",
        "React Native",
        "React Query",
        "React Router",
        "React Hook Form",
        "Redux",
        "Remix",
        "RollupJS",
        "RxDB",
        "RxJS",
        "Sass",
        "Semantic UI React",
        "Socket.io",
        "SolidJS",
        "Spring",
        "Strapi",
        "Styled Components",
        "Stylus",
        "Svelte",
        "Symfony",
        "TailwindCSS",
        "Tauri",
        "Three.js",
        "Thymeleaf",
        "TypeGraphQL",
        "UnoCSS",
        "Vite",
        "Vue.js",
        "Vuetify",
        "WebGL",
        "Webpack",
        "Web3.js",
        "Windicss",
        "WordPress",
        "Xamarin",
        "Yarn",
        "Apache",
        "Apache Airflow",
        "Apache Ant",
        "Apache Flink",
        "Apache Maven",
        "Jenkins",
        "Nginx",
        "Amazon",
        "DynamoDB",
        "Cassandra",
        "Cockroach Labs",
        "InfluxDB",
        "MariaDB",
        "MusicBrainz",
        "Microsoft",
        "SQL Server",
        "Mongodb",
        "MySQL",
        "Neo4j",
        "PlanetScale",
        "Postgres",
        "Realm",
        "Redis",
        "Single Store",
        "SQLite",
        "Supabase",
        "SurrealDB",
        "Teradata",
        "Adobe",
        "Adobe Acrobat Reader",
        "Adobe After Effects",
        "Adobe Audition",
        "Adobe Creative Cloud",
        "Adobe Dreamweaver",
        "Adobe Fonts",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Adobe Lightroom",
        "Adobe Lightroom Classic",
        "Adobe Photoshop",
        "Adobe Premiere Pro",
        "Adobe XD",
        "Aseprite",
        "Affinity Designer",
        "Affinity Photo",
        "Blender",
        "Canva",
        "Dribbble",
        "Figma",
        "Framer",
        "GIMP",
        "Inkscape",
        "InVision",
        "Krita",
        "Proto.io",
        "Sketch",
        "Storybook",
        "Keras",
        "Matplotlib",
        "MLflow",
        "Numpy",
        "Pandas",
        "Plotly",
        "PyTorch",
        "Scikit-Learn",
        "Scipy",
        "TensorFlow",
        "ArgoCD",
        "Ansible",
        "Apache Kafka",
        "Azure DevOps",
        "Chef",
        "CircleCI",
        "Consul",
        "Docker",
        "Elasticsearch",
        "Fluentd",
        "Grafana",
        "Istio",
        "Kibana",
        "Kubernetes",
        "Logstash",
        "New Relic",
        "Packer",
        "Podman",
        "Prometheus",
        "Puppet",
        "SonarQube",
        "Splunk",
        "SumoLogic",
        "Terraform",
        "Vault",
        "Vagrant",
        "Airbnb",
        "Alfred",
        "Aqua Sec",
        "Arduino",
        "Babel",
        "Bitwarden",
        "Cisco",
        "CMake",
        "Codecov",
        "Confluence",
        "ESLint",
        "Gradle",
        "Home Assistant",
        "Homebridge",
        "Jellyfin",
        "Jira",
        "Jest",
        "Raspberry Pi",
        "SonarLint",
        "SonarQube",
        "Splunk",
        "Swagger",
        "Tor",
        "Terraform",
        "Trello",
        "Uber",
        "Ubiquiti",
        "Vagrant",
        "WireGuard",
        "XFCE",
        "Zigbee"
    ];
    console.log(Proj_Skills);
    const [ProjSkills, setProjSkills] = useState([]);//usestate for autocomplete
    const [ProjectEvdUrl, setProjectEvdUrl] = useState('');
    const [ProjectEvdFetchUrl, setProjectEvdFetchUrl] = useState('');

    const maxSelections = 3;//max value for the autocomplete

    const handleProjSkills = (event, newSkill) => {
        if (newSkill.length <= maxSelections) {
            setProjSkills(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return ProjSkills.length >= maxSelections && !ProjSkills.includes(option);
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
                ProjName,
                ProjType,
                ProjStatus,
                ProjRole,
                ProjStartMonth,
                ProjStartYear,
                ProjEndMonth,
                ProjEndYear,
                ProjPlace,
                ProjEvidence,
                ProjSkills,
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
                        

                        setValue('ProjName', projectData.ProjName || '');
                        setValue('ProjEvidence', projectData.ProjEvidence || '');
                        setValue('ProjRole', projectData.ProjRole || '');

                        setProjType(projectData.ProjType || '');
                        setProjStatus(projectData.ProjStatus || '');
                        setProjStartMonth(projectData.ProjStartMonth || '');
                        setProjStartYear(projectData.ProjStartYear || '');
                        setProjEndMonth(projectData.ProjEndMonth || '');
                        setProjEndYear(projectData.ProjEndYear || '');
                        setProjPlace(projectData.ProjPlace || '');
                        setProjSkills(projectData.ProjSkills || []);
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
            <InterviewFormHeader title='Top Project Experience (Project 1/3)' />
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
                                                {/* <TextField type="text" variant="outlined" value={ProjName} onChange={(event) => setProjName(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={ProjName}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='CV Builder'
                                                {...register("ProjName", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.ProjName &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Was it an individual or a group project?</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6} mb={3}>
                                                {/* <EditableChoose
                                                    options={["Project Type", "Group Project","Individual Project"]}
                                                    onSelect={setProjType}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={ProjType}
                                                        onChange={(event) => setProjType(event.target.value)}
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
                                                {/* <TextField type="text" variant="outlined" value={ProjRole} onChange={(event) => setProjRole(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Full stack developer'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={ProjRole}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Full stack developer'
                                                {...register("ProjRole", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.ProjRole &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Typography><span style={{color: 'red'}}>*</span>Are you still working on the project?</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={2} pl={2}>
                                                <FormControl>
                                                    <RadioGroup row name="project-working-status" value={ProjStatus} onChange={(event) => setProjStatus(event.target.value)}>
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
                                                                value={ProjSkills} 
                                                                onChange={handleProjSkills}
                                                                filterSelectedOptions
                                                                disableCloseOnSelect
                                                                getOptionDisabled={isOptionDisabled}
                                                                renderInput={(params) => (
                                                                <TextField
                                                                    {...params}
                                                                    
                                                                    placeholder="Pick your skills"
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
                                                    onSelect={setProjStartMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={ProjStartMonth}
                                                        onChange={(event) => setProjStartMonth(event.target.value)}
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
                                                    onSelect={setProjStartYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={ProjStartYear}
                                                        onChange={(event) => setProjStartYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {StartyearOption.map(year => (
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
                                                    onSelect={setProjEndMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={ProjEndMonth}
                                                        onChange={(event) => setProjEndMonth(event.target.value)}
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
                                                    onSelect={setProjEndYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={ProjEndYear}
                                                        onChange={(event) => setProjEndYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {EndyearOption.map(year => (
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
                                                    onSelect={setProjPlace}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={ProjPlace}
                                                        onChange={(event) => setProjPlace(event.target.value)}
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
                                                {/* <TextField type="text" variant="outlined" value={ProjEvidence} onChange={(event) => setProjEvidence(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={ProjEvidence}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("ProjEvidence", { maxLength: 30, pattern: /^[a-zA-Z\s0-9.,@]+$/})}
                                                />
                                                {errors.ProjEvidence &&  "Only accepts letters, numbers and (. , @)"}
                                            </Grid>
                                            <Grid item xs={12} mb={2} style={{display: 'flex', justifyContent: 'center'}}>
                                                <Typography>-OR-</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                            <FileUpload onFileUpload={handleFileUploadSuccess} onUploadSuccess={handleFileUploadSuccess} onReset={handleReset}    />
                                            {ProjectEvdFetchUrl && ProjectEvdFetchUrl !== '' && 
                                            <Typography mb={1} mt={4}>Uploaded Project File Preview</Typography>
                                                }
                                                {ProjectEvdFetchUrl && ProjectEvdFetchUrl !== '' && 
                                                    <iframe src={ProjectEvdFetchUrl} style={{ width: '60%', height: '400px', border: '1px solid black' }} />
                                                }
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