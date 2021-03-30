import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useGitContext } from '../context';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    objectFit: 'cover',
  },
  title: {
    fontSize: '16px',
    fontWeight: '800',
    letterSpacing: '2px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
  time: {
    letterSpacing: '1px',
    fontSize: '11px',
    fontWeight: '500',
    marginTop: theme.spacing(1),
    color: '#617d98',
  },
  content: {
    '& span': {
      fontSize: '14px',
      color: '#617d98',
      letterSpacing: '2px',
      fontWeight: '400',
      wordBreak: 'break-all',
    },
    '& svg': {
      color: '#617d98',
    },
    '& a': {
      textDecoration: 'none',
      color: '#2caeba',
      transition: 'all 0.3s linear',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& .MuiListItem-gutters': {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
      '& .MuiListItem-root': {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
      },
      '& .MuiListItemText-root span': {
        fontSize: '12px',
      },
      '& .MuiList-padding': {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
      },
    },
  },
  desc: {
    wordBreak: 'break-word',
    color: theme.palette.primary.main,
    letterSpacing: '1.5px',
    textAlign: 'justify',
    lineHeight: '24px',
  },
  showMoreBtn: {
    fontSize: '18px',
    fontWeight: '400',
    color: '#2caeba',
    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
  type: {
    fontWeight: '500',
    fontSize: '14px',
    color: theme.palette.secondary.main,
  },
}));

const JobDetail = () => {
  const classes = useStyles();
  const [isShowMore, setIsShowMore] = useState(false);
  const { dialogOption } = useGitContext();
  const {
    company,
    company_logo,
    created_at,
    description,
    location,
    title,
    type,
    url,
  } = dialogOption.job;
  {
    return (
      dialogOption.show && (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img className={classes.img} src={company_logo} alt='' />
            <List className={classes.content}>
              <ListItem>
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary={company} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary={location} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary={url} className={classes.link} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant='h5' className={classes.title} gutterBottom>
              {title}
            </Typography>
            <Typography variant='body1' className={classes.time} gutterBottom>
              {created_at}
            </Typography>
            <Typography
              variant='subtitle1'
              className={classes.type}
              gutterBottom
            >
              {'Type: ' + type}
            </Typography>
            <Typography variant='body2' className={classes.desc}>
              <>
                {!isShowMore ? description.slice(0, 650) + '...' : description}
                {!isShowMore ? (
                  <button
                    onClick={() => setIsShowMore(true)}
                    className={classes.showMoreBtn}
                  >
                    Show more
                  </button>
                ) : (
                  <button
                    onClick={() => setIsShowMore(false)}
                    className={classes.showMoreBtn}
                  >
                    {' '}
                    Show less
                  </button>
                )}
              </>
            </Typography>
          </Grid>
        </Grid>
      )
    );
  }
};

export default JobDetail;
