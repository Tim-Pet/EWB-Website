import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import * as variables from "../styles/variables"

const Dream = (props) => {
    const [offsetY, setOffsetY] = useState(0);

    const ref = useRef();

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
            'Unser', 
            'Traum'
        ]

    const smallText1 =
        [
            <strong>Wir lieben unsere Generation</strong>,
            'Nicht, weil sie perfekt ist, doch weil wir an sie glauben: Wir glauben an eine Generation, die Jesus Christus kennlernen will und Ihn liebt.',
            'Deshalb wollen wir Ihn ihr vorstellen.'
        ]

        const smallText2 =
        [
           ' Wir wollen eine Bibel, die besonders einladend füer jeden Einstieg & angenehm füers immer weiterlesen gestaltet ist.',
            'Und dabei unglaublich gut aussieht.'
        ]

    const smallText = [
        smallText1,
        smallText2
    ]


    return (
        <div ref={ref}>
            <Container >
                <BigTextWrapper style={{transform: `translateY(${offsetY * 0.4}px)`}}>
                    {bigText.map((item, index) => (
                    <BigText textColor={props.textColor} key={index}>{item}</BigText>
                    ))}
                </BigTextWrapper>
                <SmallTextWrapper > {/** style={{transform: `translateY(-${props.offsetY * 0.5}px)`}} */} {/**Parallax outer */}
                    <SmallText>{smallText1}</SmallText> {/**Parallax inner */}
                    <SmallText>{smallText2}</SmallText>
                </SmallTextWrapper>
            </Container>
        </div>
    )
}

export default Dream

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
    grid-column: 2 / 3;
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
const SmallTextWrapper = styled.div`
    padding-top: 30vh;
    grid-column: 4 / 6;
    grid-row-start: 1;
`
const SmallText = styled.p`
    font-family: ${variables.f_primary};
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 30vh;
`