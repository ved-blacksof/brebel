import React from 'react'
import {
    makeStyles,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    unlshMargin: {
        width: '100%',
        height: '120vh',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '60vh',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '50vh',
        }
    },

    unlshImg: {
        width: '75%',
        opacity: '0.33',
        position: 'absolute',
        bottom: '0%',
    },
    unlshTxt: {
        width: '80%',
        font: 'Italic bold normal 11.5vw Ben',
        position: 'absolute',
        bottom: '30%',
        left:'10%',
        [theme.breakpoints.down('md')]: {
            bottom: '15%',
        }
    }
}))


export function Unleashing() {
    const classes = useStyles();

    return (
        <div className={classes.unlshMargin}>
            <img className={classes.unlshImg} src='./images/Path 6362.svg' />
            <h1 className={classes.unlshTxt}>UNLEASHING THE <span style={{ color: '#ff4e00' }}>REAL YOU</span></h1>
        </div>
    )
}
