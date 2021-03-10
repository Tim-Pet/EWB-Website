import React, { useEffect } from 'react'
import useIsInViewport from 'use-is-in-viewport'

import PageTemplate from '../PageTemplate'

const CTA = ({setBgColor, setTextColor, textColor}) => {

    const [isInViewport, targetRef] = useIsInViewport()

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
    
    useEffect(() => {
        if(isInViewport) {
            setBgColor('#000');
            setTextColor('#fff');
        }
    }, [isInViewport])

    return (
        <div ref={targetRef}>
            <PageTemplate textColor={textColor} bigText={bigText} smallText={smallText1} />
        </div>
    )
}

export default CTA
