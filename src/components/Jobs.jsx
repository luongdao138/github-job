import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Job from './Job.jsx';
import Pagination from '@material-ui/lab/Pagination';
import { useGitContext } from '../context.js';
import loadingImage from '../images/loading2.gif';
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
  const { jobs, isLoading } = useGitContext();

  const [jobsPerPage, setJobsPerPage] = useState(6);
  const [page, setPage] = useState(1);
  const [jobsAfterPaging, setJobsAfterPaging] = useState([]);
  const classes = useStyles();
  const totalPage = Math.ceil(jobs.length / jobsPerPage);

  // useEffect(() => {
  //   setJobsAfterPaging(
  //     jobs.slice((page - 1) * jobsPerPage, page * jobsPerPage).map((job) => {
  //       const createdDate = new Date(job.created_at);
  //       return {
  //         ...job,
  //         created_at: `${createdDate.getDate()}/${
  //           createdDate.getMonth() + 1
  //         }/${createdDate.getFullYear()}`,
  //       };
  //     })
  //   );
  // }, [page]);
  const getJobsAfterPaging = (page) => {
    return jobs
      .slice((page - 1) * jobsPerPage, page * jobsPerPage)
      .map((job) => {
        const createdDate = new Date(job.created_at);
        return {
          ...job,
          created_at: `${createdDate.getDate()}/${
            createdDate.getMonth() + 1
          }/${createdDate.getFullYear()}`,
        };
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Filter />
      <Grid
        container
        spacing={3}
        style={{
          marginTop: '30px',
          marginBottom: '15px',
        }}
      >
        {getJobsAfterPaging(page).map((job, index) => {
          return <Job key={index} job={job} />;
        })}
      </Grid>
      <div style={{ display: 'flex', marginBottom: '30px' }}>
        <div style={{ flexGrow: 1 }}></div>
        <Pagination
          className={classes.pagination}
          color='primary'
          count={totalPage}
          onChange={(e, page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default Jobs;
