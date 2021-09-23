import React, { useState } from 'react'
import { makeStyles, Box } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    bImg: {
        width: '100%',
        objectFit: 'contain',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    bImgTxt: {
        width: '51%',
        font: 'Italic bold normal 6vw Ben',
        position: 'absolute',
        left: '15%',
        bottom: '5%',
    },
    footBox: {
        width: '100%',
        display: 'inline-block',
        background: '#000F15',
        padding: '5% 0%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: '0'
        },
    },
    footBG: {
        background: '#000F15',
    },
    liHead: {
        color: '#CFFE00',
        font: 'normal bold normal 1.5rem Gopher-hairline',
        padding: '1.8rem 5rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    liHeadShow: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            color: '#CFFE00',
            font: 'normal bold normal 1.5rem Gopher-hairline',
            padding: '1.8rem 5rem',
        }
    },
    li: {
        color: '#E9E9E9',
        font: 'normal bold normal 1.5rem Gopher-hairline',
        padding: '1.5rem 5rem',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    liShow: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            color: '#E9E9E9',
            font: 'normal bold normal 1.5rem Gopher-hairline',
            padding: '1.5rem 5rem',
        }
    },
    icons: {
        justifyContent: 'center',
        display: 'flex',
        paddingTop: '8rem ',
        background: '#000F15',
    },
    fa: {
        padding: '1rem',
        margin: '1rem',
        textAlign: 'center',
        color: 'white',
        borderRadius: '50%',
    },
    icon: {
        fontSize: '3rem',
    },
    copy: {
        font: 'normal normal 300 1.5rem Gopher',
        textAlign: 'center',
        padding: "5rem 0rem"
    },


}))

export function Footer() {
    const classes = useStyles()
    const [isShow, setIsShow] = useState(false)
    const [isShow1, setIsShow1] = useState(false)
    const [isShow2, setIsShow2] = useState(false)
    const [isShow3, setIsShow3] = useState(false)
    const [isShow4, setIsShow4] = useState(false)

    const history = useHistory();

    return (
        <footer>
            <Box style={{ position: 'relative' }}>
                <img src="images/Group 6286@2x.png" className={classes.bImg} alt="Footer images" />
                <h1 className={classes.bImgTxt}> GROOVE TO YOUR OWN BEATS </h1>
            </Box>
            <Box className={classes.footBG}>
                <Box className={classes.footBox}>
                    <ul>
                        <li className={classes.liHead}>Products </li>
                        <li className={classes.li} onClick={() => { history.push('/watchproduct1') }}><Link to="/">Smartwatch </Link></li>
                        <li className={classes.li} onClick={() => { history.push('/neckband') }}>Neckband</li>
                        <li className={classes.li} onClick={() => { history.push('/commingsoon') }}>Airpods</li>
                        <li className={classes.li} onClick={() => { history.push('/commingsoon') }}>Airdots</li>
                        <li className={classes.li} onClick={() => { history.push('/commingsoon') }}>Ear Hook</li>
                        <li className={classes.li} onClick={() => { history.push('/commingsoon') }}>PC Webcam</li>

                        <li className={classes.liHeadShow} onClick={() => { isShow === false ? setIsShow(true) : setIsShow(false) }}>Products </li>
                        {isShow ?
                            <>
                                <li className={classes.liShow} onClick={() => { history.push('/watchproduct1') }}>Smartwatch</li>
                                <li className={classes.liShow} onClick={() => { history.push('/neckband') }}>Neckband</li>
                                <li className={classes.liShow} onClick={() => { history.push('/commingsoon') }}>Airpods</li>
                                <li className={classes.liShow} onClick={() => { history.push('/commingsoon') }}>Airdots</li>
                                <li className={classes.liShow} onClick={() => { history.push('/commingsoon') }}>Ear Hook</li>
                                <li className={classes.liShow} onClick={() => { history.push('/commingsoon') }}>PC Webcam</li>

                            </>
                            : null
                        }

                    </ul>
                    
                    <ul >
                        <li className={classes.liHead}>We’re there for you!</li>
                        <li className={classes.li} onClick={() => { history.push('/getintouch') }}>Customer Support</li>
                        <li className={classes.li}>Register Warranty</li>
                        <li className={classes.li}>Return Policy</li>
                        <li className={classes.li} onClick={() => { history.push('/faqs') }}>FAQs</li>

                        <li className={classes.liHeadShow} onClick={() => { isShow1 === false ? setIsShow1(true) : setIsShow1(false) }}>We’re there for you!</li>
                        {
                            isShow1 ?
                                <>
                                    <li className={classes.liShow} onClick={() => { history.push('/getintouch') }}>Customer Support</li>
                                    <li className={classes.liShow}>Register Warranty</li>
                                    <li className={classes.liShow}>Return Policy</li>
                                    <li className={classes.liShow} onClick={() => { history.push('/faqs') }}>FAQs</li>
                                </> : null
                        }

                    </ul>

                    <ul>
                        <li className={classes.liHead}>Company</li>
                        <li className={classes.li} onClick={() => { history.push('/') }}>About B.Rebel</li>
                        <li className={classes.li}>News</li>
                        <li className={classes.li}>Blog</li>
                        <li className={classes.li}>Terms of Service</li>
                        <li className={classes.li}>Privacy Policy</li>


                        <li className={classes.liHeadShow} onClick={() => { isShow2 === false ? setIsShow2(true) : setIsShow2(false) }}>Company</li>
                        {
                            isShow2 ?
                                <>
                                    <li className={classes.liShow} onClick={() => { history.push('/') }}>About B.Rebel</li>
                                    <li className={classes.liShow}>News</li>
                                    <li className={classes.liShow}>Blog</li>
                                    <li className={classes.liShow}>Terms of Service</li>
                                    <li className={classes.liShow}>Privacy Policy</li>
                                </> : null
                        }

                    </ul>
                    <ul>
                        <li className={classes.liHead}>Let’s Connect</li>
                        <li className={classes.li}>Email ID: Support@breble.in</li>
                        <li className={classes.li}>Phone: +91 83598 10101 </li>

                        <li className={classes.liHeadShow} onClick={() => { isShow4 === false ? setIsShow4(true) : setIsShow4(false) }}>Let’s Connect</li>
                        {
                            isShow4 ?
                                <>
                                    <li className={classes.liShow}>Email ID: Support@breble.in</li>
                                    <li className={classes.liShow}>Phone: +91 83598 10101 </li>
                                </>
                                :
                                null
                        }
                    </ul>
                </Box>
                <Box className={classes.icons}>
                    <a href="https://www.instagram.com/b.rebel_india/" target="_blank" className={classes.fa} style={{ background: '#FFB7E5' }}><InstagramIcon className={classes.icon} /></a>
                    <a href="https://www.facebook.com/BRebel-105626898469065/?ti=as" target="_blank" className={classes.fa} style={{ background: '#0230E5' }}><FacebookIcon className={classes.icon} /></a>
                    <a href="https://www.linkedin.com/company/b-rebel" target="_blank" className={classes.fa} style={{ background: '#7800FF' }}><TwitterIcon className={classes.icon} /></a>
                </Box>
                <h3 className={classes.copy} >Copyright @ 2021 Rebel. All Rights Reserved</h3>
            </Box>
        </footer>
    )
}