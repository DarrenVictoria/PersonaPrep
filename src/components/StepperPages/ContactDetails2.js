import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography'; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import github from '../../assets/images/icongithub.svg';
import linkedIn from '../../assets/images/iconlinkedin.svg';
import twitter from '../../assets/images/icontwitter.svg';
import stackoverflow from '../../assets/images/iconstackoverflow.png';
import medium from '../../assets/images/iconmedium.svg';
import chand from '../../assets/images/iconchand.svg';
import clinkedin from '../../assets/images/iconclinkedin.svg';
import cgithub from '../../assets/images/iconcgithub.svg';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';

const ContactDetails_2 = () => {
    const [gitChecked, setGitChecked] = useState(false);
    const [linkedChecked, setlinkedChecked] = useState(false);
    const [twitterChecked, setTwitterChecked] = useState(false);
    const [soChecked, setSoChecked] = useState(false);
    const [mediumChecked, setMediumChecked] = useState(false);

    const [gitTxt, setGitTxt] = useState('');
    const [linkedInTxt, setLinkedInTxt] = useState('');
    const [twitterTxt, setTwitterTxt] = useState('');
    const [soTxt, setSoTxt] = useState('');
    const [mediumTxt, setMediumTxt] = useState('');

    const CheckBoxComp = ({image, name, value, setText, checked, setCheck}) => {
        const handleChange = (event) => {
            if (!checked) setText('');
            else setText(event.target.value);
        }
        
        const handleCheck = (event) => {
            setCheck(event.target.checked);
        }
    
        useEffect(() => {
            if (!checked) setText('');
        }, [checked]);
    
        return (
            <Grid container mb={2} alignItems='center'>
                <Grid item xs={1} md={1}>
                    <img src={image} alt={`${name} icon`} />
                </Grid>
                <Grid item xs={5} md={4} pl={1} pt={1}>
                    <Typography mb={1}>{name}</Typography>
                </Grid>
                <Grid item xs={1} md={1}>
                    <FormControlLabel control={<Checkbox  checked={checked} onChange={handleCheck} />} />
                </Grid>
                <Grid item xs={5} md={6}>
                    <TextField type="text" value={value} onChange={handleChange} disabled={!checked} variant="outlined" fullWidth InputProps={{ style: { borderRadius: '25px', backgroundColor: 'white' }}} placeholder='@profile'/>
                </Grid>
            </Grid>
        )
    }

    const btn = (event) => {
        event.preventDefault();
        if (gitTxt === '') console.log('git null');
        if (linkedInTxt === '') console.log('linked null');
        if (twitterTxt === '') console.log('twitter null');
        if (soTxt === '') console.log('so null');
        if (mediumTxt === '') console.log('medium null');
        console.log(`${gitTxt} ${linkedInTxt} ${twitterTxt} ${soTxt} ${mediumTxt}`);
    }

    return ( 
        <div className="personalInfo-main">
            <div className="personalInfo-leftCol">
                <Grid container>
                    <Grid item xs={12} mb={3}>
                        <Typography variant='h4' mb={1} sx={{fontWeight:'bold'}}>Social network accounts</Typography>
                        <Typography mb={1}>Indicate the desired communication method</Typography>
                    </Grid>

                    <CheckBoxComp image={github} name='GitHub' value={gitTxt} setText={setGitTxt} checked={gitChecked} setCheck={setGitChecked}/>
                    <CheckBoxComp image={linkedIn} name='LinkedIn' value={linkedInTxt} setText={setLinkedInTxt} checked={linkedChecked} setCheck={setlinkedChecked}/>
                    <CheckBoxComp image={twitter} name='Twitter' value={twitterTxt} setText={setTwitterTxt} checked={twitterChecked} setCheck={setTwitterChecked}/>
                    <CheckBoxComp image={stackoverflow} name='StackOverflow' value={soTxt} setText={setSoTxt} checked={soChecked} setCheck={setSoChecked}/>
                    <CheckBoxComp image={medium} name='Medium' value={mediumTxt} setText={setMediumTxt} checked={mediumChecked} setCheck={setMediumChecked}/>
                </Grid>
            </div>

            <div className="personalInfo-rightCol">
                <Card variant="outlined" sx={{ height:'100%',maxHeight: '420px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:769px)':{overflowY:'hidden',},}}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>Social Media Tips</Typography>
                        <List>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar sx={{borderRadius: '12px'}}>
                                        <img src={chand} alt="Custom Icon" style={{ width: '27px', height: '31px' }}/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant='body1' >
                                        Choose social media platforms that match with your professional goals.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar sx={{borderRadius: '12px', padding: '5px'}}>
                                        <img src={clinkedin} alt="Custom Icon" style={{ width: 'var(--40,40px)', height: '35.666px' }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant='body1'>
                                        <span style={{fontWeight: 'bold'}}>LinkedIn</span> is ideal for showcasing skills, connecting with industry professionals, and highlighting educational background.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar sx={{borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                                        <img src={cgithub} alt="Custom Icon" style={{ width: '41px', height: '39px' ,}} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant='body1'>
                                        <span style={{fontWeight: 'bold'}}>Github</span> is useful to showcase technical skills and coding projects, collaborating with the coding community.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default ContactDetails_2;
