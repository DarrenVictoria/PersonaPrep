import React from 'react';
// import { useState } from 'react';
// import TextArea from '../TextArea';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
import './css/Summary1_2.css';
const Summary_1 = () => {
    // const[currentProjects, setCurrentProjects]= useState("");
    // const[collaborate, setCollaborate]=useState("");
    
    // const currentprojInputchange = (value)=>{
    //     setCurrentProjects(value);
    // }
    // const collaboratewith = (value)=>{
    //     setCollaborate(value);
    // }
    return(
        <div className='summarymaindiv'>
                <Typography mb={1}><span style={{color: 'red'}}>*</span> In which key industries have you worked in, and what were your key roles in each?</Typography>
                <CustomMultilineTextFields inputHeight={100} maxWidth={1300} isRequired={true}/> 
                <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> Have you led any projects or initiatives that had a notable impact?</Typography>
                <CustomMultilineTextFields inputHeight={100} maxWidth={1300} isRequired={true}/>
                <Typography mb={1} mt={1}><span style={{color: 'red'}}>*</span> Any highlights in your career so far you would like to describe about?</Typography>
                <CustomMultilineTextFields inputHeight={100} maxWidth={1300} isRequired={true}/>
            
               {/* <div className='summarysubdiv'>I am currently working on (projects) ?</div>
                <TextArea 
                maxWords={10}
                value={currentProjects}
                onInputChange={currentprojInputchange}
                ClassName = "summary"
                />

                <div style={{marginBottom:50}}/>
                
                <div className='summarysubdiv'>I am currently looking to collaborate with ?</div>
                <TextArea 
                maxWords={10}
                value={collaborate}
                onInputChange={collaboratewith}
                ClassName = "summary"

                /> */}
           
        
        </div>
    )

}
export default Summary_1