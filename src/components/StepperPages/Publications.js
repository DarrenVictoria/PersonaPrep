import React from 'react';
import './css/Publication.css';
import Card from '@mui/material/Card'; //this is for the card in the right column
import CardContent from '@mui/material/CardContent'; //this is for the card in the right column
import Typography from '@mui/material/Typography'; //this is for the card in the right column
import Avatar from '@mui/material/Avatar';// for the right column
import List from '@mui/material/List';// for the right column
import ListItem from '@mui/material/ListItem';// for the right column
import ListItemText from '@mui/material/ListItemText';// for the right column
import ListItemAvatar from '@mui/material/ListItemAvatar';// for the right column
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import cstat from '../../assets/images/iconcstat.svg';
import ckey from '../../assets/images/iconckeyboard.svg';
import cbatch from '../../assets/images/iconcbatch.svg';
import EditableChoose from '../EditableSelectOption';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import { useState } from 'react';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Publications = () => {
    const [PblTitle, setPblTitle] = useState('');
    const [publisher, setPublisher] = useState('');
    const [pblUrl, SetPblUrl] = useState('');
    const [pblMonth, setPblMonth] = useState('');
    const [pblYear, setPblYear] = useState('');
    const [pblDesc, setPblDesc] = useState('');

    const navigate = useNavigate();
    const prevPage = () => navigate('/clubsAndSocs');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/skilltrack')
        // validate();

        // Check if validation passed
        // if (validation) {
        //     // Call the function to add data to Firestore
        //     addDataToFirestore();
        // } else {
        //     console.log('Validation failed');
        // }
    };
    
    return(
      <div className="formtemp-page">
            <InterviewFormHeader title='Publication' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className='Publications-Maindiv'>
                                    <div className='Publications-LeftColumn'>
                                    {/*<Box sx={{ flexGrow: 1 }}>*/}
                                    <Grid container spacing={2} >
                                      <Grid item xs={12}>
                                        
                                      <Typography ><span style={{color: 'red'}}>*</span> Publication Title</Typography>
                                          <TextField type="text" variant="outlined" value={PblTitle} onChange={(event) => setPblTitle(event.target.value)} fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}} />
                                        
                                      </Grid>
                                      <Grid item xs={12}>
                                        
                                      <Typography ><span style={{color: 'red'}}>*</span> Publication / Publisher</Typography>
                                          <TextField type="text" variant="outlined" value={publisher} onChange={(event) => setPublisher(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
                                        
                                      </Grid>
                                      <Grid item xs={12} style={{ marginBottom: '-40px' }}>
                                      <Typography ><span style={{color: 'red'}}>*</span> Publication date</Typography>
                                      </Grid>
                                      <Grid item xs={6}>
                                        
                                      <EditableChoose
                                      options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                                      onSelect={setPblMonth}
                                      disabledOptions={[]}
                                      isRequired={true}
                                      
                                    
                                    />
                                        
                                      </Grid>
                                      <Grid item xs={6}>
                                      <EditableChoose
                                      options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                      onSelect={setPblYear}
                                      disabledOptions={["2024"]}
                                      isRequired={true}
                                      
                                    
                                    />
                                        
                                      </Grid>
                                      <Grid item xs={12}>
                                        
                                      <Typography ><span style={{color: 'red'}}>*</span> Publication URL</Typography>
                                          <TextField type="text" variant="outlined" value={pblUrl} onChange={(event) => SetPblUrl(event.target.value)} fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
                                        
                                      </Grid>
                                      <Grid item xs={12}>
                                        
                                        <Typography ><span style={{color: 'red'}}>*</span> Project Description</Typography>
                                        {/* <CustomMultilineTextFields  height="115px" value={pblDesc} onChange={(event) => setPblDesc(event.target.value)} required /> */}
                                        <CustomMultilineTextFieldslimited
                                            inputHeight="150px"
                                            maxWidth="1300px"
                                            isRequired={true}
                                            value={pblDesc}
                                            onChange={(event) => setPblDesc(event.target.value)}
                                            maxWords={50} 
                                        />
                                      </Grid>
                                      
                                    </Grid>
                                  {/*</Box>*/}
                                      
                              </div>
                                    

                              

                            
                              <div className='Publications-RightColumn'>
                                <Card variant="outlined" sx={{ height:'100%',maxHeight: '450px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:769px)':{overflowY:'hidden',}}}className='Contactdetails2-RightColumnCard'>
                                  <CardContent >
                                    <Typography variant="h5" component="div"sx={{ textAlign: 'center' }}>
                                    Publication tips
                                    </Typography>
                                    <List>
                                      <ListItem >
                                      <ListItemAvatar>
                                        <Avatar sx={{borderRadius: '12px'}}>
                                        <TrendingUpIcon sx={{color:'black'}}/>
                                        </Avatar>
                                      </ListItemAvatar>
                                      <ListItemText>
                                        <Typography variant='body1' >
                                        Fill in all the information about your most recent job to fill in this section.
                                        </Typography>
                                      </ListItemText>
                                      </ListItem>
                                      <ListItem >
                                      <ListItemAvatar>
                                        <Avatar sx={{borderRadius: '12px'}}>
                                      <KeyboardIcon sx={{color:'black'}}/>
                                      </Avatar>
                                      </ListItemAvatar>
                                      <ListItemText>
                                      <Typography variant='body1'>
                                      Use keywords when mentioning your skills to showcase your unique abilities.
                                      </Typography>
                                      </ListItemText>
                                      </ListItem>
                                      <ListItem >
                                      <ListItemAvatar>
                                        <Avatar sx={{borderRadius: '12px'}}>
                                      <WorkspacePremiumIcon sx={{color:'black'}}/>
                                      </Avatar>
                                      </ListItemAvatar>
                                      <ListItemText>
                                      <Typography variant='body1'>
                                      Emphasize your accomplishments and impact in each role for engaging description.
                                      </Typography>
                                      </ListItemText>
                                      </ListItem>
                                    </List>
                                  </CardContent>
                                </Card>
                                
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
          {/*</Box>*/}
              
      </div>
            

      

     
      
    </div>
    )

}
export default Publications