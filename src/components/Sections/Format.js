import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import useIsInViewport from 'use-is-in-viewport'

import * as variables from "../styles/variables"

const Format = ({setBgColor, setTextColor, textColor}) => {

    const [isInViewport, targetRef] = useIsInViewport()
    
    const bigText = 
        [
            'Ein', 
            'neues',
            'Format'
    ]
    const smallText1 = 
        [
           ' Wir möchten die Bibel, die so zugänglich wie möglich ist – Deshalb präesentieren wir Ihre Vielfalt im Format von einzelnen Magazinen.',
           ' So können Texte individuell und charakterisiert veröffentlicht werden, ohne dabei als dicker Schinken abzuschrecken oder zu überfordern.'
    ]
    const smallText2 = 
        [
            'Test 2:Wir möchten die Bibel, die so zugänglich wie möglich ist – Deshalb präsentieren wir Ihre Vielfalt im Format von einzelnen Magazinen.',
            'So können Texte individuell und charakterisiert veröeffentlicht werden, ohne dabei als dicker Schinken abzuschrecken oder zu überfordern.'
    ]

    const [offsetY, setOffsetY] = useState(0);

    const ref = useRef();

    useEffect(() => {
        setBgColor('#000000');
        setTextColor('#ffffff');
    }, [isInViewport])

    const handleScroll = () => {
        const vh = window.innerHeight;
        const posY = (ref.current.getBoundingClientRect().top*-1+(vh/2)); //sets to positive value if top border of container reaches the middle of the viewport
        if (posY >= 0) {
            setOffsetY(posY);
        }
        console.log(posY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div ref={ref} ref={targetRef}>
            <Container >
                <BigTextWrapper >
                    {bigText.map((item, index) => (
                    <BigText textColor={textColor} key={index}>{item}</BigText>
                    ))}
                </BigTextWrapper>
                <SmallTextContainer style={{transform: `translateX(${-offsetY* 1.8}px)`}}>
                    <Spacer >                       
                    </Spacer>
                    <SmallTextWrapper > 
                    {smallText1.map((item, index) => (
                        <SmallText key={index} >{item}</SmallText>
                    ))}
                    </SmallTextWrapper>
                    <SmallTextWrapper > 
                        {smallText2.map((item, index) => (
                            <SmallText key={index} >{item}</SmallText>
                        ))}
                    </SmallTextWrapper>
                </SmallTextContainer>
            </Container>
        </div>
    )
}

export default Format

const Container = styled.div`
    position: relative;
    height: 100vh;
    padding-top: 30vh;
    display: grid;
    grid-template-columns: 0.5fr 1.25fr 0.125fr 0.125fr 1fr 0.5fr;
    z-index: 2;
    overflow-x: hidden;
    /* border: 2px solid red; */
`
const BigTextWrapper = styled.div`
    grid-row-start: 1;
    grid-column: 1 / 7;
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
    text-align: center;
`

const SmallTextContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 60%;
    left: 0;
    width: 170vw;
    /* border: 2px solid blue; */
`

const SmallTextWrapper = styled.div`
    min-width: 40vw;
    max-width: 40vw;
    /* border: 2px solid white; */
`
const SmallText = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-bottom: 30px;
    /* border: 2px solid green; */
`

const Spacer = styled.div`
    min-width: 30vw;
`