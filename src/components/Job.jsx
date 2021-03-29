import React from 'react';
import {
  Grid,
  Card,
  Avatar,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  List,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  media: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    columnGap: '15px',
  },
  avatar: {
    width: '70px',
    height: '70px',
  },
  type: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: theme.shape.borderRadius,
      padding: '3px 10px',
      fontSize: '10px',
      color: theme.palette.common.white,
    },
  },
  title: {
    fontSize: '14px',
    fontWeight: '800',
    letterSpacing: '2px',
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
  },
}));

const Job = ({ job }) => {
  const { company_logo, title, created_at, company, location, url, type } = job;
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.media}>
          {company_logo && (
            <Avatar
              classes={{ root: classes.avatar }}
              src={company_logo}
            ></Avatar>
          )}
          <div>
            <Typography
              variant='subtitle2'
              gutterBottom
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography variant='body2' className={classes.time}>
              {created_at}
            </Typography>
          </div>
          <div className={classes.type}>
            <Typography variant='body2'>{type}</Typography>
          </div>
        </CardMedia>
        <CardContent className={classes.content}>
          <List>
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
              <ListItemText>
                <a href={url} target='_blank'>
                  {url}
                </a>
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button color='primary' variant='outlined'>
            View detail
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Job;
