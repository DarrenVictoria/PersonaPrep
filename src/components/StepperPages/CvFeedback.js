import { useState } from 'react';
import '../../pages/interviewforms/Template.css';
import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Typography from '@mui/material/Typography';
import RatingComp from '../RatingComp';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';


const CvFeedback = () => {
    const [rating1, setRating1] = useState('');
    const [rating2, setRating2] = useState('');
    const [rating3, setRating3] = useState('');
    const [rating4, setRating4] = useState('');
    const [feedback, setFeedback] = useState('');

    const [emoji1Clr, setEmoji1Clr] = useState([''], [''], [''], [''], ['']);
    const [emoji2Clr, setEmoji2Clr] = useState([''], [''], [''], [''], ['']);
    const [emoji3Clr, setEmoji3Clr] = useState([''], [''], [''], [''], ['']);
    const [emoji4Clr, setEmoji4Clr] = useState([''], [''], [''], [''], ['']);

    const feedbackChange = (event) => setFeedback(event.target.value);

    const emojisClr = ['', '', '', '', ''];

    const rating1Click = (btnId) => {
        emojisClr[btnId - 1] =  (btnId === 1 || btnId ===2) ? 'error' : 
                                (btnId === 3)? 'warning' :
                                (btnId === 4 || btnId === 5)? 'success': '';

        setEmoji1Clr([
            emojisClr[0],
            emojisClr[1],
            emojisClr[2],
            emojisClr[3],
            emojisClr[4]
        ]);

        setRating1(btnId);
        console.log(rating1);        
    };
    const rating2Click = (btnId) => {
        emojisClr[btnId - 1] =  (btnId === 1 || btnId ===2) ? 'error' : 
                                (btnId === 3)? 'warning' :
                                (btnId === 4 || btnId === 5)? 'success': '';

        setEmoji2Clr([
            emojisClr[0],
            emojisClr[1],
            emojisClr[2],
            emojisClr[3],
            emojisClr[4]
        ]);

        setRating2(btnId);
    };
    const rating3Click = (btnId) => {
        emojisClr[btnId - 1] =  (btnId === 1 || btnId ===2) ? 'error' : 
                                (btnId === 3)? 'warning' :
                                (btnId === 4 || btnId === 5)? 'success': '';

        setEmoji3Clr([
            emojisClr[0],
            emojisClr[1],
            emojisClr[2],
            emojisClr[3],
            emojisClr[4]
        ]);

        setRating3(btnId);
    };
    const rating4Click = (btnId) => {
        emojisClr[btnId - 1] =  (btnId === 1 || btnId ===2) ? 'error' : 
                                (btnId === 3)? 'warning' :
                                (btnId === 4 || btnId === 5)? 'success': '';

        setEmoji4Clr([
            emojisClr[0],
            emojisClr[1],
            emojisClr[2],
            emojisClr[3],
            emojisClr[4]
        ]);

        setRating4(btnId);
        console.log(rating4);
    };

    //doesnt work
    const useStyles = styled((theme) => ({
        button: (index) => ({
            '&:hover': {
            color: 
                (index === 1) ? 'red' : 
                (index === 2) ? theme.palette.warning.main : 
                (index === 3) ? theme.palette.success.main : theme.palette.error.main,
            },
        }),        
    }));

    const icons1 = [
        { onclick: () => rating1Click(1), color: emoji1Clr[0], icon: SentimentVeryDissatisfiedIcon },
        { onclick: () => rating1Click(2), color: emoji1Clr[1], icon: SentimentDissatisfiedIcon },
        { onclick: () => rating1Click(3), color: emoji1Clr[2], icon: SentimentSatisfiedIcon },
        { onclick: () => rating1Click(4), color: emoji1Clr[3], icon: SentimentSatisfiedAltIcon },
        { onclick: () => rating1Click(5), color: emoji1Clr[4], icon: SentimentVerySatisfiedIcon },
    ];
    const icons2 = [
        { onclick: () => rating2Click(1), color: emoji2Clr[0], icon: SentimentVeryDissatisfiedIcon },
        { onclick: () => rating2Click(2), color: emoji2Clr[1], icon: SentimentDissatisfiedIcon },
        { onclick: () => rating2Click(3), color: emoji2Clr[2], icon: SentimentSatisfiedIcon },
        { onclick: () => rating2Click(4), color: emoji2Clr[3], icon: SentimentSatisfiedAltIcon },
        { onclick: () => rating2Click(5), color: emoji2Clr[4], icon: SentimentVerySatisfiedIcon },
    ];
    const icons3 = [
        { onclick: () => rating3Click(1), color: emoji3Clr[0], icon: SentimentVeryDissatisfiedIcon },
        { onclick: () => rating3Click(2), color: emoji3Clr[1], icon: SentimentDissatisfiedIcon },
        { onclick: () => rating3Click(3), color: emoji3Clr[2], icon: SentimentSatisfiedIcon },
        { onclick: () => rating3Click(4), color: emoji3Clr[3], icon: SentimentSatisfiedAltIcon },
        { onclick: () => rating3Click(5), color: emoji3Clr[4], icon: SentimentVerySatisfiedIcon },
    ];
    const icons4 = [
        { onclick: () => rating4Click(1), color: emoji4Clr[0], icon: SentimentVeryDissatisfiedIcon },
        { onclick: () => rating4Click(2), color: emoji4Clr[1], icon: SentimentDissatisfiedIcon },
        { onclick: () => rating4Click(3), color: emoji4Clr[2], icon: SentimentSatisfiedIcon },
        { onclick: () => rating4Click(4), color: emoji4Clr[3], icon: SentimentSatisfiedAltIcon },
        { onclick: () => rating4Click(5), color: emoji4Clr[4], icon: SentimentVerySatisfiedIcon },
    ];

    // const btn = (event) => {event.preventDefault(); console.log(feedback)};

    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Feedback' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>

                                <Grid item xs={12} mb={4}>
                                    <Typography variant='h3' sx={{fontWeight: 'bold'}}>How was the CV generator?</Typography>
                                </Grid>
                                <div className="personalInfo-main">
                                    <div className="personalInfo-leftCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={1}>
                                                <Typography variant='h6' >Overrall Experience</Typography>
                                                <Typography variant='caption'>How would you rate the overrall experience of use of the CV generator platform?</Typography>
                                            </Grid>
                                            <Grid container justifyContent={'space-between'} sx={{backgroundColor: 'white', width: '375px', borderRadius: '25px'}} mb={3}py={2}>                        
                                                {icons1.map(({ onclick, color, icon }, index) => (
                                                    <RatingComp key={index} onclick={onclick} color={color} icon={icon} />
                                                ))}
                                            </Grid>

                                            <Grid item xs={12} mb={1}>
                                                <Typography variant='h6' >Content Quality</Typography>
                                                <Typography variant='caption'>How satisfied are you with the quality and the relevance of the generatored CV?</Typography>
                                            </Grid>
                                            <Grid container justifyContent={'space-between'} sx={{backgroundColor: 'white', width: '375px', borderRadius: '25px'}} mb={3}py={2}>
                                                {icons2.map(({ onclick, color, icon }, index) => (
                                                    <RatingComp key={index} onclick={onclick} color={color} icon={icon} />
                                                ))}
                                            </Grid>

                                            <Grid item xs={12} mb={1}>
                                                <Typography variant='h6' >Customization</Typography>
                                                <Typography variant='caption'>Do you think you were able to customize the CV to meet your preferences and needs?</Typography>
                                            </Grid>
                                            <Grid container justifyContent={'space-between'} sx={{backgroundColor: 'white', width: '375px', borderRadius: '25px'}} mb={3}py={2}>
                                                {icons3.map(({ onclick, color, icon }, index) => (
                                                    <RatingComp key={index} onclick={onclick} color={color} icon={icon} />
                                                ))}
                                            </Grid>
                                        </Grid>   
                                        {/* <button onClick={btn}>btn</button> */}
                                    </div>

                                    <div className="feedback-rightCol">
                                        <Grid container>
                                            <Grid item xs={12} mb={1}>
                                                <Typography variant='h6' >Accuracy</Typography>
                                                <Typography variant='caption'>How accurately do you feel the generated CV represents your skills and experiences?</Typography>
                                            </Grid>
                                            <Grid container justifyContent={'space-between'} sx={{backgroundColor: 'white', width: '375px', borderRadius: '25px'}} mb={3}py={2}>
                                                {icons4.map(({ onclick, color, icon }, index) => (
                                                    <RatingComp key={index} onclick={onclick} color={color} icon={icon} />
                                                ))}
                                            </Grid>

                                            <Grid item xs={12} mb={1}>
                                                <Typography variant='h6' >Are there any specific areas or features you think the CV generator could improve upon?</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={2} >
                                            {/* <CustomMultilineTextFields height='100px' value={feedback} onChange={feedbackChange}/> */}
                                            <CustomMultilineTextFieldslimited
                                                inputHeight="150px"
                                                maxWidth="1300px"
                                                isRequired={true}
                                                value={feedback}
                                                onChange={feedbackChange}
                                                maxWords={50} 
                                            />
                                        </Grid>
                                        </Grid>                    
                                    </div>
                                </div>

                            </div>
                        {/* <InterviewFormFooter nextForm='/certification' prevForm='/work'/> */}
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}
export default CvFeedback