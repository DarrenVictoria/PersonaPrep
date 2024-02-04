import './css/FacultyDetails.css';
import Choose from '../FacultySelectOption';
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import '../../pages/interviewforms/Template.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

const FacultyDetails = () => {
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [selectedBatch, setSelectedBatch] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');
    const [validation, setValidation] = useState(false);

    const validate = () => {
        if (!(selectedFaculty === '' && selectedBatch === '' && selectedDegree === '')) setValidation(true);
    }

    useEffect(() => {
        console.log('selectedFaculty:', selectedFaculty);
        console.log('selectedBatch:', selectedBatch);
        console.log('selectedDegree:', selectedDegree);
    }, [selectedFaculty, selectedBatch, selectedDegree]);

    return (
        <div className="formtemp-page">
            <InterviewFormHeader title='Degree Information' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className='Facultymaindiv'>
                                    <div>
                                        <h1>Which Faculty / Batch<br />are you from?</h1>
                                    </div>
                                    <br />
                                    <div>
                                        <Typography mb={-2}><span style={{ color: 'red' }}>*</span> Please specify your faculty</Typography>
                                        <Choose
                                            options={["Faculty of Computing", "Faculty of Business", "Faculty of Engineering", "Faculty of Science"]}
                                            onSelect={setSelectedFaculty}
                                            disabledOptions={["Faculty of Engineering", "Faculty of Science"]}
                                            isRequired={true}
                                        />

                                    </div>
                                    <br />
                                    <div>
                                        <Typography mb={-2}><span style={{ color: 'red' }}>*</span> Please specify your batch</Typography>
                                        <Choose
                                            options={["22.2", "22.1", "21.2", "21.1", "20.2", "20.3"]}
                                            onSelect={setSelectedBatch}
                                            disabledOptions={[]}
                                            isRequired={true}
                                        />

                                    </div>
                                    <br />
                                    <div>
                                        <Typography mb={-2}><span style={{ color: 'red' }}>*</span> Degree affiliation</Typography>
                                        <Choose
                                            options={["Plymouth University", "Victoria University", "NSBM Green University"]}
                                            onSelect={setSelectedDegree}
                                            disabledOptions={[]}
                                            isRequired={true}
                                        />
                                    </div>
                                    {/* {(!parah) && <Typography color='error'>bla bla bla</Typography>}*/}
                                </div>

                            </div>
                            <InterviewFormFooter nextForm='/personalInfo' prevForm='/home' onClick={validate} validation={validation} />
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default FacultyDetails;
