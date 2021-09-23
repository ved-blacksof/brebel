import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    main: {
        width: '100%',
        height: 'fit-content'
    },
    headerBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            // width: '90%'
        },
    },
    headerInbox: {
        width: '55%',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
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
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5rem',
            marginTop: '5%',
        },
    },
    headerSub: {
        width: '90%',
        font: 'normal normal normal 3rem Ben',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            lineHeight: '1.5',
            marginTop: '5%',
        },
    },
    imgBtwoBox: {
        width:'100%',
        display: 'flex',
        justifyContent: 'right',
        margin: '10% 0%',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            height:'50vh',
            marginTop: '10%',
        },
    },
    imgBtwo: {
        width: '75%',
        [theme.breakpoints.down('sm')]: {
            width: '75%',
            position: 'absolute',
            right:'0%',
            top:'0%',
        },
    },
    imgBtwoPosition: {
        width: '33%',
        position: 'absolute',
        right: '55%',
        top: '5%',
    }

}))

export function SportMode({
    title,
    paragraph,
    backgroundImage,
    productImage,
    style,
}) {
    const classes = useStyles();

    return (
        <Box className={classes.main}>

            <Box className={classes.headerBox}>
                <Box className={classes.headerInbox}>
                    <h1 className={classes.txtGradient}>{title} </h1>
                    <h1 className={classes.headerSub}> {paragraph}</h1>
                </Box>
            </Box>
            <Box className={classes.imgBtwoBox}>
                <img src={backgroundImage} className={classes.imgBtwo} alt='Mask' />
                <img src={productImage} alt='Layer' className={classes.imgBtwoPosition} />
            </Box>
        </Box>
    )
}
