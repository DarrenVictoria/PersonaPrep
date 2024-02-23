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
import FileUpload from '../FileUpload';
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
    const yearOption = ["2024"];
        for (let year = 2023; year >= 1990; year--) {
        yearOption.push(String(year));
        }

    

    
    const [Certificate1IssueMonth,setCertificate1IssueMonth] = useState("");
    const [Certificate1IssueYear,setCertificate1IssueYear] = useState("");
    const [Certificate1ExpMonth, setCertificate1ExpMonth] = useState('');
    const [Certificate1ExpYear, setCertificate1ExpYear] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const Certificate1Name = watch('Certificate1Name');
    const Certificate1issuedOrg = watch('Certificate1issuedOrg');
    const Certificate1Id = watch('Certificate1Id');
    const Certificate1LInk = watch('Certificate1LInk');
    const [CertUrl, setCertUrl] = useState('');
    const [CertFetchUrl, setCertFetchUrl] = useState('');


    //below handle function is for CustomizedHook
    const CCert_Skills = ['c#','react','java'];
    const [Certificate1ProjSkills, setCertificate1ProjSkills] = useState([]);//usestate for autocomplete
    const maxSelections = 3;//max value for the autocomplete
    const handleCertificate1ProjSkills = (event, newSkill) => {
        if (newSkill.length <= maxSelections) {
            setCertificate1ProjSkills(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return Certificate1ProjSkills.length >= maxSelections && !Certificate1ProjSkills.includes(option);
    };
    
    console.log(Certificate1ProjSkills);

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
                Certificate1IssueMonth,
                Certificate1IssueYear,
                Certificate1ExpMonth,
                Certificate1ExpYear,
                Certificate1Name,
                Certificate1issuedOrg,
                Certificate1Id,
                Certificate1LInk,
                Certificate1ProjSkills,
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
                        setValue('Certificate1Name', certificationData.Certificate1Name || '');
                        setValue('Certificate1issuedOrg', certificationData.Certificate1issuedOrg || '');
                        setValue('Certificate1Id', certificationData.Certificate1Id || '');
                         
                        setValue('Certificate1LInk', certificationData.Certificate1LInk || ''); 
                        setCertificate1IssueMonth(certificationData.Certificate1IssueMonth || '');
                        setCertificate1IssueYear(certificationData.Certificate1IssueYear || '');
                        setCertificate1ExpMonth(certificationData.Certificate1ExpMonth || '');
                        setCertificate1ExpYear(certificationData.Certificate1ExpYear || '');
                        setCertFetchUrl(certificationData.CertUrl || null);
                        setCertificate1ProjSkills(certificationData.Certificate1ProjSkills || '');

                       

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

            <InterviewFormHeader title='Certification' />
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
                                                {/* <TextField type="text" variant="outlined" value={Certificate1Name} onChange={(event) => setCertificate1Name(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}} /> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Certificate1Name}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("Certificate1Name", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Certificate1Name &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography ><span style={{color: 'red'}}>*</span> Issuing Organization</Typography>
                                                {/* <TextField type="text" variant="outlined" value={Certificate1issuedOrg} onChange={(event) => setCertificate1issuedOrg(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Certificate1issuedOrg}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("Certificate1issuedOrg", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Certificate1issuedOrg &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Issue Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setCertificate1IssueMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                 <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Certificate1IssueMonth}
                                                        onChange={(event) => setCertificate1IssueMonth(event.target.value)}
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
                                                    onSelect={setCertificate1IssueYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Certificate1IssueYear}
                                                        onChange={(event) => setCertificate1IssueYear(event.target.value)}
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
                                                <Typography><span style={{color: 'red'}}>*</span>Expiration Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setCertificate1ExpMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Certificate1ExpMonth}
                                                        onChange={(event) => setCertificate1ExpMonth(event.target.value)}
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
                                                    onSelect={setCertificate1ExpYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Certificate1ExpYear}
                                                        onChange={(event) => setCertificate1ExpYear(event.target.value)}
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
                                            <Grid item xs={12} mb={3}>
                                                <Typography ><span style={{color: 'red'}}>*</span>Certification ID</Typography>
                                                {/* <TextField type="text" variant="outlined" value={Certificate1Id} onChange={(event) => setCertificate1Id(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Certificate1Id}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("Certificate1Id", { maxLength: 30})}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span>Skills acquired from the project ?</Typography>
                                                    <Stack spacing={3}>
                                                            <Autocomplete
                                                                multiple
                                                                id="tags-outlined"
                                                                options={CCert_Skills}
                                                                value={Certificate1ProjSkills}  
                                                                onChange={handleCertificate1ProjSkills}
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
                                                {/* <TextField type="text" variant="outlined" value={Certificate1LInk} onChange={(event) => setCertificate1LInk(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Certificate1LInk}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder=''
                                                {...register("Certificate1LInk", { maxLength: 30})}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={2} style={{display: 'flex', justifyContent: 'center'}}>
                                                <Typography>-OR-</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                            <FileUpload onFileUpload={handleFileUploadSuccess} onUploadSuccess={handleFileUploadSuccess} onReset={handleReset}    />
                                                {CertFetchUrl && CertFetchUrl !== ' ' &&  <p style={{marginTop:'1rem',marginLeft:'1rem'}}>Your Certification Proof</p>}
                                                {CertFetchUrl && CertFetchUrl !== ' ' && <img src={CertFetchUrl} alt="Profile Picture"  style={{ width: '15rem', height: '10rem', objectFit: 'cover',marginLeft:'1rem',border: '1px solid black' }}  />}
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