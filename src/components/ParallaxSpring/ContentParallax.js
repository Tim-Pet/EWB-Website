import React from 'react'
import PageTemplate from './LLC/PageTemplate'

const ContentParallax = (props) => {

    const bigText = 
        [
            'Der', 
            'selbe',
            'Inhalt'
        ]
    const smallText1 =
        [
            'Wir wollen die Geschichte der Welt erzäehlen. In unkonventioneller Gestaltung, die gleichzeitig die Hochwertigkeit des Textes zeigt.',
            'Ohne hinzuegefügten Extras, die vom Lesefluss stöeren und schon interpretieren.'
        ]
    const smallText2 =
        [
            'Kein Comic – keine Studienbibel.',
            'Einfach jedes einzelne Buch als handgerechte Augenweide.',
            'So liest man gerne mal einen Abschnitt zum Reinkommen. Oder auch einfach mal zwischendurch.'
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

export default ContentParallax