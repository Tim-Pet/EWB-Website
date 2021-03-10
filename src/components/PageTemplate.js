import React from 'react'
import styled from 'styled-components'
import * as variables from "./styles/variables"

const PageTemplate = (props) => {
    return (
        <div>
            <Container>
                <BigTextWrapper>
                    {props.bigText.map((item, index) => (
                    <BigText textColor={props.textColor} key={index}>{item}</BigText>
                    ))}
                </BigTextWrapper>
                <SmallTextWrapper>
                    {props.smallText.map((item, index) => (
                    <SmallText key={index}>{item}</SmallText>
                    ))}
                </SmallTextWrapper>
            </Container>
        </div>
    )
}

export default PageTemplate

const Container = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1.25fr 0.125fr 1fr 0.5fr;
`
const BigTextWrapper = styled.div`
    height: 100vh;
    padding-top: 40vh;
    grid-row-start: 1;
    grid-column: 2 / 4;
`
const BigText = styled.h1`
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
const SmallTextWrapper = styled.div`
    height: 100vh;
    padding-top: 60vh;
    grid-column: 3 / 5;
    grid-row-start: 1;
`
const SmallText = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
`