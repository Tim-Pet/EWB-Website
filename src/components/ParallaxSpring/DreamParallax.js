import React from 'react'
import PageTemplate from './LLC/PageTemplate'

const DreamParallax = (props) => {

    const bigText = 
        [
            'Unser', 
            'Traum'
        ]
    const smallText1 =
        [
            <strong>Wir lieben unsere Generation</strong>,
            'Nicht, weil sie perfekt ist, doch weil wir an sie glauben: Wir glauben an eine Generation, die Jesus Christus kennlernen will und Ihn liebt.',
            'Deshalb wollen wir Ihn ihr vorstellen.'
        ]
    const smallText2 =
        [
           ' Wir wollen eine Bibel, die besonders einladend füer jeden Einstieg & angenehm füers immer weiterlesen gestaltet ist.',
            'Und dabei unglaublich gut aussieht.'
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

export default DreamParallax