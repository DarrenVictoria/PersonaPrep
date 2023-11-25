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
      {/* Left Column */}
        <div className='Contactdetails2-Subdiv'>
                <div className='Contactdetails2-LeftColumn'>
            
                    {/* CheckboxListWithTextField component code */}
                    <List dense style={{ width: '100%', maxWidth: 700, bgcolor: 'white', height: '389px' }}>
            {[0, 1, 2, 3].map((value, index) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                const sampleNames = ['John Doe', 'Jane Doe', 'Alice Smith', 'Bob Johnson'];
                const sampleImages = [
                'https://via.placeholder.com/150',
                'https://via.placeholder.com/150',
                'https://via.placeholder.com/150',
                'https://via.placeholder.com/150',
                ];

                return (
                <ListItem key={value} disablePadding>
                    <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt={`Avatar of ${sampleNames[value]}`} src={sampleImages[value]} />
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
                    label="Text Field"
                    variant="outlined"
                    size="small"
                    style={{ marginLeft: '10px' }}
                    value={textValues[index]} // Controlled input value
                    onChange={handleTextFieldChange(index)} // Handle text field changes
                    />
                </ListItem>
                );
            })}
            </List>
                </div>
            

      

      {/* Right Column */}
      <div className='Contactdetails2-RightColumn'>
      <Card variant="outlined" sx={{ height: '389px', width: '363px', borderRadius: '15px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="div">
              Welcome back, Tom
            </Typography>
          </CardContent>
        </Card>
        
      </div>
      </div>
      
    </div>
    
    )

}
export default ContactDetails_2