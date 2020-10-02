import React from "react";
import { IconButton, InputAdornment, makeStyles } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  datePicker: {
    borderRadius: 0,
    height: 38,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 170,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamily
  },
}));

const DatePickers: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = React.useState<any>(new Date());

  return (
    <DatePicker
      disableToolbar
      variant="inline"
      inputVariant="outlined"
      format="dd-MMM-yyyy"
      InputProps={{
        className: classes.datePicker,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <DateRangeIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      value={selectedDate}
      onChange={date => handleDateChange(date)}
    />
  );
}

export default DatePickers;
