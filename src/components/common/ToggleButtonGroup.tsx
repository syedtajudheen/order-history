import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  buttonGroupRoot: {
    height: 40,
  },
  selected: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white
  },
  root: {
    width: 180,
    textTransform: 'none',
    height: 40,
    minHeight: 40,
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    fontSize: 15,
    '&.Mui-selected': {
      color: theme.palette.common.black,
      backgroundColor: '#F7F7F7',
      boxShadow: 'inset 1px 1px 6px 2px #dedede'
    }
  }
}));



export const ButtonGroup: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [activeButton, setActiveButton] = React.useState(0);
  const classesProp = { root: classes.root, selected: classes.selected };
  const onSwitchButton = (event: any, value: any) => {
    console.log('vvv', value)
    setActiveButton(value);
  };

  return (
    <div className="App">
      <ToggleButtonGroup exclusive value={activeButton} onChange={onSwitchButton} >
        <ToggleButton value={0} classes={classesProp}>
          Range
        </ToggleButton>
        <ToggleButton value={1} classes={classesProp}>
          Single Day
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
