import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export function AlertSuccess() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert variant="filled" severity="success">
                This is a success alert — check it out!
      </Alert>
        </div>
    );
}