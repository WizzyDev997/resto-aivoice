"use client"

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import styled from '@emotion/styled';


  // Define the style for the timeline content titles
  const timelineContentStyle = {
    color: 'white', // Color of the text
    fontSize: '4rem', // Increase the font size here
    fontWeight: 'bold' // Optional: Make the titles bold
  };

const customEventListStyles = {
  fontSize: '1.4rem', // Slightly smaller than the main content but larger than default
};

export default function OppositeContentTimeline() {
  console.log("Rendering OppositeContentTimeline");
  const timelineContentStyle = { color: 'white', fontSize: '1.8rem' }; // Style pour changer la couleur du texte
  const timelineEventsStyle = { 
    listStyleType: 'disc', // Ceci crée des puces classiques devant les éléments de liste
    paddingLeft: '20px', // Ceci ajoute de l'espace à gauche pour aligner les puces
    color: 'white' // Ceci définit la couleur du texte et des puces en blanc
  };
  

  return ( 
    <Timeline position="left">
      <TimelineItem>
      <TimelineOppositeContent sx={{ py: 2, px: 2, ...customEventListStyles }}>
          <ul style={timelineEventsStyle}>
            <li>Launch</li>
            <li>Listing</li>
            <li>Community growth</li>
            <li>Webinar</li>
          </ul>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={timelineContentStyle}>Q2</TimelineContent>
      </TimelineItem>

      {/* ... Répétez les modifications pour les autres éléments de la timeline ... */}
      <TimelineItem>
      <TimelineOppositeContent sx={{ py: 2, px: 2, ...customEventListStyles }}>
          <ul style={timelineEventsStyle}>
            <li>NFT utilities</li>
            <li>Charity</li>
            <li>Saas Launch</li>
          </ul>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={timelineContentStyle}>Q3</TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent sx={{ py: 2, px: 2, ...customEventListStyles }}>
          <ul style={timelineEventsStyle}>
            <li>Access to CRM</li>
            <li>$tacking</li>
            <li>More Partners</li>
          </ul>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={timelineContentStyle}>Q4</TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent sx={{ py: 2, px: 2, ...customEventListStyles }}>
          <ul style={timelineEventsStyle}>
            <li>Loading...</li>
          </ul>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={timelineContentStyle}>Q1</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
