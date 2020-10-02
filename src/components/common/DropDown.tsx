
import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    paddingLeft: "6px",
    width: 100
  },
  select: {
    borderRadius: '2px'
  },
  selectMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'inherit'
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    // color: theme.palette.common.black,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamily,
    padding: "10px 14px"
  }
}));
type DropDownType = {
  options: {
    name: string,
    value: string | number
  }[],
  color?: string,
  placeholder?: string,
  [x: string]: any;
};

export const DropDown: FunctionComponent<DropDownType> = ({ options, color = '', ...props }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);

  const handleChange = (event: React.ChangeEvent<any>) => {
    setValue(event.target.value);
  };
  return (
    <Select
      fullWidth
      variant='outlined'
      classes={{
        root: classes.selectEmpty,
        select: classes.select,
        selectMenu: classes.selectMenu
      }}
      className={classes.select}
      value={value}
      input={<OutlinedInput classes={{ input: classes.input }} />}
      onChange={handleChange}
      {...props}
    >
      {options.map((option, idx) => (
        <MenuItem key={idx} value={option.value} >
          {option.name}
        </MenuItem>
      ))}
    </Select>
  )
}
