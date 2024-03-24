import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const StepperCustomIcon = ({ active, completed }) => {
  return (
    <div style={{ backgroundColor: 'gray', margin: '3px', borderRadius: '50%', width: '20px', height: '20px', padding: '5px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <div style={{
        backgroundColor: active || completed ? 'white' : 'black',
        color: 'white',
        height: '12px',
        width: '12px',
        borderRadius: '50%',
        fontSize: '1rem',
      }}>
      </div>
    </div>
  );
};

const steps = [
  {
    label: 'Certification 1/2',
  },
  {
    label: 'Certification 2/2',
  },
  {
    label: 'Clubs',
  },
  {
    label: 'Publications',
  },
  {
    label: 'Extra Information',
  },
  {
    label: 'Template',
  },
  
];

const CustomSecondVerticalStepper = forwardRef((props, ref) => {
  const [activeStep, setActiveStep] = useState(0);

  useImperativeHandle(ref, () => ({
    handleNext: () => {
        
        
      if (activeStep < steps.length - 1) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    },
    handleBack: () => {
        
        
      if (activeStep > 0) {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      }
    },
    getActiveStep: () => activeStep,
    }), [activeStep]);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} style={{ color: 'black' }}>
            <StepLabel
              optional={
                index === (steps.length - 1) ? (
                  <Typography variant="caption"></Typography>
                ) : null
              }
              StepIconComponent={StepperCustomIcon}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
});

export default CustomSecondVerticalStepper;