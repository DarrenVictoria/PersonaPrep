import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName === name
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular
  };
}

export default function EditableChoose({options, onSelect, disabledOptions, width }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState(options.length> 0?options[0]:'');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setPersonName(selectedValue);  
    onSelect(selectedValue);
  };

  return (
    <div>
       {/*The sx in the FormControl is to adjust the width of the selection box*/}
      <FormControl sx={{ m: 1,width: width ? width: 'auto', mt: 3,'@media(min-width:600px)':{width: 300},}}>
        <Select
          value={personName}
          onChange={handleChange}
          //the sx in the below input{<OutlinedInput section is to change the border radius an background color of the select box
          input={<OutlinedInput sx={{ borderRadius: '25px',backgroundColor: '#FFFDFD' }} />} 
          renderValue={(selected) => {
            return selected ? selected : null;
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={(props)=><ArrowDropDownCircleOutlinedIcon {...props} style={{color:'black'}}/>}//this is to import the arrow icon and to change its color to black
          
        >
          
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={{
                ...getStyles(option, personName, theme),
              pointerEvents: disabledOptions.includes(option)?"none":"auto",
              color: disabledOptions.includes(option)? theme.palette.text.disabled :"inherit",
            }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export{Select};