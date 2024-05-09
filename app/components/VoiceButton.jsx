import React, { useEffect } from 'react';
import io from 'socket.io-client';

let socket;

const VoiceButton = () => {
  useEffect(() => {
    socket = io('http://localhost:5000');

    socket.on('after connect', msg => {
      console.log(msg.data);
    });

    return () => socket.disconnect();
  }, []);

  const startInteraction = () => {
    socket.emit('start_voice_interaction', { data: 'Start the demo voice interaction.' });
  };

  return (
    <button onClick={startInteraction} className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors'>
      Call Demo
    </button>
  );
};

export default VoiceButton;
