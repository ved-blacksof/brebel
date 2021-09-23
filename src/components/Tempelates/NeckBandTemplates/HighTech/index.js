import React from 'react'
import { makeStyles,Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        margin: '20% 0',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down('md')]: {

        }
    },
    content: {
        width: '80%',
        height: '110vh',
        background: '#7800FF',
        borderRadius: '2rem',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20% 0%',
        [theme.breakpoints.down('md')]: {
            height: '110vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '60vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '60vh',
            margin: '25% 0%',
        }
    },
    topImg: {
        width: '60%',
        position: 'absolute',
        bottom: '65%',
        zIndex: '1',
        [theme.breakpoints.down('xs')]: {
            bottom: '85%',
        }
    },
    contentUL: {
        width: '90%',
    },
    contentLI: {
        font: 'normal normal normal 3rem Ben',
        display: 'inline',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal normal 1.5rem Ben',
            lineHeight: '2',
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal normal 1.8rem Ben',
            display: 'block'
        }
    },
    highTechBtmBox: {
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1',
        [theme.breakpoints.down('md')]: {
            bottom: '-110%',
        }
    },
    btmImg: {
        width: '70%',
        position: 'absolute',
        top: '70%',
        zIndex: '1',
        [theme.breakpoints.down('xs')]: {
            top: '90%',
        }
    },
    highTechHead: {
        font: 'normal normal bold 8rem Gopher',
        padding: '1rem',
        [theme.breakpoints.down('sm')]: {
            font: 'normal normal bold 6rem Gopher'
        },
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal bold 3rem Gopher'
        }
    },
    highTechSub: {
        padding: '1rem',
        font: 'normal normal normal 4.5rem Gopher',
        [theme.breakpoints.down('xs')]: {
            font: 'normal normal normal 2rem Gopher'
        }
    }

}))

export function HighTech() {
    const classes = useStyles()
    return (
        <Box className={classes.main}>
            <div className={classes.content}>
                <img className={classes.topImg} src={'./images/Png_2.png'} alt="NeckBandImage" />
                <ul className={classes.contentUL}>
                    <li className={classes.contentLI}>Type-C input</li>
                    <li className={classes.contentLI}>Decrease Volume/Previous Track</li>
                    <li className={classes.contentLI}>Increase Volume/Next Track</li>
                    <br />
                    <li className={classes.contentLI}>MFB/Power On/Off/Pairing/Voice Assistant / Answer Call/Reject Call/Hang Up/ Play/Pause/Last number Re-dial</li>
                </ul>
                <img className={classes.btmImg} src={'./images/BT001-PRO-ppt-英文_05.png'} alt="HeighTech" />
            </div>

            <div className={classes.highTechBtmBox}>
                <h1 className={classes.highTechHead}>HIGH-TECH LATEST CHIPSET : BK3288</h1>
                <h1 className={classes.highTechSub}>Stronger Bluetooth 5.2 Signal</h1>
                <h1 className={classes.highTechSub}>Clearer and Smoother Call</h1>
            </div>

        </Box>
    )
}
