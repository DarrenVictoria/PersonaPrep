import React from 'react';
import './css/Clubs.css';
import Typography from '@mui/material/Typography'; //this is for the card in the right column
import Grid from "@mui/material/Grid";
import EditableChoose from '../EditableSelectOption';
import { styled } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";//for the check box
import FormControlLabel from "@mui/material/FormControlLabel";//for the check box
import Checkbox from "@mui/material/Checkbox";//for the check box
import {CustomizedHook, CustomizedHookLarge} from '../TextfieldButtonDataDisplay';

const Clubs = () => {
    const[month,setMonth]= React.useState("");
    const[year,setYear]= React.useState("");
    const RolesPlayed = [{data:"Volunteer"},{data:"Council Member"}];
    const SkillsEarned = [{data:"Leadership"},{data:"Teamwork"}];
    return(
        <div className='Clubs-Maindiv'>
        <div className='Clubs-LeftColumn'>
        {/*<Box sx={{ flexGrow: 1 }}>*/}
        <Grid container>
        <Grid item xs={12} mb={-2}>
        <Typography ><span style={{color: 'red'}}>*</span> Club / Society you were a part of ?</Typography>
          </Grid>
          <Grid item xs={12} mb={3}>
              <EditableChoose
                options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                onSelect={setMonth}
                disabledOptions={[]}
                isRequired={true}
                //the below width did not work have to check
                
                />
            
          </Grid>
          <Grid item xs={12} mb={-2}>
          <Typography ><span style={{color: 'red'}}>*</span> Start Date</Typography>
          </Grid>
          <Grid item xs={6} mb={3} pr={1}>
            
          <EditableChoose
          options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
          onSelect={setMonth}
          disabledOptions={[]}
          isRequired={true}
          //the below width did not work have to check
         
         />
            
          </Grid>
          <Grid item xs={6} mb={3} pl={1}>
          <EditableChoose
          options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
          onSelect={setYear}
          disabledOptions={["2024"]}
          isRequired={true}
          //the below width did not work have to check
         
         />
            
          </Grid>
          <Grid item xs={12} mb={-2}>
          <Typography ><span style={{color: 'red'}}>*</span> End Date</Typography>
          </Grid>
          <Grid item xs={6} mb={3} pr={1}>
            
          <EditableChoose
          options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
          onSelect={setMonth}
          disabledOptions={[]}
          isRequired={true}
          //the below width did not work have to check
         
         />
            
          </Grid>
          <Grid item xs={6} mb={3} pl={1}>
          <EditableChoose
          options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
          onSelect={setYear}
          disabledOptions={["2024"]}
          isRequired={true}
          //the below width did not work have to check
         
         />
            
          </Grid>
          {/* /*<Grid item xs={1}>
            {this is a blank space just to take the correct position of the below check box }
          </Grid>*/}
          <Grid item xs={12}  mb={3} pl={2} sx={{"@media (max-width: 376px)": {pl: 0}}}>
            
            <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Currently Volunteering" /> {/*if need to make this requires put required before control and if need to make it already checked put check inside the control next to the Checkbx*/}
            </FormGroup>
            
          </Grid>
          <Grid item xs={12}>
            
            <CustomizedHook data={RolesPlayed} label={<Typography>Roles Played</Typography>}/>
          
            
          </Grid>
          
        </Grid>
      {/*</Box>*/}
          
  </div>
        
 
  

 
    <div className='Clubs-RightColumn'>
      <CustomizedHookLarge width={360}  height={373} data={SkillsEarned} label={<Typography>Skills Earned</Typography>}/>
    </div>
</div>  

    )

}
export default Clubs;