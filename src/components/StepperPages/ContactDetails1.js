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
//import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import cphone from '../../assets/images/iconcphone.svg';
import cmail from '../../assets/images/iconcmail.svg';
import cfolder from '../../assets/images/iconcfolder.svg';
const ContactDetails_1 = () => {
  
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
              <Grid item xs={12}>
                
                  <Typography>Other Portfolio links</Typography>
                  <TextField type="text" variant="outlined" fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
                
              </Grid>
              <Grid item xs={3}>
                
              <Button variant="outlined" fullWidth style={{ borderRadius: '25px', backgroundColor: 'black',color:'white',fontSize:'20px',fontFamily:'inter',fontStyle:'normal',fontWeight:700 ,textTransform: 'none'}}>Figma</Button>
              
              </Grid>
              <Grid item xs={3}>
                
                
              <Button variant="outlined" fullWidth style={{ borderRadius: '25px', backgroundColor: 'black',color:'white',fontSize:'20px',fontFamily:'inter',fontStyle:'normal',fontWeight:700 ,textTransform: 'none' }}>Behance</Button>
              
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