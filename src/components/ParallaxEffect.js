import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import reactDom from 'react-dom'
import Parallax1 from './Parallax1'
import Parallax2 from './Parallax2'

const ParallaxEffect = () => {
    return (
        <Parallax ref={ref => (this.parallax = ref)} pages={2}>
            <ParallaxLayer offset={0}>
            <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5}>Parallax2</ParallaxLayer>
        </Parallax>
    )
}

export default ParallaxEffect
