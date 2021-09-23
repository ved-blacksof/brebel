import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    Curved: {
        width: '100%',
        position: 'relative'
    },
    curvImages: {
        width: '100%',
    },
    txtGradient: {
        font: 'normal normal normal 5vw Gopher',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
        },
    },
    lineHeight: {
        position: 'absolute',
        top: '10%',
        left: '10%'
    },
    lorem: {
        font: 'normal normal normal 3rem Ben',
        textAlign: 'center',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            lineHeight: '1',
        },
    },
    loremBox: {
        width: "40%",
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginTop: '0%',
            float: 'left',
            display: 'none'
        }
    },


}))


export function Curved() {
    const classes = useStyles();

    return (
        <Box className={classes.Curved}>
            <Box className={classes.lineHeight}>
                <h1 className={classes.txtGradient}>
                    Outstanding
                    <br />
                    Design
                </h1>
                <Box className={classes.loremBox}>
                    <h1 className={classes.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                </Box>
            </Box>
            <img className={classes.curvImages} src={'./images/EN_12@2x.png'} alt='curv' />
        </Box>
    )
}
