import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const StepperCustomIcon = ({ active, completed, icon, }) => {
  return (
    <div style={{backgroundColor: "gray", margin: "3px", borderRadius: "50%", width: "8px", height: "8px", padding: "5px", justifyContent: "center", alignItems: "center",}}>
      <div style={{
        backgroundColor: active || completed ? "white" : "black",
        color: "white",
        height: "8px",
        width: "8px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1rem",
      }}>
      </div>
    </div>
    
  );
};

const steps = [
  {
    label: 'Faculty Details',
  },
  {
    label: 'Personal Info',
  },
  {
    label: 'Contacts Details 1/2',
  },
  {
    label: 'Contacts Details 2/2',
  },
  {
    label: 'Summary 1/2',
  },
  {
    label: 'Summary 2/2',
  },
  {
    label: 'Education 1/2',
  },
  {
    label: 'Education 2/2',
  },
  {
    label: 'University Education',
  },
  {
    label: 'Work Experience 1/3',
  },
  {
    label: 'Work Experience 2/3',
  },
  {
    label: 'Work Experience 3/3',
  },
  {
    label: 'Projects 1/3',
  },
  {
    label: 'Projects 2/3',
  },
  {
    label: 'Projects 3/3',
  },

];

const CustomVerticalStepper = React.forwardRef((props, ref) => {
  const [activeStep, setActiveStep] = React.useState(0);

  React.useImperativeHandle(ref, () => ({
    handleNext() {
      if (activeStep < steps.length){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    },
    handleBack () {
      if (activeStep != 0){
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      }
    },
    getActiveStep () {
      return activeStep
    },
    getPageLength () {
      return steps.length
    }
  }));

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper 
        activeStep={activeStep} 
        orientation="vertical"
        >
        {steps.map((step, index) => (
          <Step key={step.label} style={{color: "black"}}>
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

export default CustomVerticalStepper 
