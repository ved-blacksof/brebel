import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    ImageCarousel: {
        width: '100%',
        height: '100vh',
    },
    MainImg: {
        height: '75vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
        }
    },
    ImagesBox: {
        width: '20%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    ImagesBoxCenter: {
        width: '55%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    ImageSize: {
        width: '100%',
        height: '100%'
    },

}))

export function ImageCarousel({
    ImageOne,
    ImageTwo,
    Imagethree
}) {
    const classes = useStyles();
    return (
        <Box className={classes.ImageCarousel}>
            <Box className={classes.MainImg}>
                <Box className={classes.ImagesBox}>
                    <img className={classes.ImageSize} src={ImageOne} alt="onurBinay" />
                </Box>
                <Box className={classes.ImagesBoxCenter}>

                    <img className={classes.ImageSize} src={ImageTwo} alt="Instagram Lady" />
                </Box>
                <Box className={classes.ImagesBox}>

                    <img className={classes.ImageSize} src={Imagethree} alt="onurBinay" />
                </Box>
            </Box>
        </Box>
    )
}
