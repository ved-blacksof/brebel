import React from 'react'
import ScrollToTop from "react-scroll-to-top";

export function ScrollTop() {
    return (
        <ScrollToTop
            smooth
            style={{
                borderRadius: "50%",
                padding: '5px',
                background: 'black',
                boxShadow: 'none'
            }}
            color="white" />
    )
}
