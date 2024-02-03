import React from 'react';
import './css/FacultyDetails.css';
import Choose from '../FacultySelectOption';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
const FacultyDetails = () => {
    const[selectedFaculty,setSelectedFaculty]=React.useState('');
    const[selectedBatch,setSelectedBatch]=React.useState('');
    const[selectedDegree,setSelectedDegree]=React.useState('');
    useEffect(() => {
        console.log('selectedFaculty:', selectedFaculty);
        console.log('selectedBatch:', selectedBatch);
        console.log('selectedDegree:', selectedDegree);
    }, [selectedFaculty, selectedBatch, selectedDegree]);
    return(
        <div className='Facultymaindiv'>
            <div>
                <h1>Which Faculty / Batch<br/>are you from?</h1>    
            </div>
            <br/>
            <div>
                <Typography mb={-2}><span style={{color: 'red'}}>*</span> Please specify your faculty</Typography>
                <Choose
                options={["Faculty","Faculty of Computing","Faculty of Business","Faculty of Engineering","Faculty of Science"]}
                onSelect={setSelectedFaculty}
                disabledOptions={["Faculty","Faculty of Business","Faculty of Engineering","Faculty of Science"]} //this section is to put the options that are disabled for the first selection
                isRequired={true}
                />
                
            </div>
            <br/>
            <div>
            <Typography mb={-2}><span style={{color: 'red'}}>*</span> Please specify your batch</Typography>
                <Choose
                options={["Batch","22.2","22.1","21.2","21.1","20.2","20.3"]}
                onSelect={setSelectedBatch}
                disabledOptions={["Batch"]}
                isRequired={true}
                />
                
            </div>
            <br/>
            <div>
            <Typography mb={-2}><span style={{color: 'red'}}>*</span> Degree affiliation</Typography>
                <Choose
                options={["University","Plymouth University","Victoria University","NSBM Green University"]}
                onSelect={setSelectedDegree}
                disabledOptions={["University"]}
                isRequired={true}
                />
                
            </div>
        
        </div>
        
    )

}
export default FacultyDetails