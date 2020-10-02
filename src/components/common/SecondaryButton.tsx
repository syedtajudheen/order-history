import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 170,
    textTransform: 'none',
    borderRadius: 2,
    fontWeight: theme.typography.fontWeightMedium
  },
  outlined: {
    borderColor: theme.palette.grey[300]
  }
}));

type ButtonType = {
  text: string,
  color?: string,
  width?: string | number,
  props?: {
    [key: string]: any
  }
}
const SecondaryButton: React.FunctionComponent<ButtonType> = ({ text = '', color = '', width = '100%', props }) => {
  const classes = useStyles();

  return (
    <Box width={width}>
      <Button fullWidth variant="outlined" color={color ? "inherit" : "secondary"} classes={{ root: classes.root, outlined: classes.outlined }} {...props}>
        {text}
      </Button>
    </Box>
  );
}

export default SecondaryButton;
