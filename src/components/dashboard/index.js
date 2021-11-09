import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './index.css';

export default function Dashboard() {
  return (
    <Container align="right" className="container">
      <Typography variant="h3">Showcase</Typography>
      <Typography variant="h6">
        Here we bring lots of
        <br /> seperate projects together into one world
        <br /> more to come!
      </Typography>
    </Container>
  );
}
