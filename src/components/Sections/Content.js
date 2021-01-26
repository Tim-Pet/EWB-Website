import React from 'react'
import PageTemplate from '../PageTemplate'

const Content = () => {

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

    return (
        <div>
            <PageTemplate color={'white'} bigText={bigText} smallText={smallText1} />
            <PageTemplate color={'white'} bigText={bigText} smallText={smallText2} />
        </div>
    )
}

export default Content
