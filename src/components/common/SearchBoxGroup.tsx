
import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '54px',
  },
  input: {
    height: '54px',
    width: '80%',
    paddingLeft: theme.spacing(2),
    flex: 1,
    border: "1px solid #e6e6e6",
    backgroundColor: theme.palette.common.white,
    boxSizing: 'content-box',
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  iconButton: {
    height: '54px',
    width: '100px',
    backgroundColor: '#565759',
    borderRadius: 0,
    color: theme.palette.common.white
  },
  selectEmpty: {
    paddingLeft: "6px",
    backgroundColor: "#F7F7F7",
  },
  select: {
    height: '54px',
    border: "1px solid #e6e6e6",
    borderRight: 'none',
    width: '20%',
    backgroundColor: "#F7F7F7"
  },
  selectMenu: {
    width: "100%",
    height: '40px',
    display: 'flex',
    alignItems: 'center'
  }
}));

export const SearchBoxGroup: React.FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <Select
        autoWidth
        disableUnderline
        variant='standard'
        classes={{
          root: classes.selectEmpty,
          select: classes.select,
          selectMenu: classes.selectMenu
        }}
        placeholder='Search all'
        className={classes.select}
        value={-1}
      //   onChange={handleChange}
      >
        <MenuItem value={-1}>
          Search all
        </MenuItem>
      </Select>

      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" className={classes.iconButton} size='medium' aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}