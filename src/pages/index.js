import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div>
        <div>Bienvenido</div>
        <StaticImage 
          src="https://imagenes.elpais.com/resizer/G5ETyNCBY33u7wWqt39nes3Tp_Q=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z6WN33YVLRCTPCATP7EAJ2ODLE.jpg"
          alt="renderizando una imagen, externa"
        />
      </div>
    </Layout>
  )
}

export default IndexPage