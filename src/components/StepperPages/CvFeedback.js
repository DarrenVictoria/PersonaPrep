import React from 'react';
import { useState } from 'react';
import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Typography from '@mui/material/Typography';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import { theme } from 'flowbite-react';


const CvFeedback = () => {
    const [rating1, setRating1] = useState('');
    const [rating2, setRating2] = useState('');
    const [rating3, setRating3] = useState('');
    const [rating4, setRating4] = useState('');

    const [emoji1_1Clr, setEmoji1_1Clr] = useState('');
    const [emoji1_2Clr, setEmoji1_2Clr] = useState('');
    const [emoji1_3Clr, setEmoji1_3Clr] = useState('');
    const [emoji1_4Clr, setEmoji1_4Clr] = useState('');
    const [emoji1_5Clr, setEmoji1_5Clr] = useState('');

    const [emoji2_1Clr, setEmoji2_1Clr] = useState('');
    const [emoji2_2Clr, setEmoji2_2Clr] = useState('');
    const [emoji2_3Clr, setEmoji2_3Clr] = useState('');
    const [emoji2_4Clr, setEmoji2_4Clr] = useState('');
    const [emoji2_5Clr, setEmoji2_5Clr] = useState('');

    const [emoji3_1Clr, setEmoji3_1Clr] = useState('');
    const [emoji3_2Clr, setEmoji3_2Clr] = useState('');
    const [emoji3_3Clr, setEmoji3_3Clr] = useState('');
    const [emoji3_4Clr, setEmoji3_4Clr] = useState('');
    const [emoji3_5Clr, setEmoji3_5Clr] = useState('');

    const [emoji4_1Clr, setEmoji4_1Clr] = useState('');
    const [emoji4_2Clr, setEmoji4_2Clr] = useState('');
    const [emoji4_3Clr, setEmoji4_3Clr] = useState('');
    const [emoji4_4Clr, setEmoji4_4Clr] = useState('');
    const [emoji4_5Clr, setEmoji4_5Clr] = useState('');

    const emojisClr = ['', '', '', '', ''];

    const rating1Click = (btnId) => {
        emojisClr[btnId - 1] =  (btnId === 1 || btnId ===2) ? 'error' : 
                                (btnId === 3)? 'warning' :
                                (btnId === 4 || btnId === 5)? 'success': '';

        setEmoji1_1Clr(emojisClr[0]);
        setEmoji1_2Clr(emojisClr[1]);
        setEmoji1_3Clr(emojisClr[2]);
        setEmoji1_4Clr(emojisClr[3]);
        setEmoji1_5Clr(emojisClr[4]);

        setRating1(btnId);
        console.log(rating1);        
    };
    const rating2Click = (btnId) => {
        emojisClr[btnId - 1] =  (btnId === 1 || btnId ===2) ? 'error' : 
                                (btnId === 3)? 'warning' :
                                (btnId === 4 || btnId === 5)? 'success': '';

        setEmoji2_1Clr(emojisClr[0]);
        setEmoji2_2Clr(emojisClr[1]);
        setEmoji2_3Clr(emojisClr[2]);
        setEmoji2_4Clr(emojisClr[3]);
        setEmoji2_5Clr(emojisClr[4]);

        setRating2(btnId);
    };
    const rating3Click = (btnId) => {
        emojisClr[btnId - 1] =  (btnId === 1 || btnId ===2) ? 'error' : 
                                (btnId === 3)? 'warning' :
                                (btnId === 4 || btnId === 5)? 'success': '';

        setEmoji3_1Clr(emojisClr[0]);
        setEmoji3_2Clr(emojisClr[1]);
        setEmoji3_3Clr(emojisClr[2]);
        setEmoji3_4Clr(emojisClr[3]);
        setEmoji3_5Clr(emojisClr[4]);

        setRating3(btnId);
    };
    const rating4Click = (btnId) => {
        emojisClr[btnId - 1] =  (btnId === 1 || btnId ===2) ? 'error' : 
                                (btnId === 3)? 'warning' :
                                (btnId === 4 || btnId === 5)? 'success': '';

        setEmoji4_1Clr(emojisClr[0]);
        setEmoji4_2Clr(emojisClr[1]);
        setEmoji4_3Clr(emojisClr[2]);
        setEmoji4_4Clr(emojisClr[3]);
        setEmoji4_5Clr(emojisClr[4]);

        setRating4(btnId);
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

    return(
        <>
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
                        <Grid item xs={2}  px={2} >
                            <IconButton onClick={() => rating1Click(1)} style={{ width:'22px', height:'22px'}}>
                                <SentimentVeryDissatisfiedIcon color={emoji1_1Clr} className={useStyles(1).button}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating1Click(2)} style={{ width:'22px', height:'22px'}}>
                                <SentimentDissatisfiedIcon color={emoji1_2Clr} className={useStyles(1).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating1Click(3)}  style={{ width:'22px', height:'22px'}}>
                                <SentimentSatisfiedIcon color={emoji1_3Clr} className={useStyles(2).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating1Click(4)} style={{ width:'22px', height:'22px'}}>
                                <SentimentSatisfiedAltIcon color={emoji1_4Clr} className={useStyles(3).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2}  px={2} >
                            <IconButton onClick={() => rating1Click(5)} style={{ width:'22px', height:'22px'}}>
                                <SentimentVerySatisfiedIcon color={emoji1_5Clr} className={useStyles(3).button} />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} mb={1}>
                        <Typography variant='h6' >Content Quality</Typography>
                        <Typography variant='caption'>How satisfied are you with the quality and the relevance of the generatored CV?</Typography>
                    </Grid>
                    <Grid container justifyContent={'space-between'} sx={{backgroundColor: 'white', width: '375px', borderRadius: '25px'}} mb={3}py={2}>
                        <Grid item xs={2}  px={2} >
                            <IconButton onClick={() => rating2Click(1)} style={{ width:'22px', height:'22px'}}>
                                <SentimentVeryDissatisfiedIcon color={emoji2_1Clr} className={useStyles(1).button}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating2Click(2)} style={{ width:'22px', height:'22px'}}>
                                <SentimentDissatisfiedIcon color={emoji2_2Clr} className={useStyles(1).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating2Click(3)}  style={{ width:'22px', height:'22px'}}>
                                <SentimentSatisfiedIcon color={emoji2_3Clr} className={useStyles(2).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating2Click(4)} style={{ width:'22px', height:'22px'}}>
                                <SentimentSatisfiedAltIcon color={emoji2_4Clr} className={useStyles(3).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2}  px={2} >
                            <IconButton onClick={() => rating2Click(5)} style={{ width:'22px', height:'22px'}}>
                                <SentimentVerySatisfiedIcon color={emoji2_5Clr} className={useStyles(3).button} />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} mb={1}>
                        <Typography variant='h6' >Customization</Typography>
                        <Typography variant='caption'>Do you think you were able to customize the CV to meet your preferences and needs?</Typography>
                    </Grid>
                    <Grid container justifyContent={'space-between'} sx={{backgroundColor: 'white', width: '375px', borderRadius: '25px'}} mb={3}py={2}>
                        <Grid item xs={2}  px={2} >
                            <IconButton onClick={() => rating3Click(1)} style={{ width:'22px', height:'22px'}}>
                                <SentimentVeryDissatisfiedIcon color={emoji3_1Clr} className={useStyles(1).button}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating3Click(2)} style={{ width:'22px', height:'22px'}}>
                                <SentimentDissatisfiedIcon color={emoji3_2Clr} className={useStyles(1).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating3Click(3)}  style={{ width:'22px', height:'22px'}}>
                                <SentimentSatisfiedIcon color={emoji3_3Clr} className={useStyles(2).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating3Click(4)} style={{ width:'22px', height:'22px'}}>
                                <SentimentSatisfiedAltIcon color={emoji3_4Clr} className={useStyles(3).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2}  px={2} >
                            <IconButton onClick={() => rating3Click(5)} style={{ width:'22px', height:'22px'}}>
                                <SentimentVerySatisfiedIcon color={emoji3_5Clr} className={useStyles(3).button} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>                    
            </div>

            <div className="feedback-rightCol">
                <Grid container>
                    <Grid item xs={12} mb={1}>
                        <Typography variant='h6' >Accuracy</Typography>
                        <Typography variant='caption'>How accurately do you feel the generated CV represents your skills and experiences?</Typography>
                    </Grid>
                    <Grid container justifyContent={'space-between'} sx={{backgroundColor: 'white', width: '375px', borderRadius: '25px'}} mb={3}py={2}>
                        <Grid item xs={2}  px={2} >
                            <IconButton onClick={() => rating4Click(1)} style={{ width:'22px', height:'22px'}}>
                                <SentimentVeryDissatisfiedIcon color={emoji4_1Clr} className={useStyles(1).button}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating4Click(2)} style={{ width:'22px', height:'22px'}}>
                                <SentimentDissatisfiedIcon color={emoji4_2Clr} className={useStyles(1).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating4Click(3)}  style={{ width:'22px', height:'22px'}}>
                                <SentimentSatisfiedIcon color={emoji4_3Clr} className={useStyles(2).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} px={2} >
                            <IconButton onClick={() => rating4Click(4)} style={{ width:'22px', height:'22px'}}>
                                <SentimentSatisfiedAltIcon color={emoji4_4Clr} className={useStyles(3).button} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2}  px={2} >
                            <IconButton onClick={() => rating4Click(5)} style={{ width:'22px', height:'22px'}}>
                                <SentimentVerySatisfiedIcon color={emoji4_5Clr} className={useStyles(3).button} />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} mb={1}>
                        <Typography variant='h6' >Are there any specific areas or features you think the CV generator could improve upon?</Typography>
                    </Grid>
                    <Grid item xs={12} mb={2} >
                    <CustomMultilineTextFields height='100px' />
                </Grid>
                </Grid>                    
            </div>
        </div>
        </>
    )

}
export default CvFeedback