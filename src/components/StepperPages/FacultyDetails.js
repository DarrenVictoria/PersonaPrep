import './css/FacultyDetails.css';
import Choose from '../FacultySelectOption';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useAuth } from '../../hooks/useAuth.js'; 
import LoadingScreen from 'react-loading-screen';
import Logo from "../../assets/logo/Persona Prep Dark.png"


//Code check 

const FacultyDetails = () => {
    const forceUpdate = useRef();
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [selectedBatch, setSelectedBatch] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');
    const [validation, setValidation] = useState(true);
    const [loading, setLoading] = useState(true); // Added loading state
    
    
    

    const validate = () => {
        setValidation(!(selectedFaculty === '' && selectedBatch === '' && selectedDegree === ''));
    };

    useEffect(() => {
        validate();
    }, [selectedFaculty, selectedBatch, selectedDegree]);

    const useForceUpdate = () => {
        const [, setValue] = useState(0);
        return () => setValue((value) => value + 1);
      };

      useForceUpdate();

    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchUserData = async () => {
            try {
                const db = getFirestore();
                const studentDetailsCollection = collection(db, 'studentdetails');

                // Check if a document with the user's email already exists
                const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
                const existingDoc = querySnapshot.docs[0];

                if (existingDoc) {
                    const userData = existingDoc.data();
                    // Set the state variables based on the fetched data
                    setSelectedFaculty(userData.faculty || '');
                    setSelectedBatch(userData.batch || '');
                    setSelectedDegree(userData.degree || '');

                    
                
                }
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
            finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        // Call the function to fetch user data
        fetchUserData();
    }, [currentUser.email]);

    

    const addDataToFirestore = async () => {
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
    
            // Check if a document with the user's email already exists
            const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
            const existingDoc = querySnapshot.docs[0];
    
            if (existingDoc) {
                // Update the existing document
                const existingDocRef = doc(db, 'studentdetails', existingDoc.id);
                await updateDoc(existingDocRef, {
                    batch: selectedBatch,
                    degree: selectedDegree,
                    faculty: selectedFaculty,
                });
    
                console.log('Document updated with ID: ', existingDoc.id);
            } else {
                // Create a new document
                const newDocRef = await addDoc(studentDetailsCollection, {
                    email: currentUser.email,
                    faculty: selectedFaculty,
                    batch: selectedBatch,
                    degree: selectedDegree,
                });
    
                console.log('Document written with ID: ', newDocRef.id);
            }
    
            // Navigate to the next page
            navigate('/personalInfo');
        } catch (error) {
            console.error('Error adding/updating document: ', error);
        }
    };
    

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        validate();

        // Check if validation passed
        if (validation) {
            try {
                // Call the function to fetch user data
                await fetchUserData();
                // Call the function to add data to Firestore
                await addDataToFirestore();
            } catch (error) {
                console.error('Error handling submit: ', error);
            }
        } else {
            console.log('Validation failed');
        }
    };

    

    const prevPage = () => navigate('/home');

    useEffect(() => {
        console.log('selectedFaculty:', selectedFaculty);
        console.log('selectedBatch:', selectedBatch);
        console.log('selectedDegree:', selectedDegree);
    }, [selectedFaculty, selectedBatch, selectedDegree]);

    if (loading) {
        return <div>
      <LoadingScreen
            loading={true}
            bgColor='#f1f1f1'
            spinnerColor='#000000'
            textColor='#000000'
            logoSrc={Logo}
            text='Loading ...'
          > 
           
       </LoadingScreen>
    </div>;
    }


    return (
        <div className="formtemp-page">
            <InterviewFormHeader title='Degree Information' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                    <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className='Facultymaindiv'>
                                    <div>
                                        <h1>Which Faculty / Batch<br />are you from?</h1>
                                    </div>
                                    <br />
                                    <div>
                                        <Typography mb={-2}><span style={{ color: 'red' }}>*</span> Please specify your faculty</Typography>
                                        <Choose
                                            options={["Faculty","Faculty of Computing", "Faculty of Business", "Faculty of Engineering", "Faculty of Science"]}
                                            onSelect={setSelectedFaculty}
                                            disabledOptions={["Faculty","Faculty of Business","Faculty of Engineering", "Faculty of Science"]}
                                            isRequired={true}
                                            defaultValue={selectedFaculty}
                                        />

                                    </div>
                                    <br />
                                    <div>
                                        <Typography mb={-2}><span style={{ color: 'red' }}>*</span> Please specify your batch</Typography>
                                        <Choose
                                            options={["Batch","23.2","23.1","22.2", "22.1", "21.2", "21.1", "20.2", "20.3"]}
                                            onSelect={setSelectedBatch}
                                            disabledOptions={["Batch"]}
                                            isRequired={true}
                                            defaultValue={selectedBatch}
                                        />

                                    </div>
                                    <br />
                                    <div>
                                        <Typography mb={-2}><span style={{ color: 'red' }}>*</span> Degree affiliation</Typography>
                                        <Choose
                                            options={["University","Plymouth University", "Victoria University", "NSBM Green University"]}
                                            onSelect={setSelectedDegree}
                                            disabledOptions={["University"]}
                                            isRequired={true}
                                            defaultValue={selectedDegree}
                                        />
                                    </div>
                                    {/* {(!parah) && <Typography color='error'>bla bla bla</Typography>}*/}
                                </div>

                            </div>
                            {/* <InterviewFormFooter nextForm='/personalInfo' prevForm='/home' onClick={validate} validation={validation} /> */}
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

export default FacultyDetails;
