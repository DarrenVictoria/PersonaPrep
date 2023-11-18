import React from 'react';
import '../FacultyDetails.css';
import Choose from '../FacultySelectOption';
const FacultyDetails = () => {
    const[selectedFaculty,setSelectedFaculty]=React.useState('');
    const[selectedBatch,setSelectedBatch]=React.useState('');
    const[selectedDegree,setSelectedDegree]=React.useState('');
    return(
        <div className='Facultymaindiv'>
            <div>
                <h1>Which Faculty / Batch<br/>are you from?</h1>    
            </div>
            <br/>
            <div>
                <label className="labelname">Please specify your faculty</label>
                <Choose
                options={["Faculty of Computing","Faculty of Business","Faculty of Engineering","Faculty of Science"]}
                onSelect={setSelectedFaculty}
                disabledOptions={["Faculty of Business","Faculty of Engineering","Faculty of Science"]} //this section is to put the options that are disabled for the first selection
                />
                
            </div>
            <br/>
            <div>
                <label className="labelname">Please specify your batch</label>
                <Choose
                options={["22.2","22.1","21.2","21.1","20.2","20.3"]}
                onSelect={setSelectedBatch}
                disabledOptions={[]}
                />
                
            </div>
            <br/>
            <div>
                <label className="labelname">Degree affiliation</label>
                <Choose
                options={["Plymouth University","Victoria University","NSBM Green University"]}
                onSelect={setSelectedDegree}
                disabledOptions={[]}
                />
                
            </div>
        
        </div>
        
    )

}
export default FacultyDetails