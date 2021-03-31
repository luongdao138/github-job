import { Container, Typography, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  big_title: {
    fontWeight: '500',
    fontSize: '100px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '60px',
    },
  },
  small_title: {
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
}));

const PageNotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#cdecee',
      }}
    >
      <Typography variant='h1' className={classes.big_title}>
        404
      </Typography>
      <Typography variant='h4' gutterBottom className={classes.small_title}>
        Opps! The page could not be found!
      </Typography>
      <Button
        onClick={() => history.push('/')}
        variant='outlined'
        color='primary'
      >
        Home
      </Button>
    </Container>
  );
};

export default PageNotFound;
