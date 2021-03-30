import {
  Dialog,
  IconButton,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useGitContext } from '../context';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '600',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  grow: {
    flexGrow: 1,
  },
}));

const Popup = ({ children, isOpen }) => {
  const classes = useStyles();
  const { setDialogOption } = useGitContext();
  return (
    <Dialog maxWidth='md' open={isOpen}>
      <DialogTitle>
        <div className={classes.wrapper}>
          <Typography className={classes.title} variant='h4'>
            Job Detail
          </Typography>
          <div className={classes.grow}></div>
          <IconButton
            onClick={() =>
              setDialogOption({
                show: false,
                job: {},
              })
            }
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default Popup;
