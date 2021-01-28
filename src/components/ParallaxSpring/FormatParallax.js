import React from 'react'
import PageTemplate from './LLC/PageTemplate'

const FormatParallax = (props) => {

    const bigText = 
        [
            'Ein', 
            'neues',
            'Format'
        ]
    const smallText1 =
        [
            'Wir möchten die Bibel, die so zugänglich wie möglich ist – Deshalb präsentieren wir Ihre Vielfalt im Format von einzelnen Magazinen.',
            'So können Texte individuell und charakterisiert veröffentlicht werden, ohne dabei als dicker Schinken abzuschrecken oder zu überfordern.'
        ]
    const smallText2 =
        [
           'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis ab doloribus inventore voluptatum ut temporibus', 
           'perspiciatis tempore minus consectetur consequuntur odio, rerum quod! Dolor possimus veritatis harum nostrum ipsam.'
        ]
    const smallText = 
        [
            smallText1,
            smallText2
        ]

    return (
        <>
            <PageTemplate 
                bgColor={props.bgColor} 
                textColor={props.textColor} 
                offsetBig={props.offsetBig} 
                speedBig={props.speedBig} 
                bigText={bigText} 
                widthBig={"30%"} 
                marginLeftBig={"50%"} 
                offsetSmall={props.offsetSmall} 
                speedSmall={props.speedSmall}
                smallText={smallText}
                widthSmall={"30%"} 
                marginLeftSmall={"20%"}
            /> 
        </>
    )
}

export default FormatParallax