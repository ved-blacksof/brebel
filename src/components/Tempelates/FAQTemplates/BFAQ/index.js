import React from 'react'
import { makeStyles, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        height: '100vh',
        position: 'relative',
        // marginBottom:'10%',
        [theme.breakpoints.down('md')]: {
            // height: '100vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '60vh',
        },
        [theme.breakpoints.down('xs')]: {
            position: 'none',
            height: '100vh',
        }
    },
    imgBack: {
        width: '70%',
        opacity: '0.2',
        position: 'absolute',
        bottom: '0%',
        left: '-8%',
        // zIndex:'0'
    },
    faqTextBox: {
        width: '60%',
        position: 'absolute',
        bottom: '9%',
        left: '30%',
        height:'fit-content'
    },
    faqHead: {
        font: 'Italic normal bolder 8vw Gopher',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'absolute',
        top:'-40%',
        paddingRight: '2rem',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            font: 'Italic normal bolder 8rem Gopher',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'Italic normal bolder 5rem Gopher',
        },
    },
    faqHeadShade: {
        font: 'Italic normal bolder 8vw Gopher',
        background: 'transparent',
        color: 'transparent',
        position: 'absolute',
        top: '-40%',
        left: '-1%',
        zIndex: '0',
        WebkitTextStrokeWidth: '.08rem',
        WebkitTextStrokeColor: 'white',
        zIndex: '1',
        [theme.breakpoints.down('md')]: {
            font: 'Italic normal bolder 8rem Gopher',
        },
        [theme.breakpoints.down('sm')]: {
            font: 'Italic normal bolder 5rem Gopher',
        },
    },
    faqText: {
        font: 'normal normal bold 4vw Gopher-black',
        lineHeight:'1.5',
        [theme.breakpoints.down('md')]: {
            // bottom: '10%',
            fontSize: '6rem',
            lineHeight:'1',
        },
        [theme.breakpoints.down('sm')]: {
            // bottom: '5%',    
            fontSize: '4rem',
            lineHeight:'1.3',
        },

    },


}))


export function BFAQ() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <img className={classes.imgBack} src='./images/Path 6362.svg' />
            <Box className={classes.faqTextBox}>
                <Box>
                    <span className={classes.faqHeadShade}> FAQ </span>
                    <h1 className={classes.faqHead}> FAQ </h1>
                </Box>

                <h1 className={classes.faqText}>WE ARE INDEPENDENT BRANDING & <span style={{ color: '#ff4e00' }}>EXEPERIENCE DESIGN COMPANY WITH A FOCUS IN</span></h1>
            </Box>
        </div>
    )
}
