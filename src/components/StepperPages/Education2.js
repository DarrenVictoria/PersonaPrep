import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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

    const OlSubjectComp = ({ index }) => {
        return (
            <Grid container spacing={1} alignItems="center" style={{ marginBottom: '10px' }}>
                <Grid item xs={7} md={4} mt={3}>
                <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Subject'/>
                </Grid>
                <Grid item xs={5} md={3} >
                    <EditableChoose
                        options={["Result","A","B","C","S","F"]}
                        onSelect={() => {}} // Dummy onSelect function
                        disabledOptions={[]}
                    />
                </Grid>
                <Grid item xs={12} md={2} mt={3}>
                    {index > 0 && (
                        <IconButton onClick={() => removeOlSubject(index)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }}>
                            <RemoveIcon style={{ color: 'white' }}/>
                        </IconButton>
                    )}
                </Grid>
            </Grid>
        );
    };

    const AlSubjectComp = ({ index }) => {
        return (
            <Grid container spacing={1} alignItems="center" style={{ marginBottom: '10px' }}>
                <Grid item xs={7} md={4} mt={3}>
                <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Subject'/>
                </Grid>
                <Grid item xs={5} md={3}>
                    <EditableChoose
                        options={["Result","A","B","C","S","F"]}
                        onSelect={() => {}} // Dummy onSelect function
                        disabledOptions={[]}
                    />
                </Grid>
                <Grid item xs={12} md={2} mt={3}>
                    {index > 0 && (
                        <IconButton onClick={() => removeAlSubject(index)} color="primary"style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }}>
                            <RemoveIcon style={{ color: 'white' }}/>
                        </IconButton>
                    )}
                </Grid>
            </Grid>
        );
    };

    const addOlSubject = () => {
        setOlSubject([...olSubject, <OlSubjectComp key={olSubject.length} index={olSubject.length} />]);
    };

    const addAlSubject = () => {
        setAlSubject([...alSubject, <AlSubjectComp key={alSubject.length} index={alSubject.length} />]);
    };

    const removeOlSubject = (indexToRemove) => {
        setOlSubject(olSubject.filter((_, index) => index !== indexToRemove));
    };

    const removeAlSubject = (indexToRemove) => {
        setAlSubject(alSubject.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="personalInfo-main">
            <div>
                <Grid container>
                        <Typography variant='h4' mb={2}>Educational Experience in School</Typography>
                        <Grid item xs={12} md={8} mb={5} >
                            <CustomMultilineTextFields height='100px' />
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
                    <Grid item xs={12} md={8} style={{ padding: 0 }}>
                        {olSubject.map((_, index) => (
                            <OlSubjectComp key={index} index={index} />
                        ))}
                    </Grid>
                    <Grid item xs={12} ml={4} mb={5} mt={2}>
                        <Typography>
                            <IconButton onClick={addOlSubject} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                <AddIcon style={{ color: 'white' }} />
                            </IconButton>
                            Add subjects
                        </Typography>
                    </Grid>

                        <Grid item xs={12} mb={2} mt={5}>
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
                        <Grid item xs={7} md={2} pr={1}>
                            <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Subject'/>
                        </Grid>
                        <Grid item xs={5} md={2} pl={1}>
                            <EditableChoose
                                options={["Result","A","B","C","S","F"]}
                                onSelect={setAlResult}
                                disabledOptions={[]}
                            />
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
                    <Grid item xs={12} md={8} style={{ padding: 0 }}>
                        {alSubject.map((_, index) => (
                            <AlSubjectComp key={index} index={index} />
                        ))}
                    </Grid>
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
        </div>
     
    );
};

export default Education_2;
