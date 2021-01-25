import React from 'react'
import styled from 'styled-components'
import * as variables from "./styles/variables"

const Hero = () => {
    return (
        <div>
            <HeroContainer>
                <BigTextWrapper>
                    <BigText>Dies ist</BigText>
                    <BigText>noch ein</BigText>
                    <BigText>weißes</BigText>
                    <BigText>Blatt</BigText>
                </BigTextWrapper>
                <SmallTextWrapper>
                    <SmallText>Und wir haben noch viel vor</SmallText>
                </SmallTextWrapper>
            </HeroContainer>
        </div>
    )
}

export default Hero

const HeroContainer = styled.div`
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
    text-align: right;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 6vw, 14rem);
    line-height: clamp(1.5rem, 4vw, 10rem);
`
const SmallTextWrapper = styled.div`
    height: 100vh;
    padding-top: 73vh;
    grid-column: 3 / 5;
    grid-row-start: 1;
    /* border: 2px solid black; */
`
const SmallText = styled.p`
    font-family: ${variables.f_primary};
    /* font-weight: ${variables.fw_bold}; */
    text-transform: uppercase;
    font-size: 1.125rem;
    letter-spacing: 5px;
`