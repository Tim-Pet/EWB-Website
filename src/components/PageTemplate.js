import React from 'react'
import styled from 'styled-components'
import * as variables from "./styles/variables"

const PageTemplate = (props) => {
    return (
        <div>
            <Container color={props.color}>
                <BigTextWrapper>
                    {props.bigText.map((item, index) => (
                    <BigText color={props.color} key={index}>{item}</BigText>
                    ))}
                </BigTextWrapper>
                <SmallTextWrapper>
                    {props.smallText.map((item, index) => (
                    <SmallText color={props.color} key={index}>{item}</SmallText>
                    ))}
                </SmallTextWrapper>
            </Container>
        </div>
    )
}

export default PageTemplate

const Container = styled.div`
    background-color: ${({color}) => (color==='black' ? '#000000' : '#ffffff')};
    display: grid;
    grid-template-columns: 0.5fr 1.25fr 0.125fr 1fr 0.5fr;
`
const BigTextWrapper = styled.div`
    height: 100vh;
    padding-top: 40vh;
    grid-row-start: 1;
    grid-column: 2 / 4;
    /* border: 2px solid red; */
`
const BigText = styled.h1`
    font-family: ${variables.f_primary};
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 3.5rem;
    letter-spacing: 4px;
    color: ${({color}) => (color ==='black' ? '#000000' : '#ffffff')};
    -webkit-text-stroke: 2px ${({color}) => (color==='black' ? '#ffffff' : '#000000')};;
    text-align: right;
`
const SmallTextWrapper = styled.div`
    height: 100vh;
    padding-top: 60vh;
    grid-column: 3 / 5;
    grid-row-start: 1;
    /* border: 2px solid black; */
`
const SmallText = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    color: ${({color}) => (color==='black' ? '#ffffff' : '#000000')};
    line-height: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
`