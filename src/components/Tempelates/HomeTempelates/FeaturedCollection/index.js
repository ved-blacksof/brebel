import React from 'react'
import {
    Box,
    makeStyles,
    Grid,
    Typography
} from '@material-ui/core';
import './feature.css';
import feature from './featureData.js'
import Slide from 'react-reveal/Slide';

const useStyles = makeStyles((theme) => ({

    FeatureBox: {
        width: '100%',
        height: '150vh',
        [theme.breakpoints.down('md')]: {
            height: '120vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '100vh',
        },
    },

    txtGradient: {
        font: 'normal normal normal 5vw Gopher',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        marginTop: '2%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem',
        },
    },

    lorem: {
        font: 'normal normal normal 2.5vw Ben',
        textAlign: 'center',
        lineHeight: '2',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            fontSize: '1.5',
            lineHeight: '1',
        },
    },

    gridContainer: {
        width: '80%',
        height: '90%',
        margin: '0 auto',
        marginTop: '5%',
    },

    gridItem: {
        width: '80%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },

    gridTitle: {
        font: 'normal normal normal 6rem Gopher',
        marginBottom: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: "4rem",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "3rem",
        }
    },

    gridDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

    gridPrimeryImage: {
        maxWidth: '100%',
        [theme.breakpoints.down('lg')]: {
            maxWidth: '80%',
          },
        [theme.breakpoints.down('md')]: {
            maxWidth: '80%',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '50%',
        }
    },

    gridSecondary: {
        maxWidth: '100%',
        position: 'absolute',
        top: '25%',
        [theme.breakpoints.down('md')]: {
            width: '80%',
            top: '0%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '40%',
            top: '0%',
        }
    },
}))

export function FeaturedCollections() {

    const classes = useStyles();

    return (
        <Box className={classes.FeatureBox}>

            <h1 className={classes.txtGradient} > Featured Collection  </h1>
            <h1 className={classes.lorem}>The first and best of B.Rebel. Let’s move the world.</h1>

            <Grid container className={classes.gridContainer}>
                {
                    feature.map((item, index) => {
                        return (
                            <Grid item xs={12} sm={6} className={classes.gridItem} key={index}>
                                <Slide bottom>
                                    <Typography variant='h1' className={classes.gridTitle}>{item.title}</Typography>
                                    <div className={classes.gridDiv}>
                                        <Slide bottom>
                                            <img src={item.images1} alt="paly Button" className={classes.gridPrimeryImage} />
                                        </Slide>
                                        <Slide bottom>
                                            <img className={classes.gridSecondary} src={item.images2} alt="Airpods" />
                                        </Slide>
                                    </div>
                                </Slide>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Box>
    )
}
