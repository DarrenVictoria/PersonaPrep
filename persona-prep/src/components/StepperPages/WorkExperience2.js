import React from 'react';
import { useState } from 'react';
import TextArea from '../TextArea';
import EditableChoose from '../EditableSelectOption';
import '../WorkExperience2.css';
const WorkExperience_2 = () => {
    //the below code is for the textarea
    const[workexperience, setWorkExperience]= useState("");
    const workexpdescription = (value)=>{
        setWorkExperience(value);
    }
     //the below code is for the editablechoose
     const[Employmenttype,setEmploymentType]= React.useState("");
    return(
        <div className='workexperiencemaindiv'>
            <h1>Work Experience</h1>
            
            <div className='textareasubdiv'>A comprehensive description of
             the responsibilities you held during this job role <br/> and any achievements
              and accomplishments you achieved during the period ?</div>
                <TextArea 
                maxWords={10}
                value={workexperience}
                onInputChange={workexpdescription}
                ClassName = "workexperience"
                />
             <EditableChoose
              options={["Full-Time","Part-Time"]}
              onSelect={setEmploymentType}
              disabledOptions={[]}
              //the below width did not work have to check
              width="100px"
             />
                
        </div>
    )

}
export default WorkExperience_2