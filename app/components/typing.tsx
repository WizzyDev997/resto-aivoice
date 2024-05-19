"use client";
import React, { useState, useEffect } from 'react';
import '/app/globals.css'; // Make sure to import the CSS file

const texts = ["The Roadmap", 'The Future', 'The Revolution', 'The Telegram', "The Waitlist", "The Community"];
const typingSpeed = 40; // Speed of typing each character
const deletingSpeed = 100; // Speed of deleting each character
const displayTime = 1000; // Time to display the complete text before starting to delete, in milliseconds

const TypingEffect = () => {
  const [index, setIndex] = useState(0);  // Index of the current text in the array
  const [subIndex, setSubIndex] = useState(0);  // Index of the current character in the text
  const [reverse, setReverse] = useState(false);  // State to control the typing direction

  useEffect(() => {
    if (!reverse && subIndex === texts[index].length) {
      // When the full text is displayed, start the deletion after displayTime
      const timeout = setTimeout(() => {
        setReverse(true);
      }, displayTime);
      return () => clearTimeout(timeout);
    }

    if (reverse && subIndex === 0) {
      // Once text is deleted, switch to the next text after a short delay
      const timeout = setTimeout(() => {
        setIndex((index + 1) % texts.length);
        setReverse(false);
      }, displayTime);
      return () => clearTimeout(timeout);
    }

    // Handle the typing and deleting effect
    const timeout = setTimeout(() => {
      setSubIndex(current => current + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="join-text" style={{ fontSize: '4.5rem', fontWeight: 'bold', marginBottom: '20px', marginTop: '-75px' }}>Join</div>
      <div className="text-4xl md:text-5xl font-bold" style={{ minHeight: '75px' }}>
        {texts[index].substring(0, subIndex)}
      </div>
    </div>
  );
};

export default TypingEffect;
