import './css/personalInfo.css';
import '../../pages/interviewforms/Template.css';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { CustomizedHook } from '../TextfieldButtonDataDisplay';


const ExtraInformation = () => {
    const Interests = [{data:"role1"}, {data:"role2"}, {data:"role3"}];
    const [refName, setRefName] = useState('');
    const [refContact, setRefContact] = useState('');
    const [award, setAward] = useState('');
    const [lang, setLang] = useState('');

    return(
<<<<<<< Updated upstream
        <div className="personalInfo-main">
            <Grid container pl={1}>
                <Grid item xs={12} md={6} mb={3} pr={1}>
                    <Typography mb={1}><span style={{color: 'red'}}>*</span>Reference Person</Typography>
                    <TextField type="text" value={refName} onChange={(event) => setRefName(event.target.value)} variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                </Grid>
                <Grid item xs={12} md={4} mb={3}>
                    <Typography mb={1}><span style={{color: 'red'}}>*</span>Reference Contact</Typography>
                    <TextField type="text" value={refContact} onChange={(event) => setRefContact(event.target.value)} variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                </Grid>
                <Grid item xs={12} ml={4} mb={5}>
                    <Typography>
                        <IconButton color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                            <AddIcon style={{ color: 'white' }} />
                        </IconButton>
                        Add reference person
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} mb={3}>
                    <Typography mb={1}>Award Title</Typography>
                    <TextField type="text" value={award} onChange={(event) => setAward(event.target.value)} variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                </Grid>
                <Grid item xs={12} ml={4} mb={5}>
                    <Typography>
                        <IconButton color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                            <AddIcon style={{ color: 'white' }} />
                        </IconButton>
                        Add award
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} mb={3}>
                    <Typography mb={1}>Fluent Languages</Typography>
                    <TextField type="text" value={lang} onChange={(event) => setLang(event.target.value)} variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                </Grid>
                <Grid item xs={12} ml={4} mb={5}>
                    <Typography>
                        <IconButton color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                            <AddIcon style={{ color: 'white' }} />
                        </IconButton>
                        Add language
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} mb={3}>
                    <CustomizedHook data={Interests} label={<Typography mb={1}>Research Interests</Typography>}/>
=======
        <div className="formtemp-page">
            <InterviewFormHeader title='Extra Information' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="personalInfo-main">
                                    <Grid container pl={1}>
                                        <Grid item xs={12} md={6} mb={3} pr={1}>
                                            <Typography mb={1}><span style={{color: 'red'}}>*</span>Reference Person</Typography>
                                            <TextField type="text" value={refName} onChange={(event) => setRefName(event.target.value)} variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                                        </Grid>
                                        <Grid item xs={12} md={4} mb={3}>
                                            <Typography mb={1}><span style={{color: 'red'}}>*</span>Reference Contact</Typography>
                                            <TextField type="text" value={refContact} onChange={(event) => setRefContact(event.target.value)} variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                                        </Grid>
                                        <Grid item xs={12} ml={4} mb={5}>
                                            <Typography>
                                                <IconButton color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                                    <AddIcon style={{ color: 'white' }} />
                                                </IconButton>
                                                Add reference person
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6} mb={3}>
                                            <Typography mb={1}>Award Title</Typography>
                                            <TextField type="text" value={award} onChange={(event) => setAward(event.target.value)} variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                                        </Grid>
                                        <Grid item xs={12} ml={4} mb={5}>
                                            <Typography>
                                                <IconButton color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                                    <AddIcon style={{ color: 'white' }} />
                                                </IconButton>
                                                Add award
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6} mb={3}>
                                            <Typography mb={1}>Fluent Languages</Typography>
                                            <TextField type="text" value={lang} onChange={(event) => setLang(event.target.value)} variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder=''/>
                                        </Grid>
                                        <Grid item xs={12} ml={4} mb={5}>
                                            <Typography>
                                                <IconButton color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                                    <AddIcon style={{ color: 'white' }} />
                                                </IconButton>
                                                Add language
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6} mb={3}>
                                            <CustomizedHook data={Interests} label={<Typography mb={1}>Research Interests</Typography>}/>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        <InterviewFormFooter nextForm='/templates' prevForm='/summary'/>
                    </form>
>>>>>>> Stashed changes
                </Grid>
            </Grid>
        </div>
    </div>
    )

}
export default ExtraInformation