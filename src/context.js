import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const rootUrl = '/positions.json';
const context = React.createContext();

const AppProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <context.Provider value={{ jobs, isLoading }}>{children}</context.Provider>
  );
};

const useGitContext = () => {
  return useContext(context);
};

export { AppProvider, useGitContext };
