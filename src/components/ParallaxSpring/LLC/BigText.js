import React from 'react'
import styled from 'styled-components'
import * as variables from "../../styles/variables"

const BigText = (props) => {

    return (
        <div>
            {props.text.map((item, index) => (
                <BigTextContainer width={props.width} marginLeft={props.marginLeft}>
                    <BigTextContent textColor={props.textColor} key={index}>{item}</BigTextContent>
                </BigTextContainer>
            ))}
        </div>
    )
}

export default BigText

const BigTextContainer = styled.div`
    display: absolute;
    width: ${props => props.width};
    margin-left: ${props => props.marginLeft};
    /* border: 2px red solid; */
`

const BigTextContent = styled.h1`
    font-family: ${variables.f_primary};
    font-weight: ${variables.fw_bold};
    font-style: italic;
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 3.5rem;
    letter-spacing: 4px;
    color: white;
    -webkit-text-stroke: 2px ${props => props.textColor};
    text-align: right;
`