import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Menu } from '@material-ui/core';
import './Navbar.css'
import { useHistory, NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    nav: {
        paddingTop: '2rem',
        [theme.breakpoints.up('md')]: {
            paddingTop: '3rem',
        },
    },
    responsive: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    root: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '80%',
            margin: '0 auto',
        },
    },
    logo: {
        width: '8rem',
        [theme.breakpoints.up('lg')]: {
            width: '15rem',
        },
    },
    u: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
    },
    lio: {
        padding: '0 1rem',
        color: 'white',
        font: 'normal 2.2rem Ben',
        '&:hover': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem'
        }
    },

    shopimg: {
        width: '2rem',
        [theme.breakpoints.up('lg')]: {
            width: '5rem',
        },
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },

    ul: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        color: "black",
    },

    lios: {
        display: 'none',        // fontSize: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            color: 'black',
            padding: '2rem 1rem',
            fontSize: '1.5rem',
            font: 'normal 1.2rem Ben',
        }
    },

    act: {
        margin: '2px',
        padding: '5px 1px',
        borderBottom: '1px solid white'
    }

}));


export function Navbar() {

    const classes = useStyles();

    const [mobilemenu, setMobilemenu] = useState(null)

    const isMobileMenuOpen = Boolean(mobilemenu);

    const openMobileMenu = (event) => {
        setMobilemenu(event.currentTarget);
    };

    const closeMobileMenu = () => {
        setMobilemenu(null);
    };

    const history = useHistory();

    const mobileMenu = (
        <Menu
            anchorEl={mobilemenu}
            id="menuId"
            keepMounted
            open={isMobileMenuOpen}
            onClose={closeMobileMenu}
        >
            <ul className={classes.ul}>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/watchproduct1") }}>Smartwatch</li>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/commingsoon") }}>NeckBand</li>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/commingsoon") }}>Airpods</li>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/commingsoon") }}>Airdots</li>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/commingsoon") }}>Ear Hook</li>
                <li className={classes.lios} onClick={closeMobileMenu} onClick={() => { history.push("/commingsoon") }}>PC Webcam</li>
            </ul>
        </Menu>
    )

    return (
        <div className={classes.nav}>
            <AppBar position="static" color="transparent" className={classes.root}>
                <Toolbar className={classes.responsive}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={'./images/Group 6068.svg'} className={classes.logo} alt="logo" onClick={() => { history.push('/') }} />
                    </IconButton>
                    <div variant="h6" className={classes.title}>
                        <ul className={classes.u}>
                            <li className={classes.lio} ><NavLink to="/watchproduct1" activeClassName={classes.act}>Smartwatch</NavLink></li>
                            <li className={classes.lio} ><NavLink to="/commingsoon" activeClassName={classes.act}>NeckBand</NavLink></li>
                            <li className={classes.lio} ><NavLink to="/commingsoon" activeClassName={classes.act}>Airpods</NavLink></li>
                            <li className={classes.lio} ><NavLink to="/commingsoon" activeClassName={classes.act}>Airdots</NavLink></li>
                            <li className={classes.lio} ><NavLink to="/commingsoon" activeClassName={classes.act}>Ear Hook</NavLink></li>
                            <li className={classes.lio} ><NavLink to="/commingsoon" activeClassName={classes.act}>PC Webcam</NavLink></li>
                        </ul>
                    </div>

                    <ul className={classes.u}>
                        {/*   <li className={classes.lio}><img className={classes.shopimg} src={"./images/Group 7142.svg"} alt="Cart" /></li>
                            <li className={classes.lio}><img className={classes.shopimg} src={"./images/Group 6277.svg"} alt="User" /></li>*/}

                        <li className={classes.lios}><img className={classes.shopimg} src={"./images/Group 6276.svg"} alt="Menu"
                            onClick={openMobileMenu} /></li>

                    </ul>

                </Toolbar>
            </AppBar>
            {mobileMenu}
        </div>
    );
}
