import React from 'react'
import Navbar from "./Navbar"
import Overlay from './Overlay'
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({children, bgColor, textColor}) => {
    return (
        <>
            <GlobalStyle />
            <Navbar bgColor={bgColor} textColor={textColor}/>
            <Overlay bgColor={bgColor} textColor={textColor}/>
            <main>{children}</main>
        </>
    )
}

export default Layout
