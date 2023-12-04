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
import { useState } from 'react';
const Certification_1 = () => {
    const[month,setMonth]= React.useState("");
    const[year,setYear]= React.useState("");
    const[currentProjects, setCurrentProjects]= useState("");
    const currentprojInputchange = (value)=>{
        setCurrentProjects(value);
    }
    return(
        <div className='Certification1-Maindiv'>
        <div className='Certification1-LeftColumn'>
        {/*<Box sx={{ flexGrow: 1 }}>*/}
        <Grid container spacing={2} >
          <Grid item xs={12}>
            
              <Typography>*Name of Certification</Typography>
              <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}} />
            
          </Grid>
          <Grid item xs={12}>
            
              <Typography>*Issuing Organization</Typography>
              <TextField type="text" variant="outlined" fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
            
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
         
          <Grid item xs={12}>
            
              <Typography>*Certification ID</Typography>
              <TextField type="text" variant="outlined" fullWidth required InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white',},}}/>
            
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
export default Certification_1