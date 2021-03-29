import React from 'react';
import { Grid } from '@material-ui/core';
import { jobs } from '../mockData.js';
import Job from './Job.jsx';

const Jobs = () => {
  const newJobs = jobs.map((job) => {
    const createdDate = new Date(job.created_at);
    return {
      ...job,
      created_at: `${createdDate.getDate()}/${
        createdDate.getMonth() + 1
      }/${createdDate.getFullYear()}`,
    };
  });
  return (
    <Grid
      container
      spacing={3}
      style={{
        marginTop: '30px',
        marginBottom: '30px',
      }}
    >
      {newJobs.map((job, index) => {
        return <Job key={index} job={job} />;
      })}
    </Grid>
  );
};

export default Jobs;
