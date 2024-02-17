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
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        
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
        const generateSummary = async () => {
          if (finalSummary.trim() === '') {
            try {
              // Prompt ChatGPT/OpenAI API to generate summary
              const generatedSummary = await promptChatGPT();
      
              // Improve summary quality (optional)
              const improvedSummary = enhanceSummary(generatedSummary);
      
              setFinalSummary(improvedSummary);
            } catch (error) {
              console.error('Error generating summary:', error);
            }
          }
        };
      
        generateSummary();
      }, [finalSummary]);
      
      const promptChatGPT = async () => {
        const prompt = `
          Hey There !!
        `;
      
        // Replace with your OpenAI API details
        const apiKey = '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';
        const apiUrl = 'https://api.openai.com/v1/chat/completions';
        
      
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model:'gpt-3.5-turbo',
              prompt,
              max_tokens: 100, // Adjust based on desired length
              temperature: 0.7, // Adjust for creativity vs accuracy
            }),
          });
      
          if (!response.ok) {
            throw new Error('Failed to generate summary');
          }
      
          const data = await response.json();
          const generatedSummary = data.choices[0].text.trim().slice(0, 30); // Ensure 30-word limit
          return generatedSummary;
        } catch (error) {
          console.error('Error generating summary:', error);
          throw error;
        }
      };
      
      // Optional function to improve summary quality (example)
      const enhanceSummary = (summary) => {
        // Replace with your own logic to refine the summary (e.g., conciseness, clarity)
        return summary.replace(/\s*\([^)]*\)\s*/g, '').replace(/\s+/g, ' '); // Remove parentheses and excess spaces
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