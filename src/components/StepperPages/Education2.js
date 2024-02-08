import './css/personalInfo.css';
import '../../pages/interviewforms/Template.css';
import InterviewFormHeader from '../InterviewFormHeader';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';


const Education_2 = () => {
    const [olYear, setOlYear] = useState('');
    const [alYear, setAlYear] = useState('');  

    const navigate = useNavigate();
    const prevPage = () => navigate('/school');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/university')
    };

    const [olExamResults, setOlExamResults] = useState([{ subject: '', result: '' }]);
    const [alExamResults, setAlExamResults] = useState([{ subject: '', result: '' }]);

    //ol section. didnt work when if statement is used to check the exam type and run the code
    const handleOlSubjectChange = (index, event) => {
        const newResults = [...olExamResults];
        newResults[index].subject = event.target.value;
        setOlExamResults(newResults);
    };
    const handleOlResultChange = (index, event) => {
        const newResults = [...olExamResults];
        newResults[index].result = event.target.value;
        setOlExamResults(newResults);
    };
    const handleOlAddRow = (event) => {
        event.preventDefault();
        setOlExamResults([...olExamResults, { subject: '', result: '' }]);
    };
    const handleOlRemoveRow = (index, event) => {
        const newResults = [...olExamResults];
        newResults.splice(index, 1);
        setOlExamResults(newResults);
    };

    //al section
    const handleAlSubjectChange = (index, event) => {
        const newResults = [...alExamResults];
        newResults[index].subject = event.target.value;
        setAlExamResults(newResults);
    };
    const handleAlResultChange = (index, event) => {
        const newResults = [...alExamResults];
        newResults[index].result = event.target.value;
        setAlExamResults(newResults);
    };
    const handleAlAddRow = (event) => {
        event.preventDefault();
        setAlExamResults([...alExamResults, { subject: '', result: '' }]);
    };
    const handleAlRemoveRow = (index, event) => {
        const newResults = [...alExamResults];
        newResults.splice(index, 1);
        setAlExamResults(newResults);
    };

    
    const btn = (event) => {event.preventDefault(); console.log(alExamResults); console.log(olExamResults)};
    return (
        <div className="formtemp-page">
            <InterviewFormHeader title='Exam' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div className="personalInfo-main">
                                    <div>
                                        <Grid container>
                                            <Grid item xs={12} mb={2} >
                                                <Typography variant='h4'>OL Examination Result</Typography>    
                                            </Grid>
                                            <Grid item xs={12} mb={-2}>
                                                <Typography><span style={{color: 'red'}}>*</span>In which year did you complete your OL exams?</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={2}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setOlYear}
                                                    disabledOptions={["2024"]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} mt={3} >
                                                <Typography><span style={{color: 'red'}}>*</span>Subject Results</Typography>
                                            </Grid>                                    
                                            
                                            {olExamResults.map((result, index) => (
                                                <Grid container item spacing={2} key={index}>
                                                    <Grid item xs={6} md={4} mt={3}>
                                                        <TextField
                                                            type="text"
                                                            variant="outlined"
                                                            placeholder='Subject'
                                                            InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                                            value={result.subject}
                                                            onChange={(event) => handleOlSubjectChange(index, event)}
                                                            required = {(index === 0)? true: false}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} md={3} mt={3}>
                                                        <FormControl variant="outlined" fullWidth>
                                                            <Select
                                                                value={result.result}
                                                                onChange={(event) => handleOlResultChange(index, event)}
                                                                displayEmpty
                                                                input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                                IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                                required = {(index === 0)? true: false}
                                                            >
                                                                <MenuItem value="">Result</MenuItem>
                                                                <MenuItem value="A">A</MenuItem>
                                                                <MenuItem value="B">B</MenuItem>
                                                                <MenuItem value="C">C</MenuItem>
                                                                <MenuItem value="S">S</MenuItem>
                                                                <MenuItem value="F">F</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    {index !== 0 && (
                                                        <Grid item xs={2} md={2}  mt={3}>
                                                            <IconButton onClick={() => handleOlRemoveRow(index)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }}>
                                                                <RemoveIcon style={{ color: 'white' }}/>
                                                            </IconButton>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            ))}
                                            <Grid item xs={12} mt={2} mb={3}>
                                                <Typography>
                                                    <IconButton onClick={handleOlAddRow} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                                        <AddIcon style={{ color: 'white' }} />
                                                    </IconButton>
                                                    Add Subject
                                                </Typography>
                                            </Grid>
                                            

                                            <Grid item xs={12} mb={2} mt={5}>
                                                <Typography variant='h4'>AL Examination Result</Typography>    
                                            </Grid>                    
                                            <Grid item xs={12} mb={-2}> 
                                                <Typography>In which year did you complete your AL exams? (First/Final attempt)</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={2}>
                                                <EditableChoose
                                                    options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                                                    onSelect={setAlYear}
                                                    disabledOptions={["2024"]}
                                                />
                                            </Grid>                                         
                                            <Grid item xs={12} mt={3}>
                                                <Typography>Subject Results</Typography>
                                            </Grid>

                                            {alExamResults.map((result, index) => (
                                                <Grid container item spacing={2} key={index}>
                                                    <Grid item xs={6} md={4} mt={3}>
                                                        <TextField
                                                            type="text"
                                                            variant="outlined"
                                                            placeholder='Subject'
                                                            InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                                            value={result.subject}
                                                            onChange={(event) => handleAlSubjectChange(index, event)}
                                                            // required = {(index === 0)? true: false}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} md={3} mt={3}>
                                                        <FormControl variant="outlined" fullWidth>
                                                            <Select
                                                                value={result.result}
                                                                onChange={(event) => handleAlResultChange(index, event)}
                                                                displayEmpty
                                                                input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                                                IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                                                // required = {(index === 0)? true: false}
                                                            >
                                                                <MenuItem value="">Result</MenuItem>
                                                                <MenuItem value="A">A</MenuItem>
                                                                <MenuItem value="B">B</MenuItem>
                                                                <MenuItem value="C">C</MenuItem>
                                                                <MenuItem value="S">S</MenuItem>
                                                                <MenuItem value="F">F</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    {index !== 0 && (
                                                        <Grid item xs={2} md={2}  mt={3}>
                                                            <IconButton onClick={() => handleAlRemoveRow(index)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }}>
                                                                <RemoveIcon style={{ color: 'white' }}/>
                                                            </IconButton>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            ))}
                                            <Grid item xs={12} mt={2} mb={3}>
                                                <Typography>
                                                    <IconButton onClick={handleAlAddRow} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                                        <AddIcon style={{ color: 'white' }} />
                                                    </IconButton>
                                                    Add Subject
                                                </Typography>
                                            </Grid>
                                            
                                        </Grid><button onClick={btn}>btn</button>
                                    </div>
                                </div>
                            </div>
                            <Grid container spacing={2} style={{position: 'absolute', bottom: 80}}>            
                                <Grid xs={6} paddingLeft={'10px'}>
                                    <Button startIcon={<ArrowBackIcon />} style={back} onClick={prevPage}>Go Back</Button>
                                </Grid>
                                    
                                <Grid xs={6}>
                                    <Button type='submit' style={next}>Next Step</Button>                                    
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
     
    );
};

export default Education_2;
