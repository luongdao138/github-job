import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const rootUrl = '/positions.json';
const context = React.createContext();

const AppProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(6);
  const [error, setError] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dialogOption, setDialogOption] = useState({
    show: false,
    job: {},
  });
  const [filterOptions, setFilterOptions] = useState({
    description: '',
    location: '',
    fulltime_only: false,
  });

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#52cc50',
      },
      type: dark ? 'dark' : 'light',
    },
  });

  const paginateJob = (page) => {
    setIsLoading(true);
    setError(false);
    axios
      .get(`${rootUrl}?page=${page}`, {
        params: {
          markdown: true,
          description: filterOptions.description,
          location: filterOptions.location,
          full_time: filterOptions.fulltime_only,
        },
      })
      .then((res) => {
        setJobs(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    paginateJob(page);
  }, [page]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions({
      ...filterOptions,
      [name]: value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <context.Provider
        value={{
          jobs,
          isLoading,
          dark,
          setDark,
          totalPage,
          page,
          error,
          setPage,
          filterOptions,
          handleChange,
          paginateJob,
          dialogOption,
          setDialogOption,
          openDrawer,
          setOpenDrawer,
        }}
      >
        {children}
      </context.Provider>
    </ThemeProvider>
  );
};

const useGitContext = () => {
  return useContext(context);
};

export { AppProvider, useGitContext };
