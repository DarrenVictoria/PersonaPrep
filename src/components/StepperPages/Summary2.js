import React from 'react';
// import { useState } from 'react';
// import TextArea from '../TextArea';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
import './css/Summary1_2.css';
const Summary_2 = () => {
    // const[careergoals, setCareerGoals]= useState("");
    // const[personalattributes, setPersonalAttributes]=useState("");
    
    // const inputcareergoal = (value)=>{
    //     setCareerGoals(value);
    // }
    // const inputpersonalattributes = (value)=>{
    //     setPersonalAttributes(value);
    // }
    return(
        <div className='summarymaindiv'>
            
                <Typography mb={1}><span style={{color: 'red'}}>*</span>Are there specific milestones or promotions that stand out?</Typography>
                <CustomMultilineTextFields height='100px' />
                <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span>Where do you see your career heading in the next few years?</Typography>
                <CustomMultilineTextFields height='100px' />
                <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span>What sets you apart from others in your field?</Typography>
                <CustomMultilineTextFields height='100px' />
            
               {/* <div className='summarysubdiv'>The career goals you seek to achieve ?</div>
                <TextArea 
                maxWords={10}
                value={careergoals}
                onInputChange={inputcareergoal}
                ClassName = "summary"
                />

                <div style={{marginBottom:50}}/>
                
                <div className='summarysubdiv'>Personal attributes that contribute to your professional Persona ?</div>
                <TextArea 
                maxWords={10}
                value={personalattributes}
                onInputChange={inputpersonalattributes}
                ClassName = "summary"

                /> */}
           
        
        </div>
    )
        

}
export default Summary_2