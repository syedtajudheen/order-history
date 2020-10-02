import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link, Box, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '40px',
    marginBottom: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  link: {
    padding: theme.spacing(1),
    fontSize: '14px',
    color: theme.palette.text.primary,
  },
  primaryLink: {
    padding: theme.spacing(2),
    fontSize: '14px',
    color: theme.palette.primary.main
  }
}));

export const Header: React.FunctionComponent<{}> = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item lg={7} xs={12}>
          <Box display='flex' flexDirection='row' alignItems='center'>

            <img src={logo} alt='brand-logo' />

            <Typography variant='h6'>
              <Link href="/popular" className={classes.link}>
                Popular
            </Link>
              <Link href="/application-techniques" className={classes.link}>
                Applications &amp; Techniques
            </Link>
              <Link href="/all-products" className={classes.link}>
                Shop All Products
            </Link>
              <Link href="/services" className={classes.link}>
                Services
            </Link>
              <Link href="/support" className={classes.link}>
                Support
            </Link>
            </Typography>
          </Box>

        </Grid>
        <Grid item lg={5} xs={12}>
          <Box display='flex' flexDirection='row' justifyContent='flex-end'>

            <Typography variant='h6'>
              <Link href="/popular" className={classes.link}>
                Connect Your Lab
            </Link>
              <Link href="/application-techniques" className={classes.link}>
                Sign In
            </Link>
              <Link href="/all-products" className={classes.primaryLink} color="textPrimary">
                Quick Order
            </Link>
            </Typography>
            <IconButton size='small'>
              <ShoppingCartIcon color="primary" />
            </IconButton>
          </Box>

        </Grid>
      </Grid>

      {/* <Button variant="contained" style={{    textTransform: 'none'}} color="primary">
        Primary
      </Button>   */}
    </div>
  )
}
