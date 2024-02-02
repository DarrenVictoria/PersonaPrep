import React, { useState } from 'react';
// import { useState } from 'react';
// import TextArea from '../TextArea';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
import './css/Summary1_2.css';
const Summary_2 = () => {
    const [promotions, setPromotions] = useState('');
    const [futureCareer, setFutureCareer] = useState('');
    const [uniqueSkills, setUniqueSkills] = useState('');

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
            
                <Typography mb={1}><span style={{color: 'red'}}>*</span> Are there specific milestones or promotions that stand out?</Typography>
                <CustomMultilineTextFields inputHeight={100} maxWidth={1300} value={promotions} onChange={(event) => setPromotions(event.target.value)} isRequired={true}/>
                <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Where do you see your career heading in the next few years?</Typography>
                <CustomMultilineTextFields inputHeight={100} maxWidth={1300} value={futureCareer} onChange={(event) => setFutureCareer(event.target.value)} isRequired={true}/>
                <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> What sets you apart from others in your field?</Typography>
                <CustomMultilineTextFields inputHeight={100} maxWidth={1300} value={uniqueSkills} onChange={(event) => setUniqueSkills(event.target.value)} isRequired={true}/>
                
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