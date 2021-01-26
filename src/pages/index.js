import React, { useState, useEffect } from 'react'
import Hero from '../components/Sections/Hero'
import Intro from '../components/Sections/Intro'
import Layout from '../components/Layout'
import ParallaxEffect from '../components/ParallaxEffect'
import Dream from '../components/Sections/Dream'
import Format from '../components/Sections/Format'
import LayoutSection from '../components/Sections/LayoutSection'
import Content from '../components/Sections/Content'
import CTA from '../components/Sections/CTA'

const Index = () => {

  const wHeight = window.innerHeight;
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  

  const handleScroll = () => {
      window.pageYOffset>(wHeight*2) ? setBgColor("#000000"): setBgColor("#ffffff"); 
      window.pageYOffset>(wHeight*2) ? setTextColor("#ffffff"): setTextColor("#000000"); 
      }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
      
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <Layout bgColor={bgColor} textColor={textColor}>
      <Hero bgColor={bgColor} textColor={textColor}/>
      <Intro bgColor={bgColor} textColor={textColor}/>
      <Dream bgColor={bgColor} textColor={textColor}/>
      <Format bgColor={bgColor} textColor={textColor}/>
      <LayoutSection bgColor={bgColor} textColor={textColor}/>
      <Content bgColor={bgColor} textColor={textColor}/>
      <CTA bgColor={bgColor} textColor={textColor}/>
    </Layout>
  )
}

export default Index
