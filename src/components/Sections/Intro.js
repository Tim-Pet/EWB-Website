import React from 'react'
import PageTemplate from '../PageTemplate'

const Intro = () => {
    
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

    return (
        <div>
            <PageTemplate color={'white'} bigText={bigText} smallText={smallText1}/>
        </div>
    )
}

export default Intro