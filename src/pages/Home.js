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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
  item: {
    cursor: 'pointer',
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
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const { openDrawer, setOpenDrawer } = useGitContext();
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Container>
      <Paper>
        <Appbar />
        <Navbar />
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
            <ListItem component={Link} to='/' className={classes.item}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography variant='h6' className={classes.label}>
                  Home
                </Typography>
              </ListItemText>
            </ListItem>
            {!isUser && (
              <ListItem className={classes.item} onClick={loginWithRedirect}>
                <ListItemIcon>
                  <LockOpenIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant='h6' className={classes.label}>
                    Login
                  </Typography>
                </ListItemText>
              </ListItem>
            )}
            {isUser && (
              <ListItem className={classes.item} onClick={logout}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant='h6' className={classes.label}>
                    Logout
                  </Typography>
                </ListItemText>
              </ListItem>
            )}
          </List>
        </Router>
      </Drawer>
    </Container>
  );
};

export default Home;
