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
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName === name
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export default function EditableChoose({ options, onSelect, disabledOptions, maxWidth, isRequired }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState(options.length > 0 ? options[0] : '');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setPersonName(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      {/* Set the width to 100% to make it flexible within the grid */}
      <FormControl 
        required={isRequired}
        sx={{ width: "100%",maxWidth:maxWidth, mt: 3 }}>
        <Select
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
          renderValue={(selected) => {
            return selected ? selected : null;
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={{
                ...getStyles(option, personName, theme),
                pointerEvents: disabledOptions.includes(option) ? "none" : "auto",
                color: disabledOptions.includes(option) ? theme.palette.text.disabled : "inherit",
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

export { Select };
