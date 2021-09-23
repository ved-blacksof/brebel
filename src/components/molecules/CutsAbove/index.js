import React from 'react'
import {
    Box,
    makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    CutsAbove: {
        width: '100%',
        height: '150vh',
        margin: '10% 0 0 0 ',
        [theme.breakpoints.down('md')]:{
        margin: '15% 0',
        }
    },
    cutsHeader: {
        width: '80%',
        margin: '0 auto'
    },
    txtGradient: {
        font: 'normal normal normal 5vw Gopher',
        background: '#FBF272',
        background: '-webkit-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: '-moz-linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        background: 'linear-gradient(to top, #FBF272 0%, #7FFAA4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
        },
    },
    lineHeight: {
        lineHeight: '5'
    },
    subHead: {
        font: 'normal normal 300 45px/100px Gopher',
        letterSpacing: '0px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            lineHeight: '1.5'

        }
    },
    ImgBoxCuts: {
        marginTop: '5%',
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            width: '100%',
            height: '80%'
        }
    },
    commonImage: {
        width: '25%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
            height: '30vh'

        }
    },
    notCommon: {
        width: '35%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
            height: '35vh'
        }
    }

}))


export function CutsAbove({
    ImgOne,
    ImgTwo,
    ImgThree
}) {
    const classes = useStyles();
    return (
        <Box className={classes.CutsAbove}>

            <Box className={classes.cutsHeader}>
                <Box className={classes.lineHeight}>
                    <h1 className={classes.txtGradient}>
                        Design that
                        <br />
                        Cuts adove the rest
                    </h1>
                </Box>
                <h1 className={classes.subHead}>
                    TPU Skin friendly and ultra soft straps | strong 2.5D Curved 35g
                </h1>
            </Box>

            <Box className={classes.ImgBoxCuts}>

                <img src={ImgOne} alt='chesser' className={classes.commonImage} />
                <img src={ImgTwo} alt='bin' className={classes.notCommon} />
                <img src={ImgThree} alt='girl' className={classes.commonImage} />

            </Box>

        </Box>
    )
}
