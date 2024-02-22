import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { ReactMic } from 'react-mic';

export default function AudioTranscriptionComponent() {
  const [audioSrc, setAudioSrc] = useState('');
  const [isRecording, setIsRecording] = useState(false);

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
      const response = await fetch('http://localhost:8000/transcribe', {
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
      setAudioSrc(`data:audio/wav;base64,${audioBase64}`);
    } catch (error) {
      console.error('Error transcribing audio:', error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Your AI Interview Generator</h1>
      <button onClick={handleStartRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={handleStopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <ReactMic
        record={isRecording}
        onStop={handleAudioData}
        mimeType="audio/wav"
      />
      {audioSrc && <ReactAudioPlayer src={audioSrc} autoPlay controls />}
    </div>
  );
}
