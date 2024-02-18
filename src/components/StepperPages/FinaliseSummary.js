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
import axios from 'axios';

const Summary_1 = () => {
    const { currentUser } = useAuth();
    const [finalSummary, setFinalSummary] = useState("");

    //Data inorder to generate the summary
    const [industryExperience, setIndustryExperience] = useState("");
    const [notableProjects, setNotableProjects] = useState("");
    const [careerHighlights, setCareerHighlights] = useState("");
    const [promotions, setPromotions] = useState('');
    const [futureCareer, setFutureCareer] = useState('');
    const [uniqueSkills, setUniqueSkills] = useState('');
    

    const handleFinalSummaryChange = e => {
        // console.log(`IE => ${e.target.value}`)
        setFinalSummary(e.target.value);
    };

    const navigate = useNavigate();
    const prevPage = () => navigate('/extraInfo');

  

    

    const sendSummaryDataToFirestore = async (finalSummary) => {
        try {
            const db = getFirestore();
            const userDocumentRef = doc(db, 'studentdetails', currentUser.email);
    
            await setDoc(userDocumentRef, { finalSummary }, { merge: true });
        } catch (error) {
            console.error('Error adding summary info to Firestore:', error);
        }
    };
    

            
            const handleSubmit = async (e) => {
                e.preventDefault();
                await sendSummaryDataToFirestore(finalSummary);
                navigate('/templates');
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
                        setNotableProjects(summaryData.notableProjects || '');
                        setCareerHighlights(summaryData.careerHighlights || '');
                        setPromotions(summaryData.promotions || '');
                        setFutureCareer(summaryData.futureCareer || '');
                        setUniqueSkills(summaryData.uniqueSkills || '');
                    }
                }
            } catch (error) {
                console.error('Error fetching summary info from Firestore:', error);
            }
        };

        fetchSummaryData();
    }, [currentUser.email]);

    useEffect(() => {
        const fetchFinalSummary = async () => {
            try {
                const db = getFirestore();
                const userDocumentRef = doc(db, 'studentdetails', currentUser.email);
                const docSnapshot = await getDoc(userDocumentRef);
    
                if (docSnapshot.exists()) {
                    const docData = docSnapshot.data();
                    const finalSummary = docData.finalSummary;
                    if (finalSummary) {
                        setFinalSummary(finalSummary);
                    } else {
                        // If no finalSummary is found, generate and set a new one
                        generateAndSetSummary();
                    }
                } else {
                    // If user document doesn't exist, generate and set a new summary
                    generateAndSetSummary();
                }
            } catch (error) {
                console.error('Error fetching final summary from Firestore:', error);
            }
        };
    
        fetchFinalSummary();
    }, [currentUser.email]);
    
    const generateAndSetSummary = async () => {
        try {
            const generatedSummary = await promptChatGPT();
            setFinalSummary(generatedSummary);
        } catch (error) {
            console.error('Error generating summary:', error);
        }
    };
    

    
    
    const promptChatGPT = async () => {
        const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
        const apiUrl = 'https://api.openai.com/v1/chat/completions';
        const model = 'gpt-3.5-turbo';
        const userMessage = `
        Using all that info generate for me a 50 words COMPLETE and precise on the dot length but all information included summary for my curriculum vitae:
        Industry Experience: ${industryExperience}
        Notable Projects: ${notableProjects}
        Career Highlights: ${careerHighlights}
        Promotions: ${promotions}
        Future Career: ${futureCareer}
        Unique Skills: ${uniqueSkills}


          Use above data and build the summary you can use this format "With a rich background in [Industry Experience], I've spearheaded [Notable Projects], achieving [Career Highlights] and earning recognition with [Promotions]. Excited to pursue [Future Career] leveraging my [Unique Skills]."

          Remove any extra words or incomplete sentences 

        
    `;

    
        try {
            const response = await axios.post(apiUrl, {
                model,
                messages: [
                    {
                        role: "user",
                        content: userMessage
                    }
                ],
                max_tokens: 50,
                temperature: 0.7,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            });
    
            console.log('Response:', response.data); // Log response data
    
            const choices = response.data.choices;
            if (choices && choices.length > 0) {
                const message = choices[0]?.message?.content;
                if (message) {
                    const generatedSummary = message.trim().slice(0, 800);
                    return generatedSummary;
                } else {
                    throw new Error('Generated summary is undefined');
                }
            } else {
                throw new Error('No choices found in the response');
            }
        } catch (error) {
            console.error('Error generating summary:', error);
            throw error;
        }
    };

    

    
   

    

    
   
    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='AI Generated Summary' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className='summarymaindiv'>
                                    <Typography mb={1}>Your finalised AI generated summary </Typography>
                                    <CustomMultilineTextFieldslimited value={finalSummary} onChange={handleFinalSummaryChange} inputHeight={100} maxWidth={1300} maxWords={50} isRequired={true}/> 
                                    <Button variant="contained" color="success" onClick={generateAndSetSummary} style={{marginTop:'1rem',borderRadius:'20px'}} >Regenerate AI Summary</Button>

                                </div>
                            </div>
                            <Grid container spacing={2} style={{position: 'absolute', bottom: 80}}>            
                                <Grid xs={6} paddingLeft={'10px'}>
                                    <Button startIcon={<ArrowBackIcon />} style={back} onClick={prevPage}>Go Back</Button>
                                </Grid>
                                    
                                <Grid xs={6}>
                                    <Button type='submit' style={next}>Finalise Summary</Button>                                    
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