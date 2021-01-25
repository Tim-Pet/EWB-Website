import React from 'react'
import styled from 'styled-components'
import * as variables from "./styles/variables"

const White = () => {
    return (
        <div>
            <Container>
                <BigTextWrapper>
                    <BigText>Und</BigText>
                    <BigText>Noch</BigText>
                    <BigText>Eine?</BigText>
                </BigTextWrapper>
                <SmallTextWrapper>
                    <SmallText>Ja, wir wollen eine neue Bibel.</SmallText>
                    <SmallText>Die Bibel muss nicht <strong>anders</strong> sein. Aber</SmallText>
                    <SmallText>unsere Gesellschaft ist nun anders</SmallText>
                    <SmallText>erreichbar als noch vor Jahren</SmallText>
                </SmallTextWrapper>
            </Container>
        </div>
    )
}

export default White

const Container = styled.div`
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
    color: white;
    -webkit-text-stroke: 2px black;
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
    text-transform: uppercase;
    font-size: 1.125rem;
    letter-spacing: 1px;
    line-height: 2rem;
`