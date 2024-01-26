import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


const Education_2 = () => {
    const [olYear, setOlYear] = useState('');
    const [alYear, setAlYear] = useState('');
    const [olResult, setOlResult] = useState('');
    const [alResult, setAlResult] = useState('');
    const [olSubject, setOlSubject] = useState([]);
    const [alSubject, setAlSubject] = useState([]);

    const addSchool = () => {
        window.location.href = '';
    }

    const addOlSubject = () => {
        setOlSubject([...olSubject, <OlSubjectComp key={olSubject.length} />]);
        console.log(olSubject.length);
    };
    const addAlSubject = () => {
        setAlSubject([...alSubject, <AlSubjectComp key={alSubject.length} />]);
        console.log(alSubject.length);
    };

    const OlSubjectComp = () => {
        return (
            <div>
                <Grid item xs={7} md={4} pt={3} pr={1}>
                    <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Subject'/>
                </Grid>
                <Grid item xs={5} md={3} pl={1}>
                    <EditableChoose
                        options={["Result","A","B","C","S","F"]}
                        onSelect={setOlResult}
                        disabledOptions={[]}
                    />
                </Grid>
                <Grid item xs={7} md={5}></Grid>
            </div>
        )
    }
    const AlSubjectComp = () => {
        return (
            <div>
                <Grid item xs={7} md={4} pt={3} pr={1}>
                    <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Subject'/>
                </Grid>
                <Grid item xs={5} md={3} pl={1}>
                    <EditableChoose
                        options={["Result","A","B","C","S","F"]}
                        onSelect={setAlResult}
                        disabledOptions={[]}
                    />
                </Grid>
                <Grid item xs={7} md={5}></Grid>
            </div>
        )
    }

    return(
        <div className="personalInfo-main">
            <Grid container pl={1}>
                <Typography variant='h4' mb={2}>Educational Experience in School</Typography>
                <Grid item xs={12} md={8} mb={2} >
                    <CustomMultilineTextFields height='100px' />
                </Grid>
                <Grid item xs={12} ml={4} mb={5}>
                    <Typography>
                        <IconButton onClick={addSchool} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                            <AddIcon style={{ color: 'white' }} />
                        </IconButton>
                        Add more schools
                    </Typography>
                </Grid>

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
                <Grid item xs={7} md={4} pt={3} pr={1}>
                    <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Subject'/>
                </Grid>
                <Grid item xs={5} md={3} pl={1}>
                    <EditableChoose
                        options={["Result","A","B","C","S","F"]}
                        onSelect={setOlResult}
                        disabledOptions={[]}
                    />
                </Grid>
                <Grid item xs={7} md={4}></Grid>
                {olSubject.length > 0 && (
                    olSubject.map(
                    (components, index) => (
                        <div key={index}>
                            {components}
                        </div>
                    )
                ))}
                <Grid item xs={12} ml={4} mb={5} mt={2}>
                    <Typography>
                        <IconButton onClick={addOlSubject} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                            <AddIcon style={{ color: 'white' }} />
                        </IconButton>
                        Add subjects
                    </Typography>
                </Grid>

                <Grid item xs={12} mb={2}>
                    <Typography variant='h4'>AL Examination Result</Typography>    
                </Grid>                    
                <Grid item xs={12} mb={-2}> 
                    <Typography><span style={{color: 'red'}}>*</span>In which year did you complete your AL exams? (First/Final attempt)</Typography>
                </Grid>
                <Grid item xs={6} md={2}>
                    <EditableChoose
                        options={["Year","2018","2019","2020","2021","2022","2023","2024",]}
                        onSelect={setAlYear}
                        disabledOptions={["2024"]}
                    />
                </Grid>
                <Grid item xs={12} mt={3}>
                    <Typography><span style={{color: 'red'}}>*</span>Subject Results</Typography>
                </Grid>
                <Grid item xs={7} md={4} pr={1} pt={3} >
                    <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Subject'/>
                </Grid>
                <Grid item xs={5} md={3} pl={1}>
                    <EditableChoose
                        options={["Result","A","B","C","S","F"]}
                        onSelect={setAlResult}
                        disabledOptions={[]}
                    />
                </Grid>
                <Grid item xs={7} md={4}></Grid>
                {alSubject.length > 0 && (
                    alSubject.map(
                    (components, index) => (
                        <div key={index}>
                            {components}
                        </div>
                    )
                ))}
                <Grid item xs={12} ml={4} mb={5} mt={2}>
                    <Typography>
                        <IconButton onClick={addAlSubject} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                            <AddIcon style={{ color: 'white' }} />
                        </IconButton>
                        Add subjects
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )

}
export default Education_2