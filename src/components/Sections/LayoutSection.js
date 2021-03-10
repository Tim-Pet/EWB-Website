import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import useIsInViewport from 'use-is-in-viewport'

import * as variables from "../styles/variables"

const LayoutSection = ({setBgColor, setTextColor, textColor}) => {
    const [offsetY, setOffsetY] = useState(0);

    const [isInViewport, targetRef] = useIsInViewport()

    const ref = useRef();

    useEffect(() => {
        setBgColor('#ffffff');
        setTextColor('#000000');
    }, [isInViewport])

    const handleScroll = () => {
        const vh = window.innerHeight;
        const posY = (ref.current.getBoundingClientRect().top*-1)+vh; //sets to positive value if top border of conatainer reaches bottom of viewport
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

    const bigText = 
        [
            'Ein', 
            'neues',
            'Layout'
    ]

    const smallText1 = 
        [
            <strong>Form Follows Content</strong>,
           ' Ein Reichtum der Textformen von Song-Lyrics, über persönliche Briefe und Gesprächen, bis hin zu juristischen Texten, lädt regelrecht dazu ein, in selbsterkläerenden Layouts präsentiert zu werden.',
           'So können Texte individuell und charakterisiert veröeffentlicht werden, ohne dabei als dicker Schinken abzuschrecken oder zu überfordern.'
    ]

    const smallText2 = 
        [
            'Font Matters – Denn die Bibeltexte lesen sich am besten, wenn die Textform erkennbar dargestellt ist. Also braucht jede Textgattung eine spezifische Schriftart.',
            'Und immer wieder gibt es besondere Säetze, die danach schreien, besonders dargestellt zu werden. Diese verdienen eine besondere typografische Darstellung.'
    ]


    return (
        <div ref={ref} ref={targetRef}>
            <Container >
                <BigTextWrapper style={{transform: `translateY(${offsetY * 0.4}px)`}}>
                    {bigText.map((item, index) => (
                    <BigText textColor={textColor} key={index}>{item}</BigText>
                    ))}
                </BigTextWrapper>
                <SmallTextWrapper>
                    {smallText1.map((item, index) => (
                        <SmallText key={index} >{item}</SmallText>
                    ))} {/**Parallax inner */}
                </SmallTextWrapper>

                <SmallTextWrapper > {/** style={{transform: `translateY(-${props.offsetY * 0.5}px)`}} */} {/**Parallax outer */}
                    {smallText2.map((item, index) => (
                        <SmallText key={index} >{item}</SmallText>
                    ))}
                </SmallTextWrapper>
            </Container>
        </div>
    )
}

export default LayoutSection

const Container = styled.div`
    height: 105vh;
    padding-top: 10vh;
    display: grid;
    grid-template-columns: 0.5fr 1.25fr 0.125fr 0.125fr 1fr 0.5fr;
    z-index: 2;
    /* border: 2px solid red; */
`
const BigTextWrapper = styled.div`
    grid-row-start: 1;
    grid-column: 4 / 6;
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
`
const SmallTextWrapper = styled.div`
    padding-top: 30vh;
    grid-column: 2 / 3;
`
const SmallText = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: right;
    margin-bottom: 20px;
`