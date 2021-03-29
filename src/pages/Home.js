import { Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import Appbar from '../components/Appbar';
import Jobs from '../components/Jobs';

const Home = () => {
  return (
    <Container>
      <Appbar />
      <Jobs />
      <CssBaseline />
    </Container>
  );
};

export default Home;
