import React from 'react'
import PageTemplate from './LLC/PageTemplate'

const CTAParallax = (props) => {

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
    
    const smallText =
        [
            smallText1
    ]

    return (
        <>
            <PageTemplate 
                bgColor={props.bgColor} 
                textColor={props.textColor} 
                offsetBig={props.offsetBig} 
                speedBig={props.speedBig} 
                bigText={bigText} 
                widthBig={"40%"} 
                marginLeftBig={"10%"} 
                offsetSmall={props.offsetSmall} 
                speedSmall={props.speedSmall}
                smallText={smallText}
                widthSmall={"30%"} 
                marginLeftSmall={"50%"}
            /> 
        </>
    )
}

export default CTAParallax