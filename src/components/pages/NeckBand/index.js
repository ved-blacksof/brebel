import React,{ useEffect }  from 'react'
import {Navbar} from '../Navbar'
import {Footer} from '../Footer'
import {NeckBandTemplates} from '../../Tempelates'
import {
    Box,
} from '@material-ui/core';
import { ScrollTop } from "../../molecules";

export function NeckBand() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    },)
    return (
        <Box className=" noise">
        <ScrollTop/>
            <Navbar/>
            <NeckBandTemplates/>
            <Footer/>
        </Box>
    )
}
