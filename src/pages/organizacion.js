import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import '../components/historia.css'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
 

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const OrganizacionTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />



  </main>
)

const Organizacion = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">ORGANIZACIÓN</h1>
</header>
 
<div className="tabs">
 
<br/>
<br/>
<br/>
<h2 className="h2"> ORGANIGRAMA</h2>
<br/>

<span className="line"></span>
<div className="center">
<img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Logo%2FORGANIGRAMA.jpeg?alt=media&token=de9f92f5-c79c-49ce-b31f-a96f07f70c67"/> 
</div>
</div>
 
  </Layout>
)

export default Organizacion
