import React from 'react'
import PageTemplate from './LLC/PageTemplate'

const LayoutSectionParallax = (props) => {

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
            'Und immer wieder gibt es besondere Säetze, die danach schreien, besonders dargestellt zu werden. Diese verdienen eine besondere typografische Darstellung.'
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
                marginLeftBig={"20%"} 
                offsetSmall={props.offsetSmall} 
                speedSmall={props.speedSmall}
                smallText={smallText}
                widthSmall={"30%"} 
                marginLeftSmall={"50%"}
            /> 
        </>
    )
}

export default LayoutSectionParallax