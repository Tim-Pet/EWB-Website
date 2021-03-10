import React, {useEffect} from 'react'
import styled from 'styled-components'
import useIsInViewport from 'use-is-in-viewport'
import { Parallax, Background } from 'react-parallax';

import * as variables from "../styles/variables"

const Content = ({setBgColor, setTextColor, textColor}) => {

    const [isInViewport, targetRef] = useIsInViewport()


    const bigText = 
    [
        'Der', 
        'selbe',
        'Inhalt'
    ]

    //content for smallText1
        const line1a = 
        [
            'Wir wollen die Geschichte der Welt erzählen.'
        ]
        const line1b = 
        [
            'In unkonventioneller Gestaltung,'
        ]
        const line1c = 
        [
            'die gleichzeitig die Hochwertigkeit des Textes zeigt.'
        ]
        const line1d = 
        [
            'Ohne hinzugefügte Extras,'
        ]
        const line1e = 
        [
            'die den Lesefluss stören und schon interpretieren.'
        ]
    const smallText1 = 
    [
        line1a,
        line1b,
        line1c,
        line1d,
        line1e,
    ]
    
    // content for smallText2
        const line2a = 
        [
            'Kein Comic – keine Studienbibel.'
        ]
        const line2b = 
        [
            'Einfach jedes einzelne Buch als handgerechte Augenweide.'
        ]
        const line2c = 
        [
            'So liest man gerne mal einen Abschnitt zum Reinkommen.'
        ]
        const line2d = 
        [
            'Oder auch einfach mal zwischendurch.'
        ]
    const smallText2 = 
    [
        line2a,
        line2b,
        line2c,
        line2d
    ]

    useEffect(() => {
        if(isInViewport) {
            setBgColor('#ffffff');
            setTextColor('#000000');
        }
    }, [isInViewport])

    return (
        <div ref={targetRef}>
            <Container >
            <Parallax
                    strength={300} 
                    style={{
                        gridColumn: '9 / 10',
                        overflow: 'visible',
                        gridRow: '1',
                        marginTop: '30vh'
                        }}
                >
                    <Background>
                        <BigTextWrapper> 
                            {bigText.map((item, index) => (
                            <BigText textColor={textColor} key={index}>{item}</BigText>
                            ))}
                        </BigTextWrapper>
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
                    <SmallTextWrapper>
                        {smallText1.map((item, index) => (
                            <SmallText key={index} >{item}</SmallText>
                        ))}
                    </SmallTextWrapper>

                    <SmallTextWrapper>
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

export default Content

const Container = styled.div`
    height: 100vh;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.125fr 0.125fr 0.125fr 0.125fr 1fr 1fr 1fr;
`
const BigTextWrapper = styled.div`
    grid-row-start: 1;
    grid-column: 2 / 3;
    padding-top: 15vh;
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
    padding-top: 20vh;
`
const SmallText = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    line-height: 2.25rem;
    letter-spacing: 1px;
    text-transform: uppercase;
`