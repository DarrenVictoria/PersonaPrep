import React from 'react';
import '../Certification1.css';
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
import cdiary from '../../assets/images/iconcdiary.svg';
import ccalander from '../../assets/images/iconccalander.svg';
import chat from '../../assets/images/iconchat.svg';
import EditableChoose from '../EditableSelectOption';
import FormGroup from "@mui/material/FormGroup";//for the check box
import FormControlLabel from "@mui/material/FormControlLabel";//for the check box
import Checkbox from "@mui/material/Checkbox";//for the check box
import CustomizedHook from '../TextfieldButtonDataDisplay';
import { useState } from 'react';
const Clubs = () => {
    const[month,setMonth]= React.useState("");
    const[year,setYear]= React.useState("");
    const dataset = [{data:"c#"},{data:"Java"}];
    return(
        <div className='Certification1-Maindiv'>
        <div className='Certification1-LeftColumn'>
        {/*<Box sx={{ flexGrow: 1 }}>*/}
        <Grid container spacing={2} >
          
          <Grid item xs={12} >
            
              <Typography>*Issuing Organization</Typography>
              <EditableChoose
                options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                onSelect={setMonth}
                disabledOptions={[]}
                //the below width did not work have to check
                
                />
            
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '-40px' }}>
          <Typography>*Issue Date</Typography>
          </Grid>
          <Grid item xs={6}>
            
          <EditableChoose
          options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
          onSelect={setMonth}
          disabledOptions={[]}
          //the below width did not work have to check
         
         />
            
          </Grid>
          <Grid item xs={6}>
          <EditableChoose
          options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
          onSelect={setYear}
          disabledOptions={["2024"]}
          //the below width did not work have to check
         
         />
            
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '-40px' }}>
          <Typography>*Expiration Date</Typography>
          </Grid>
          <Grid item xs={6}>
            
          <EditableChoose
          options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
          onSelect={setMonth}
          disabledOptions={[]}
          //the below width did not work have to check
         
         />
            
          </Grid>
          <Grid item xs={6}>
          <EditableChoose
          options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
          onSelect={setYear}
          disabledOptions={["2024"]}
          //the below width did not work have to check
         
         />
            
          </Grid>
          <Grid item xs={1}>
            {/*this is a blank space just to take the correct position of the below check box*/ }
          </Grid>
         
          <Grid item xs={11}>
            
            <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Currently Volunteering" /> {/*if need to make this requires put required before control and if need to make it already checked put check inside the control next to the Checkbx*/}
            </FormGroup>
            
          </Grid>
          <Grid item xs={11}>
            
            <CustomizedHook width={400} height={120} data={dataset} label='Roles Played'/>
          
            
          </Grid>
          
        </Grid>
      {/*</Box>*/}
          
  </div>
        

  

 
  <div className='Certification1-RightColumn'>
    <Card variant="outlined" sx={{ height:'100%',maxHeight: '450px', width:'100%',maxWidth: '363px',borderRadius:'15px',overflowY:'auto',overflowX:'auto','@media (min-width:768px)':{overflowY:'hidden',},}}className='Contactdetails2-RightColumnCard'>
      <CardContent >
        <Typography variant="h5" component="div"sx={{ textAlign: 'center' }}>
            Certification Tips
        </Typography>
        <List>
          <ListItem >
          <ListItemAvatar>
            <Avatar sx={{ /*width: '38.732px', height: '39.022px',*/ borderRadius: '12px'/*, display: 'flex', justifyContent: 'center', alignItems: 'center'*/ }}>
            <img src={cdiary} alt="Custom Icon" style={{ width: '27px', height: '31px' }}/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText>
            <Typography variant='body1' >
            Fill in all the information about your most recent Certification to fill in this section.
            </Typography>
          </ListItemText>
          </ListItem>
          <ListItem >
          <ListItemAvatar>
            <Avatar sx={{ /*width: '38.732px', height: '39.022px',*/ borderRadius: '12px' ,display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
          <img src={ccalander} alt="Custom Icon" style={{ width: 'var(--40,40px)', height: '35.666px' }} />
          </Avatar>
          </ListItemAvatar>
          <ListItemText>
          <Typography variant='body1'>
          Ensure your certifications are up-to-date by double-checking their expiration dates.
          </Typography>
          </ListItemText>
          </ListItem>
          <ListItem >
          <ListItemAvatar>
            {/*aligning the image did not work have to look into it*/ }
            <Avatar sx={{/* width: '38.732px', height: '39.022px',*/ borderRadius: '12px',display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
          <img src={chat} alt="Custom Icon" style={{ width: '41px', height: '39px' ,}} />
          </Avatar>
          </ListItemAvatar>
          <ListItemText>
          <Typography variant='body1'>
          Arrange your certifications logically according to the most relevant ones for the position you're applying for.
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
export default Clubs