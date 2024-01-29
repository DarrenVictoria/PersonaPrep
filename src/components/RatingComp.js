import { useState } from 'react';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const RatingComp = ({emojiId}) => {
    const [rating1, setRating1] = useState('');
    const [rating2, setRating2] = useState('');
    const [rating3, setRating3] = useState('');
    const [rating4, setRating4] = useState('');

    const rating1Click = (btnId) => {
        if(btnId === 1) setRating1(1);
        else if(btnId === 2) setRating1(2);
        else if(btnId === 3) setRating1(3);
        else if(btnId === 4) setRating1(4);
        else if(btnId === 5) setRating1(5);
        console.log(rating1);        
    };
    
    const useStyles = styled((theme) => ({
        button: (index) => ({
            '&:hover': {
            color: 
                (index === 1) ? theme.palette.error.main : 
                (index === 2) ? theme.palette.warning.main : 
                (index === 3) ? theme.palette.success.main : theme.palette.error.main,
            },
        }),
    }));

    return ( 
        <Grid container justifyContent={'space-between'} sx={{backgroundColor: 'white', width: '375px', borderRadius: '25px'}} mb={3}py={2}>
            <Grid item xs={2}  px={2} >
                <IconButton id='button1' onClick={() => rating1Click(emojiId)} style={{ backgroundColor: '', width:'22px', height:'22px'}}>
                    <SentimentVeryDissatisfiedIcon className={useStyles(1).button}/>
                </IconButton>
            </Grid>
            <Grid item xs={2} px={2} >
                <IconButton id='button2' onClick={() => rating1Click(emojiId)} style={{ backgroundColor: '', width:'22px', height:'22px'}}>
                    <SentimentDissatisfiedIcon className={useStyles(1).button} />
                </IconButton>
            </Grid>
            <Grid item xs={2} px={2} >
                <IconButton id='button3' onClick={() => rating1Click(emojiId)}  style={{ backgroundColor: '', width:'22px', height:'22px'}}>
                    <SentimentSatisfiedIcon className={useStyles(2).button} />
                </IconButton>
            </Grid>
            <Grid item xs={2} px={2} >
                <IconButton id='button4' onClick={() => rating1Click(emojiId)} style={{ backgroundColor: '', width:'22px', height:'22px'}}>
                    <SentimentSatisfiedAltIcon className={useStyles(3).button} />
                </IconButton>
            </Grid>
            <Grid item xs={2}  px={2} >
                <IconButton id='button5' onClick={() => rating1Click(emojiId)} style={{ backgroundColor: '', width:'22px', height:'22px'}}>
                    <SentimentVerySatisfiedIcon className={useStyles(3).button} />
                </IconButton>
            </Grid>
        </Grid>
     );
}
 
export default RatingComp;