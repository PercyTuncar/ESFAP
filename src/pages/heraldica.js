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
const justificacion = {
  textAlign: 'justify',
};
const AnchoImg = {
  width: '90%',
  marginBottom: '40px',
  padding: '20px'
};

function callback(key) {
  console.log(key);
}

// Export Template for use in CMS preview Historia.css
export const HeraldicaTemplate = ({
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

const Heraldica = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading ">HERÁLDICA</h1>
</header>



 <div class="container">
   <br/>
   <br/>
   <br/>
 <h1 className="h1">HERÁLDICA</h1>
 <br/>
 <br/>

    <div class="row">
        <div class="col-sm-5">
        <img  style={AnchoImg} src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Logo%2FESCUDO.jpeg?alt=media&token=58fd81e6-7dc7-4977-92d6-8b917e4f4eaa"/>
        </div>
        <div class="col-sm-7 texto-justificado" style={justificacion}>
          <p>
          El campo se encuentra cruzado por cuatro rayos dorados, agudos y penetrantes, dirigidos hacia los ángulos del escudo. Indican la vigilancia de los confines de nuestro territorio por las unidades de caza, bombardeo, reconocimiento y transporte. Asimismo éstos cuatro rayos y la espada dividen el campo azul en cinco partes, significando las regiones aéreas la parte inferior del campo está a su vez dividida en tres porciones.<br/>

          La izquierda contiene líneas onduladas y paralelas representando el mar; de la central emerge un conjunto de enormes piedras cortadas y pulidas, que como un macizo, configuran una fortaleza incaica abierta a tajos verticales; y el lado derecho representa un bosque.<br/>

          Cada porción con sus colores propios. Este conjunto simboliza las tres regiones naturales. <br/>
          Dentro del macizo, cuatro volúmenes con lomos en púrpura que denota grandeza y sabiduría, sus contenidos connotan conocimientos aeronáuticos militares y de cultura general. <br/>

          </p>


        </div>
        <div class="col-sm-12" style={justificacion}>
        <div className="tabs texto-justificado container">
 <p>
   

Sobre el tope de los lomos en campo azul, descansa un guantelete o manopla de plata; empuñando una espada flamígera igualmente en plata y en actitud de alerta. <br/>
La plata como insignia de pureza, integridad y obediencia; la manopla firmeza y la espada vigilancia. Las siete flamas que bordean la hoja de la espada simbolizan la luz de las enseñanzas que se desprenden de los libros en la preparación de otros tantos campos ocupacionales en temas aéreos-militares de la fuerza aérea.<br/>
Volúmenes, que apoyándose en la fortaleza, significan nobleza y constancia. El campo azul representa cielo y lealtad; y el cielo, medio en el que actúa la fuerza aérea en el combate. <br/>
Ribetea el escudo una cinta ondulada en cuya parte central, en letras negras sobre fondo blanco, que simboliza, honestidad y obediencia, se lee: escuela superior de guerra aérea. En la misma cinta, a ambos extremos, en dos palabras a cada lado se lee en latín ad Majorem Patriae gloriam, divisa que se traduce en: para mayor gloria de la patria. Corona el escudo el ala dorada atributo del piloto militar de la FAP. <br/>
<br/>
Y todo el simbolismo del emblema de la ESFAP nos dice:<br/>
"a lo largo y ancho del territorio nacional, con la grandeza y sabiduría que da el estudio, la obediencia y constancia del militar, en actitud firme y alerta está el oficial FAP vigilando el cielo de nuestra patria para cuidar de su soberanía."


 </p> 
</div>
        </div>
    </div>
</div>





  </Layout>
)

export default Heraldica
