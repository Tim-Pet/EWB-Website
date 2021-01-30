import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import * as variables from '../components/styles/variables'

import Hero from '../components/Sections/Hero'
import Intro from '../components/Sections/Intro'
import Layout from '../components/Layout'
import Dream from '../components/Sections/Dream'
import Format from '../components/Sections/Format'
import LayoutSection from '../components/Sections/LayoutSection'
import Content from '../components/Sections/Content'
import CTA from '../components/Sections/CTA'

const Index = () => {

  const [offsetY, setOffsetY] = useState(0);
  const [wHeight, setWHeight] = useState(window.innerHeight);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
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
      // console.log(offsetY);
    }
  
  const handleResize = () => {
    setWHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
      
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, [offsetY]);
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <IndexColorWrapper bgColor={bgColor} textColor={textColor}>
      <Layout bgColor={bgColor} textColor={textColor}>
        <Hero />
        <Intro bgColor={bgColor} textColor={textColor}/>
        <Dream bgColor={bgColor} textColor={textColor}/>
        <Format bgColor={bgColor} textColor={textColor}/>
        <LayoutSection bgColor={bgColor} textColor={textColor}/>
        <Content bgColor={bgColor} textColor={textColor}/>
        <CTA bgColor={bgColor} textColor={textColor}/>
      </Layout>
    </IndexColorWrapper>
  )
}

export default Index

const IndexColorWrapper = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  border-color: ${props => props.textColor};
  transition: all ${variables.tr_duration};
  /* transition: background-color 1s, border-color 1s, color 1s; */
`