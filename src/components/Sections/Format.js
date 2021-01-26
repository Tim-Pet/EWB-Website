import React from 'react'
import styled from 'styled-components'
import PageTemplate from '../PageTemplate'
import Book from '../Book'

const Format = (props) => {

    const bigText = 
        [
            'Ein', 
            'neues',
            'Format'
        ]

    const smallText1 = 
        [
           ' Wir möechten die Bibel, die so zugäenglich wie möeglich ist – Deshalb präesentieren wir Ihre Vielfalt im Format von einzelnen Magazinen.',
           'So können Texte individuell und charakterisiert veröeffentlicht werden, ohne dabei als dicker Schinken abzuschrecken oder zu überfordern.'
        ]
    const smallText2 = 
    [
        'Wir möchten die Bibel, die so zugänglich wie möglich ist – Deshalb präsentieren wir Ihre Vielfalt im Format von einzelnen Magazinen.',
        'So können Texte individuell und charakterisiert veröeffentlicht werden, ohne dabei als dicker Schinken abzuschrecken oder zu überfordern.'
    ]
    return (
        <div>
            <FormatSectionWrapper>
                <PageTemplate bgColor={props.bgColor} textColor={props.textColor} bigText={bigText} smallText={smallText1} />
                <PageTemplate bgColor={props.bgColor} textColor={props.textColor} bigText={bigText} smallText={smallText2} />
                <TextBook />
            </FormatSectionWrapper>
        </div>
    )
}

export default Format

const FormatSectionWrapper = styled.div`
    z-index: 2;
    position: relative;
`

const TextBook = styled(Book)`
    position: absolute;
    top: 160vh;
    left: 25vw;
    height: 250px;
    width: auto;
`