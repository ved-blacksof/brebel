import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Input, } from "../../atoms";

const useStyles = makeStyles((theme) => ({
    getInForm: {
        width: '25vw',
        height: '55vh',
        padding: '0rem 4rem',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 'fit-content',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 'fit-content',
        }
    },
    inputBorder: {
        margin: '1rem 0',
        border: '1px solid #fff',
        borderRadius: '5px',
    },
    inputProps: {
        color: '#fff',
        font: 'normal normal normal 1.6rem Gopher',
        height: '40px',
        width: '370px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 'fit-content',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 'fit-content',
        }

    },
    inputLabelProps: {
        color: '#fff',
        font: 'normal normal normal 1.6rem Gopher',
    },
    sendBtn: {
        font: 'normal normal normal 1.5rem Gopher',
        padding: '.8rem 3.5rem',
        background: '#FF4E00',
        border: 'none',
        borderRadius: '2rem',
        color: '#fff',
        marginTop: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            padding: '.8rem 1.5rem',
        },
    }
}))

export function GetintouchMolecules({ ...props }) {
    const classes = useStyles()
    return (
        <div { ...props }> 
            <form className={classes.getInForm} >
                <Input
                    className={classes.inputBorder}
                    label="Name"
                    placeholder="Name"
                    variant='filled'
                    InputProps={{ classes: { input: classes.inputProps } }}
                    InputLabelProps={{ classes: { root: classes.inputLabelProps } }}
                />
                <Input
                    className={classes.inputBorder}
                    label="Email"
                    placeholder="Jhoncarter@Example.com"
                    variant='filled'
                    InputProps={{ classes: { input: classes.inputProps } }}
                    InputLabelProps={{ classes: { root: classes.inputLabelProps } }}

                />
                <Input
                    className={classes.inputBorder}
                    label="Subject"
                    placeholder="Subject"
                    variant='filled'
                    InputProps={{ classes: { input: classes.inputProps, style: { height: '40px' } } }}
                    InputLabelProps={{ classes: { root: classes.inputLabelProps } }}

                />
                <Input
                    className={classes.inputBorder}
                    label="Your message here"
                    placeholder="Your message here"
                    // multiline
                    variant='filled'
                    InputProps={{ classes: { input: classes.inputProps }, style:{height:141}}}
                    InputLabelProps={{ classes: { root: classes.inputLabelProps } }}

                />

                <button className={classes.sendBtn}>
                    Send to us
                </button>
            </form>
        </div>
    )
}

