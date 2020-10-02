
import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { OutlinedInput, InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 40,
  },
  input: {
    borderRadius: 0,
    fontSize: theme.typography.fontSize
  }
}));

export const SearchBox: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <OutlinedInput
      fullWidth
      type='text'
      className={classes.root}
      classes={{ input: classes.input }}
      placeholder={'Search by product number, catalog number, account number, account nickname, product order number'}
      inputProps={{ input: classes.input }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton type="submit" size='small' aria-label="search" edge='end'>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
