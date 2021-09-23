import React from 'react'
import { TermsAndConditionsTemplates } from '../../Tempelates'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { useEffect } from 'react'
import { ScrollTop } from "../../molecules";

export function TermsAndConditions() {
    useEffect(() => {
        window.scroll({ top: 1, left: 0, behavior: 'smooth' });
    })
    return (
        <div>
            <ScrollTop />
            <Navbar />
            <TermsAndConditionsTemplates />
            <Footer />
        </div>
    )
}
