import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    ProductFunctions: {
        width: '100%',
        height: '150vh',
        [theme.breakpoints.down('sm')]: {
            height: 'fit-content',
        },

    },
    cutsHeader: {
        width: '65%',
        margin: '0 auto',
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
    lorem: {
        width: '60%',
        font: 'normal normal normal 30px/50px Ben',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            lineHeight: '1.5',
            width: '100%',
            marginTop: '5%',
        },
    },
    imgBoneBox: {
        width: '70%',
        height: '80vh',
        marginTop: '5%',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
            width: '90%',
            height: 'fit-content',
        },
    },
    imgBone: {
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '75%',

        },
    },
    imgBonePosition: {
        width: '40%',
        height: '90%',
        position: 'absolute',
        top: '10%',
        right: '-10%',
        [theme.breakpoints.down('sm')]: {
            top: '15%',
            right: '10%',
            height: '80%',
        },
    }

}))


export function ProductFunctions({
    title,
    paragraph,
    backgroundImage,
    productImage,
    style,
}) {
    const classes = useStyles();

    return (
        <Box className={classes.ProductFunctions}>

            <Box className={classes.cutsHeader}>
                <h1 className={classes.txtGradient}>{title}</h1>
                <h1 className={classes.lorem}>{paragraph}</h1>
            </Box>
            <Box className={classes.imgBoneBox}>
                <img src={backgroundImage} className={classes.imgBone} alt='Mask' />
                <img src={productImage} alt='Layer' className={classes.imgBonePosition} style={style} />
            </Box>
        </Box>
    )
}
