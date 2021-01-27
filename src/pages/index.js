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
      // ((window.pageYOffset>(wHeight*1.5))&&(window.pageYOffset<(wHeight*3.5))) ? setBgColor("#000000"): setBgColor("#ffffff"); 
      // ((window.pageYOffset>(wHeight*1.5))&&(window.pageYOffset<(wHeight*3.5))) ? setTextColor("#ffffff"): setTextColor("#000000");
      // ((window.pageYOffset>(wHeight*3.5))&&(window.pageYOffset<(wHeight*5.5))) ? setBgColor("#ffffff"): setBgColor("#000000"); 
      // ((window.pageYOffset>(wHeight*3.5))&&(window.pageYOffset<(wHeight*5.5))) ? setTextColor("#000000"): setTextColor("#ffffff"); 
      // ((window.pageYOffset>(wHeight*5.5))&&(window.pageYOffset<(wHeight*7.5))) ? setBgColor("#000000"): setBgColor("#ffffff"); 
      // ((window.pageYOffset>(wHeight*5.5))&&(window.pageYOffset<(wHeight*7.5))) ? setTextColor("#ffffff"): setTextColor("#000000");
      // (window.pageYOffset>(wHeight*7.5)) ? setBgColor("#ffffff"): setBgColor("#000000"); 
      // (window.pageYOffset>(wHeight*7.5)) ? setTextColor("#000000"): setTextColor("#ffffff"); 
      // }
  
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
