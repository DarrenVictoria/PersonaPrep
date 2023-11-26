import React from 'react';
import '../ContactDetails2.css';
import Card from '@mui/material/Card'; //this is for the card in the right column
import CardContent from '@mui/material/CardContent'; //this is for the card in the right column
import Typography from '@mui/material/Typography'; //this is for the card in the right column
import List from '@mui/material/List';// for the left column
import ListItem from '@mui/material/ListItem';// for the left column
import ListItemButton from '@mui/material/ListItemButton';// for the left column
import ListItemText from '@mui/material/ListItemText';// for the left column
import ListItemAvatar from '@mui/material/ListItemAvatar';// for the left column
import Checkbox from '@mui/material/Checkbox';// for the left column
import Avatar from '@mui/material/Avatar';// for the left column
import TextField from '@mui/material/TextField';// for the left column
import github from '../../assets/images/icongithub.svg';
import linkedIn from '../../assets/images/iconlinkedin.svg';
import twitter from '../../assets/images/icontwitter.svg';
import stackoverflow from '../../assets/images/iconstackoverflow.png';
import medium from '../../assets/images/iconmedium.svg';
const ContactDetails_2 = () => {
    // State to keep track of checked items
  const [checked, setChecked] = React.useState([1]);

  // State to store the text field values
  const [textValues, setTextValues] = React.useState(Array(4).fill(''));

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // Function to handle text field changes
  const handleTextFieldChange = (index) => (event) => {
    const newValues = [...textValues];
    newValues[index] = event.target.value;
    setTextValues(newValues);
  };

    return(
    <div className='Contactdetails2-Maindiv'>
     
        
      <div className='Contactdetails2-LeftColumn'>
        
                {/* CheckboxListWithTextField component code */}
          <h2 style={{marginBottom:'5px'}}>Social network accounts</h2> <p style={{marginTop:'2px'}}>Indicate the desired communication method</p> 
              
        <List dense style={{ width: '100%', maxWidth: 700, bgcolor: 'white', height: '389px' }}>
              {[0, 1, 2, 3, 4].map((value, index) => {
                  const labelId = `checkbox-list-secondary-label-${value}`;
                  const sampleNames = ['GitHub', 'Linken In', 'Twitter', 'Stackoverflow','Medium'];
                  const sampleImages = [github,linkedIn,twitter,stackoverflow,medium];

            return (
            <ListItem key={value} disablePadding>
                <ListItemButton>
                <ListItemAvatar>
                    <Avatar alt={`Avatar of ${sampleNames[value]}`} src={sampleImages[value]} sx={{width:'24px',height:'24px'}}/>
                </ListItemAvatar>
                <ListItemText id={labelId} primary={sampleNames[value]} />
                </ListItemButton>
                <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
                />
                <TextField
                label="@profile"
                variant="outlined"
                size="small"
                /*below inputprops and the inputlabelprop is to add styling for the text box and the place holder*/ 
                InputProps={{
                style:{ marginLeft: '10px',borderRadius:"20px",backgroundColor:"white",color:"black",}}}
                InputLabelProps={{
                  style:{color:"#CBCBCB"}
                }}
                value={textValues[index]} // Controlled input value
                onChange={handleTextFieldChange(index)} // Handle text field changes
                />
            </ListItem>
            );
          })}
        </List>
      </div>
            

      

     
      <div className='Contactdetails2-RightColumn'>
        <Card variant="outlined" sx={{ height:'100%',maxHeight: '389px', width:'100%',maxWidth: '363px',borderRadius:'15px'}}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="div">
              Welcome back, Tom
            </Typography>
          </CardContent>
        </Card>
        
      </div>
        
      
    </div>
    
  )

}
export default ContactDetails_2