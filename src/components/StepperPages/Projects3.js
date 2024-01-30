import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const Projects_3 = () => {
    const addProject = () => {
        window.location.href = '';
    }

    return(
        <div className="personalInfo-main">
            <Grid container pl={1}>
                <Grid item xs={12}>
                    <Typography variant='h4' mb={2}>Projects</Typography>
                </Grid>
                <Grid item xs={12} md={8} mb={2} >
                    <CustomMultilineTextFields height='100px' />
                </Grid>
                <Grid item xs={12} ml={4} mb={5}>
                    <Typography>
                        <IconButton onClick={addProject} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                            <AddIcon style={{ color: 'white' }} />
                        </IconButton>
                        Add more projects
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )

}
export default Projects_3