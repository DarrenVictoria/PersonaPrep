import React from 'react';
import { useState } from 'react';
import TextArea from '../TextArea';
import '../Summary1_2.css';
const Summary_2 = () => {
    const[careergoals, setCareerGoals]= useState("");
    const[personalattributes, setPersonalAttributes]=useState("");
    
    const inputcareergoal = (value)=>{
        setCareerGoals(value);
    }
    const inputpersonalattributes = (value)=>{
        setPersonalAttributes(value);
    }
    return(
        <div className='summarymaindiv'>
            
               <div className='summarysubdiv'>The career goals you seek to achieve ?</div>
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

                />
           
        
        </div>
    )
        

}
export default Summary_2