import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

const Parallax1 = (props) => {
    return (
        <div>
            <ParallaxLayer offset={props.pageOffset}>Parallax1</ParallaxLayer>
        </div>
    )
}

export default Parallax1