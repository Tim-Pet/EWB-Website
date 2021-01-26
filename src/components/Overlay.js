import React from 'react'
import styled from 'styled-components'

import * as variables from "./styles/variables"
import { Button } from './Button'
import Sidebar from './Sidebar'

const Overlay = () => {
    return (
        <div>
            <Sidebar />
            <HeadText>Ein noch weißes Blatt</HeadText>
            <BtnWrapper>
                <Button><span>Mitmachen</span></Button>
            </BtnWrapper>
        </div>
    )
}

export default Overlay

const HeadText = styled.p`
    position: fixed;
    left: 5vw;
    top: 1%;
    color: ${variables.clr_secondary};
    font-size: 1.125rem;
    text-transform: uppercase;
`

const BtnWrapper = styled.div`
    position: fixed;
    bottom: 5%;
    right: 50%;
    transform: translate(50%, 0);

    span {
        z-index: 3;
        position: relative
    }
`