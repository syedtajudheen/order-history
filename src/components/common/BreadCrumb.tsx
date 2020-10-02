
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    fontSize: '14px',
    fontWeight: 500
  }
}));

export const Breadcrumb: React.FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link className={classes.link} color="secondary" href="/">Home</Link>
        <Link className={classes.link} color="secondary" href="/" >Account</Link>
        <Typography className={classes.link} color="textPrimary">Order History</Typography>
      </Breadcrumbs>
    </div>
  );
}
