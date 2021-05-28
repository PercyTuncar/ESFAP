import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import BgVideo from '../components/BgVideo'
import Slider from '../components/Slider'
import Fap from '../components/Fap'
import ProgramasDeEstudio from '../components/ProgramasDeEstudio'
import Courses from '../components/Courses'
import VideoInstitucional from '../components/VideoInstitucional'
import EnlacesDeInteres from '../components/EnlacesDeInteres'

const fullScrean ={
  with: '100%',
  height: 'auto',

}



// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body,  video, videoPoster, videoTitle, }) => (
  <main className="Home">
  <div style={fullScrean}>
 
  <BgVideo/>
  <Slider/>
  <Fap/>
  <Courses/>
  <ProgramasDeEstudio/>
  <VideoInstitucional/>
  <EnlacesDeInteres/>
   {
      //  <BgVideo/>
      //  <Slider/>
      //  <Fap/>
      //  <Courses/>
      //  <ProgramasDeEstudio/>
   }
     

  </div>
    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`

