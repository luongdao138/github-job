import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Job from './Job.jsx';
import Pagination from '@material-ui/lab/Pagination';
import { useGitContext } from '../context.js';
import loadingImage from '../images/loading2.gif';
import Loader from './Loader.jsx';
import Filter from './Filter.jsx';
import { PaginationItem } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  pagination: {
    '& .MuiPaginationItem-textPrimary.Mui-selected': {
      color: theme.palette.common.white,
    },
  },
}));

const Jobs = () => {
  const { jobs, isLoading, page, setPage } = useGitContext();

  const [jobsPerPage, setJobsPerPage] = useState(6);
  const [jobsAfterPaging, setJobsAfterPaging] = useState([]);
  const classes = useStyles();
  const totalPage = 6;

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
  // const getJobsAfterPaging = (page) => {
  //   return jobs
  //     .slice((page - 1) * jobsPerPage, page * jobsPerPage)
  //     .map((job) => {
  //       const createdDate = new Date(job.created_at);
  //       return {
  //         ...job,
  //         created_at: `${createdDate.getDate()}/${
  //           createdDate.getMonth() + 1
  //         }/${createdDate.getFullYear()}`,
  //       };
  //     });
  // };

  // if (isLoading) {
  //   return <Loader />;
  // }

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
          // renderItem={(item) => {
          //   console.log(item);
          //   return (
          //     <PaginationItem
          //       {...item}
          //       selected={item.page === page}
          //       onClick={(e) => setPage(item.page)}
          //     />
          //   );
          // }}
        />
      </div>
    </div>
  );
};

export default Jobs;
