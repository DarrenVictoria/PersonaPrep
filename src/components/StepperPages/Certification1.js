import * as React from "react";
import './css/Certification1.css';
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
import EditableChoose from '../EditableSelectOption';
import { useState, useEffect } from 'react';
import { CustomizedHook } from '../TextfieldButtonDataDisplay';
import cdiary from '../../assets/images/iconcdiary.svg';
import ccalander from '../../assets/images/iconccalander.svg';
import chat from '../../assets/images/iconchat.svg';
import FileUpload from '../File Upload/DocFileUpload.js';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LayersIcon from '@mui/icons-material/Layers';
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

const Certification1 = () => {
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
    const IssueyearOption = ["2024"];
        for (let year = 2023; year >= 2015; year--) {
            IssueyearOption.push(String(year));
        }
    const ExpirationyearOption = ["2035"];
        for (let year = 2023; year >= 2025; year--) {
            ExpirationyearOption.push(String(year));
        }

    

    
    const [CertificateIssueMonth,setCertificateIssueMonth] = useState("");
    const [CertificateIssueYear,setCertificateIssueYear] = useState("");
    const [CertificateExpMonth, setCertificateExpMonth] = useState('');
    const [CertificateExpYear, setCertificateExpYear] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const CertificateName = watch('CertificateName');
    const CertificateissuedOrg = watch('CertificateissuedOrg');
    const CertificateId = watch('CertificateId');
    const CertificateLInk = watch('CertificateLInk');
    const [CertUrl, setCertUrl] = useState('');
    const [CertFetchUrl, setCertFetchUrl] = useState('');


    //below handle function is for CustomizedHook
    const CCert_Skills = [
        "c#",
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
        "ALIBABA CLOUD",
        "AWS",
        "AZURE",
        "CLOUDFLARE",
        "CODEBERG",
        "DATADOG",
        "DIGITALOCEAN",
        "FIREBASE",
        "GITHUB PAGES",
        "GLITCH",
        "GOOGLE CLOUD",
        "HEROKU",
        "LINODE",
        "NETLIFY",
        "ORACLE",
        "OPENSTACK",
        "OVH",
        "RENDER",
        "SCALEWAY",
        "VERCEL",
        "VULTR",
        ".NET",
        "ADONISJS",
        "ANACONDA",
        "ANGULAR",
        "ANGULAR.JS",
        "ANT DESIGN",
        "APACHE SPARK",
        "APACHE KAFKA",
        "APACHE HADOOP",
        "APACHE HIVE",
        "APOLLO GRAPHQL",
        "AURELIA",
        "BLAZOR",
        "BOOTSTRAP",
        "BUEFY",
        "BULMA",
        "BUN",
        "CHAKRA UI",
        "CHART.JS",
        "CODE IGNITER",
        "DAISYUI",
        "DENO JS",
        "DIRECTUS",
        "DJANGO",
        "DJANGOREST",
        "DRUPAL",
        "ELECTRON.JS",
        "EMBER",
        "EXPO",
        "EXPRESS.JS",
        "FASTAPI",
        "FASTIFY",
        "FLASK",
        "FLUTTER",
        "GATSBY.JS",
        "GREEN SOCK",
        "GULP",
        "INSOMNIA",
        "HUGO",
        "IONIC",
        "JASMINE",
        "JINJA",
        "JOOMLA",
        "JQUERY",
        "JWT/JSON WEB TOKEN",
        "LARAVEL",
        "LESS",
        "MUI",
        "METEOR JS",
        "MAXCOMPUTE",
        "NPM",
        "NESTJS",
        "NEXT JS",
        "NODE.JS",
        "NODEMON",
        "NODE-RED",
        "NUXT JS",
        "NX",
        "OPENCV",
        "OPENGL",
        "P5JS",
        "PNPM",
        "PREFECT",
        "PUG",
        "QT",
        "QUASAR",
        "ROS",
        "RABBITMQ",
        "RAILS",
        "REACT",
        "REACT NATIVE",
        "REACT QUERY",
        "REACT ROUTER",
        "REACT HOOK FORM",
        "REDUX",
        "REMIX",
        "ROLLUPJS",
        "RXDB",
        "RXJS",
        "SASS",
        "SEMANTIC UI REACT",
        "SOCKET.IO",
        "SOLIDJS",
        "SPRING",
        "STRAPI",
        "STYLED COMPONENTS",
        "STYLUS",
        "SVELTE",
        "SYMFONY",
        "TAILWINDCSS",
        "TAURI",
        "THREE.JS",
        "THYMELEAF",
        "TYPEGRAPHQL",
        "UNOCSS",
        "VITE",
        "VUE.JS",
        "VUETIFY",
        "WEBGL",
        "WEBPACK",
        "WEB3.JS",
        "WINDICSS",
        "WORDPRESS",
        "XAMARIN",
        "YARN",
        "APACHE",
        "APACHE AIRFLOW",
        "APACHE ANT",
        "APACHE FLINK",
        "APACHE MAVEN",
        "JENKINS",
        "NGINX",
        "AMAZON",
        "DYNAMODB",
        "CASSANDRA",
        "COCKROACH LABS",
        "INFLUXDB",
        "MARIADB",
        "MUSICBRAINZ",
        "MICROSOFT",
        "SQL SERVER",
        "MONGODB",
        "MYSQL",
        "NEO4J",
        "PLANETSCALE",
        "POSTGRES",
        "REALM",
        "REDIS",
        "SINGLE STORE",
        "SQLITE",
        "SUPABASE",
        "SURREALDB",
        "TERADATA",
        "ADOBE",
        "ADOBE ACROBAT READER",
        "ADOBE AFTER EFFECTS",
        "ADOBE AUDITION",
        "ADOBE CREATIVE CLOUD",
        "ADOBE DREAMWEAVER",
        "ADOBE FONTS",
        "ADOBE ILLUSTRATOR",
        "ADOBE INDESIGN",
        "ADOBE LIGHTROOM",
        "ADOBE LIGHTROOM CLASSIC",
        "ADOBE PHOTOSHOP",
        "ADOBE PREMIERE PRO",
        "ADOBE XD",
        "ASEPRITE",
        "AFFINITY DESIGNER",
        "AFFINITY PHOTO",
        "BLENDER",
        "CANVA",
        "DRIBBBLE",
        "FIGMA",
        "FRAMER",
        "GIMP",
        "INKSCAPE",
        "INVISION",
        "KRITA",
        "PROTO.IO",
        "SKETCH",
        "STORYBOOK",
        "KERAS",
        "MATPLOTLIB",
        "MLFLOW",
        "NUMPY",
        "PANDAS",
        "PLOTLY",
        "PYTORCH",
        "SCIKIT-LEARN",
        "SCIPY",
        "TENSORFLOW",
        "ARGOCD",
        "ANSIBLE",
        "APACHE KAFKA",
        "AZURE DEVOPS",
        "CHEF",
        "CIRCLECI",
        "CONSUL",
        "DOCKER",
        "ELASTICSEARCH",
        "FLUENTD",
        "GRAFANA",
        "ISTIO",
        "KIBANA",
        "KUBERNETES",
        "LOGSTASH",
        "NEW RELIC",
        "PACKER",
        "PODMAN",
        "PROMETHEUS",
        "PUPPET",
        "SONARQUBE",
        "SPLUNK",
        "SUMOLOGIC",
        "TERRAFORM",
        "VAULT",
        "VAGRANT",
        "AIRBNB",
        "ALFRED",
        "AQUA SEC",
        "ARDUINO",
        "BABEL",
        "BITWARDEN",
        "CISCO",
        "CMAKE",
        "CODECOV",
        "CONFLUENCE",
        "ESLINT",
        "GRADLE",
        "HOME ASSISTANT",
        "HOMEBRIDGE",
        "JELLYFIN",
        "JIRA",
        "JEST",
        "RASPBERRY PI",
        "SONARLINT",
        "SONARQUBE",
        "SPLUNK",
        "SWAGGER",
        "TOR",
        "TERRAFORM",
        "TRELLO",
        "UBER",
        "UBIQUITI",
        "VAGRANT",
        "WIREGUARD",
        "XFCE",
        "ZIGBEE"
    ];
    
    const [CertificateProjSkills, setCertificateProjSkills] = useState([]);//usestate for autocomplete
    const maxSelections = 3;//max value for the autocomplete
    const handleCertificateProjSkills = (event, newSkill) => {
        if (newSkill.length <= maxSelections) {
            setCertificateProjSkills(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return CertificateProjSkills.length >= maxSelections && !CertificateProjSkills.includes(option);
    };
    
    

    const handleFileUploadSuccess = (url) => {
        setCertUrl(url.downloadURL);
        console.log(url);
      };

      const handleReset = () => {
        // Your reset logic here
        console.log('Reset button clicked');
      };
   



    const navigate = useNavigate();
    const prevPage = () => navigate('/project');
  
        
    
        
    

    const sendCertificationDataToFirestore = async (data) => {
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const userDocument = doc(studentDetailsCollection, currentUser.email); // Use the email as document ID
            

            
            const docSnapshot = await getDoc(userDocument);
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                let certifications = docData.certifications || []; // Retrieve the certifications array or initialize an empty array

                // Check if index 0 exists in the certifications array
                if (certifications.length > 0) {
                    // Update fields of Certification 1 at index 0
                    certifications[0] = {
                        ...certifications[0],
                        ...data
                    };
                } else {
                    // Create a new entry for Certification 1
                    certifications.push(data);
                }

                // Update the document with the modified certifications array
                await setDoc(userDocument, { certifications }, { merge: true });
                handleClickOpen();
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error adding certification info to Firestore: ', error);
        }
    };

    // Function to handle form submission
    const onSubmit = async () => {
        try {
            const finalProjectEvd = CertUrl || CertFetchUrl;
            // Construct formData object with all form fields
            const formData = {
                CertificateIssueMonth,
                CertificateIssueYear,
                CertificateExpMonth,
                CertificateExpYear,
                CertificateName,
                CertificateissuedOrg,
                CertificateId,
                CertificateLInk,
                CertificateProjSkills,
                CertUrl: finalProjectEvd
                // Add other form fields here...
            };

            // Send data to Firestore
            await sendCertificationDataToFirestore(formData);
            handleClickOpen();
            // Navigate to the next page
            // navigate('/secondCertification');
        } catch (error) {
            console.error('Error submitting certification data: ', error);
        }
    };

    // useEffect to fetch certification data from Firestore upon component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const userDocument = doc(collection(db, 'studentdetails'), currentUser.email);
                const docSnapshot = await getDoc(userDocument);

                if (docSnapshot.exists()) {
                    const certificationData = docSnapshot.data().certifications && docSnapshot.data().certifications.length > 0 ? docSnapshot.data().certifications[0] : null;

                    if (certificationData) {
                        // Update state variables with fetched data
                        setValue('CertificateName', certificationData.CertificateName || '');
                        setValue('CertificateissuedOrg', certificationData.CertificateissuedOrg || '');
                        setValue('CertificateId', certificationData.CertificateId || '');
                         
                        setValue('CertificateLInk', certificationData.CertificateLInk || ''); 
                        setCertificateIssueMonth(certificationData.CertificateIssueMonth || '');
                        setCertificateIssueYear(certificationData.CertificateIssueYear || '');
                        setCertificateExpMonth(certificationData.CertificateExpMonth || '');
                        setCertificateExpYear(certificationData.CertificateExpYear || '');
                        setCertFetchUrl(certificationData.CertUrl || null);
                        setCertificateProjSkills(certificationData.CertificateProjSkills || '');

                       

                        // Update other state variables...
                    }
                } else {
                    console.error('Document does not exist for the current user.');
                }
            } catch (error) {
                console.error('Error fetching certification data from Firestore: ', error);
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
    const handleYes = () => navigate('/secondCertification');
    const handleNo = () => navigate('/clubsAndSocs');

    return ( 
        <div className="formtemp-page">

            <InterviewFormHeader title='Top Certifications (Certification 1/2)' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>

                                <div className="Certification1-Maindiv">
                                    <div className="Certification1-LeftColumn">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography ><span style={{color: 'red'}}>*</span> Name of Certification</Typography>
                                                {/* <TextField type="text" variant="outlined" value={CertificateName} onChange={(event) => setCertificateName(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}} /> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={CertificateName}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("CertificateName", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.CertificateName &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography ><span style={{color: 'red'}}>*</span> Issuing Organization</Typography>
                                                {/* <TextField type="text" variant="outlined" value={CertificateissuedOrg} onChange={(event) => setCertificateissuedOrg(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={CertificateissuedOrg}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("CertificateissuedOrg", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.CertificateissuedOrg &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Issue Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setCertificateIssueMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                 <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={CertificateIssueMonth}
                                                        onChange={(event) => setCertificateIssueMonth(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem disabled value="">Month</MenuItem>
                                                        {monthOption.map (option => (
                                                            <MenuItem  key={option.value} value={option.value}>{option.label}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                {/* <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setCertificateIssueYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={CertificateIssueYear}
                                                        onChange={(event) => setCertificateIssueYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {IssueyearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Expiration Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setCertificateExpMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={CertificateExpMonth}
                                                        onChange={(event) => setCertificateExpMonth(event.target.value)}
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
                                                    onSelect={setCertificateExpYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={CertificateExpYear}
                                                        onChange={(event) => setCertificateExpYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {ExpirationyearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography ><span style={{color: 'red'}}>*</span>Certification ID</Typography>
                                                {/* <TextField type="text" variant="outlined" value={CertificateId} onChange={(event) => setCertificateId(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={CertificateId}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("CertificateId", { maxLength: 30})}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span>Skills acquired from the project ?</Typography>
                                                    <Stack spacing={3}>
                                                            <Autocomplete
                                                                multiple
                                                                id="tags-outlined"
                                                                options={CCert_Skills}
                                                                value={CertificateProjSkills}  
                                                                onChange={handleCertificateProjSkills}
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
                                                    </Stack>                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Certification evidence link</Typography>
                                                {/* <TextField type="text" variant="outlined" value={CertificateLInk} onChange={(event) => setCertificateLInk(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={CertificateLInk}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("CertificateLInk", { maxLength: 30})}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={2} style={{display: 'flex', justifyContent: 'center'}}>
                                                <Typography>-OR-</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                            <Typography mb={2}>Upload Certification Evidence</Typography>
                                            <FileUpload style={{marginBottom:'1rem'}} onFileUpload={handleFileUploadSuccess} onUploadSuccess={handleFileUploadSuccess} onReset={handleReset} />
                                            {CertFetchUrl && CertFetchUrl !== '' && 
                                                <Typography mb={1} mt={4}>Uploaded Certification Evidence Preview</Typography>
                                            }
                                            {CertFetchUrl && CertFetchUrl !== '' && 
                                                <iframe src={CertFetchUrl} style={{ width: '60%', height: '400px', border: '1px solid black' }} />
                                            }
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className="Certification1-RightColumn">
                                        <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                                            <Card variant="outlined" sx={{height:'100%',maxHeight: '400px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>
                                            <CardContent >
                                                <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Certification Tips</Typography>
                                                <List>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <BookIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1' >
                                                                Fill in all the information about your most recent certification to fill in this section.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            {/* <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}> */}
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <CalendarMonthIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Ensure your certifaction are up to date by double checking their expiration date.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <LayersIcon sx={{color:'black'}}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Arrange your certification logically according to the most relevant ones for the position you're applying for.
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
                                        {"Do you have more certificates?"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                          If you wish to add more certificates please click on Yes.If you wish to skip to next page click on No  
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
     );
}
 
export default Certification1;