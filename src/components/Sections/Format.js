import React, {useEffect} from 'react'
import styled from 'styled-components'
import useIsInViewport from 'use-is-in-viewport'
import { Parallax, Background } from 'react-parallax';

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
            'Wir möchten die Bibel, die so zugänglich wie möglich ist – Deshalb präsentieren wir Ihre Vielfalt im Format von einzelnen Magazinen.'
    ]


    useEffect(() => {
        if(isInViewport) {
            setBgColor('#000000');
            setTextColor('#ffffff');
        }
    }, [isInViewport])


    return (
        <div ref={targetRef}>
            <Container >
            <Parallax
                    strength={300} 
                    style={{
                        gridColumn: '1 / 8',
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
                        gridColumn: '3 / 11',
                        gridRow: '1',
                        marginTop: '10vh',
                        overflow: 'visible'
                        }}
                >
                    <Background>
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
                    </Background>
                </Parallax>


            </Container>
        </div>
    )
}

export default Format

const Container = styled.div`
    position: relative;
    height: 100vh;
    margin-bottom: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.125fr 0.125fr 0.125fr 0.125fr 1fr 1fr 1fr;;
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


const SmallTextWrapper = styled.div`
    margin-bottom: 10vh;
`
const SmallText = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-bottom: 5vh;
    /* border: 2px solid green; */
`
