import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tab: {
    textTransform: 'none',
    minWidth: 100
  }
}));

export const TabBar: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      onChange={handleChange}
      aria-label="tabs"
    >
      <Tab
        label="Order History"
        disableRipple
        classes={{ root: classes.tab }}
      />
      <Tab
        label="Deferred Payements"
        disableRipple
        classes={{ root: classes.tab }}
      />
    </Tabs>
  );
}
