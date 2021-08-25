import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import '../components/galeriaDeDirectoresPage.css'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'
import {Helmet} from "react-helmet";


const gridImage = {
    marginTop:'-20px',
    marginBottom: '30px'
}
// Export Template for use in CMS preview GaleriaDeDirectoresPage.css
export const GaleriaDeDirectoresPageTemplate = ({
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

const GaleriaDeDirectoresPage = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">GALERÍA DE DIRECTORES</h1>
</header>
 


 
  
<div class="demo1">
<ul class="galeria">
<li><a href="#img1"><img src="https://esfap.edu.pe/images/2017/04/03/direc01.jpg"/></a></li>
<li><a href="#img2"><img src="https://esfap.edu.pe/images/2017/04/03/direc02.jpg"/></a></li>
<li><a href="#img3"><img src="https://esfap.edu.pe/images/2017/04/03/direc03.jpg"/></a></li>
<li><a class="btn" href="#img4"><img src="https://esfap.edu.pe/images/2017/04/03/direc04.jpg"/></a></li>
  <li><a href="#img5"><img src="https://esfap.edu.pe/images/2017/04/03/direc05.jpg"/></a></li>
  <li><a href="#img6"><img src="https://esfap.edu.pe/images/2017/04/03/direc06.jpg"/></a></li>
  <li><a href="#img7"><img src="https://esfap.edu.pe/images/2017/04/03/direc07.jpg"/></a></li>
  <li><a href="#img8"><img src="https://esfap.edu.pe/images/2017/04/03/direc08.jpg"/></a></li>
  <li><a href="#img9"><img src="https://esfap.edu.pe/images/2017/04/03/direc09.jpg"/></a></li>
  <li><a href="#img10"><img src="https://esfap.edu.pe/images/2017/04/03/direc110.jpg"/></a></li>
  <li><a href="#img11"><img src="https://esfap.edu.pe/images/2017/04/03/direc111.jpg"/></a></li>
  <li><a href="#img12"><img src="https://esfap.edu.pe/images/2017/04/03/direc112.jpg"/></a></li>

  <li><a href="#img13"><img src="https://esfap.edu.pe/images/2017/04/03/direc113.jpg"/></a></li>
  <li><a href="#img14"><img src="https://esfap.edu.pe/images/2017/04/03/direc114.jpg"/></a></li>
  <li><a href="#img15"><img src="https://esfap.edu.pe/images/2017/04/03/direc115.jpg"/></a></li>
  <li><a href="#img16"><img src="https://esfap.edu.pe/images/2017/04/03/direc116.jpg"/></a></li>
  <li><a href="#img17"><img src="https://esfap.edu.pe/images/2017/04/03/direc117.jpg"/></a></li>
  <li><a href="#img18"><img src="https://esfap.edu.pe/images/2017/04/03/direc118.jpg"/></a></li>
  <li><a href="#img19"><img src="https://esfap.edu.pe/images/2017/04/03/direc119.jpg"/></a></li>
  <li><a href="#img20"><img src="https://esfap.edu.pe/images/2017/04/03/direc220.jpg"/></a></li>
  <li><a href="#img21"><img src="https://esfap.edu.pe/images/2017/04/03/direc221.jpg"/></a></li>
  <li><a href="#img22"><img src="https://esfap.edu.pe/images/2017/04/03/direc222.jpg"/></a></li>
  <li><a href="#img23"><img src="https://esfap.edu.pe/images/2017/04/03/direc223.jpg"/></a></li>
  <li><a href="#img24"><img src="https://esfap.edu.pe/images/2017/04/03/direc224.jpg"/></a></li>


  <li><a href="#img25"><img src="https://esfap.edu.pe/images/2017/04/03/direc225.jpg"/></a></li>
<li><a href="#img6"><img src="https://esfap.edu.pe/images/2017/04/03/direc226.jpg"/></a></li>
<li><a href="#img27"><img src="https://esfap.edu.pe/images/2017/04/03/direc227.jpg"/></a></li>
<li><a class="btn" href="#img28"><img src="https://esfap.edu.pe/images/2017/04/03/direc228.jpg"/></a></li>
  <li><a href="#img29"><img src="https://esfap.edu.pe/images/2017/04/03/direc229.jpg"/></a></li>
  <li><a href="#img30"><img src="https://esfap.edu.pe/images/2017/04/03/direc330.jpg"/></a></li>
  <li><a href="#img31"><img src="https://esfap.edu.pe/images/2017/04/03/direc331.jpg"/></a></li>
  <li><a href="#img32"><img src="https://esfap.edu.pe/images/2017/04/03/direc332.jpg"/></a></li>
  <li><a href="#img33"><img src="https://esfap.edu.pe/images/2017/04/03/direc333.jpg"/></a></li>
  <li><a href="#img34"><img src="https://esfap.edu.pe/images/2017/04/03/direc334.jpg"/></a></li>
  <li><a href="#img35"><img src="https://esfap.edu.pe/images/2017/04/03/direc335.jpg"/></a></li>
  <li><a href="#img36"><img src="https://esfap.edu.pe/images/2017/04/03/direc336.jpg"/></a></li>

  <li><a href="#img37"><img src="https://esfap.edu.pe/images/2017/04/03/direc337.jpg"/></a></li>
  <li><a href="#img38"><img src="https://esfap.edu.pe/images/2017/04/03/direc338.jpg"/></a></li>
  <li><a href="#img39"><img src="https://esfap.edu.pe/images/2017/04/03/direc339.jpg"/></a></li>
  <li><a href="#img40"><img src="https://esfap.edu.pe/images/2017/04/03/direc440.jpg"/></a></li>
  <li><a href="#img41"><img src="https://esfap.edu.pe/images/2017/04/03/direc441.jpg"/></a></li>
  <li><a href="#img42"><img src="https://esfap.edu.pe/images/2017/04/03/direc442.jpg"/></a></li>
  <li><a href="#img43"><img src="https://esfap.edu.pe/images/2017/04/03/direc443.jpg"/></a></li>
  <li><a href="#img44"><img src="https://esfap.edu.pe/images/2017/04/03/direc444.jpg"/></a></li>
  <li><a href="#img45"><img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/directores%2FFoto%20de%20Oscar%20Vasquez.jpg?alt=media&token=8ee2848b-8908-4053-b745-afb85c0329bb"/></a></li>
  <li><a href="#img46"><img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/directores%2FWhatsApp%20Image%202021-08-18%20at%2011.52.23%20AM.jpeg?alt=media&token=0775d5dd-4f8d-412f-970a-606813371c8a"/></a></li>
  <li><a href="#img47"><img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/directores%2FWhatsApp%20Image%202021-08-18%20at%2011.52.22%20AM.jpeg?alt=media&token=65f250c9-81aa-4647-afb9-9c1d8d89cfad"/></a></li>
  <li><a href="#img48"><img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/directores%2FWhatsApp%20Image%202021-08-18%20at%2011.52.22%20AM%20(1).jpeg?alt=media&token=0d9d8a7a-ec1b-41fa-b019-ef87b0ddaaaf"/></a></li>
</ul>
  


<figure id="img1" class="lbox bounce">
  <span><a href="#img12" title='Anterior'><i class="fas fa-caret-left"></i></a></span>
<img alt="Cachorrito 1" title="Cachorrito 1" src="https://esfap.edu.pe/images/2017/04/03/direc01.jpg"/>
  <span id='right'><a href="#img2" title='Siguiente'><i class="fas fa-caret-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
  <h2>Título opcional</h2>
</figure>
  
<figure id="img2" class="lbox flip">
  <span><a href="#img1" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 2' src="https://esfap.edu.pe/images/2017/04/03/direc02.jpg" />
  <span id='right'><a href="#img3" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>
  
<figure id="img3" class="lbox bounce">
  <span><a href="#img2" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc03.jpg" />
  <span id='right'><a href="#img4" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>
  
<figure id="img4" class="lbox bounce">
  <span><a href="#img3" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc04.jpg" />
  <span id='right'><a href="#img5" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>
  







  
  


  
  

  
<figure id="img5" class="lbox bounce">
  <span><a href="#img4" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc05.jpg" />
  <span id='right'><a href="#img6" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img6" class="lbox bounce">
  <span><a href="#img5" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc06.jpg" />
  <span id='right'><a href="#img7" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img7" class="lbox bounce">
  <span><a href="#img6" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc07.jpg" />
  <span id='right'><a href="#img8" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img8" class="lbox bounce">
  <span><a href="#img7" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc08.jpg" />
  <span id='right'><a href="#img9" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img9" class="lbox bounce">
  <span><a href="#img8" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc09.jpg" />
  <span id='right'><a href="#img10" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img10" class="lbox bounce">
  <span><a href="#img9" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc110.jpg" />
  <span id='right'><a href="#img11" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img11" class="lbox bounce">
  <span><a href="#img10" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc111.jpg" />
  <span id='right'><a href="#img12" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img12" class="lbox bounce">
  <span><a href="#img11" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc112.jpg" />
  <span id='right'><a href="#img13" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img13" class="lbox bounce">
  <span><a href="#img12" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc113.jpg" />
  <span id='right'><a href="#img14" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img14" class="lbox bounce">
  <span><a href="#img13" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc114.jpg" />
  <span id='right'><a href="#img15" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img15" class="lbox bounce">
  <span><a href="#img14" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc115.jpg" />
  <span id='right'><a href="#img16" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img16" class="lbox bounce">
  <span><a href="#img15" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc116.jpg" />
  <span id='right'><a href="#img17" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img17" class="lbox bounce">
  <span><a href="#img16" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc117.jpg" />
  <span id='right'><a href="#img18" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img18" class="lbox bounce">
  <span><a href="#img17" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc118.jpg" />
  <span id='right'><a href="#img19" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img19" class="lbox bounce">
  <span><a href="#img18" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc119.jpg" />
  <span id='right'><a href="#img20" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img20" class="lbox bounce">
  <span><a href="#img19" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc220.jpg" />
  <span id='right'><a href="#img21" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img21" class="lbox bounce">
  <span><a href="#img20" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc221.jpg" />
  <span id='right'><a href="#img22" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img22" class="lbox bounce">
  <span><a href="#img21" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc222.jpg" />
  <span id='right'><a href="#img23" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img23" class="lbox bounce">
  <span><a href="#img22" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc223.jpg" />
  <span id='right'><a href="#img24" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img24" class="lbox bounce">
  <span><a href="#img23" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc224.jpg" />
  <span id='right'><a href="#img25" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img25" class="lbox bounce">
  <span><a href="#img24" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc225.jpg" />
  <span id='right'><a href="#img26" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img26" class="lbox bounce">
  <span><a href="#img25" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc226.jpg" />
  <span id='right'><a href="#img27" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img27" class="lbox bounce">
  <span><a href="#img26" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc227.jpg" />
  <span id='right'><a href="#img28" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img28" class="lbox bounce">
  <span><a href="#img27" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc228.jpg" />
  <span id='right'><a href="#img29" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img29" class="lbox bounce">
  <span><a href="#img28" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc229.jpg" />
  <span id='right'><a href="#img30" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img30" class="lbox bounce">
  <span><a href="#img29" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc330.jpg" />
  <span id='right'><a href="#img31" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img31" class="lbox bounce">
  <span><a href="#img30" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc331.jpg" />
  <span id='right'><a href="#img32" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img32" class="lbox bounce">
  <span><a href="#img31" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc332.jpg" />
  <span id='right'><a href="#img33" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img33" class="lbox bounce">
  <span><a href="#img32" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc333.jpg" />
  <span id='right'><a href="#img34" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img34" class="lbox bounce">
  <span><a href="#img33" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc334.jpg" />
  <span id='right'><a href="#img35" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img35" class="lbox bounce">
  <span><a href="#img34" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc335.jpg" />
  <span id='right'><a href="#img36" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img36" class="lbox bounce">
  <span><a href="#img35" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc336.jpg" />
  <span id='right'><a href="#img37" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img37" class="lbox bounce">
  <span><a href="#img36" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc337.jpg" />
  <span id='right'><a href="#img38" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img38" class="lbox bounce">
  <span><a href="#img37" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc338.jpg" />
  <span id='right'><a href="#img39" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img39" class="lbox bounce">
  <span><a href="#img38" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc339.jpg" />
  <span id='right'><a href="#img40" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img40" class="lbox bounce">
  <span><a href="#img39" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc440.jpg" />
  <span id='right'><a href="#img41" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img41" class="lbox bounce">
  <span><a href="#img40" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc441.jpg" />
  <span id='right'><a href="#img42" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img42" class="lbox bounce">
  <span><a href="#img41" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc442.jpg" />
  <span id='right'><a href="#img43" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img43" class="lbox bounce">
  <span><a href="#img42" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc443.jpg" />
  <span id='right'><a href="#img44" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img44" class="lbox bounce">
  <span><a href="#img43" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://esfap.edu.pe/images/2017/04/03/direc444.jpg" />
  <span id='right'><a href="#img45" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>











<figure id="img45" class="lbox bounce">
  <span><a href="#img44" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/directores%2FFoto%20de%20Oscar%20Vasquez.jpg?alt=media&token=8ee2848b-8908-4053-b745-afb85c0329bb" />
  <span id='right'><a href="#img46" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img46" class="lbox bounce">
  <span><a href="#img45" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/directores%2FWhatsApp%20Image%202021-08-18%20at%2011.52.23%20AM.jpeg?alt=media&token=0775d5dd-4f8d-412f-970a-606813371c8a" />
  <span id='right'><a href="#img47" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>

<figure id="img47" class="lbox bounce">
  <span><a href="#img46" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/directores%2FWhatsApp%20Image%202021-08-18%20at%2011.52.22%20AM.jpeg?alt=media&token=65f250c9-81aa-4647-afb9-9c1d8d89cfad" />
  <span id='right'><a href="#img48" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>
<figure id="img48" class="lbox bounce">
  <span><a href="#img47" title='Anterior'><i class="fas fa-angle-left"></i></a></span>
<img title='Cachorrito 3' src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/directores%2FWhatsApp%20Image%202021-08-18%20at%2011.52.22%20AM%20(1).jpeg?alt=media&token=0d9d8a7a-ec1b-41fa-b019-ef87b0ddaaaf" />
  <span id='right'><a href="#img49" title='Siguiente'><i class="fas fa-angle-right"></i></a></span>
<a title='Cerrar' href="#_"><i class="fas fa-times"></i></a>
</figure>


  

  
  
  
  </div>
  

  <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
    <script src="https://kit.fontawesome.com/a4c4c8e4e2.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet"/>
    </Helmet>
 
  </Layout>
)

export default GaleriaDeDirectoresPage
