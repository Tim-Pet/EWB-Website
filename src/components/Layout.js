import React from 'react'

import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Sidebar />
            <main>{children}</main>
        </>
    )
}

export default Layout
