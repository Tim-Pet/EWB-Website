import React, { useEffect } from 'react'
import useIsInViewport from 'use-is-in-viewport'

import PageTemplate from '../PageTemplate'

const Intro = ({setBgColor, setTextColor, textColor}) => {
    
    const [isInViewport, targetRef] = useIsInViewport()

    useEffect(() => {
        setBgColor('#000');
        setTextColor('#fff');
    }, [isInViewport])

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
        <div ref={targetRef}>
            <PageTemplate textColor={textColor} bigText={bigText} smallText={smallText1}/>
        </div>
    )
}

export default Intro