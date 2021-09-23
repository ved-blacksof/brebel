import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    qltyUpSection: {
        display: 'flex',
        justifyContent: 'right',
        position: 'relative',
        margin: '10% 0rem',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'right',
        },
    },
    bgImg: {
        width: '70%',
        opacity: '0.2',
    },
    box: {
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto ',
        },
    },
    qlty: {
        font: 'normal normal bolder 8rem Gopher',
        padding: '.5rem 0rem',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 8rem Gopher',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bolder 6rem Gopher',
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal bolder 4rem Gopher',
        }
    },
    qltySubBox: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    qltySub: {
        font: 'normal normal normal 2.5rem Ben',
        width: '35%',
        lineHeight: '1.5',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.8rem',
            width: '50%',
        },
    },
    qltyTop: {
        font: 'normal normal normal 3rem Gopher',
        textAlign: 'center',
        width: '40%',
        [theme.breakpoints.down('md')]: {
            fontSize: '2.2rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            textAlign: 'left',
            padding: '1rem 0rem'
        },
    },
    qltyMidSection: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
    },

    brImagesBox: {
        position: 'absolute', bottom: '10%', left: '20%', display: 'flex', justifyContent: 'space-between', width: '90%'
    },
    brImages: {
        width: '40%',
    },

    qltyDownSection: {
        display: 'flex',
        justifyContent: 'right',
        width: '80%',
        marginTop: '5%',
        marginBottom: '5%',
        margin: '0 auto',

        [theme.breakpoints.down('sm')]: {
            justifyContent: 'right',
        }
    },
    qltySubText: {
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        [theme.breakpoints.down('md')]: {

        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    specs: {

        width: '45%',
        font: 'normal normal 300 4rem Gopher',
        color: '#cffe00',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal 300 3rem Gopher',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal 300 2rem Gopher',
            width: '100%',
            padding: '2rem',
        }
    }
}))

export function Quality({
    qualityImageMain,
    qualityImageSecondary,
    headMain,
    headSecond
}) {
    const classes = useStyles();
    return (
        <Box >
            <Box className={classes.qltyUpSection}>
                <Box className={classes.box}>
                    <Typography className={classes.qlty}> QUALITY </Typography>

                    <Box className={classes.qltySubBox} >
                        <Typography className={classes.qltySub}> Our products go through rigorous testing to craft the perfect product for you. </Typography>
                        <Typography className={classes.qltyTop}>Top-Class &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Engineering</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.qltyMidSection}>
                <img className={classes.bgImg} src={'./images/Path 6392.svg'} alt='B Rebel' />
                <Box className={classes.brImagesBox}>
                    <img className={classes.brImages} src={qualityImageMain} alt='B Rebel' />
                    <img className={classes.brImages} style={{ overflow: 'hidden' }} src={qualityImageSecondary} alt='B Rebel' />
                </Box>
            </Box>

            <Box className={classes.qltyDownSection}>
                <Box className={classes.qltySubText}>
                    <Typography className={classes.specs}> {headMain}</Typography>
                    <Typography className={classes.specs}> {headSecond}</Typography>
                </Box>
            </Box>

        </Box>
    )
}
