import  React from "react";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import { DataGrid } from '@mui/x-data-grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import EditIcon from '@mui/icons-material/Edit'; // Import EditIcon
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors";
import FileUpload from "../../components/FileUpload";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const InterviewBankEdit = () => {
    const handleFileUploadSuccess = (url) => {
        // setProfilePictureUrl(url.downloadURL);
        console.log(url);
    };

    const handleReset = () => {
        // Your reset logic here
        console.log('Reset button clicked');
    };
    return ( 
        <Box sx={{ display: 'flex'}}>
            <DashboardHeader />
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1' }} >
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
                        <Grid item xs={12} mb={3}>
                            <Typography mb={1}>Interview Transcript</Typography>
                            <TextField type="text" variant="outlined" fullWidth required multiline rows={100}
                                // value={Proname}  
                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                            />
                        </Grid>

                        <Grid item xs={5} md={6}>
                            <Button startIcon={<ArrowBackIcon />} 
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
                                Go Back
                            </Button>
                        </Grid>                        
                        <Grid container xs={7} md={6} justifyContent='flex-end' alignItems='flex-end'> 
                            <Grid item xs={7} md={4} pr={1}>
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