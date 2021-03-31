import { useAuth0 } from '@auth0/auth0-react';
import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(2, 2, 0, 2),
  },
  img: {
    width: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: theme.spacing(1.5),
  },
  title: {
    marginLeft: theme.spacing(0.5),
  },
}));

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  const isUser = isAuthenticated && user;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isUser && user.picture && (
        <img className={classes.img} src={user.picture} alt='' />
      )}
      {isUser && user.name && (
        <>
          Welcome <strong className={classes.title}>{user.name}</strong>
        </>
      )}
    </div>
  );
};

export default Navbar;
