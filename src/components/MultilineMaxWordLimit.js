import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export default function CustomMultilineTextFieldslimited({ inputHeight, maxWidth, isRequired, value, onChange, maxWords }) {
  const handleChange = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean);
    if (words.length <= maxWords) {
      onChange(event);
    }
  };

  // Calculate remaining words
  const remainingWords = maxWords - value.split(/\s+/).filter(Boolean).length;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          width: "100%",
          maxWidth: maxWidth,
          borderRadius: "25px",
          boxSizing: "border-box",
          backgroundColor: "white",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "25px",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          required={isRequired}
          inputProps={{
            style: {
              height: inputHeight,
            },
          }}
          variant="outlined"
          value={value}
          onChange={handleChange} // Use the custom handleChange function
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" style={{ position: 'absolute', bottom: '11px', right: '12px'}}>
                <div style={{ textAlign: 'right', color: 'gray', fontSize: '0.8rem'}}>{`${remainingWords} words remaining`}</div>
              </InputAdornment>
            ),
          }}
        />
        {/* <div style={{ textAlign: 'right' }}>{`${remainingWords} words remaining`}</div> */}
      </div>
    </Box>
  );
}

// import React from 'react';


// const TextArea =({maxWords, onInputChange,value, ClassName, maxWidth })=>{
//  const handleChange=(event)=>{
//     const words = event.target.value.split(/\s+/).filter(Boolean);
//     if(words.length<=maxWords){
//         onInputChange(event.target.value);
//     }
//  };

//  const remainingWords = maxWords - value.split(/\s+/).filter(Boolean).length;

//  return(
//     <div className={`${ClassName}-container`} style={{ maxWidth: `${maxWidth}px` }}>
//         <textarea
//          className={`${ClassName}-text-area`}
//          value={value}
//          onChange={handleChange}
//          style={{ width: '100%' }}
//         />
//         <div className={`${ClassName}-remaining-words`}>{`${remainingWords} words remaining`}</div>
//     </div>
//  );
// };

// export default TextArea;