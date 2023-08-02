import React, { useState, useEffect } from "react";

const TextToSpeech = ({ textToRead }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechSynthesisObj, setSpeechSynthesisObj] = useState(null);
  const [speechUtteranceObj, setSpeechUtteranceObj] = useState(null);

  useEffect(() => {
    // Initialize the Web Speech API objects on mount
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToRead);

    setSpeechSynthesisObj(synth);
    setSpeechUtteranceObj(utterance);

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onpause = () => setIsPaused(true);
    utterance.onresume = () => setIsPaused(false);
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    return () => {
      // Clean up the Web Speech API objects on unmount
      if (synth.speaking || synth.paused) {
        synth.cancel();
      }
    };
  }, [textToRead]);

  const handleStart = () => {
    if (speechSynthesisObj && speechUtteranceObj && !isSpeaking) {
      speechSynthesisObj.speak(speechUtteranceObj);
    }
  };

  const handlePause = () => {
    if (speechSynthesisObj && isSpeaking && !isPaused) {
      speechSynthesisObj.pause();
    }
  };

  const handleResume = () => {
    if (speechSynthesisObj && isSpeaking && isPaused) {
      speechSynthesisObj.resume();
    }
  };

  const handleStop = () => {
    if (speechSynthesisObj && (isSpeaking || isPaused)) {
      speechSynthesisObj.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  return (
    <div>
      <button onClick={handleStart} disabled={isSpeaking} className='black_btn mx-1'>
        Listen
      </button>
      <button onClick={handlePause} disabled={!isSpeaking || isPaused} className='black_btn mx-1'>
        Pause
      </button>
      <button onClick={handleResume} disabled={!isSpeaking || !isPaused} className='black_btn mx-1'>
        Resume
      </button>
      <button onClick={handleStop} disabled={!isSpeaking && !isPaused} className='black_btn mx-1'>
        Stop
      </button>
    </div>
  );
};

export default TextToSpeech;
