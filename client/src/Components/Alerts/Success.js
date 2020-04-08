import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Success() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
    <Alert variant="filled" severity="success">
       Profile Successfully added!
      </Alert>
    </div>
  );
}