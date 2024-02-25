import './css/personalInfo.css';
import '../../pages/interviewforms/Template.css';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import EditableChoose from '../EditableSelectOption';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { CustomizedHook } from '../TextfieldButtonDataDisplay';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { setRef } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { collection, addDoc, getFirestore, query, where, getDocs, doc, updateDoc, getDoc,setDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';


const ExtraInformation = () => {     
    const { currentUser } = useAuth();   
    const [refPerson, setRefPerson] = useState([{ name: '', phone: '' }]);
    const [award, setAward] = useState(['']);
    const [lang, setLang] = useState(['']);

    //below handle function is for CustomizedHook
    const ExtraInfo_Intrest = [
        "Artificial Intelligence and Machine Learning",
        "Data Mining and Big Data Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning",
        "Human-Computer Interaction",
        "Internet of Things (IoT)",
        "Cybersecurity and Privacy",
        "Bioinformatics and Computational Biology",
        "Quantum Computing",
        "Robotics and Autonomous Systems",
        "Augmented Reality and Virtual Reality",
        "Social Network Analysis",
        "Cloud Computing and Edge Computing",
        "Blockchain Technology",
        "Renewable Energy Systems",
        "Environmental Sustainability",
        "Biomedical Engineering",
        "Healthcare Informatics",
        "Urban Planning and Smart Cities",
        "Educational Technology",
        "Financial Technology (FinTech)",
        "Predictive Analytics and Forecasting",
        "Supply Chain Management",
        "Crisis Management and Disaster Recovery",
        "Humanitarian Engineering",
        "Sustainable Agriculture",
        "Materials Science and Nanotechnology",
        "Aerospace Engineering",
        "Behavioral Economics and Decision Making",
        "Cultural Studies and Anthropology",
        "Linguistics and Language Acquisition",
        "History and Archaeology",
        "Psychology and Cognitive Science",
        "Sociology and Social Sciences",
        "Political Science and International Relations",
        "Public Health and Epidemiology",
        "Climate Change and Environmental Policy",
        "Gender Studies and Diversity Research",
        "Media and Communication Studies",
        "Arts and Humanities Research",
        "Philosophy and Ethics",
        "Education Policy and Reform",
        "Urban Development and Transportation Planning",
        "Legal Studies and Law Reform",
        "Religious Studies and Theology",
        "Musicology and Music Theory",
        "Theater and Performance Studies",
        "Literary Studies and Comparative Literature",
        "Cultural Heritage Preservation and Conservation"
    ];
    
    const [ExtraInfoInterests, setExtraInfoInterests] = useState([]);//usestate for autocomplete ExtraInfoInterests
    const maxSelections = 3;//max value for the autocomplete
    const handleExtraInfoInterests = (event, newSkill) => {
        if (newSkill.length <= maxSelections) {
            setExtraInfoInterests(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return ExtraInfoInterests.length >= maxSelections && !ExtraInfoInterests.includes(option);
    };
    
    // console.log(ExtraInfoInterests);

    const navigate = useNavigate();
    const prevPage = () => navigate('/summary');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                refPerson,
                award,
                lang,
                ExtraInfoInterests,
            };
            await sendExtraInfoToFirestore(formData);
            navigate('/finalisesummary');
        } catch (error) {
            console.error('Error submitting extra information: ', error);
        }
    };

    const sendExtraInfoToFirestore = async (data) => {
        try {
            const db = getFirestore();
            const userDocument = doc(collection(db, 'studentdetails'), currentUser.email);

            const docSnapshot = await getDoc(userDocument);
            if (docSnapshot.exists()) {
                await setDoc(userDocument, { extraInfo: data }, { merge: true });
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error adding extra information to Firestore: ', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const userDocument = doc(collection(db, 'studentdetails'), currentUser.email);
                const docSnapshot = await getDoc(userDocument);
    
                if (docSnapshot.exists()) {
                    const extraInfoData = docSnapshot.data().extraInfo || {};

                    console.log('Fetched extra information:', extraInfoData);
    
                    setRefPerson(extraInfoData.refPerson || [{ name: '', phone: '' }]);
                    setAward(extraInfoData.award || ['']);
                    setLang(extraInfoData.lang || ['']); // Change from languages to lang
                    setExtraInfoInterests(extraInfoData.ExtraInfoInterests || []);
                } else {
                    console.error('Document does not exist for the current user.');
                }
            } catch (error) {
                console.error('Error fetching extra information from Firestore: ', error);
            }
        };
    
        fetchData();
    }, [currentUser]);
    

    //ref person
    const handleRedNmChange = (index, event) => {
        const newResults = [...refPerson];
        newResults[index].name = event.target.value;
        setRefPerson(newResults);
    };
    const handleRefPhChange = (index, event) => {
        const newResults = [...refPerson];
        newResults[index].phone = event.target.value;
        setRefPerson(newResults);
    };
    const handleRefAddRow = (event) => {
        event.preventDefault();
        setRefPerson([...refPerson, { name: '', phone: '' }]);
    };
    const handleRefRemoveRow = (index) => {
        const newResults = [...refPerson];
        newResults.splice(index, 1);
        setRefPerson(newResults);
    };

    //award and lang
    const handleChange = (index, event, field, setField) => {
        const newResults = [...field];
        newResults[index] = event.target.value;
        setField(newResults);
    };
    const handleRemoveRow = (index, field, setField) => {
        const newResults = [...field];
        newResults.splice(index, 1);
        setField(newResults);
    };
    const handleAddRow = ( field, setField) => {
        // event.preventDefault();
        setField([...field, '']);
    };

    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Extra Information' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="personalInfo-main">
                                    <Grid container pl={1}>
                                        
                                        {refPerson.map((result, index) => (
                                            <Grid container item spacing={2} key={index}>
                                                <Grid item xs={6} md={4} mb={3} pr={1}>
                                                    <Typography mb={1} style={{ letterSpacing: '0px'}}>
                                                        {(index === 0) && <span style={{color: 'red'}}>*</span>}
                                                        Reference Person</Typography>
                                                    <TextField type="text" value={result.name} onChange={(event) => handleRedNmChange(index, event)} variant="outlined" fullWidth 
                                                    required = {(index === 0)? true: false}
                                                    InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                                                </Grid>
                                                <Grid item xs={5} md={3} mb={3}>
                                                    <Typography mb={1}>
                                                        {(index === 0) && <span style={{color: 'red'}}>*</span>}
                                                        Contact No</Typography>
                                                    <TextField type="text" value={result.phone} onChange={(event) => handleRefPhChange(index, event)} variant="outlined" fullWidth 
                                                    required = {(index === 0)? true: false}s
                                                    InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                                                </Grid>
                                                {index !== 0 && (
                                                    <Grid item xs={1} md={2}  mt={3}>
                                                        <IconButton onClick={() => handleRefRemoveRow(index)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px',marginTop:'25px'  }}>
                                                            <RemoveIcon style={{ color: 'white' }}/>
                                                        </IconButton>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        ))}
                                        <Grid item xs={12} mt={1} mb={3}>
                                            <Typography>
                                                <IconButton onClick={handleRefAddRow} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                                    <AddIcon style={{ color: 'white' }} />
                                                </IconButton>
                                                Add reference person
                                            </Typography>
                                        </Grid>

                                        <Typography mb={0}>Award Title</Typography>

                                        {award.map((result, index) => (
                                            <Grid container item spacing={2} key={index}>
                                                <Grid item xs={11} md={6} mb={3} mt={3}>
                                                    
                                                    <TextField type="text" value={result} onChange={(event) => handleChange(index, event, award, setAward)} variant="outlined" fullWidth InputProps={{ style: { borderRadius: '25px', backgroundColor: 'white' } }} placeholder='' />
                                                </Grid>
                                                {index !== 0 && (
                                                    <Grid item xs={1} md={2} mt={3}>
                                                        <IconButton onClick={() => handleRemoveRow(index, award, setAward)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width: '22px', height: '22px', marginRight: '15px',marginTop:'20px'  }}>
                                                            <RemoveIcon style={{ color: 'white' }} />
                                                        </IconButton>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        ))}

                                        <Grid item xs={12} mt={1} mb={3}>
                                            <Typography>
                                                <IconButton onClick={() => handleAddRow(award, setAward)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                                    <AddIcon style={{ color: 'white' }} />
                                                </IconButton>
                                                Add award
                                            </Typography>
                                        </Grid>

                                        <Typography mb={0}>Fluent Languages</Typography>

                                        {lang.map((result, index) => (
                                            <Grid container item spacing={2} key={index}>
                                                <Grid item xs={11} md={6} mb={3} mt={3}>
                                                    
                                                    <TextField type="text" value={result} onChange={(event) => handleChange(index, event, lang, setLang)} variant="outlined" fullWidth InputProps={{ style: { borderRadius: '25px', backgroundColor: 'white' } }} placeholder='' />
                                                </Grid>
                                                {index !== 0 && (
                                                    <Grid item xs={1} md={2} mt={3}>
                                                        <IconButton onClick={() => handleRemoveRow(index, lang, setLang)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width: '22px', height: '22px', marginRight: '15px',marginTop:'20px' }}>
                                                            <RemoveIcon style={{ color: 'white' }} />
                                                        </IconButton>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        ))}

                                        <Grid item xs={12} mt={1} mb={3}>
                                            <Typography>
                                                <IconButton onClick={() => handleAddRow(lang, setLang)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                                    <AddIcon style={{ color: 'white' }} />
                                                </IconButton>
                                                Add language
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} md={6} mb={3}>
                                            <Typography mb={1} mt={3}>Research Interests</Typography>
                                                    <Stack spacing={3}>
                                                            <Autocomplete
                                                                multiple
                                                                id="tags-outlined"
                                                                options={ExtraInfo_Intrest}
                                                                value={ExtraInfoInterests} 
                                                                onChange={handleExtraInfoInterests}
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
                                    </Grid>
                                    {/* <button onClick={(event) => {event.preventDefault(); console.log(award)}}>btn</button> */}
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
export default ExtraInformation