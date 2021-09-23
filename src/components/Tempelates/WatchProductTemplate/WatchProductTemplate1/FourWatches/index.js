import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Slide, Fade } from 'react-reveal';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        margin: '10% 0rem'
    },
    main: {
        width: '70%',
        justifyContent: 'space-around',
    },
    watchBox1: {
        display: 'flex',
        justifyContent: 'center',
        margin: '4rem 0rem'
    },
    watchBox2: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '4rem 0rem'
    },
    watch1: {
        width: '30%',
    },
    head: {
        font: 'normal normal normal 4rem Gopher',
        color: '#CFFE00',
        lineHeight: '1.2',
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
    },
    subHead: {
        font: 'normal normal normal 2rem Ben',
        lineHeight: '1.5',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        },
    },
    contentBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    contentInBox: {
        width: '50%',
        margin: '10%',
        [theme.breakpoints.down('md')]: {
            width: '80%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%',
            textAlign: 'center'
        },

    }
}));

export function FourWatches() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.main}>
                <Grid item xs={12} container direction="row">

                    <Grid item xs={12} sm={6} >
                        <Grid className={classes.watchBox1} item xs={12} sm={12}>
                            <Slide top>
                                <img className={classes.watch1} src='/images/Layer 011.png' alt="First Watch" />
                            </Slide>
                        </Grid>

                        <Grid className={classes.watchBox2} item xs={12} sm={12}>
                            <Slide left>
                                <img xs={3} sm={3} className={classes.watch1} src='/images/Layer 02.png' alt="First Watch" />
                            </Slide>
                            <Slide right>
                                <img xs={3} sm={3} className={classes.watch1} src='/images/Layer 03.png' alt="First Watch" />
                            </Slide>
                        </Grid>

                        <Grid className={classes.watchBox1} item xs={12} sm={12}>
                            <Slide bottom>
                                <img className={classes.watch1} src='/images/Layer 04.png' alt="First Watch" />
                            </Slide>
                        </Grid>
                    </Grid>

                    <Grid className={classes.contentBox} item xs={12} sm={6} >

                        <Grid className={classes.contentInBox} item xs={12}>
                            <Fade bottom>
                                <h1 className={classes.head} >Unleash the fitness freak in you!</h1>
                                <h1 className={classes.subHead}>11 different Sports Mode for every Workout Mood</h1>
                            </Fade>

                        </Grid>

                        <Grid className={classes.contentInBox} item xs={12}>
                            <Fade bottom>
                                <h1 className={classes.head} style={{ color: '#FF4E00' }}>Access to your daily drills</h1>
                                <h1 className={classes.subHead}>Track Daily Steps and Calories ON-THE-GO</h1>
                            </Fade>
                        </Grid>
                        <Grid className={classes.contentInBox} item xs={12}>
                            <Fade bottom>
                                <h1 className={classes.head}>Health goals were never so close</h1>
                                <h1 className={classes.subHead}>Now monitoring vitals or sleep patterns is just a strap away</h1>
                            </Fade>
                        </Grid>
                        <Grid className={classes.contentInBox} item xs={12}>
                            <Fade bottom>
                                <h1 className={classes.head} style={{ color: '#FF4E00' }}>B.Brave. B.You.</h1>
                                <h1 className={classes.subHead}>Personalize your Watch Face as you like!</h1>
                            </Fade>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}


