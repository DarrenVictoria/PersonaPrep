import React, { useState } from 'react';
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import Typography from '@mui/material/Typography';
import './css/Summary1_2.css';
const Summary_2 = () => {
    const [promotions, setPromotions] = useState('');
    const [futureCareer, setFutureCareer] = useState('');
    const [uniqueSkills, setUniqueSkills] = useState('');

    return(
        <div className='summarymaindiv'>
            
                <Typography mb={1}><span style={{color: 'red'}}>*</span> Are there specific milestones or promotions that stand out?</Typography>
                <CustomMultilineTextFields inputHeight={100} maxWidth={1300} value={promotions} onChange={(event) => setPromotions(event.target.value)} isRequired={true}/>
                <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> Where do you see your career heading in the next few years?</Typography>
                <CustomMultilineTextFields inputHeight={100} maxWidth={1300} value={futureCareer} onChange={(event) => setFutureCareer(event.target.value)} isRequired={true}/>
                <Typography mb={1} mt={3}><span style={{color: 'red'}}>*</span> What sets you apart from others in your field?</Typography>
                <CustomMultilineTextFields inputHeight={100} maxWidth={1300} value={uniqueSkills} onChange={(event) => setUniqueSkills(event.target.value)} isRequired={true}/>
                
        </div>
    )
        

}
export default Summary_2