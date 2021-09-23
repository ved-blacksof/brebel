import React from 'react'
import { makeStyles } from '@material-ui/core'
import { BFAQ } from './BFAQ';
// import { FAQHeading } from './FAQHeading';

const useStyles = makeStyles((theme) => ({
  
}))


export function FaqTemplates() {
    const classes = useStyles();
    return (
        <div >
            <BFAQ/>
            {/* <FAQHeading/>    */}
        </div>
    )
}
