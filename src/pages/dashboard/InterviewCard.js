import  React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import Card from "@mui/material/Card";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FileUpload from "../../components/FileUpload";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { collection, addDoc, getFirestore, getDocs, doc, updateDoc, serverTimestamp, deleteDoc } from 'firebase/firestore';
import { useLocation, useNavigate } from 'react-router-dom';


const InterviewCard = () => {
    const [topic, setTopic] = useState('');
    const [faculty, setFaculty] = useState('');
    const [field, setField] = useState('');
    const [description, setDescription] = useState('');
    const [trnscrptDtls, setTrnscrptdtls] = useState(['']);
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const [coverImageFetchUrl, setCoverImageFetchUrl] = useState('');

    //to get the card id
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const interviewId = searchParams.get('id');

    const handleFileUploadSuccess = (url) => {
        console.log('File upload successful:', url);
        setCoverImageUrl(prevUrl => url.downloadURL);
        console.log('coverImageUrl:', coverImageUrl);
        
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

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const db = getFirestore();
                const interviewCollection = collection(db, 'interviewcards');
                const querySnapshot = await getDocs(interviewCollection);
                querySnapshot.forEach((doc) => {
                    if(doc.id === interviewId){
                        const interviewData = doc.data();
                        setTopic(interviewData.topic || '');
                        setFaculty(interviewData.faculty || '');
                        setField(interviewData.field || '');
                        setDescription(interviewData.description || '');
                        setTrnscrptdtls(interviewData.transcript || '');
                        setCoverImageFetchUrl(interviewData.coverImage || null);
                        console.log(coverImageUrl);
                    }
                })
            }catch (err) {
                console.log("error fetching data" , err.message)
            }
        };

        fetchUserData();
    }, []);

    



    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const db = getFirestore();
            const interviewCollection = collection(db, 'interviewcards');
            const docRef = doc(interviewCollection, interviewId);
            const finalCoverImageUrl = coverImageUrl || coverImageFetchUrl;

            await updateDoc(docRef, {
                topic: topic,
                faculty: faculty,
                field: field,
                description: description,
                transcript: trnscrptDtls,
                createdAt: serverTimestamp(),
                coverImage: finalCoverImageUrl,
            })
            console.log('interview card updated with id', docRef.id);

        }catch (err) { console.log('error adding details', err.message) }
    };

   

    const navigate = useNavigate();
    const deleteCardBtn = async (event) => {
        event.preventDefault();

        try{
            const db = getFirestore();
            const interviewCollection = collection(db, 'interviewcards');
            const docRef = doc(interviewCollection, interviewId);
            await deleteDoc(docRef);
            console.log('document deleted successfully');
            navigate('/interviewDash');
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return ( 
        <Box sx={{ display: 'flex'}}>
            <DashboardHeader />
            <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: '#d1d1d1' }} >
                <Toolbar />
                <Box sx={{ flexGrow: 1 }}>
                    <Card style={{ width:"100%", borderRadius:'25px', padding: '20px' }}>
                    <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12} mb={6}><Typography variant="h4" fontWeight='bold'>Interview Bank Edit</Typography></Grid>
                        <Grid item xs={12} mb={1}>
                            <Typography>Change cover image</Typography>
                        </Grid>
                        <Grid item xs={12} mb={3}>
                             <Typography mb={1}><span style={{color: 'red'}}>*</span> Interview Cover</Typography>
                             <FileUpload onFileUpload={handleFileUploadSuccess} onUploadSuccess={handleFileUploadSuccess} onReset={handleReset}    />
                             {coverImageFetchUrl && coverImageFetchUrl !== ' ' &&  <p style={{marginTop:'1rem',marginLeft:'1rem'}}>Cover Photo</p>}
                             {coverImageFetchUrl && coverImageFetchUrl !== ' ' && <img src={coverImageFetchUrl} alt="Profile Picture"  style={{ width: '400px', height: '225px', objectFit: 'cover',marginLeft:'1rem',border: '1px solid black' }}  />}
                                                
                         </Grid>
                        <Grid item xs={12} mb={3}>
                            <Typography mb={1}>Topic</Typography>
                            <TextField type="text" variant="outlined" fullWidth required 
                                value={topic}  
                                onChange={(e) => setTopic(e.target.value)}
                                InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                placeholder="FULL STACK DEV POSITION [VIRTUSA]"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} pr={2} mb={3}>
                            <Grid container>
                                <Grid item xs={12}><Typography mb={1}>Faculty</Typography></Grid>
                                <Grid item xs={12}>
                                    <FormControl variant="outlined" fullWidth>
                                        <Select
                                            value={faculty}
                                            onChange={(event) => setFaculty(event.target.value)}
                                            required
                                            displayEmpty
                                            input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                            IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                        >
                                            <MenuItem value="" disabled>Faculty</MenuItem>
                                            <MenuItem value="Faculty of Computing">Faculty of Computing</MenuItem>
                                            <MenuItem value="Faculty of Business" disabled>Faculty of Business</MenuItem>
                                            <MenuItem value="Faculty of Engineering" disabled>Faculty of Engineering</MenuItem>
                                            <MenuItem value="Faculty of Science" disabled>Faculty of Science</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} mb={3}>
                            <Grid container>
                                <Grid item xs={12}><Typography mb={1}>Field</Typography></Grid>
                                <Grid item xs={12}>
                                    <TextField type="text" variant="outlined" fullWidth required 
                                        value={field}  
                                        onChange={(e) => setField(e.target.value)}
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                        placeholder="Software Engineering"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} mb={3}>
                            <Typography mb={1}>Description</Typography>
                            <TextField type="text" variant="outlined" fullWidth required multiline rows={4}
                                value={description}  
                                onChange={(e) => setDescription(e.target.value)}
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
                                    <Grid item xs={2} mr={6}><Typography>{(index % 2 === 0)? 'Interviewer:' : 'Candidate:'}</Typography></Grid>
                                    <Grid item xs={8}>
                                        <TextField type="text" variant="outlined" fullWidth multiline rows={2}
                                            value={result}  
                                            onChange={(event) => handleChange(index, event)} 
                                            InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                            placeholder=""
                                        />
                                    </Grid>
                                    {/* no space left to add all 3 in a single row */}
                                    {index !== 0 && (
                                        <Grid item xs={2}>
                                            <IconButton onClick={() => handleRemoveRow(index)} color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px',marginTop:'25px'  }}>
                                                <RemoveIcon style={{ color: 'white' }}/>
                                            </IconButton>
                                        </Grid>
                                    )}
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
                                    onClick={deleteCardBtn}
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
                                <Button onClick={handleSubmit} type="submit" href="/interviewDash" 
                                    sx={{
                                        backgroundColor:'#000000',
                                        width:'100px',
                                        color:'white',
                                        borderRadius:'25px',
                                        // margin: '25px',
                                        fontFamily: 'Inter , sans-serif',
                                        fontWeight: '800',
                                        ':hover': {
                                            backgroundColor: '#000000',
                                            border: 'none',
                                        }
                                    }}>
                                    Update
                                    
                                </Button>
                            </Grid>                        
                        </Grid>
                    </Grid>
                    </form>
                    </Card>
                </Box>
            </Box>
        </Box>
     );
}
 
export default InterviewCard;