import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import '../components/historia.css'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Divider } from 'rsuite';
import FichaTecnica from '../components/FichaTecnica'
import { Collapse } from 'antd';
 
const { Panel } = Collapse;

 

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const programacomandoyestadomayorTemplate = ({
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

const programacomandoyestadomayor = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">CONTROL INTERNO Y ANTICORRUPCIÓN</h1>
</header>
<div className="container">

 
<Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="https://inci.fap.mil.pe" key="1">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Picture1.png?alt=media&token=7bd2ee18-516b-4b01-a3af-a44488944eb4" alt=""/>
            </div>
            <div class="col-sm-6">
                <img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/lanc.png?alt=media&token=8b50c20f-d70f-45db-96f2-9e894f2e86c6" alt=""/>
            </div>
        </div>
    </div>
    </TabPane>
   
    
  </Tabs>
 
</div>
<div className="container">
 
</div> <Divider />

<div class="container">
    <div class="row">
        <img className="img_mando" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/anticorrupcion-fap.jpeg?alt=media&token=53248495-84dd-427d-80e9-ef7828b2555b" alt="segunda imagen del comando"/>
    </div>
</div>
  </Layout>
)

export default programacomandoyestadomayor
