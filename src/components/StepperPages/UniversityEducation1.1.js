import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import FileUpload from '../File Upload/DocFileUpload.js';
import React, { useState, useEffect } from 'react';
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
    const StartyearOption = ["2024"];
        for (let year = 2023; year >= 1990; year--) {
            StartyearOption.push(String(year));
        }
    const GraduationyearOption = ["2030"];
        for (let year = 2031; year >= 1990; year--) {
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

    const [graduationTransUrl, setGraduationTransUrl] = useState('');
    const [graduationTransFetchUrl, setGraduationTransFetchUrl] = useState('');

    const handleFileUploadSuccess = (url) => {
        setGraduationTransUrl(url.downloadURL);
        console.log(url);
    };

    const handleReset = () => {
    };

    const navigate = useNavigate();
    const prevPage = () => navigate('/university');
    

    const onSubmit = async (data) => {
        const formData = {
            ...data,
            UniDegree: UniDegree,
            UniStartMonth: UniStartMonth,
            UniStartYear: UniStartYear,
            UniEndMonth: UniEndMonth,
            UniEndYear: UniEndYear,
            UniCurrentYear: UniCurrentYear,
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
                        setValue('UniName', universityData.UniName || '');
                        setValue('UniCity', universityData.UniCity || '');
                        setValue('UniCountry', universityData.UniCountry || '');
                        setValue('UniDegree', universityData.UniDegree || '');
                        setValue('UniStartMonth', universityData.UniStartMonth || '');
                        setValue('UniStartYear', universityData.UniStartYear || '');
                        setValue('UniEndMonth', universityData.UniEndMonth || '');
                        setValue('UniEndYear', universityData.UniEndYear || '');
                        setValue('UniCurrentYear', universityData.UniCurrentYear || '');
                        setUniDegree(universityData.UniDegree || '');
                        setUniStartMonth(universityData.UniStartMonth || '');
                        setUniStartYear(universityData.UniStartYear || '');
                        setUniEndMonth(universityData.UniEndMonth || '');
                        setUniEndYear(universityData.UniEndYear || '');
                        setUniCurrentYear(universityData.UniCurrentYear || '');
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
            <InterviewFormHeader title='University 2/2' />
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
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={UniName}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='NSBM Green University'
                                                {...register("UniName", { minLength: 6, maxLength: 50, pattern: /^[a-zA-Z\s,.']+$/ })}
                                                />
                                                {errors.UniName && errors.UniName.type === "maxLength" ? "Max character limit is 50" : errors.UniName && errors.UniName.type === 'minLength'? "Minimum character limit is 6" : errors.UniName && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Degree</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
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
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={UniCity}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Homagama'
                                                {...register("UniCity", { minLength: 4, maxLength: 30, pattern: /^[a-zA-Z\s,.']+$/ })}
                                                />
                                                {errors.UniCity && errors.UniCity.type === "maxLength" ? "Max character limit is 30" : errors.UniCity && errors.UniCity.type === 'minLength'? "Minimum character limit is 4" : errors.UniCity && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Country</Typography>
                                                <TextField type="text" variant="outlined" fullWidth required  
                                                value={UniCountry}
                                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                                placeholder='Sri Lanka'
                                                {...register("UniCountry", { minLength: 4, maxLength: 56, pattern: /^[a-zA-Z\s,.']+$/ })}
                                                />
                                                {errors.UniCountry && errors.UniCountry.type === "maxLength" ? "Max character limit is 56" : errors.UniCountry && errors.UniCountry.type === 'minLength'? "Minimum character limit is 4" : errors.UniCountry && "Please enter only letters"}
                                            </Grid>
                                            <Grid item xs={12} mb={1}>
                                                <Typography><span style={{color: 'red'}}>*</span>Start Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
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