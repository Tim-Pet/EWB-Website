import React, { useState } from 'react'
import styled from 'styled-components'

import * as variables from '../components/styles/variables'

import Hero from '../components/Sections/Hero'
import Intro from '../components/Sections/Intro'
import Layout from '../components/Layout'
import Dream from '../components/Sections/Dream'
import Format from '../components/Sections/Format'
import LayoutSection from '../components/Sections/LayoutSection'
import CTA from '../components/Sections/CTA'
import Content from '../components/Sections/Content'

const Index = () => {

  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  

  return (
    <IndexColorWrapper bgColor={bgColor} textColor={textColor}>
      <Layout bgColor={bgColor} textColor={textColor}>
        <Hero setBgColor={setBgColor} setTextColor={setTextColor}/>
        <Intro  textColor={textColor} setBgColor={setBgColor} setTextColor={setTextColor}/>
        <Dream  textColor={textColor} setBgColor={setBgColor} setTextColor={setTextColor}/>
        <Format  textColor={textColor} setBgColor={setBgColor} setTextColor={setTextColor}/>
        <LayoutSection  textColor={textColor} setBgColor={setBgColor} setTextColor={setTextColor}/>
        <Content  textColor={textColor} setBgColor={setBgColor} setTextColor={setTextColor}/>
        <CTA  textColor={textColor} setBgColor={setBgColor} setTextColor={setTextColor}/>
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