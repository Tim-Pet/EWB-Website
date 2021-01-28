import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

import * as variables from '../components/styles/variables'

import Hero from '../components/Sections/Hero'
import Layout from '../components/Layout'
import DreamParallax from '../components/ParallaxSpring/DreamParallax'
import IntroParallax from '../components/ParallaxSpring/IntroParallax'
import FormatParallax from '../components/ParallaxSpring/FormatParallax'
import LayoutSectionParallax from '../components/ParallaxSpring/LayoutSectionParallax'
import ContentParallax from '../components/ParallaxSpring/ContentParallax'
import CTAParallax from '../components/ParallaxSpring/CTAParallax'



const ParallaxPage = () => {

  const [wHeight, setWHeight] = useState(window.innerHeight);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  

  const handleScroll = () => {
      switch(true){
        case (window.pageYOffset<(wHeight*1.5)):
          setBgColor("#ffffff");
          setTextColor("#000000");
          break;
        case ((window.pageYOffset>(wHeight*1.5))&&(window.pageYOffset<(wHeight*3.5))):
          setBgColor("#000000");
          setTextColor("#ffffff");
          break;
        case ((window.pageYOffset>(wHeight*3.5))&&(window.pageYOffset<(wHeight*6))):
          setBgColor("#ffffff");
          setTextColor("#000000");
          break;
        case ((window.pageYOffset>(wHeight*6))&&(window.pageYOffset<(wHeight*8))):
          setBgColor("#000000");
          setTextColor("#ffffff");
          break;
        case ((window.pageYOffset>(wHeight*8))):
          setBgColor("#ffffff");
          setTextColor("#000000");
          break;
        default:
          setBgColor("#ffffff");
          setTextColor("#000000");
          break;
      }
    }
  
  const handleResize = () => {
    setWHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
      
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <IndexColorWrapper bgColor={bgColor} textColor={textColor}>
      <Layout bgColor={bgColor} textColor={textColor}>
      <Parallax pages={6.8}>
          <ParallaxLayer offset={0}>
            <Hero />
          </ParallaxLayer>

          <IntroParallax 
            offsetBig={1} 
            offsetSmall={1} 
            speedSmall={0} 
            speedBig={0} 
            textColor={textColor} 
            bgColor={bgColor}
            />
          <DreamParallax 
          offsetBig={2.4} 
          offsetSmall={2} 
          speedSmall={1.3} 
          speedBig={0} 
          textColor={textColor} 
          bgColor={bgColor}
          />
          <FormatParallax 
            offsetBig={3.2} 
            offsetSmall={3} 
            speedSmall={1.3} 
            speedBig={0} 
            textColor={textColor} 
            bgColor={bgColor}
            />
          <LayoutSectionParallax 
            offsetBig={4} 
            offsetSmall={4} 
            speedSmall={1.3} 
            speedBig={0} 
            textColor={textColor} 
            bgColor={bgColor}
            />
          <ContentParallax 
            offsetBig={5} 
            offsetSmall={5} 
            speedSmall={1.3} 
            speedBig={0} 
            textColor={textColor} 
            bgColor={bgColor}
            />
          <CTAParallax 
            offsetBig={6} 
            offsetSmall={6} 
            speedSmall={0} 
            speedBig={0} 
            textColor={textColor} 
            bgColor={bgColor}
            />
      </Parallax>
      </Layout>
    </IndexColorWrapper>
  )
}

export default ParallaxPage

const IndexColorWrapper = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  border-color: ${props => props.textColor};
  transition: all ${variables.tr_duration};
  /* transition: background-color 1s, border-color 1s, color 1s; */
  `