import React from 'react'
import PageTemplate from '../PageTemplate'

const LayoutSection = () => {

    const bigText = 
        [
            'Ein', 
            'neues',
            'Layout'
        ]

    const smallText1 = 
        [
            <strong>Form Follows Content</strong>,
           ' Ein Reichtum der Textformen von Song-Lyrics, über persönliche Briefe und Gesprächen, bis hin zu juristischen Texten, lädt regelrecht dazu ein, in selbsterkläerenden Layouts präsentiert zu werden.',
           'So können Texte individuell und charakterisiert veröeffentlicht werden, ohne dabei als dicker Schinken abzuschrecken oder zu überfordern.'
        ]

    const smallText2 = 
    [
        'Font Matters – Denn die Bibeltexte lesen sich am besten, wenn die Textform erkennbar dargestellt ist. Also braucht jede Textgattung eine spezifische Schriftart.',
        'Und immer wieder gibt es besondere Säetze, die danach schreien, besonders dargestellt zu werden. Diese verdienen eine besondere typografische Darstellung.'
    ]

    return (
        <div>
            <PageTemplate color={'white'} bigText={bigText} smallText={smallText1} />
            <PageTemplate color={'white'} bigText={bigText} smallText={smallText2} />
        </div>
    )
}

export default LayoutSection
