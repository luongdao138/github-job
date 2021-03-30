import { Container, Paper } from '@material-ui/core';
import React from 'react';
import Appbar from '../components/Appbar';
import Jobs from '../components/Jobs';

const Home = () => {
  return (
    <Container>
      <Paper style={{}}>
        <Appbar />
        <Jobs />
      </Paper>
      {/* </Paper> */}
    </Container>
  );
};

export default Home;
