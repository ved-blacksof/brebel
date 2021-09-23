import React from 'react'
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    PlayAroundMain: {
        width: '100%',
        height: '150vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            height: '80vh',
        },
    },
    PlayAroundImg: {
        width: '70%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    }
}))

export function PlayAround() {

    const classes = useStyles();

    return (
        <div className={classes.PlayAroundMain}>
            <img src={'./images/Group 7144.png'} className={classes.PlayAroundImg} alt="So many features" />
        </div>
    )
}
