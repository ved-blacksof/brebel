import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';



const useStyles = makeStyles((theme) => ({
    ImgBox: {
        width: '100%',
        height: '180vh',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '25rem',
        [theme.breakpoints.down('lg')]: {
            height: '145vh',
        },
        [theme.breakpoints.down('md')]: {
            height: '130vh',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            height: "fit-content",
            marginBottom: '10rem'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'fit-content',
            display: 'flex',
            flex: 'wrap'
        },
    },
    imageLeft: {
        width: "33%",
        position: "absolute",
        top: '20%',
        left: '-10%',
        [theme.breakpoints.down('lg')]: {
            top: '10%',
            left: '-12%',
        },
        [theme.breakpoints.down('md')]: {
            width: '35%'
        },
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            width: "45%",
            top: "5%",
            zIndex: '1',
            left: '-5%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '110%'
        },
    },
    imageUp: {
        width: "33%",
        position: "absolute",
        top: '0%',
        left: '35%',
        [theme.breakpoints.down('lg')]: {
            left: '35%'
        },
        [theme.breakpoints.down('md')]: {
            left: '35%'
        },
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            width: "55%",
            left: '0%',
            // right:"50%",
            zIndex: '0',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    imageDown: {
        width: "25%",
        position: "absolute",
        bottom: '0%',
        left: '33%',
        [theme.breakpoints.down('lg')]: {
            left: '30%',
            width: "22%"
        },
        [theme.breakpoints.down('md')]: {
            left: '29%'
        },
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            width: "55%",
            left: '0%',
            bottom: '10%',
            zIndex: '0',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    imageRight: {
        width: '33%',
        position: "absolute",
        bottom: '0%',
        right: '-13%',
        [theme.breakpoints.down('lg')]: {
            bottom: '0%',
            right: '-13%',
        },
        [theme.breakpoints.down('md')]: {
            bottom: '0%',
            right: '-13%',
        },
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            width: "45%",
            bottom: "5%",
            right: '-5%',
            zIndex: '1',
        },
        [theme.breakpoints.down('xs')]: {
            width: '110%',
            right: '0%',
        },
    },
    txtCenter: {
        width: "50%",
        font: "Italic normal bolder 10vw Gopher-Heavy",
        lineHeight: '0.9',
        opacity: "0.33",
        margin: '35% 20%',
        [theme.breakpoints.down('lg')]: {
            top: '0%',
            font: "Italic normal bolder 10vw Gopher-Heavy",
            lineHeight: '0.9',
            margin: '35% 20%',
        },
        [theme.breakpoints.down('md')]: {
            top: '0%',
            font: "Italic normal bolder 10vw Gopher-Heavy",
            lineHeight: '0.9',
            margin: '35% 20%',
        },
        [theme.breakpoints.down('sm')]: {
            font: "Italic normal bolder 10vw Gopher-Heavy",
            lineHeight: '0.9',
            marginBottom: '2rem',
            display: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            font: "Italic normal bolder 10vw Gopher-Heavy",
            margin: '15% 0 0 5% ',
            lineHeight: '0.9',
        },
    },
    txtCenterSM: {
        display: 'none',
        [theme.breakpoints.down('lg')]: {
            display: 'none'
        }
        ,
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            font: "Italic normal bolder 10vw Gopher-Heavy",
            lineHeight: '0.9',
            margin: '10%',
            opacity: '0.33'
        }
    }

}))

export function Static4Images() {

    const classes = useStyles();

    return (
        <div className={classes.ImgBox}>

            <div className={classes.show}>

                <h1 className={classes.txtCenter}>BOLD FEARLESS</h1>

                <img className={classes.imageLeft}
                    src="/images/vitae-london-P078aToZCzQ-unsplash.png" alt="ImageLeft" />

                <img className={classes.imageUp}
                    src="/images/attractive-sensual-african-american-feminine-girl-with-afro-haircut-wearing-winter-sweater-looking-left-with-pleasant-smile-wearing-headphones-listens.png"
                    alt="ImageTop"
                />

                <h1 className={classes.txtCenterSM}>BOLD FEARLESS</h1>

                <img className={classes.imageDown}
                    src="/images/attractive-happy-funny-woman-jumping-listening-music-headphones-dressed-hipster-colorful-style-outfit-isolated-pink-wall-wearing-yellow-sweater-sungla.png "
                    alt="ImageDown"
                />

                <img className={classes.imageRight}
                    src="/images/NoPath.png"
                    alt="ImageRight"
                />
            </div>

        </div>
    )
}
