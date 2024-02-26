import React, { useState } from 'react';
import './InterviewGen.css';
import ReactAudioPlayer from 'react-audio-player';
import { ReactMic } from 'react-mic';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InterviewFormHeader from '../../components/InterviewFormHeader';
import Box from '@mui/material/Box';
import { useAuth } from '../../hooks/useAuth';


export default function AudioTranscriptionComponent() {
  const [audioSrc, setAudioSrc] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const difficultyLevel = 'easy';
  const jobRole = 'se_engineer';

  const { currentUser } = useAuth();
  console.log(currentUser.email);
  
  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handleAudioData = (recordedBlob) => {
    sendAudioForTranscription(recordedBlob.blob);
  };

  const sendAudioForTranscription = async (audioBlob) => {
    const formData = new FormData();
    formData.append('file', audioBlob);

    try {
      const response = await fetch(`https://personaprepapi.galleryofgalleries.live/transcribe?user_email=${currentUser.email}&difficulty_level=${difficultyLevel}&job_role=${jobRole}`, {
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
      alert(error.message);
    }
  };
  

  return (
    <div className="formtemp-page">
        <InterviewFormHeader title='Degree Information' />
      <div className="formtemp-bodyform">
        <Grid container spacing={2} style={{ height: '100%' }}>
          <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
            <form  >
                   
              <div style={{ margin: '80px 25px 125px' }}>
                           
                <div className='Genmaindiv'>
                                
                  <div>
                                  
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

                      <Grid xs={12}md={12}>
                        <h1>Your AI Interview Generator</h1>
                      </Grid>

                      <Grid xs={12}md={12}>
                        <ReactMic
                          record={isRecording}
                          onStop={handleAudioData}
                          mimeType="audio/wav"
                          backgroundColor="#D9D9D9"
                                                 

                          
                        />
                        
                       
                      </Grid>
                      <Grid xs={6}md={6} mt={2}>
                      <Button
                        variant="contained" 
                        sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                        onClick={handleStartRecording}
                        disabled={isRecording}
                        >
                           Start Recording
                        </Button>
                      </Grid>
                      <Grid xs={6}md={6} mt={2}>
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
                                    
                                      
                                    
                                    
                    </Grid>
                                
                  </div>
                </div>

              </div>
              
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

