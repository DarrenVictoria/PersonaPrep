import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../File Upload/DocFileUpload.js';
import EditableChoose from '../EditableSelectOption';
import React, { useState, useEffect } from 'react';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { useForm } from "react-hook-form";
import { collection, doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';

const UniversityEducation2 = () => {
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
    const [Uni2Degree, setUni2Degree] = useState('');
    const [Uni2CurrentYear, setUni2CurrentYear] = useState('');
    const [Uni2StartMonth, setUni2StartMonth] = useState('');
    const [Uni2StartYear, setUni2StartYear] = useState('');
    const [Uni2EndMonth, setUni2EndMonth] = useState('');
    const [Uni2EndYear, setUni2EndYear] = useState('');

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const Uni2Name = watch('Uni2Name');
    const Uni2City = watch('Uni2City');
    const Uni2Country = watch('Uni2Country');

    const [graduationTransUrl, setGraduationTransUrl] = useState('');
    const [graduationTransFetchUrl, setGraduationTransFetchUrl] = useState('');

    const handleFileUploadSuccess = (url) => {
        setGraduationTransUrl(url.downloadURL);
        console.log(url);
    };

    const handleReset = () => {
        // Reset logic here
    };

    const navigate = useNavigate();
    const prevPage = () => navigate('/university');
    

    const onSubmit = async (data) => {
        const formData = {
            ...data,
            Uni2Degree: Uni2Degree,
            Uni2StartMonth: Uni2StartMonth,
            Uni2StartYear: Uni2StartYear,
            Uni2EndMonth: Uni2EndMonth,
            Uni2EndYear: Uni2EndYear,
            Uni2CurrentYear: Uni2CurrentYear,
            graduationTransUrl: graduationTransUrl || graduationTransFetchUrl,
        };

        await sendUniversityDataToFirestore(formData);
        navigate('/work');
    };

    const sendUniversityDataToFirestore = async (data) => {
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const userDocument = doc(studentDetailsCollection, currentUser.email);

            const docSnapshot = await getDoc(userDocument);
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                let universities = docData.universityData || [];

                if (universities.length >= 2) {
                    universities[1] = {
                        ...universities[1],
                        ...data
                    };
                } else {
                    universities.push(data);
                }

                await setDoc(userDocument, { universityData: universities }, { merge: true });
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error adding university info to Firestore: ', error);
        }
    };

    useEffect(() => {
        const fetchUniversityData = async () => {
            try {
                const db = getFirestore();
                const studentDetailsCollection = collection(db, 'studentdetails');
                const userDocument = doc(studentDetailsCollection, currentUser.email);

                const docSnapshot = await getDoc(userDocument);
                if (docSnapshot.exists()) {
                    const docData = docSnapshot.data();
                    if (docData.universityData && docData.universityData.length >= 2) {
                        const universityData = docData.universityData[1];
                        setValue('Uni2Name', universityData.Uni2Name || '');
                        setValue('Uni2City', universityData.Uni2City || '');
                        setValue('Uni2Country', universityData.Uni2Country || '');
                        setValue('Uni2Degree', universityData.Uni2Degree || '');
                        setValue('Uni2StartMonth', universityData.Uni2StartMonth || '');
                        setValue('Uni2StartYear', universityData.Uni2StartYear || '');
                        setValue('Uni2EndMonth', universityData.Uni2EndMonth || '');
                        setValue('Uni2EndYear', universityData.Uni2EndYear || '');
                        setValue('Uni2CurrentYear', universityData.Uni2CurrentYear || '');
                        setUni2Degree(universityData.Uni2Degree || '');
                        setUni2StartMonth(universityData.Uni2StartMonth || '');
                        setUni2StartYear(universityData.Uni2StartYear || '');
                        setUni2EndMonth(universityData.Uni2EndMonth || '');
                        setUni2EndYear(universityData.Uni2EndYear || '');
                        setUni2CurrentYear(universityData.Uni2CurrentYear || '');
                        setGraduationTransFetchUrl(universityData.graduationTransUrl || '');
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
            <InterviewFormHeader title='Second University' />
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
                                                {/* <TextField type="text" variant="outlined" value={Uni2Name} onChange={(event) => setUni2Name(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='NSBM Green University'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Uni2Name}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='NSBM Green University'
                                                {...register("Uni2Name", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Uni2Name &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Degree</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                {/* <EditableChoose
                                                    options={["Degree Name", "BSc. (Hons) in Software Engineering","BSc. (Hons) in Computer Science","BSc. (Hons) in Cyber Security"]}
                                                    onSelect={setUni2Degree}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Uni2Degree}
                                                        onChange={(event) => setUni2Degree(event.target.value)}
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
                                                {/* <TextField type="text" variant="outlined" value={Uni2City} onChange={(event) => setUni2City(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Homagama'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Uni2City}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Homagama'
                                                {...register("Uni2City", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Uni2City &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                                                {/* <TextField type="text" variant="outlined" value={Uni2Country} onChange={(event) => setUni2Country(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Sri lanka'/> */}
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={Uni2Country}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Sri Lanka'
                                                {...register("Uni2Country", { maxLength: 30, pattern: /^[a-zA-Z\s]+$/ })}
                                                />
                                                {errors.Uni2Country &&  "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                {/* <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setUni2StartMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                 <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Uni2StartMonth}
                                                        onChange={(event) => setUni2StartMonth(event.target.value)}
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
                                                    onSelect={setUni2StartYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Uni2StartYear}
                                                        onChange={(event) => setUni2StartYear(event.target.value)}
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
                                                <Typography>Current year (select year if you haven't graduated yet)</Typography>                        
                                            </Grid>
                                            <Grid item xs={6} mb={3}>
                                                {/* <EditableChoose
                                                    options={["year", "Year 1","Year 2","Year 3","Year 4"]}
                                                    onSelect={setUni2CurrentYear}
                                                    disabledOptions={[]}
                                                /> */}
                                                 <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Uni2CurrentYear}
                                                        onChange={(event) => setUni2CurrentYear(event.target.value)}
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
                                                    onSelect={setUni2EndMonth}
                                                    disabledOptions={[]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Uni2EndMonth}
                                                        onChange={(event) => setUni2EndMonth(event.target.value)}
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
                                                    onSelect={setUni2EndYear}
                                                    disabledOptions={["2024"]}
                                                /> */}
                                                <FormControl variant="outlined" fullWidth>
                                                    <Select
                                                        value={Uni2EndYear}
                                                        onChange={(event) => setUni2EndYear(event.target.value)}
                                                        displayEmpty
                                                        input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                        IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                        // required
                                                    >
                                                        <MenuItem disabled value="">Year</MenuItem>
                                                        {yearOption.map(year => (
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
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}
export default UniversityEducation2