import React from 'react';
import '../ContactDetails1.css';
import Card from '@mui/material/Card'; //this is for the card in the right column
import CardContent from '@mui/material/CardContent'; //this is for the card in the right column
import Typography from '@mui/material/Typography'; //this is for the card in the right column
import Avatar from '@mui/material/Avatar';// for the right column
import List from '@mui/material/List';// for the right column
import ListItem from '@mui/material/ListItem';// for the right column
import ListItemText from '@mui/material/ListItemText';// for the right column
import ListItemAvatar from '@mui/material/ListItemAvatar';// for the right column
//import { styled } from "@mui/material/styles";
//import Box from "@mui/material/Box"; //did not use this for the grid since it effects some css i have applied and comented temperory incase any issue come we can  uncomment it
//import Paper from "@mui/material/Paper";
//import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close';
//import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import cphone from '../../assets/images/iconcphone.svg';
import cmail from '../../assets/images/iconcmail.svg';
import cfolder from '../../assets/images/iconcfolder.svg';
import { useState } from 'react';

const predefinedButtonName = ['github','figma','behance','linkedin','facebook','whatsapp','instragram','twitter'];
const ContactDetails_1 = () => {
  //below usestate is to keep the user entered url
  const [inputUrl, setInputUrl] = useState(''); 
  //to keep array of already shown buttons
  const[shownbuttons,setShownButtons] = useState([]);
  const checkUrl = () =>{
    //converting the url to lowercase
    const lowerCaseUrl = inputUrl.toLowerCase();

    //checking the lowerCaseUrl with the predefined button for matches
    const matchedresult = predefinedButtonName.filter(buttonName => lowerCaseUrl.includes(buttonName));

    // updating the shownbutton 
    setShownButtons(prevButtons =>{
      const uniqueButtons = Array.from(new Set([...prevButtons,...matchedresult]));
      return uniqueButtons
    });
  };
  const removeButton = (buttonName) => {
    setShownButtons(prevButtons => prevButtons.filter(button => button !== buttonName));
  };
    return(
    <div className='Contactdetails1-Maindiv'>
     
        
      <div className='Contactdetails1-LeftColumn'>
            {/*<Box sx={{ flexGrow: 1 }}>*/}
            <Grid container spacing={2} >
              <Grid item xs={6}>
                
                  <Typography>*Phone</Typography>
                  <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}} />
                
              </Grid>
              <Grid item xs={6}>
                
                  <Typography>*Email</Typography>
                  <TextField type="email" variant="outlined" fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
                
              </Grid>
              <Grid item xs={6}>
                
                  <Typography>*District</Typography>
                  <TextField type="text" variant="outlined" fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
                
              </Grid>
              <Grid item xs={6}>
                
                  <Typography>*City</Typography>
                  <TextField type="text" variant="outlined" fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
                
              </Grid>
              <Grid item xs={6}>
                
                  <Typography>*Postalcode</Typography>
                  <TextField type="text" variant="outlined" fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
                
              </Grid>
              <Grid item xs={6}>
                
                  <Typography>*Country</Typography>
                  <TextField type="text" variant="outlined" fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
                
              </Grid>
              <Grid item xs={12}>
                
                  <Typography>*Portfolio Website</Typography>
                  <TextField type="text" variant="outlined" fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
                
              </Grid>
              <Grid item xs={12} style={{ marginBottom: '-15px' }}>
              <Typography>Other Portfolio links</Typography>
              </Grid>
              <Grid item xs={11}>
                  <TextField type="text" variant="outlined" fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}} onChange={(e)=>setInputUrl(e.target.value)}/>
              </Grid>
              <Grid item xs={1} style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="primary"style={{ backgroundColor: 'black', borderRadius: '50%',width:'22px',height:'22px' }} onClick={checkUrl}><AddIcon style={{ color: 'white' }} /></IconButton>
                
              </Grid>
              <Grid item xs={12}>
                
              {shownbuttons.map((buttonName)=>(
                <button key={buttonName} style={{backgroundColor: 'black', color:'white', borderRadius:'25px'}}>{buttonName}<IconButton color='primary' style={{backgroundColor: 'black', border: '1px solid white',borderRadius: '50%', marginLeft: '5px', width: '15px', height: '15px' }} onClick={()=>removeButton(buttonName)}><CloseIcon style={{color: 'white', fontSize: '12px'}}/></IconButton></button>
              ))}
              </Grid>
              <Grid item xs={3}>
                {predefinedButtonName.map((buttonName)=>(
                  <button key={buttonName} style={{display:'none'}}>{buttonName}</button>
                ))}
                
              
              </Grid>
            </Grid>
          {/*</Box>*/}
              
      </div>
            

      

     
      <div className='Contactdetails1-RightColumn'>
        <Card variant="outlined" sx={{ height:'100%',maxHeight: '450px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:768px)':{overflowY:'hidden',},}}className='Contactdetails2-RightColumnCard'>
          <CardContent >
            <Typography variant="h5" component="div"sx={{ textAlign: 'center' }}>
                Contact Detail Tips
            </Typography>
            <List>
              <ListItem >
              <ListItemAvatar>
                <Avatar sx={{ /*width: '38.732px', height: '39.022px',*/ borderRadius: '12px'/*, display: 'flex', justifyContent: 'center', alignItems: 'center'*/ }}>
                <img src={cphone} alt="Custom Icon" style={{ width: '45.732px', height: '47.022px' }}/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant='body1' >
                    Provide a dependable and reliable phone number for effective communication.
                </Typography>
              </ListItemText>
              </ListItem>
              <ListItem >
              <ListItemAvatar>
                <Avatar sx={{ /*width: '38.732px', height: '39.022px',*/ borderRadius: '12px' ,display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
              <img src={cmail} alt="Custom Icon" style={{ width: '45.732px', height: '47.022px' }} />
              </Avatar>
              </ListItemAvatar>
              <ListItemText>
              <Typography variant='body1'>
                Use a professional email address, that includes your first and last name.
              </Typography>
              </ListItemText>
              </ListItem>
              <ListItem >
              <ListItemAvatar>
                <Avatar sx={{/* width: '38.732px', height: '39.022px',*/ borderRadius: '12px',display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
              <img src={cfolder} alt="Custom Icon" style={{ width: '45.732px', height: '47.022px' ,}} />
              </Avatar>
              </ListItemAvatar>
              <ListItemText>
              <Typography variant='body1'>
                Include a link to your portfolio website or profiles like LinkedIn to showcase your work, qualifications and skills.
              </Typography>
              </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
        
      </div>
        
      
    </div>
    
    )

}
export default ContactDetails_1