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
import cphone from '../../assets/images/iconcphone.svg';
import cmail from '../../assets/images/iconcmail.svg';
import cfolder from '../../assets/images/iconcfolder.svg';
const ContactDetails_1 = () => {
   
    return(
    <div className='Contactdetails1-Maindiv'>
     
        
      <div className='Contactdetails1-LeftColumn'>
        
              
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