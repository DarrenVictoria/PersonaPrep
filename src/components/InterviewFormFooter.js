import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {back} from '../components/BackButton.js';
import {next} from '../components/NextButton.js';
import { Typography } from "@mui/material";

const InterviewFormFooter = ({nextForm, prevForm, validation, onClick}) => {
    const nextPage = () => {
        onClick();
        if(validation) window.location.href = nextForm;
        else console.log('failed');
    };
    const prevPage = () => window.location.href = prevForm;

    return ( 
        <Grid container spacing={2} style={{position: 'absolute', bottom: 80}}>            
            <Grid xs={6} paddingLeft={'10px'}>
                <Button startIcon={<ArrowBackIcon />} style={back} onClick={prevPage}>Go Back</Button>
            </Grid>
                
            <Grid xs={6}>
                <Button style={next} onClick={nextPage}>Next Step</Button>                                    
            </Grid>
        </Grid>
    );
}
 
export default InterviewFormFooter;