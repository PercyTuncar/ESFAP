import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import '../components/historia.css'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Divider } from 'rsuite';
import FichaTecnica from '../components/FichaTecnica'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const calidadTemplate = ({
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

const calidad = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">CALIDAD</h1>
</header>
  <br/>
  <br/>
<div class="container texto-gray">
<h2 id="sistemas-de-calidad">SISTEMAS DE CALIDAD</h2>
<a href=" " target="_blank">
<p><img width="80px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2F833px-PDF_file_icon.svg.png?alt=media&token=35737e7c-260e-4211-b7b0-8dccc77f4a06" alt="enter   here" /></p>
<p>PAE ESFAP 2021 26 02.pdf</p>
</a>

<h2 id="estándares-de-calidad">ESTÁNDARES DE CALIDAD</h2>
<a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Archivos%20PDF%2FDir%20DIGED%2050-5_Acreditacion%20de%20la%20Calidad%20Educativa_26-11-19.pdf?alt=media&token=6e97ccec-cc23-469a-8aff-a92fa0559ffc" target="_blank">
<p><img width="80px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2F833px-PDF_file_icon.svg.png?alt=media&token=35737e7c-260e-4211-b7b0-8dccc77f4a06" alt="enter   here" /></p>
<p>Dir DIGED 50-5_Acreditacion de la Calidad Educativa_26-11-19.pdf</p>
</a>
<a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Archivos%20PDF%2FDir%20DIGED%2050-15_Autorregulacion%20de%20la%20Calidad%20Educativa_26-11-19.pdf?alt=media&token=45f33874-0bcd-4660-b213-5b2916e793ae" target="_blank">
<p><img width="80px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2F833px-PDF_file_icon.svg.png?alt=media&token=35737e7c-260e-4211-b7b0-8dccc77f4a06" alt="enter   here" /></p>
<p>Dir DIGED 50-15_Autorregulacion de la Calidad Educativa_26-11-19.pdf</p>
</a>


<h2 id="manual-de-procesos">MANUAL DE PROCESOS</h2>
<a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Archivos%20PDF%2FManual%20de%20Procesos%20ESFAP.pdf?alt=media&token=8c7bfa59-8ba6-48c8-b5d8-fa0b6c324ca8" target="_blank">
<p><img width="80px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2F833px-PDF_file_icon.svg.png?alt=media&token=35737e7c-260e-4211-b7b0-8dccc77f4a06" alt="enter   here" /></p>
<p>Manual de Procesos ESFAP.pdf</p>
</a>

<h2 id="manual-de-calidad">MANUAL DE CALIDAD</h2>
<a href="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Archivos%20PDF%2FManual%20de%20Calidad%20ESFAP.pdf?alt=media&token=20234294-b0d8-4e6f-93c4-c3445e395f6e" target="_blank">
<p><img width="80px" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/01%7D%2F833px-PDF_file_icon.svg.png?alt=media&token=35737e7c-260e-4211-b7b0-8dccc77f4a06" alt="enter   here" /></p>
<p>Manual de Calidad ESFAP.pdf</p>
</a>



</div>
 
  </Layout>
)

export default calidad
