import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
const Parallax2 = (props) => {
    return (
        <div>
            <ParallaxLayer offset={props.pageOffset}>Parallax2</ParallaxLayer>
        </div>
    )
}

export default Parallax2
