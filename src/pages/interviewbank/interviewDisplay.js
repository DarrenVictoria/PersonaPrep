import NavBar from "../../components/Navbar";
import Footer from "../../components/footer";
import './interviewDisplay.css';
import '../insightblog/insightBlog.css'
import InterviewHeader from '../../components/InterviewHeader';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { collection, getFirestore, getDocs, serverTimestamp } from 'firebase/firestore';


const InterviewDisplay = () => {
    const [trnscrptDtls, setTrnscrptdtls] = useState(['']);
    const [topic, setTopic] = useState('');
    const [field, setField] = useState('');

    //to get the card id
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const interviewId = searchParams.get('id');

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const db = getFirestore();
                const interviewCollection = collection(db, 'interviewcards');
                const querySnapshot = await getDocs(interviewCollection);
                querySnapshot.forEach((doc) => {
                    if(doc.id == interviewId){
                        const interviewData = doc.data();
                        setTopic(interviewData.topic || '');
                        setField(interviewData.field || '');
                        setTrnscrptdtls(interviewData.transcript || '');
                    }
                })
                // const existingDoc = querySnapshot.docs[0]; //gets the first doc that match the data                
            }catch (err) {
                console.log("error fetching data" , err.message)
            }
        };

        fetchUserData();
    }, []);
    
    return ( 
        <div>
            <NavBar />
            <InterviewHeader 
                position = {topic}
                date="AUGUST 13, 2023"
                tag = {field}
                tag2="#"
                tag1="#"
            />
            <div className="interviewDisplay-container">
                <Grid item xs={12} mb={3} p={2}>
                    {trnscrptDtls.map((result, index) => (
                        <Grid container item mb={3} key={index}>
                            <Grid item xs={4}><Typography>{(index % 2 === 0)? 'Interviewer :' : 'Candidate :'}</Typography></Grid>
                            <Grid item xs={8}>
                                <TextField type="text" variant="outlined" fullWidth multiline rows={2}
                                    value={trnscrptDtls[index]} 
                                    InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                    placeholder=""
                                    disabled
                                />
                            </Grid>
                        </Grid> 
                    ))}
                </Grid>
            </div>
            <Footer />
        </div>
     );
}
 
export default InterviewDisplay;