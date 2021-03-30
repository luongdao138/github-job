import {
  Grid,
  makeStyles,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '300px',
    // paddingRight: ''
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  label: {
    color: theme.palette.common.white,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const Filter = () => {
  const classes = useStyles();
  return (
    <section>
      <Grid style={{ marginTop: '0px' }} container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            className={classes.input}
            name='description'
            label='Description'
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            className={classes.input}
            name='location'
            label='Location'
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <FormControlLabel control={<Checkbox />} label='Fulltime only' />
          <Button
            variant='contained'
            color='primary'
            classes={{
              root: classes.button,
              label: classes.label,
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default Filter;
