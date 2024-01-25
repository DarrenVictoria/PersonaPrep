import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import CustomMultilineTextFields from '../CustomMultilineTextfield';
import EditableChoose from '../EditableSelectOption';
import { useState } from 'react';


const Education_2 = () => {
    const [olYear, setOlYear] = useState('');
    const [alYear, setAlYear] = useState('');
    const [olResult, setOlResult] = useState('');
    const [alResult, setAlResult] = useState('');
    return(
        <div className="personalInfo-main">
            <div >
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
                    <Grid item xs={7} md={2} pr={1}>
                        <TextField type="text" variant="outlined" fullWidth required  InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} placeholder='Subject'/>
                    </Grid>
                    <Grid item xs={5} md={2} pl={1}>
                        <EditableChoose
                            options={["Result","A","B","C","S","F"]}
                            onSelect={setOlResult}
                            disabledOptions={[]}
                        />
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
                </Grid>
            </div>
        </div>
    )

}
export default Education_2