import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  makeStyles,
  Switch,
  FormControlLabel,
  fade,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useGitContext } from '../context';

const useStyles = makeStyles((theme) => ({
  appbar: {
    padding: theme.spacing(1.5),
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.5),
    },
  },
  search: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: '10px',
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    '& svg': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '10px',
      color: theme.palette.common.white,
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1.5, 1.5, 1.5, 5),
    color: theme.palette.common.white,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 1, 1, 5),
    },
  },
  icon: {
    color: theme.palette.common.white,
    // marginRight: theme.spacing(3),
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: '500',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

const Appbar = () => {
  const { dark, setDark, setOpenDrawer } = useGitContext();

  const handleOnChange = (e) => {
    setDark((old) => !old);
  };

  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appbar}>
      <Toolbar>
        <IconButton onClick={() => setOpenDrawer(true)}>
          <MenuIcon fontSize='large' className={classes.icon} />
        </IconButton>
        <Typography variant='h5' className={classes.title}>
          Github Jobs
        </Typography>
        <div className={classes.grow}></div>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase
            placeholder='Search...'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <FormControlLabel
          control={<Switch checked={dark} onChange={handleOnChange} />}
        />
        <div></div>
      </Toolbar>
      {/* <Navbar /> */}
    </AppBar>
  );
};

export default Appbar;
