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
}));
type ButtonType = {
  text: string,
  color?: string,
  width?: string | number,
  props?: {
    [key: string]: any
  }
}
const PrimaryButton: React.FunctionComponent<ButtonType> = ({ text = '', width = '100%' }) => {
  const classes = useStyles();

  return (
    <Box width={width}>
      <Button fullWidth variant="contained" color="primary" classes={{ root: classes.root }} >
        {text}
      </Button>
    </Box>
  );
}

export default PrimaryButton;
