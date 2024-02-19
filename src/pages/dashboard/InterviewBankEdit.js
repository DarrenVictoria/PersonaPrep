import  React, { useState } from "react";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors";
import FileUpload from "../../components/FileUpload";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const InterviewBankEdit = () => {
    const [trnscrptDtls, setTrnscrptdtls] = useState(['']);

    const handleFileUploadSuccess = (url) => {
        // setProfilePictureUrl(url.downloadURL);
        console.log(url);
    };

    const handleReset = () => {
        // Your reset logic here
        console.log('Reset button clicked');
    };

    const handleChange = (index, event) => {
        const newResults = [...trnscrptDtls];
        newResults[index] = event.target.value;
        setTrnscrptdtls(newResults);
    }

    const handleAddRow = (event) => {
        event.preventDefault();
        setTrnscrptdtls([...trnscrptDtls, '']);
    }

    const handleRemoveRow = (index) => {
        const newResults = [...trnscrptDtls];
        newResults.splice(index, 1);
        setTrnscrptdtls(newResults);
    };

    return ( 
        <Box sx={{ display: 'flex'}}>
            <DashboardHeader />
            <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: '#d1d1d1' }} >
                <Toolbar />
                <Box sx={{ flexGrow: 1 }}>
                    <Card style={{ width:"100%", borderRadius:'25px', padding: '20px' }}>
                    <Grid container>
                        <Grid item xs={12} mb={6}><Typography variant="h4" fontWeight='bold'>Interview Bank Edit</Typography></Grid>
                        <Grid item xs={12} mb={1}>
                            <Typography>Change cover image</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} mb={4}>
                            <FileUpload onFileUpload={handleFileUploadSuccess} onUploadSuccess={handleFileUploadSuccess} onReset={handleReset}    />
                            {/* {profilePictureFetchUrl && profilePictureFetchUrl !== ' ' &&  <p style={{marginTop:'1rem',marginLeft:'1rem'}}>Current cover image</p>}
                            {profilePictureFetchUrl && profilePictureFetchUrl !== ' ' && <img src={profilePictureFetchUrl} alt="Profile Picture"  style={{ width: '100px', height: '100px', objectFit: 'cover',marginLeft:'1rem',border: '1px solid black' }}  />} */}                            
                        </Grid>
                        <Grid item xs={12} mb={3}>
                            <Typography mb={1}>Topic</Typography>
                            <TextField type="text" variant="outlined" fullWidth required 
                                // value={Proname}  
                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                placeholder="FULL STACK DEV POSITION [VIRTUSA]"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} pr={2} mb={3}>
                            <Grid container>
                                <Grid item xs={12}><Typography mb={1}>Faculty</Typography></Grid>
                                <Grid item xs={12}>
                                    <TextField type="text" variant="outlined" fullWidth required 
                                        // value={Proname}  
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                        placeholder="Computing"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} mb={3}>
                            <Grid container>
                                <Grid item xs={12}><Typography mb={1}>Field</Typography></Grid>
                                <Grid item xs={12}>
                                    <TextField type="text" variant="outlined" fullWidth required 
                                        // value={Proname}  
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                        placeholder="Software Engineering"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} mb={3}>
                            <Typography mb={1}>Description</Typography>
                            <TextField type="text" variant="outlined" fullWidth required multiline rows={4}
                                // value={Proname}  
                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                placeholder="An interview between a software engineer and Virtusa for the role of a full stack developer"
                            />
                        </Grid>
                        <Grid item xs={12} mb={1}>
                            <Typography>Interview Transcript</Typography>
                        </Grid>
                        <Grid item xs={12} mb={3} sx={{border: '1px solid gray', borderRadius: '25px'}} p={2}>
                            {trnscrptDtls.map((result, index) => (
                                <Grid container item mb={3} key={index}>
                                    <Grid item xs={2} mr={6}><Typography>{(index % 2 === 0)? 'Interviewer :' : 'Candidate :'}</Typography></Grid>
                                    <Grid item xs={8}>
                                        <TextField type="text" variant="outlined" fullWidth multiline rows={2}
                                            value={result}  
                                            onChange={(event) => handleChange(index, event)} 
                                            InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                            placeholder=""
                                        />
                                    </Grid>
                                    {/* no space left to add all 3 in a single row
                                    {index !== 0 && (
                                        <Grid item xs={2}>
                                            <IconButton onClick={() => handleRemoveRow(index)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px',marginTop:'25px'  }}>
                                                <RemoveIcon style={{ color: 'white' }}/>
                                            </IconButton>
                                        </Grid>
                                    )} */}
                                </Grid> 
                            ))}

                            <Grid item xs={12} mt={2} mb={3}>
                                <Typography>
                                    <IconButton onClick={handleAddRow}  color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                        <AddIcon style={{ color: 'white' }} />
                                    </IconButton>
                                    Add row
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={5} md={6}>
                            <Button startIcon={<ArrowBackIcon />} 
                                onClick={() => window.location.href = '/interviewDash'}
                                sx={{
                                    backgroundColor:'#d1d1d1',
                                    color:'black',
                                    borderRadius:'25px',
                                    // margin: '25px',
                                    fontFamily: 'Inter , sans-serif',
                                    fontWeight: '800',
                                    ':hover': {
                                        backgroundColor: '#d1d1d1',
                                        border: 'none',
                                    }
                                }}>
                                Go Back
                            </Button>
                        </Grid>                        
                        <Grid container xs={7} md={6} justifyContent='flex-end' alignItems='flex-end'> 
                            <Grid item xs={7} md={4}>
                                <Button endIcon={<DeleteIcon />} 
                                    // onClick={}
                                    sx={{
                                        backgroundColor:'#d1d1d1',
                                        color:'black',
                                        borderRadius:'25px',
                                        // margin: '25px',
                                        fontFamily: 'Inter , sans-serif',
                                        fontWeight: '800',
                                        ':hover': {
                                            backgroundColor: '#d1d1d1',
                                            border: 'none',
                                        }
                                    }}>
                                    Delete
                                </Button>
                            </Grid>                        
                            <Grid item xs={5} md={3}>
                                <Button endIcon={<AddCircleOutlineIcon />} 
                                    // onClick={}
                                    sx={{
                                        backgroundColor:'#d1d1d1',
                                        color:'black',
                                        borderRadius:'25px',
                                        // margin: '25px',
                                        fontFamily: 'Inter , sans-serif',
                                        fontWeight: '800',
                                        ':hover': {
                                            backgroundColor: '#d1d1d1',
                                            border: 'none',
                                        }
                                    }}>
                                    Create
                                </Button>
                            </Grid>                        
                        </Grid>
                    </Grid>
                    </Card>
                </Box>
            </Box>
        </Box>
     );
}
 
export default InterviewBankEdit;