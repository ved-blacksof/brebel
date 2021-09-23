import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';
import Pulse from 'react-reveal/Pulse';

const useStyles = makeStyles((theme) => ({
    lightWeight: {
        width: '100%',
        height: '200vh',
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            height: '80vh',
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
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
        },
    },
    loremBox: {
        width: "50%",
        margin: '0 auto',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginTop: '5%',

        }
    },
    lorem: {
        font: 'normal normal normal 3rem Ben',
        textAlign: 'center',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            lineHeight: '1',
        },
    },
    imgBox: {
        position: 'relative'
    },
    txtGradient2Box: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    txtGradient2: {
        font: 'normal normal normal 10vw Gopher-black',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        marginTop: '2%',
        position: 'absolute',
        left: '50%',
        bottom: '5%',
        zIndex: '1',
        transform: 'translate(-50%)',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
        },
    },
    txtGradient2Shade: {
        font: 'normal normal normal 10.5vw Gopher-black',
        background: 'transparent',
        color: 'transparent',
        textAlign: 'center',
        position: 'absolute',
        bottom: '8%',
        zIndex: '0',
        WebkitTextStrokeWidth: '.08rem',
        WebkitTextStrokeColor: 'red',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.3rem',
        },
    },
    lightWeightImages: {
        width: '100%',
        marginTop: '5%'
    },
    [theme.breakpoints.down('md')]: {
        width: '80%',
    },
}))

export function LightWeight() {
    const classes = useStyles();
    return (
        <Box className={classes.lightWeight}>
            <Box>
                <h1 className={classes.txtGradient} >Lighter than a Feather  </h1>
                <Box className={classes.loremBox}>
                    <h1 className={classes.lorem}>Experience zero gravity on earth! Presenting Watch 1.0 lightweight design and made-to-fit strap-on experience.</h1>
                </Box>
            </Box>

            <Box className={classes.imgBox}>
                <Pulse>
                    <img className={classes.lightWeightImages} src={'./images/Eng.png'} alt="lightweight" />
                </Pulse>
                <Box className={classes.txtGradient2Box}>
                    <h1 className={classes.txtGradient2} > 10 mm  </h1>
                    <h1 className={classes.txtGradient2Shade} > 10 mm  </h1>
                </Box>
            </Box>

        </Box>
    )
}
