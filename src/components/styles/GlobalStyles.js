import {createGlobalStyle} from 'styled-components'
import * as variables from "./variables"

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${variables.f_primary};
        scroll-behavior: smooth;
    }
`