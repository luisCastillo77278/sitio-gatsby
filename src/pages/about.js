import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout title="About">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage 
        src="../images/prueba.jpg"
        alt="renderizando una imagen, local"
      />
    </Layout>
  )
}

export default About