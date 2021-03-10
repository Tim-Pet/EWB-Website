import React, {useEffect} from 'react'
import styled from 'styled-components'
import useIsInViewport from 'use-is-in-viewport'
import { Parallax, Background } from 'react-parallax';

import * as variables from "../styles/variables"

const LayoutSection = ({setBgColor, setTextColor, textColor}) => {

    const [isInViewport, targetRef] = useIsInViewport()


    useEffect(() => {
        if(isInViewport) {
            setBgColor('#ffffff');
            setTextColor('#000000');
        }
    }, [isInViewport])


    const bigText = 
        [
            'Ein', 
            'neues',
            'Layout'
    ]

    const smallText1 = 
        [
            <strong>Form Follows Content</strong>,
           'Ein Reichtum der Textformen von Song-Lyrics, über persönliche Briefe und Gesprächen, bis hin zu juristischen Texten, lädt regelrecht dazu ein, in selbsterklärenden Layouts präsentiert zu werden.',
           'So können Texte individuell und charakterisiert veröeffentlicht werden, ohne dabei als dicker Schinken abzuschrecken oder zu überfordern.'
    ]

    const smallText2 = 
        [
            'Font Matters – Denn die Bibeltexte lesen sich am besten, wenn die Textform erkennbar dargestellt ist. Also braucht jede Textgattung eine spezifische Schriftart.',
            'Und immer wieder gibt es besondere Sätze, die danach schreien, besonders dargestellt zu werden. Diese verdienen eine besondere typografische Darstellung.'
    ]


    return (
        <div ref={targetRef}>
            <Container >
            <Parallax
                    strength={300} 
                    style={{
                        gridColumn: '9 / 10',
                        gridRow: '1',
                        overflow: 'visible',
                        marginTop: '30vh'
                        }}
                >
                    <Background>
                        {bigText.map((item, index) => (
                        <BigText textColor={textColor} key={index}>{item}</BigText>
                        ))}
                    </Background>
                </Parallax>

                <Parallax 
                    strength={-200} 
                    style={{
                        gridColumn: '1 / 9',
                        gridRow: '1',
                        marginTop: '10vh',
                        overflow: 'visible'
                        }}
                >
                    <Background>
                            {smallText1.map((item, index) => (
                                <SmallText key={index} >{item}</SmallText>
                            ))} 

                            {smallText2.map((item, index) => (
                                <SmallText key={index} >{item}</SmallText>
                            ))}
                    </Background>
                </Parallax>


            </Container>
        </div>
    )
}

export default LayoutSection

const Container = styled.div`
    min-height: 105vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.125fr 0.125fr 0.125fr 0.125fr 1fr 1fr 1fr;
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

const SmallText = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-align: right;
    margin-bottom: 20px;
`