import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const rootUrl = '/positions.json';
const context = React.createContext();

const AppProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dark, setDark] = useState(false);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#52cc50',
      },
      type: dark ? 'dark' : 'light',
    },
  });

  const fetchJobs = () => {
    setIsLoading(true);
    axios
      .get(rootUrl, {
        params: {
          markdown: true,
        },
      })
      .then((res) => {
        setJobs(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(fetchJobs, []);

  return (
    <ThemeProvider theme={theme}>
      <context.Provider value={{ jobs, isLoading, dark, setDark }}>
        {children}
      </context.Provider>
    </ThemeProvider>
  );
};

const useGitContext = () => {
  return useContext(context);
};

export { AppProvider, useGitContext };
