import React from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import BigText from './BigText'
import SmallText from './SmallText'

const PageTemplate = (props) => {
    return (
        <>
            <ParallaxLayer offset={props.offsetBig} speed={props.speedBig}>
                <BigText width={props.widthBig} marginLeft={props.marginLeftBig} textColor={props.textColor} text={props.bigText} />
            </ParallaxLayer>
            <ParallaxLayer offset={props.offsetSmall} speed={props.speedSmall}>
                <SmallText width={props.widthSmall} marginLeft={props.marginLeftSmall} bgColor={props.bgColor} text={props.smallText}/>
            </ParallaxLayer>
        </>
    )
}

export default PageTemplate
