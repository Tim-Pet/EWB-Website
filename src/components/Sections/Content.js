import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import * as variables from "../styles/variables"

const Content = (props) => {
    const [offsetY, setOffsetY] = useState(0);
    const ref = useRef();

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

    const handleScroll = () => {
        const vh = window.innerHeight;
        const posY = (ref.current.getBoundingClientRect().top*-1)+(vh/1.8); //sets to positive value if top border of container reaches nearly half of viewport
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
        <div ref={ref}>
            <Container >
                <BigTextWrapper style={{transform: `translateY(${offsetY * 0.3}px) translateX(${-offsetY * 0.1}px)`}}> 
                    {bigText.map((item, index) => (
                    <BigText textColor={props.textColor} key={index}>{item}</BigText>
                    ))}
                </BigTextWrapper>
                <SmallTextContainer style={{transform: `translateX(${offsetY * 0.1}px) skew(-30deg)`}}>
                    <SmallTextWrapper>
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

export default Content

const Container = styled.div`
    height: 80vh;
    margin-top: 20vh;
    display: grid;
    grid-template-columns: 0.5fr 1.25fr 0.125fr 0.125fr 1fr 0.5fr;
    z-index: 2;
    /* border: 2px solid red; */
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
    text-align: right;
`

const SmallTextContainer= styled.div`
    grid-column: 3 / 7;
    grid-row-start: 1;
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
    transform: skew(30deg);
`