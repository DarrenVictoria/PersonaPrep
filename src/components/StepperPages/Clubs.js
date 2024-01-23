import React from 'react';
import './css/Clubs.css';
import Typography from '@mui/material/Typography'; //this is for the card in the right column
import Grid from "@mui/material/Grid";
import EditableChoose from '../EditableSelectOption';
import FormGroup from "@mui/material/FormGroup";//for the check box
import FormControlLabel from "@mui/material/FormControlLabel";//for the check box
import Checkbox from "@mui/material/Checkbox";//for the check box
import CustomizedHook from '../TextfieldButtonDataDisplay';
const Clubs = () => {
    const[month,setMonth]= React.useState("");
    const[year,setYear]= React.useState("");
    const dataset = [{data:"c#"},{data:"Java"}];
    return(
        <div className='Clubs-Maindiv'>
        <div className='Clubs-LeftColumn'>
        {/*<Box sx={{ flexGrow: 1 }}>*/}
        <Grid container spacing={2} >
        <Grid item xs={12} style={{ marginBottom: '-40px' }}>
        <Typography>*Club / Society you were a part of ?</Typography>
          </Grid>
          <Grid item xs={12} >
              <EditableChoose
                options={["Month","January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December"]}
                onSelect={setMonth}
                disabledOptions={[]}
                //the below width did not work have to check
                
                />
            
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '-40px' }}>
          <Typography>*Start Date</Typography>
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
          <Typography>*End Date</Typography>
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
            
            <CustomizedHook width={457} height={105} data={dataset} label='Roles Played'/>
          
            
          </Grid>
          
        </Grid>
      {/*</Box>*/}
          
  </div>
        

  

 
    <div className='Clubs-RightColumn'>
      <CustomizedHook width={457}  height={373} data={dataset} label='Roles Played'/>
    </div>
</div>  

    )

}
export default Clubs;