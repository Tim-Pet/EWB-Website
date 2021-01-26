import React from 'react'
import PageTemplate from '../PageTemplate'

const Dream = (props) => {

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

    return (
        <div>
            <PageTemplate bgColor={props.bgColor} textColor={props.textColor} bigText={bigText} smallText={smallText1} />
            <PageTemplate bgColor={props.bgColor} textColor={props.textColor} bigText={bigText} smallText={smallText2} />
        </div>
    )
}

export default Dream
