import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    bgImg: {
        width: '100%',
        position: 'relative',
    },
    PlayButton: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: "25rem",
        [theme.breakpoints.down('md')]: {
            width: '10rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '8rem',
        }
    }

}))

export function PlayButton({
    backgroundImage,
    playButtonImage,
}) {
    const classes = useStyles();

    return (
        <Box className={classes.bgImg}>
            <img style={{ width: '100%' }} src={backgroundImage} alt="BackGround" />
            <img className={classes.PlayButton} src={playButtonImage} alt="Play Button" />
        </Box>
    )
}
