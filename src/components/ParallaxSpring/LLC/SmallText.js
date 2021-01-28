import React from 'react'
import styled from 'styled-components'
import * as variables from "../../styles/variables"

const SmallText = (props) => {

    return (
        <div>
            {props.text.map((item, index) => (
                <SmallTextWrapper width={props.width} marginLeft={props.marginLeft} key={index}>
                    {item.map((el, ind)=>(
                        <SmallTextContent key={ind}>{el}</SmallTextContent>
                    ))}
                </SmallTextWrapper>
            ))}
        </div>
    )
}

export default SmallText

const SmallTextWrapper = styled.div`
    height: 60vh;
    padding-top: 20vh;
    width: ${props => props.width};
    margin-left: ${props => props.marginLeft};
    /* border: 2px solid black; */
`
const SmallTextContent = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
`