import React from 'react'
import PageTemplate from '../PageTemplate'

const CTA = () => {

    const bigText = 
        [
            'Magst du', 
            'es auch?',
        ]

    const smallText1 = 
    [
        'Du bist eingeladen, das noch weiße Blatt mit uns zu gestalten und Teil eines großartigen Teams zu werden!',
        'Wir freuen uns auf Dich und Dein Portfolio oder Showreel. Und auch über Fragen nach mehr Infos.'
    ]
    

    return (
        <div>
            <PageTemplate color={'white'} bigText={bigText} smallText={smallText1} />
        </div>
    )
}

export default CTA
