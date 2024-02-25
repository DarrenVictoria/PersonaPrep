import React, { useState, useEffect } from 'react';
import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../File Upload/DocFileUpload.js';
import EditableChoose from '../EditableSelectOption';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
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
import { collection, doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';

const UniversityEducation1 = () => {
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
    const GraduationyearOption = ["2024"];
        for (let year = 2023; year >= 2018; year--) {
            GraduationyearOption.push(String(year));
        }
    
    const [UniDegree, setUniDegree] = useState('');
    const [UniCurrentYear, setUniCurrentYear] = useState('');
    const [UniStartMonth, setUniStartMonth] = useState('');
    const [UniStartYear, setUniStartYear] = useState('');
    const [UniEndMonth, setUniEndMonth] = useState('');
    const [UniEndYear, setUniEndYear] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const UniName = watch('UniName');
    const UniCity = watch('UniCity');
    const UniCountry = watch('UniCountry');

    const navigate = useNavigate();
    const prevPage = () => navigate('/exams');
    const onSubmit = (data) => {
        // e.preventDefault();
        const formData = {
            ...data,
            UniDegree: UniDegree, // Include selected degree
            UniStartMonth: UniStartMonth, // Include selected start month
            UniStartYear: UniStartYear, // Include selected start year
            UniEndMonth: UniEndMonth, // Include selected end month
            UniEndYear: UniEndYear, // Include selected end year
            UniCurrentYear: UniCurrentYear, // Include selected current year
            graduationTransUrl: graduationTransUrl || graduationTransFetchUrl, 
        };

        handleClickOpen();
        sendUniversityDataToFirestore(formData);
    };

    //below code for dialog
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const handleClickOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);
    const handleYes = () => navigate('/secondUniversity');
    const handleNo = () => navigate('/work');

    // Function to send data to Firestore
    const sendUniversityDataToFirestore = async (data) => {
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const userDocument = doc(studentDetailsCollection, currentUser.email); // Use the email as document ID
    
            const docSnapshot = await getDoc(userDocument);
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                let universities = docData.universityData || []; // Retrieve the university data array or initialize an empty array
    
                // Check if index 0 exists in the university data array
                if (universities.length > 0) {
                    // Update fields of University 1 at index 0
                    universities[0] = {
                        ...universities[0],
                        ...data
                    };
                } else {
                    // Create a new entry for University 1
                    universities.push(data);
                }
    
                // Update the document with the modified university data array
                await setDoc(userDocument, { universityData: universities }, { merge: true });
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error adding university info to Firestore: ', error);
        }
    };
    

    // File Upload Logic
    const [graduationTransUrl, setGraduationTransUrl] = useState('');
    const [graduationTransFetchUrl, setGraduationTransFetchUrl] = useState('');

    
    const handleFileUploadSuccess = (url) => {
        setGraduationTransUrl(url.downloadURL);
        console.log(url);
      };

    const handleReset = () => {
        // Reset logic here
    };

    useEffect(() => {
        // Fetch university data from Firestore
        const fetchUniversityData = async () => {
            try {
                const db = getFirestore();
                const studentDetailsCollection = collection(db, 'studentdetails');
                const userDocument = doc(studentDetailsCollection, currentUser.email); // Use the email as document ID
    
                const docSnapshot = await getDoc(userDocument);
                if (docSnapshot.exists()) {
                    const docData = docSnapshot.data();
                    if (docData.universityData && docData.universityData.length > 0) {
                        const universityData = docData.universityData[0]; // Assuming you only want data from the first university in the array
                        
                        setValue('UniName', universityData.UniName || '');
                        setValue('UniCity', universityData.UniCity || '');
                        setValue('UniCountry', universityData.UniCountry || '');
                        setValue('UniDegree', universityData.UniDegree || '');
                        setValue('UniStartMonth', universityData.UniStartMonth || '');
                        setValue('UniStartYear', universityData.UniStartYear || '');
                        setValue('UniEndMonth', universityData.UniEndMonth || '');
                        setValue('UniEndYear', universityData.UniEndYear || '');
                        setValue('UniCurrentYear', universityData.UniCurrentYear || '');
                        setGraduationTransFetchUrl(universityData.graduationTransUrl || '');

                        setUniDegree(universityData.UniDegree || '');
                        setUniStartMonth(universityData.UniStartMonth || '');
                        setUniStartYear(universityData.UniStartYear || '');
                        setUniEndMonth(universityData.UniEndMonth || '');
                        setUniEndYear(universityData.UniEndYear || '');
                        setUniCurrentYear(universityData.UniCurrentYear || '');
                    }
                }
            } catch (error) {
                console.error('Error fetching university info from Firestore: ', error);
            }
        };
        fetchUniversityData();
    }, [currentUser.email, setValue]);
    

    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Latest University (University 1/2)' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="personalInfo-main">
                                    <div className="personalInfo-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>University</Typography>
                                                {/* <TextField type="text" variant="outlined" value={UniName} onChange={(event) => setUniName(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='NSBM Green University'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={UniName}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='NSBM Green University'
                                                {...register("UniName", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.UniName &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Degree</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                {/* <EditableChoose
                                                    options={["Degree Name", "BSc. (Hons) in Software Engineering","BSc. (Hons) in Computer Science","BSc. (Hons) in Cyber Security"]}
                                                    onSelect={setUniDegree}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={UniDegree}
                                                        onChange={(event) => setUniDegree(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD'}} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        required
                                                        
                                                    >
                                                        <MenuItem disabled value="">Degree Name</MenuItem>
                                                        <MenuItem value="BSc. (Hons) in Software Engineering">BSc. (Hons) in Software Engineering</MenuItem>
                                                        <MenuItem value="BSc. (Hons) in Computer Science">BSc. (Hons) in Computer Science</MenuItem>
                                                        <MenuItem value="BSc. (Hons) in Cyber Security">BSc. (Hons) in Cyber Security</MenuItem>
                                                        
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>City</Typography>
                                                {/* <TextField type="text" variant="outlined" value={UniCity} onChange={(event) => setUniCity(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Homagama'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={UniCity}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Homagama'
                                                {...register("UniCity", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.UniCity &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                                                {/* <TextField type="text" variant="outlined" value={UniCountry} onChange={(event) => setUniCountry(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Sri lanka'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={UniCountry}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Sri Lanka'
                                                {...register("UniCountry", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.UniCountry &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setUniStartMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={UniStartMonth}
                                                        onChange={(event) => setUniStartMonth(event.target.value)}
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
                                                    onSelect={setUniStartYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={UniStartYear}
                                                        onChange={(event) => setUniStartYear(event.target.value)}
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
                                                <Typography>Current year (select year if you haven't graduated yet)</Typography>                        
                                            </Grid>
                                            <Grid item xs={6} mb={3}>
                                                {/* <EditableChoose
                                                    options={["year", "Year 1","Year 2","Year 3","Year 4"]}
                                                    onSelect={setUniCurrentYear}
                                                    disabledOptions={[]}
                                                /> */}
                                                 <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={UniCurrentYear}
                                                        onChange={(event) => setUniCurrentYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD'}} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        // required
                                                        
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        <MenuItem value="Year 1">Year 1</MenuItem>
                                                        <MenuItem value="Year 2">Year 2</MenuItem>
                                                        <MenuItem value="Year 3">Year 3</MenuItem>
                                                        <MenuItem value="Year 4">Year 4</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography>Graduation Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setUniEndMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={UniEndMonth}
                                                        onChange={(event) => setUniEndMonth(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        // required
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
                                                    onSelect={setUniEndYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={UniEndYear}
                                                        onChange={(event) => setUniEndYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        // required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {GraduationyearOption.map(year => (
                                                            <MenuItem key={year} value={year}>{year}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className="personalInfo-rightCol university-fileUpload">
                                        <Typography mb={2}>Upload Graduation Transcript</Typography>
                                        <FileUpload style={{marginBottom:'1rem'}} onFileUpload={handleFileUploadSuccess} onUploadSuccess={handleFileUploadSuccess} onReset={handleReset} />
                                        {graduationTransFetchUrl && graduationTransFetchUrl !== '' && 
                                            <Typography mb={1} mt={4}>Uploaded Graduation Transcript Preview</Typography>
                                        }
                                        {graduationTransFetchUrl && graduationTransFetchUrl !== '' && 
                                            <iframe src={graduationTransFetchUrl} style={{ width: '60%', height: '400px', border: '1px solid black' }} />
                                        }
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
                                        {"Do you have another University?"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                          If you wish to add another university please click on Yes.If you wish to skip to next page click on No  
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
export default UniversityEducation1