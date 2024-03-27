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
import { useState, useEffect } from 'react';
import FileUpload from '../File Upload/DocFileUpload.js';
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

const Certification2 = () => {
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
    const ExpirationyearOption = ["2025"];
        for (let year = 2026; year <= 2035; year++) {
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
    
    console.log(CertificateProjSkills);

    const handleFileUploadSuccess = (url) => {
        setCertUrl(url.downloadURL);
        console.log(url);
      };

      const handleReset = () => {
        console.log('Reset button clicked');
      };
   



    const navigate = useNavigate();
    const prevPage = () => navigate('/certification');
  
        
    const finalProjectEvd = CertUrl || CertFetchUrl;
        
    

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
                if (certifications.length > 1) {
                    // Update fields of Certification 1 at index 0
                    certifications[1] = {
                        ...certifications[1],
                        ...data
                    };
                } else {
                    // Create a new entry for Certification 1
                    certifications.push(data);
                }

                // Update the document with the modified certifications array
                await setDoc(userDocument, { certifications }, { merge: true });
                
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
            };

            // Send data to Firestore
            await sendCertificationDataToFirestore(formData);

            // Navigate to the next page
            navigate('/clubsAndSocs');
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
                    const certificationData = docSnapshot.data().certifications && docSnapshot.data().certifications.length > 1 ? docSnapshot.data().certifications[1] : null;

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

                        console.log("Cet det :",CertFetchUrl);

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


    return ( 
        <div className="formtemp-page">

            <InterviewFormHeader title='Certification 2/2' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>

                                <div className="Certification1-Maindiv">
                                    <div className="Certification1-LeftColumn">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography >Name of Certification</Typography>
                                                <TextField type="text" variant="outlined" fullWidth   
                                                value={CertificateName}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Introduction to c# course'
                                                {...register("CertificateName", { maxLength: 100, pattern: /^[a-zA-Z\s,.'@]+$/ })}
                                                />
                                                {errors.CertificateName && errors.CertificateName.type === "maxLength" ? "Max character limit is 100" : errors.CertificateName && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography > Issuing Organization</Typography>
                                                <TextField type="text" variant="outlined" fullWidth   
                                                value={CertificateissuedOrg}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Udemy'
                                                {...register("CertificateissuedOrg", { maxLength: 100, pattern: /^[a-zA-Z\s,.'@]+$/ })}
                                                />
                                                {errors.CertificateissuedOrg && errors.CertificateissuedOrg.type === "maxLength" ? "Max character limit is 100" : errors.CertificateissuedOrg && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography>Issue Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                 <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={CertificateIssueMonth}
                                                        onChange={(event) => setCertificateIssueMonth(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}                                                        
                                                    >
                                                        <MenuItem disabled value="">Month</MenuItem>
                                                        {monthOption.map (option => (
                                                            <MenuItem  key={option.value} value={option.value}>{option.label}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={CertificateIssueYear}
                                                        onChange={(event) => setCertificateIssueYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}                                                        
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {IssueyearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography>Expiration Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={CertificateExpMonth}
                                                        onChange={(event) => setCertificateExpMonth(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}                                                        
                                                    >
                                                        <MenuItem disabled value="">Month</MenuItem>
                                                        {monthOption.map (option => (
                                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={CertificateExpYear}
                                                        onChange={(event) => setCertificateExpYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}                                                        
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {ExpirationyearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography >Certification ID</Typography>
                                                <TextField type="text" variant="outlined" fullWidth   
                                                value={CertificateId}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("CertificateId", { maxLength: 200})}
                                                />
                                                {errors.CertificateId &&  "Maximum of 200 characters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1} mt={3}>Skills acquired from the project ?</Typography>
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
                                                    </Stack>                                            
                                                    </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}>Certification evidence link</Typography>
                                                <TextField type="text" variant="outlined" fullWidth   
                                                value={CertificateLInk}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("CertificateLInk")}
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
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
     );
}
 
export default Certification2;