import React from 'react'
import styled from 'styled-components'

import * as variables from "./styles/variables"
import { Button } from './Button'
import Sidebar from './Sidebar'

const Overlay = (props) => {
    return (
        <div>
            <Sidebar bgColor={props.bgColor} textColor={props.textColor}/>
            <HeadText>Ein noch weißes Blatt</HeadText>
            <BtnWrapper>
                <Button bgColor={props.bgColor} textColor={props.textColor} to="/"><span>Mitmachen</span></Button>
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
    z-index: 1000;
`

const BtnWrapper = styled.div`
    position: fixed;
    top: 5%;
    right: 10%;
    transform: translate(50%, 0);
    z-index: 1000;

    span {
        z-index: 3;
        position: relative
    }
`