import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import '../components/saludoPage.css'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'

// Export Template for use in CMS preview saludoPage.css
export const SaludoPageTemplate = ({
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

const SaludoPage = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">SALUDO DEL DIRECTOR</h1>
</header>
 



<section id="features">
  <div class="features-inner">

    <div class="features-group">
      <div class="features-image"><img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/GRAL%20GARCIA.jpeg?alt=media&token=caa68eef-aa7b-4fac-ad9f-73161ef80751"/></div>
      <div class="features-text">
        <p>
          Bienvenidos a la Escuela Superior de Guerra Aérea, su Escuela. Es un honor para mí asumir la Dirección y un gran reto profesional el poder cumplir esta tarea asignada.
        </p>
        <p>
        Estamos trabajando en la Escuela Superior de Guerra Aérea con mucho esfuerzo para especializar y perfeccionar al Personal de Oficiales de la Fuerza Aérea del Perú, en concordancia con los objetivos institucionales y educativos, mediante una cultura de calidad, investigación e innovación educativa, a fin de lograr líderes con valores y competencias adecuadas, capaces de conducir la Institución en todos sus niveles de comando y otros organismos integrantes del poder aeroespacial, militar y nacional, de manera de cumplir las Demandas del Estado mediante la Misión de nuestra Fuerza Aérea.
        </p>
        <p>
        La coyuntura nacional y mundial nos hace evolucionar en el planeamiento, preparación y ejecución de las diferentes actividades académicas, con una filosofía de mejora continua. El reto es grande y complejo, pero el compromiso de todo el personal que laboramos en la Escuela, sumados a los catedráticos y toda la Plana de nuestra Fuerza Aérea hace posible el cumplimiento de nuestra Misión.
          </p>
          <p>
          El paso por tu Escuela define el futuro de tu profesión, está en nosotros brindar un servicio de bienestar laboral y educativo de calidad que cada uno de ustedes se merece, así como brindarles todas las facilidades que les permita integrarse y compenetrarse con la misión de la Escuela, con la finalidad que su paso por esta escuela superior sea de mucho provecho, tanto educativo como profesional.
          </p>
         
      </div>

    </div>
  

    <div className="palabras">
      <p>
          En ese sentido que exhorto al Personal de Oficiales de planta y oficiales alumnos participantes, así como al personal docente y administrativo, a dar su mayor esfuerzo, a fin de cumplir con los objetivos académicos e institucionales dispuesto por la superioridad y que al final de la labor cumplida veamos reflejado la frase de nuestro emblema “Ad Majorem Patriae Gloriam” (Para Mayor Gloria de la Patria).
          </p>
          <p>
          Les deseo muchos éxitos en todas y cada una de las actividades que realicen durante su estancia en este gran centro de estudios y que su entusiasmo y pasión no les abandonen, y que por lo contrario les permita avanzar y lograr sus objetivos y metas trazadas.
          </p>
          <p>
          Arriba Siempre Arriba, hasta las Estrellas.


          </p>
     


      </div>
  </div>
</section>
  </Layout>
)

export default SaludoPage
