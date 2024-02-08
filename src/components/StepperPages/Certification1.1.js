import './css/Certification1.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';
import { CustomizedHook } from '../TextfieldButtonDataDisplay';
import cdiary from '../../assets/images/iconcdiary.svg';
import ccalander from '../../assets/images/iconccalander.svg';
import chat from '../../assets/images/iconchat.svg';
import FileUpload from '../FileUpload';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';

const Certification2 = () => {


    const CProj_Skills = [{data: 'c#'}, {data: 'java'}, {data: 'react'}];


    const [Certificate2Name, setCertificate2Name] = useState('');
    const [Certificate2issuedOrg, setCertificate2issuedOrg] = useState('');
    const [Certificate2Id, setCertificate2Id] = useState('');
    const [Certificate2ProjSkills, setCertificate2ProjSkills] = useState([]); //this is for CustomizedHook
    const [Certificate2IssueMonth,setCertificate2IssueMonth] = useState("");
    const [Certificate2IssueYear,setCertificate2IssueYear] = useState("");
    const [Certificate2ExpMonth, setCertificate2ExpMonth] = useState('');
    const [Certificate2ExpYear, setCertificate2ExpYear] = useState('');

    const [Certificate2LInk, setCertificate2LInk] = useState('');


    


    const [validation, setValidation] = useState(false);

    const validate = () => {
        // if (!(selectedFaculty === '' && selectedBatch === '' && selectedDegree === '')) setValidation(true);
    }


    //below handle function is for CustomizedHook
    const handleCertificate2ProjSkills = function (ev, val, reason, details) {
        if (ev.target.classList.contains('MuiSvgIcon-root')){
            // Removing Value
            const value = ev.target.parentElement.querySelector('span').innerHTML;
            setCertificate2ProjSkills(Certificate2ProjSkills.filter(item => item !== value));
        } else {
            const value = ev.target.innerHTML;
            Certificate2ProjSkills.push(value);
        }
        console.log(Certificate2ProjSkills);
    }



    const navigate = useNavigate();
    const prevPage = () => navigate('/certification');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/clubsAndSocs')
        // validate();

        // Check if validation passed
        // if (validation) {
        //     // Call the function to add data to Firestore
        //     addDataToFirestore();
        // } else {
        //     console.log('Validation failed');
        // }
    };

    return ( 
        <div className="formtemp-page">

            <InterviewFormHeader title='Second Certification' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>

                                <div className="Certification1-Maindiv">
                                    <div className="Certification1-LeftColumn">
                                        <Grid container>
                                            <Grid item xs={12} mb={3}>
                                                <Typography ><span style={{color: 'red'}}>*</span> Name of Certification</Typography>
                                                <TextField type="text" variant="outlined" value={Certificate2Name} onChange={(event) => setCertificate2Name(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}} />
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography ><span style={{color: 'red'}}>*</span> Issuing Organization</Typography>
                                                <TextField type="text" variant="outlined" value={Certificate2issuedOrg} onChange={(event) => setCertificate2issuedOrg(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}/>
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>Issue Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setCertificate2IssueMonth}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setCertificate2IssueYear}
                                                    disabledOptions={["2024"]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>Expiration Date</Typography>
                                            </Grid>
                                            <Grid item xs={6} pr={1}>
                                                <EditableChoose
                                                    options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                                    onSelect={setCertificate2ExpMonth}
                                                    disabledOptions={[]}
                                                />
                                            </Grid>
                                            <Grid item xs={6} mb={3} pl={1}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setCertificate2ExpYear}
                                                    disabledOptions={["2024"]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography ><span style={{color: 'red'}}>*</span>Certification ID</Typography>
                                                <TextField type="text" variant="outlined" value={Certificate2Id} onChange={(event) => setCertificate2Id(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}/>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <CustomizedHook data={CProj_Skills} label={<Typography mb={1}><span style={{color: 'red'}}>*</span>Skills acquired from the project?</Typography>}/>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <Typography mb={1}><span style={{color: 'red'}}>*</span>Certification evidence link</Typography>
                                                <TextField type="text" variant="outlined" value={Certificate2LInk} onChange={(event) => setCertificate2LInk(event.target.value)} fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='CV Builder'/>
                                            </Grid>
                                            <Grid item xs={12} mb={2} style={{display: 'flex', justifyContent: 'center'}}>
                                                <Typography>-OR-</Typography>
                                            </Grid>
                                            <Grid item xs={12} mb={3}>
                                                <FileUpload />
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className="Certification1-RightColumn">
                                        <div style={{padding: '8px 0px', backgroundColor: '#fff', borderRadius: '15px', maxWidth: '363px'}}>
                                            <Card variant="outlined" sx={{height:'100%',maxHeight: '400px', width:'100%',maxWidth: '363px',borderRadius:'15px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>
                                            <CardContent >
                                                <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Certification Tips</Typography>
                                                <List>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px'}}>
                                                                <img src={cdiary} alt="Custom Icon" style={{ width: '27px', height: '31px' }}/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1' >
                                                                Fill in all the information about your most recent certification to fill in this section.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            {/* <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}> */}
                                                            <Avatar sx={{borderRadius: '12px', padding: '5px'}}>
                                                                <img src={ccalander} alt="Custom Icon" style={{ width: 'var(--40,40px)', height: '35.666px' }} />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Ensure your certifaction are up to date by double checking their expiration date.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                                                                <img src={chat} alt="Custom Icon" style={{ width: '41px', height: '39px' ,}} />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>
                                                            <Typography variant='body1'>
                                                                Arrange your certification logically according to the most relevant ones for the position you're applying for.
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                </List>
                                            </CardContent>
                                            </Card>
                                        </div>
                                    </div>
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
     );
}
 
export default Certification2;