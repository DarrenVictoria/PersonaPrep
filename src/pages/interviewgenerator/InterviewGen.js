import React, { useState } from 'react';
import './InterviewGen.css';
import ReactAudioPlayer from 'react-audio-player';
import { ReactMic } from 'react-mic';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InterviewFormHeader from '../../components/InterviewFormHeader';
import Box from '@mui/material/Box';
import { useAuth } from '../../hooks/useAuth';
import { Padding } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

export default function AudioTranscriptionComponent() {
  const [audioSrc, setAudioSrc] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [Difficultylevel, setDifficultylevel] = useState('');
  console.log(Difficultylevel);
  const [JobRole, setJobRole] = useState('');
  console.log(JobRole);

  // const difficultyLevel = 'easy';
  // const jobRole = 'se_engineer';

  const { currentUser } = useAuth();
  console.log(currentUser.email);
  
  // const handleStartRecording = () => {
  //   setIsRecording(true);
  // };

  let isRecordingStarted = false;

  const handleStartRecording = async () => {
    setIsRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
  
      mediaRecorder.addEventListener('dataavailable', (event) => {
        handleAudioData(event.data);
      });
  
      mediaRecorder.start();
      isRecordingStarted = true;
    } catch (error) {
      console.error('Error accessing microphone:', error);
      if (error.name === 'NotAllowedError') {
        alert('Microphone access denied. Please allow microphone access to use this feature.');
        //reloading page after the alert
        window.location.reload();
      } else {
        alert('An error occurred while accessing the microphone. Please try again later.');
      }
    }
  };

  // const handleStopRecording = () => {
  //   setIsRecording(false);
  // };

  const handleStopRecording = async () => {
    setIsRecording(false);
    try {
      isRecordingStarted = false; // Reset the flag when recording stops
    } catch (error) {
      console.log(error);
    }
  };

  const handleAudioData = (recordedBlob) => {
    sendAudioForTranscription(recordedBlob.blob);
  };

  // const sendAudioForTranscription = async (audioBlob) => {
  //   const formData = new FormData();
  //   formData.append('file', audioBlob);

  //   try {
  //     const response = await fetch(`https://personaprepapi.galleryofgalleries.live/transcribe?user_email=${currentUser.email}&difficulty_level=${Difficultylevel}&job_role=${JobRole}`, {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     if (data.error) {
  //       throw new Error(`Server error: ${data.error}`);
  //     }

  //     const audioBase64 = data.audio_base64;
  //     const chatResponse = data.chat_response;

  //     setAudioSrc(`data:audio/wav;base64,${audioBase64}`);
  //     setChatResponse(chatResponse); // Set the chat response state
  //   } catch (error) {
  //     console.error('Error transcribing audio:', error);
  //     if (error.name === 'NotAllowedError') {
  //       // Handle denied permission error
  //       alert('Microphone access denied. Please allow microphone access to use this feature.');
  //     } else {
  //       alert('An error occurred while transcribing audio. Please try again later.');
  //     }
  //   }
  // };
  
  const sendAudioForTranscription = async (audioStream) => {
    try {
      // Check if recording has started
      if (!isRecordingStarted) {
        console.log('Recording has not started yet');
        return; // Don't proceed with transcription if recording has not started
      }

      // Now that we have access to the microphone, send audio for transcription
      const formData = new FormData();
      formData.append('file', audioStream);
  
      const response = await fetch(`https://personaprepapi.galleryofgalleries.live/transcribe?user_email=${currentUser.email}&difficulty_level=${Difficultylevel}&job_role=${JobRole}`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data.error) {
        throw new Error(`Server error: ${data.error}`);
      }
  
      const audioBase64 = data.audio_base64;
      const chatResponse = data.chat_response;
  
      setAudioSrc(`data:audio/wav;base64,${audioBase64}`);
      setChatResponse(chatResponse); // Set the chat response state
    } catch (error) {
      console.error('Error transcribing audio:', error);
      if (error.name === 'NotAllowedError') {
        // Handle denied permission error
        alert('Microphone access denied. Please allow microphone access to use this feature.');
      } else {
        alert('An error occurred while transcribing audio. Please try again later.');
      }
    }
  };
  
  

  return (
    
    <div className="formtemp-page">
        <InterviewFormHeader title='Degree Information' />
      <div className="formtemp-bodyform" >
        <Grid container spacing={2} style={{ height: '100%' }}>
          <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
            <form  >
                   
              <div style={{ margin: '80px 25px 125px' }}>
                           
                <div className='Genmaindiv'>
                                
                  
                                  
                    <Grid container>
                      <Grid item xs={12} textAlign={"left"} sx={{paddingBottom:"20px"}}>
                        <Button
                        variant="contained" 
                        sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                        onClick={() => window.location.href = '/home'}
                        >
                            Back
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent={'center'} mb={4}>
                      <Grid xs={12} md={3} sx={{textAlign:'center', display:'flex', alignItems:'center'}}>
                            <FormControl variant="outlined" fullWidth sx={{textAlign:'center', display:'flex', alignItems:'center'}}>
                              <Select
                                  value={Difficultylevel}
                                  onChange={(event) => setDifficultylevel(event.target.value)}
                                  displayEmpty
                                  input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD', width: '300px' }} />}
                                  IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                  required
                                  fullWidth
                                  disabled={Difficultylevel !== ''}
                              >
                                  <MenuItem value="">Difficulty Level</MenuItem>
                                  <MenuItem value="Entry Level">Entry Level</MenuItem>
                                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                                  <MenuItem value="Advanced">Advanced</MenuItem>
                                  <MenuItem value="Expert">Expert</MenuItem>
                              </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} md={3} sx={{textAlign:'center', display:'flex', alignItems:'center'}}>
                            <FormControl variant="outlined" fullWidth sx={{textAlign:'center', display:'flex', alignItems:'center'}}>
                              <Select
                                  value={JobRole}
                                  onChange={(event) => setJobRole(event.target.value)}
                                  displayEmpty
                                  input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD', width: '300px' }} />}
                                  IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                  required
                                  fullWidth
                                  disabled={JobRole !== ''}
                              >
                                  <MenuItem value="">Job Role</MenuItem>
                                  <MenuItem value="Software Engineer/Developer">Software Engineer/Developer</MenuItem>
                                  <MenuItem value="Data Scientist">Data Scientist</MenuItem>
                                  <MenuItem value="Database Administrator">Database Administrator</MenuItem>
                                  <MenuItem value="Network Administrator/Engineer">Network Administrator/Engineer</MenuItem>
                                  <MenuItem value="Systems Analyst">Systems Analyst</MenuItem>
                                  <MenuItem value="Cybersecurity Analyst/Engineer">Cybersecurity Analyst/Engineer</MenuItem>
                                  <MenuItem value="IT Project Manager">IT Project Manager</MenuItem>
                                  <MenuItem value="DevOps Engineer">DevOps Engineer</MenuItem>
                                  <MenuItem value="Cloud Solutions Architect">Cloud Solutions Architect</MenuItem>
                                  <MenuItem value="AI/Machine Learning Engineer">AI/Machine Learning Engineer</MenuItem>
                                  <MenuItem value="Web Developer">Web Developer</MenuItem>
                                  <MenuItem value="IT Consultant">IT Consultant</MenuItem>
                                  <MenuItem value="IT Support Specialist">IT Support Specialist</MenuItem>
                                  <MenuItem value="Business Intelligence Analyst">Business Intelligence Analyst</MenuItem>
                                  <MenuItem value="IT Auditor">IT Auditor</MenuItem>
                                  <MenuItem value="Mobile App Developer">Mobile App Developer</MenuItem>
                                  <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
                                  <MenuItem value="Quality Assurance Engineer">Quality Assurance Engineer</MenuItem>
                                  <MenuItem value="Blockchain Developer">Blockchain Developer</MenuItem>
                                  <MenuItem value="ERP Consultant">ERP Consultant</MenuItem>
                                  <MenuItem value="Digital Marketing Analyst">Digital Marketing Analyst</MenuItem>
                                  <MenuItem value="Network Security Engineer">Network Security Engineer</MenuItem>
                                  <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
                                  <MenuItem value="IT Trainer">IT Trainer</MenuItem>
                                  <MenuItem value="Data Engineer">Data Engineer</MenuItem>
                                  <MenuItem value="Systems Administrator">Systems Administrator</MenuItem>
                                  <MenuItem value="Technical Writer">Technical Writer</MenuItem>
                                  <MenuItem value="IT Sales Representative">IT Sales Representative</MenuItem>
                                  <MenuItem value="Computer Forensic Investigator">Computer Forensic Investigator</MenuItem>
                                  <MenuItem value="IT Risk Manager">IT Risk Manager</MenuItem>
                                  <MenuItem value="IT Compliance Officer">IT Compliance Officer</MenuItem>
                                  <MenuItem value="IT Procurement Specialist">IT Procurement Specialist</MenuItem>
                                  <MenuItem value="Virtual Reality Developer">Virtual Reality Developer</MenuItem>
                                  <MenuItem value="Augmented Reality Developer">Augmented Reality Developer</MenuItem>
                                  <MenuItem value="Robotics Engineer">Robotics Engineer</MenuItem>

                              </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container >
                      
                      <Grid xs={12} md={12} >
                        <h1>Your AI Interview Generator</h1>
                      </Grid>

                      <Grid xs={12}md={12} >
                        <ReactMic
                          record={isRecording}
                          onStop={handleAudioData}
                          mimeType="audio/wav"
                          backgroundColor="#D9D9D9"
                                   
                        />
                        
                      </Grid>  
                      
                    {/* </Grid> */}
                    {/* <Grid container> */}
                      
                      <Grid xs={12}sm={6} md={6} mt={2} >
                      <Button
                        variant="contained" 
                        sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                        onClick={handleStartRecording}
                        disabled={isRecording}
                        >
                           Start Recording
                        </Button>
                      </Grid>
                      <Grid xs={12} sm={6} md={6} mt={2} >
                        <Button
                        variant="contained" 
                        sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                        onClick={handleStopRecording}
                        disabled={!isRecording}
                        >
                           Stop Recording
                        </Button>
                      </Grid>

                      {/* Display chat response */}
                      <Grid xs={12} md={12} mt={2}>
                        {audioSrc && <ReactAudioPlayer src={audioSrc} autoPlay controls />}
                        <p>{chatResponse}</p>
                      </Grid>
                                  
                    {/* </Grid> */}
                                    
                  </Grid>               
                  
                                
                  
                </div>

              </div>
              
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

