import React from 'react'
import {
    Box,
    makeStyles
} from '@material-ui/core'
import Carousel from 'react-elastic-carousel';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'fit-content',
        border: '1px solid red',
        margin: '15% 0%',
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
        }
    },
    headerInbox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
    },
    txtGradient: {
        font: 'normal normal normal 10rem Gopher',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginTop: '2%',
        [theme.breakpoints.down('md')]: {
            fontSize: '8rem',
            marginTop: '5%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem',
            marginTop: '5%',
        },
    },
    whiteBox: {
        width: '100%',
        height: '45vh',
        position: 'relative',
        display: 'flex',
        background: 'white',
        justifyContent: 'center',
        padding: '4rem 4rem',
        borderRadius: '49% 49% 0% 0%',
        [theme.breakpoints.down('md')]: {

        },
        [theme.breakpoints.down('sm')]: {

        },
    },
    watchImg: {
        width: '100%',
        height: 'auto',
    },
    borderBox: {
        width: '100%',
        height: '45vh',
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        border: "2px solid #72F5FF",
        borderRadius: '49% 49% 0% 0%',
    }
}))

export function SimilarProduct() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>

            <Box className={classes.headerInbox}>
                <h1 className={classes.txtGradient}>Similar Products</h1>
                <img src={'./images/Group 6230.svg'} alt='' />
            </Box>

            <Box >
                <Carousel style={{ border: '2px solid blue', maxWidth: "80%", height: "80vh", }}>

                    <Box style={{ height: "80vh", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
                        
                        <Box className={classes.whiteBox}>
                            <img className={classes.watchImg} src={'./images/Layer 002.png'} />
                            <Box className={classes.borderBox}></Box>
                        </Box>

                    </Box>
                </Carousel>
            </Box>

        </Box>
    )
}

