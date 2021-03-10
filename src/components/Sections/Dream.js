import React, {useEffect} from 'react'
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components'
import useIsInViewport from 'use-is-in-viewport'

import * as variables from "../styles/variables"

const Dream = ({setBgColor, setTextColor, textColor}) => {

    const [isInViewport, targetRef] = useIsInViewport()

    useEffect(() => {
        if(isInViewport) {
            setBgColor('#000000');
            setTextColor('#ffffff');
        }
    }, [isInViewport])

    const bigText = 
        [
            'Unser', 
            'Traum'
        ]

    const smallText1 =
        [
            <strong>Wir lieben unsere Generation</strong>,<br></br>,
            'Nicht, weil sie perfekt ist, doch weil wir an sie glauben: Wir glauben an eine Generation, die Jesus Christus kennlernen will und Ihn liebt.',
            'Deshalb wollen wir Ihn ihr vorstellen.'
        ]

    const smallText2 =
    [
        'Wir wollen eine Bibel, die besonders einladend für jeden Einstieg & angenehm fürs immer weiterlesen gestaltet ist.',
        'Und dabei unglaublich gut aussieht.'
    ]

    const smallText = [
        smallText1,
        smallText2
    ]


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
                        <SmallText>{smallText1}</SmallText>
                        <SmallText>{smallText2}</SmallText>
                    </Background>
                </Parallax>
            </Container>
        </div>
    )
}

export default Dream

const Container = styled.div`
    height: 105vh;
    margin-top: 20vh;
    margin-bottom: 10vh;
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
    text-align: right;
`
const SmallText = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: 1px;
    margin-bottom: 25vh;
`