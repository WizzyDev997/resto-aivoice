// MediaCard.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function MediaCard() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={2}>
      <Card sx={{ display: 'flex', maxWidth: 600 }}>
        <CardMedia
          component="img"
          sx={{ width: 240 }} // Adjust image width as necessary
          image="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          alt="NextUI Fruit Image"
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Fruit Delights
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Explore the world of fruits with our collection of naturally sweet and vibrant delicacies.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
