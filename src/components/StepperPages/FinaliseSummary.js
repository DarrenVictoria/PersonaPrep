import React, {useEffect} from 'react';
import { useState } from 'react';
import '../../pages/interviewforms/Template.css';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import Typography from '@mui/material/Typography';
import './css/Summary1_2.css';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import { collection, doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';

const Summary_1 = () => {
    const [industryExperience, setIndustryExperience] = useState("");
    

    const handleIndustryExperienceChange = e => {
        // console.log(`IE => ${e.target.value}`)
        setIndustryExperience(e.target.value);
    };

    const navigate = useNavigate();
    const prevPage = () => navigate('/extraInfo');
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                industryExperience,
               
            };
            
            await sendSummaryDataToFirestore(formData);
            navigate('/templates');
        } catch (error) {
            console.error('Error submitting summary data:', error);
        }
    };

    const { currentUser } = useAuth();

    const sendSummaryDataToFirestore = async (formData) => {
        try {
            const db = getFirestore();
            const userDocumentRef = doc(db, 'studentdetails', currentUser.email);

            const docSnapshot = await getDoc(userDocumentRef);
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                const summaries = docData.summaries || [];

                if (summaries.length >= 1) {
                    summaries[0] = formData;
                } else {
                    summaries.push(formData);
                }

                await setDoc(userDocumentRef, { summaries }, { merge: true });
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error adding summary info to Firestore:', error);
        }
    };

    useEffect(() => {
        const fetchSummaryData = async () => {
            try {
                const db = getFirestore();
                const userDocumentRef = doc(db, 'studentdetails', currentUser.email);

                const docSnapshot = await getDoc(userDocumentRef);
                if (docSnapshot.exists()) {
                    const docData = docSnapshot.data();
                    const summaries = docData.summaries || [];

                    if (summaries.length >= 1) {
                        const summaryData = summaries[0];
                        setIndustryExperience(summaryData.industryExperience || '');
                        
                    }
                }
            } catch (error) {
                console.error('Error fetching summary info from Firestore:', error);
            }
        };

        fetchSummaryData();
    }, [currentUser.email]);



   
    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Summary' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className='summarymaindiv'>
                                    <Typography mb={1}><span style={{color: 'red'}}>*</span> In which key industries have you worked in, and what were your key roles in each?</Typography>
                                    <CustomMultilineTextFieldslimited value={industryExperience} onChange={handleIndustryExperienceChange} inputHeight={100} maxWidth={1300} maxWords={20} isRequired={true}/> 

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
export default Summary_1