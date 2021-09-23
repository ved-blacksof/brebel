import React from 'react'
import { useEffect } from 'react';
import { WatchProductTemplate2 } from '../../../Tempelates'
import { Navbar, Footer } from '../../index'

export function WatchProductPage2() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    },)
    return (
        <div>
            <Navbar />
            <h1>WatchProductPage2</h1>
            <WatchProductTemplate2 />
            <Footer />
        </div>
    )
}
