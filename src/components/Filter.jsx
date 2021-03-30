import {
  Grid,
  makeStyles,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import React from 'react';
import { useGitContext } from '../context';

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
    // marginLeft: theme.spacing(2),
  },
}));

const Filter = () => {
  const classes = useStyles();
  const { page, filterOptions, handleChange, paginateJob } = useGitContext();

  const convertValue = (e, name) => {
    return {
      target: {
        value: e.target.checked,
        name,
      },
    };
  };

  return (
    <section>
      <Grid style={{ marginTop: '0px' }} container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            className={classes.input}
            name='description'
            label='Description'
            value={filterOptions.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            className={classes.input}
            name='location'
            label='Location'
            value={filterOptions.location}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={2}>
          <FormControlLabel
            control={<Checkbox />}
            label='Fulltime only'
            checked={filterOptions.fulltime_only}
            onChange={(e) => handleChange(convertValue(e, 'fulltime_only'))}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={2}>
          <Button
            variant='contained'
            color='primary'
            onClick={() => paginateJob(page)}
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
