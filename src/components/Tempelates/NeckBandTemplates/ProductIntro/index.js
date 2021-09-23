import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    carouselBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        [theme.breakpoints.down('md')]: {
            height: 'fit-content',
            padding: '4rem 0rem'
        },
        [theme.breakpoints.down('sm')]: {

        },
    },

    watchBox: {
        position: 'relative',
        height: '25vh',
        width: '25%',
        top: '0%',
        [theme.breakpoints.down('md')]: {
            height: '20vh',
        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },

    watchImg: {
        width: '100%',
        position: 'absolute',
        top: '-110%',
        zIndex: '2',
        [theme.breakpoints.down('md')]: {
            top: '-60%',
        },
        [theme.breakpoints.down('sm')]: {
            top: '-60%',
        }

    },
    watchImg2: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },

    textBox: {
        position: 'relative',
        width: '70%',
        display: 'flex',
        justifyContent: 'center'
    },

    watchHead: {
        font: 'normal normal bolder 10vw Gopher-black',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 12rem Gopher-black',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bolder 8rem Gopher-black',
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal bolder 4.5rem Gopher-black',
        }
    },

    watchHeadShade: {
        font: 'normal normal bolder 10vw Gopher-black',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        top: '8%',
        zIndex: '0',
        WebkitTextStrokeWidth: '.08rem',
        WebkitTextStrokeColor: '#5d5d5d',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 12rem Gopher-black',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bolder 8rem Gopher-black',
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal bolder 4.5rem Gopher-black',
        }
    },

    text3: {
        font: 'normal normal normal 4.5rem Gopher',
        color: '#CFFE00',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal normal 2.5rem Gopher',
        }
    },

    text4: {
        padding: '1rem',
        font: 'normal normal normal 5rem Ben',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal normal 1.5rem Ben',
        }
    },

    text5: {
        font: 'normal normal normal 1.5rem Ben',
        textAlign: 'center',
        paddingBottom: '1rem'
    },

    btn: {
        font: 'normal normal normal 1.8rem Gopher',
        padding: '1rem 4rem',
        border: '.2rem solid rgba(255, 78, 0, 0.46)',
        borderRadius: '3rem',
        background: 'transparent',
        color: '#FFFFFF',
    }

}))

export function ProductIntro({
    title,
    productImage
}) {

    const classes = useStyles();

    return (

        <Box className={classes.carouselBox}>

            <Box className={classes.textBox}>
                <h1 className={classes.watchHead}>Neck Band 101</h1>
                <span className={classes.watchHeadShade} >Neck Band 101</span>
            </Box>
            <div className={classes.watchBox}>
                <img className={classes.watchImg} src={'./images/neckbandintro.png'} alt="intro product images" />
            </div>

            <img className={classes.watchImg2} src={'./images/neckbandintro.png'} alt="intro product images" />

            <div className={classes.btnBox}>
                <Typography variant="h1" className={classes.text4}>From <span style={{ color: '#cffe00' }}>4100 /-</span> </Typography>
                <Typography variant="h1" className={classes.text5}>Inclusive of all taxes </Typography>
            </div>
            <button className={classes.btn}>Buy Now</button>

        </Box >
    )
}
