import React from 'react';
import '../TemplateSelection.css';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const buttons = [<Button key="one">One</Button>];
const buttons2 = [<Button key="two">Two</Button>];

const TemplateSelection = () => {
  return (
    <div>
      <div className='TemplateSelection-Container'>
        <div className='TemplateSelection-LeftColumn'>Templates</div>
        <div className='TemplateSelection-RightColumn'>
          <div className='TemplateSelection-RightRow'>
             <p>Color Themes Section</p>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 0.5
                }
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  "& > *": {
                    m: 0.5
                  }
                }}
              >
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="contained"
                >
                  {buttons}
                </ButtonGroup>
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="contained"
                >
                  {buttons}
                </ButtonGroup>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  "& > *": {
                    m: 0.5
                  }
                }}
              >
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="contained"
                >
                  {buttons2}
                </ButtonGroup>
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="contained"
                >
                  {buttons2}
                </ButtonGroup>
              </Box>
            </Box>
            {/* End Color Themes Section */}
          </div>
          <div className='TemplateSelection-RightRow'>Typography</div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
