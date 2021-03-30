import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Job from './Job.jsx';
import Pagination from '@material-ui/lab/Pagination';
import { useGitContext } from '../context.js';
import Loader from './Loader.jsx';
import Filter from './Filter.jsx';

const useStyles = makeStyles((theme) => ({
  pagination: {
    '& .MuiPaginationItem-textPrimary.Mui-selected': {
      color: theme.palette.common.white,
    },
  },
}));

const Jobs = () => {
  const { jobs, isLoading, page, setPage, totalPage } = useGitContext();
  const classes = useStyles();

  return (
    <div style={{ padding: '20px' }}>
      {!isLoading ? (
        <>
          <Filter />
          <Grid
            container
            spacing={3}
            style={{
              marginTop: '30px',
              marginBottom: '15px',
            }}
          >
            {jobs.map((job, index) => {
              return <Job key={index} job={job} />;
            })}
          </Grid>
        </>
      ) : (
        <Loader />
      )}
      <div
        style={{
          display: isLoading ? 'none' : 'flex',
          marginBottom: isLoading ? '0px' : '30px',
        }}
      >
        <div style={{ flexGrow: 1 }}></div>
        <Pagination
          className={classes.pagination}
          color='primary'
          count={totalPage}
          onChange={(e, page) => {
            console.log(page);
            setPage(page);
          }}
        />
      </div>
    </div>
  );
};

export default Jobs;
