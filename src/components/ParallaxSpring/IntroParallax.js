import React from 'react'
import PageTemplate from './LLC/PageTemplate'

const IntroParallax = (props) => {

    const bigText = 
        [
            'Und', 
            'noch', 
            'eine?'
    ]
    const smallText1 = 
        [
            'Ja, wir wollen eine neue Bibel. Die Bibel muss nicht anders sein. Aber unsere Gesellschaft ist nun anders erreichbar als noch vor Jahren.'
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

export default IntroParallax