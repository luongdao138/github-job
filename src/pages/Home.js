import {
  Container,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  ListItemText,
  Typography,
  IconButton,
  Divider,
} from '@material-ui/core';
import React from 'react';
import Appbar from '../components/Appbar';
import Jobs from '../components/Jobs';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Home';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { useGitContext } from '../context';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(1.5, 15, 1.5, 1.5),
    '&:hover': {
      transition: 'all 0.3s linear',
      backgroundColor: '#eeeeee',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5, 10, 1.5, 1.5),
    },
  },
  label: {
    color: '#474545',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const { openDrawer, setOpenDrawer } = useGitContext();

  return (
    <Container>
      <Paper>
        <Appbar />
        <Jobs />
      </Paper>
      <Drawer
        open={openDrawer}
        anchor='left'
        onBackdropClick={() => {
          setOpenDrawer(false);
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '10px 20px',
            // paddingTop: '20px',
          }}
        >
          <IconButton onClick={() => setOpenDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Router>
          <List>
            <ListItem component={Link} to='/acdcds' className={classes.item}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography variant='h6' className={classes.label}>
                  Home
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem component={Link} to='/acdcds' className={classes.item}>
              <ListItemIcon>
                <LockOpenIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography variant='h6' className={classes.label}>
                  Login
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Router>
      </Drawer>
    </Container>
  );
};

export default Home;
