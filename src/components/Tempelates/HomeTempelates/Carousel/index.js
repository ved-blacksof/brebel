import React from 'react';
import Carousel from 'react-elastic-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import './carousel.css'

const useStyles = makeStyles((theme) => ({
    CarouselBox: {
        marginBottom: '5rem'
    },
    carouselMainBox: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        }
    },
    carouselBox: {
        position: 'relative',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
        }
    },
    image: {
        width: '42%',
        position: 'absolute',
        top: '2.8rem',
        left: '4%',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            width: '34rem',
            left: '8%',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    imageSM: {
        [theme.breakpoints.down('xl')]: {
            display: 'none'
        },
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'block',
            justifyContent: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            display: 'block',
            textAlign: 'center'
        }
    },
    text1: {
        font: 'normal normal bolder 14rem Gopher-black',
        textAlign: 'right',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal bolder 10rem Gopher-black',
            textAlign: 'right',
        },
        [theme.breakpoints.down('sm')]: {
            width: '34rem',
            display: 'none'
        }
    },
    text2: {
        background: 'transparent',
        color: 'transparent',
        postion: 'absolute',
        left: '-200%',
        font: 'italic normal bolder 11rem Gopher-black',
        WebkitTextStrokeWidth: '.06rem',
        WebkitTextStrokeColor: 'rgb(255, 255, 255)',
        [theme.breakpoints.down('md')]: {
            font: 'italic normal bolder 8rem Gopher-black',
        },
        [theme.breakpoints.down('sm')]: {
            width: '34rem',
            display: 'none'
        }
    },
    text3: {
        font: 'normal normal normal 4.5rem Gopher',
        color: '#CFFE00',
        textAlign: 'center',
        paddingLeft: '2rem',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal normal 2.5rem Gopher',

        }
    },
    text4: {
        padding: '1rem',
        font: 'normal normal normal 3rem Ben',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            font: 'normal normal normal 1.5rem Ben',

        }
    },
    btnBox: {
        display: 'flex',
        justifyContent: 'end',
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center"
        }
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

export function CarouselMolecule() {

    const classes = useStyles();

    return (
        <Carousel className={classes.CarouselBox}>
            <Box style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: 'center', cursor: 'pointer' }}>
                <Box>
                    <img src={'./images/Layer 0-1.png'} className={classes.imageSM} alt="Watch" />

                    <Box className={classes.carouselBox}>

                        <Typography variant="h1" className={classes.text3}>Watch 1.0</Typography>
                        <Typography variant="h1" className={classes.text4}>From 4100 /- </Typography>
                        <Typography variant="h1" className={classes.text1}> FITNESS </Typography>
                        <Typography variant="span" className={classes.text2}> ON YOUR WRIST</Typography>
                        <img src={'./images/Layer 0-1.png'} className={classes.image} alt="Watch" />
                        <Box className={classes.btnBox}>
                            <button className={classes.btn}>Buy Now</button>
                        </Box>

                    </Box >

                </Box>

            </Box>
            <Box style={{ color: 'white', maxWidth: "100%", height: "80vh", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', lineHeight: '2' }}>
                <h1 style={{ fontSize: '80px' }}>Coming Soon</h1>
            </Box>
        </Carousel>
    )
}
