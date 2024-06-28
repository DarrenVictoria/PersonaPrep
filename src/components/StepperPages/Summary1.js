import React, {useEffect} from 'react';
import '../../pages/interviewforms/Template.css';
import InterviewFormHeader from '../InterviewFormHeader';
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
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";


const Summary_1 = () => {

    const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

    const industryExperience = watch('industryExperience');
    const notableProjects = watch('notableProjects');
    const careerHighlights = watch('careerHighlights');
    const promotions = watch('promotions');
    const futureCareer = watch('futureCareer');
    const uniqueSkills = watch('uniqueSkills');

    const navigate = useNavigate();
    const prevPage = () => navigate('/skilltrack');
   
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const formData = {
    //             industryExperience,
    //             notableProjects,
    //             careerHighlights,
    //             promotions,
    //             futureCareer,
    //             uniqueSkills
    //         };
            
    //         await sendSummaryDataToFirestore(formData);
    //         navigate('/extraInfo');
    //     } catch (error) {
    //         console.error('Error submitting summary data:', error);
    //     }
    // };

    const onSubmit = async (e) => {
        try {
            const formData = {
                industryExperience,
                notableProjects,
                careerHighlights,
                promotions,
                futureCareer,
                uniqueSkills
            };
            
            await sendSummaryDataToFirestore(formData);
            navigate('/extraInfo');
        } catch (error) {
            console.error('Error submitting summary data:', error);
        }
    }

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
                        setValue('industryExperience', summaryData.industryExperience || '');
                        setValue('notableProjects', summaryData.notableProjects || '');
                        setValue('careerHighlights', summaryData.careerHighlights || '');
                        setValue('promotions', summaryData.promotions || '');
                        setValue('futureCareer', summaryData.futureCareer || '');
                        setValue('uniqueSkills', summaryData.uniqueSkills || '');
                        // setIndustryExperience(summaryData.industryExperience || '');
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
            <InterviewFormHeader title='Summary Statement Data Collection' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className='summarymaindiv'>
                                    <Typography mb={1}><span style={{color: 'red'}}>*</span> In which key industries have you worked in, and what were your key roles in each?</Typography>
                                    <TextField
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={industryExperience}
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                        required
                                        {...register("industryExperience", { required: true, maxLength: 375, pattern: /^[a-zA-Z0-9\s,.'@!\-]+$/ })}
                                    />
                                    {errors.industryExperience && errors.industryExperience.type === "maxLength" ? "Max character limit is 375" : errors.industryExperience && "Please enter only letters, numbers, and characters ( . , ' ! @ - )"}

                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Have you led any projects or initiatives that had a notable impact?</Typography>
                                    <TextField
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={notableProjects}
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                        required
                                        {...register("notableProjects", { required: true, maxLength: 375, pattern: /^[a-zA-Z0-9\s,.'@!\-]+$/})}
                                    />
                                    {errors.notableProjects && errors.notableProjects.type === "maxLength" ? "Max character limit is 375" : errors.notableProjects && "Please enter only letters, numbers, and characters ( . , ' ! @ - )"}
                                    
                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Any highlights in your career so far you would like to describe about?</Typography>
                                    <TextField
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={careerHighlights}
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                        required
                                        {...register("careerHighlights", { required: true, maxLength: 375, pattern: /^[a-zA-Z0-9\s,.'@!\-]+$/ })}
                                    />
                                    {errors.careerHighlights && errors.careerHighlights.type === "maxLength" ? "Max character limit is 375" : errors.careerHighlights && "Please enter only letters, numbers, and characters ( . , ' ! @ - )"}

                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Are there specific milestones or promotions that stand out?</Typography>
                                    <TextField
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={promotions}
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                        required
                                        {...register("promotions", { required: true, maxLength: 375, pattern: /^[a-zA-Z0-9\s,.'@!\-]+$/ })}
                                    />
                                    {errors.promotions && errors.promotions.type === "maxLength" ? "Max character limit is 375" : errors.promotions && "Please enter only letters, numbers, and characters ( . , ' ! @ - )"}

                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Where do you see your career heading in the next few years?</Typography>
                                    <TextField
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={futureCareer}
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                        required
                                        {...register("futureCareer", { required: true, maxLength: 375, pattern: /^[a-zA-Z0-9\s,.'@!\-]+$/ })}
                                    />
                                    {errors.futureCareer && errors.futureCareer.type === "maxLength" ? "Max character limit is 375" : errors.futureCareer && "Please enter only letters, numbers, and characters ( . , ' ! @ - )"}

                                    <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> What sets you apart from others in your field?</Typography>
                                    <TextField
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={uniqueSkills}
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                        required
                                        {...register("uniqueSkills", { required: true, maxLength: 375, pattern: /^[a-zA-Z0-9\s,.'@!\-]+$/ })}
                                    />
                                    {errors.uniqueSkills && errors.uniqueSkills.type === "maxLength" ? "Max character limit is 375" : errors.uniqueSkills && "Please enter only letters, numbers, and characters ( . , ' ! @ - )"}

                                    {/* <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Have you led any projects or initiatives that had a notable impact?</Typography>
                                    <CustomMultilineTextFieldslimited value={notableProjects} onChange={handleNotableProjectsChange} inputHeight={100} maxWidth={1300} maxWords={75} isRequired={true}/> */}
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