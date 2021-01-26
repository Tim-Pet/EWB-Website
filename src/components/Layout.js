import React from 'react'
import Navbar from "./Navbar"
import Overlay from './Overlay'
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Overlay />
            <main>{children}</main>
        </>
    )
}

export default Layout
