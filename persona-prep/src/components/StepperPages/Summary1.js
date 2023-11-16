import React from 'react';
import { useState } from 'react';
import TextArea from '../TextArea';
import '../Summary1_2.css';
const Summary_1 = () => {
    const[currentProjects, setCurrentProjects]= useState("");
    const[collaborate, setCollaborate]=useState("");
    
    const currentprojInputchange = (value)=>{
        setCurrentProjects(value);
    }
    const collaboratewith = (value)=>{
        setCollaborate(value);
    }
    return(
        <div className='summarymaindiv'>
            
               <div className='summarysubdiv'>I am currently working on (projects) ?</div>
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

                />
           
        
        </div>
    )

}
export default Summary_1