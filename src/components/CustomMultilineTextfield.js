import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CustomMultilineTextFields({ inputHeight }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          // m: 1,
          width: "100%",
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
          
          inputProps={{
            style: {
              height: inputHeight,
            },
          }}
          variant="outlined"
        />
      </div>
    </Box>
  );
}
