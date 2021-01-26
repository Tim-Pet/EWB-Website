import React from 'react'
import Hero from '../components/Sections/Hero'
import Intro from '../components/Sections/Intro'
import Layout from '../components/Layout'
import ParallaxEffect from '../components/ParallaxEffect'
import Dream from '../components/Sections/Dream'
import Format from '../components/Sections/Format'
import LayoutSection from '../components/Sections/LayoutSection'
import Content from '../components/Sections/Content'
import CTA from '../components/Sections/CTA'

const index = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Dream />
      <Format />
      <LayoutSection />
      <Content />
      <CTA />
    </Layout>
  )
}

export default index
