import React from 'react'
import PageTemplate from '../PageTemplate'

const Format = () => {

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
            <PageTemplate color={'white'} bigText={bigText} smallText={smallText1} />
            <PageTemplate color={'white'} bigText={bigText} smallText={smallText2} />
        </div>
    )
}

export default Format
