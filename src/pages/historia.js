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
export const HistoriaTemplate = ({
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

const Historia = () => (
  <Layout  >
<header class="masthead">
	<p class="masthead-intro">ESCUELA SUPERIOR DE GUERRA AÉREA</p> 
	<h1 class="masthead-heading">HISTORIA</h1>
</header>
 <h1>História</h1>
<div className="tabs">
    
<Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Reseña" key="1">
    El rápido desarrollo de la Aeronáutica Militar del Perú, especialmente en los años inmediatamente anteriores y posteriores a la II Guerra Mundial planteó con carácter de urgencia la necesidad de adaptar la preparación del Personal de Oficiales a la problemática creada por el crecimiento del empleo del Arma Aérea, por la constante incorporación a sus actividades de equipos y materiales modernos y por la importancia cada vez mayor, que adquiría para el país, la Defensa Nacional. <br/>
    Era indudable que, paralelamente a las adquisiciones de material, debía proporcionarse al Personal Superior de la Fuerza Aérea los elementos de capacitación profesional y técnica, indispensables para emplear eficientemente dicho material. El envío de Oficiales en misión de estudios para recibir Cursos de Perfeccionamiento o especialización en centros extranjeros de instrucción profesional, resultaba a todas luces insuficiente para resolver este problema en toda su magnitud, ya sea por razones de orden económico o por evidente inconveniencia de sustraer casi ininterrumpidamente de sus Unidades a grupos numerosos de Jefes y Oficiales. <br/>
    Estas condiciones creadas por el desarrollo de la Aviación Militar, sirvieron de fundamento para que durante el gobierno del Presidente Bustamante y Rivero con el D.S. Nº 43 expedido el 20 de Setiembre de 1946, se estableciera un centro militar de estudios superiores, con la denominación: "Academia de Guerra Aérea", bajo la dependencia del Estado Mayor General de Aeronáutica, para capacitar en el mejor desempeño de las altas funciones de Comando y Estado Mayor del Personal Superior FAP, que veía así materializada una de sus más importantes aspiraciones. <br/>
    La Academia de Guerra Aérea inició sus actividades, de conformidad con las disposiciones contenidas en la Resolución Suprema N° 131, del 06 de Marzo de 1947, orientándolas a través de tres fases perfectamente definidas. La primera fase comprendía la preparación y organización de las labores académicas y de los servicios necesarios para su cumplimiento. La segunda fase tenía como objetivo la ejecución de un "Curso Especial de Información" para el Personal Superior acerca de la Organización y Funcionamiento del Comando y Estado Mayor General de Aeronáutica y sus dependencias. En la tercera fase comenzarían a dictarse Cursos Regulares, conforme a los planes que se elaborasen en la etapa de preparación. <br/>
    Después de su inauguración el 22 de Agosto de 1947, la Academia de Guerra Aérea comenzó a funcionar en la Base Aérea "Alférez Huguet" (Ancón) por breve tiempo, continuando luego en Las Palmas en un Pabellón de la Escuela de Oficiales especialmente acondicionado, desarrollándose el primer Curso de Información. El año siguiente fue trasladada a Collique, donde se dictó el Primer Curso Táctico con el sistema de Instrucción denominado "Escuela de Cooperación Mutua". A partir de 1949 ocupó el Castillo Rospigliosi en Lince; el 1º de Marzo de 1962 se inauguró el Primer Curso de Alto Mando de la FAP. El 15 de Abril de 1991 inauguró sus nuevas instalaciones en el distrito de La Molina con una infraestructura, equipamiento y tecnología moderna. <br/>
    Por Decreto Ley N° 21165 complementado por el Decreto Supremo N° 021 del 08 de Setiembre de 1975, se cambia la denominación de Academía de Guerra Aérea (AGA) por la Escuela Superior de Guerra Aérea (ESFAP). <br/>
    En 1950 se graduó la Primera Promoción de Oficiales del Curso de Comando y Estado Mayor y ese mismo año, al cambiar el Cuerpo Aeronaútico del Perú (CAP) su denominación por la actual Fuerza Aérea del Perú (FAP), según lo dispuesto en el D.L. Nº 11471, y al establecerse el Centro de Instrucción de Aeronáutica, la Academia de Guerra Aérea integró esta última organización, conservando su alta jerarquía de Escuela de Estudios Superiores para el Personal de Oficiales de la Fuerza Aérea. <br/>
    </TabPane>
    <TabPane tab=" La Academia " key="2">
    DECRETO SUPREMO Nº 43 <br/>
    EL PRESIDENTE DE LA REPUBLICA <br/>
    <br/>
    CONSIDERANDO: <br/>
    Que es de impostergable necesidad la creación, en el Cuerpo Aeronáutico del Perú, de un Centro Superior de Estudios Militares, para el perfeccionamiento profesional de Jefes y Oficiales, de acuerdo con los progresos alcanzados en materia aeronáutica militar del país, y con la conveniencia de capacitarlos para el mejor desempeño de las altas funciones de Comando y Estado Mayor. <br/>
    Que los esfuerzos desplegados por el Supremo Gobierno para incrementar el número de Jefes y Oficiales del Cuerpo Aeronáutico del Perú "Diplomados de Estado Mayor" por envíos al extranjero, en misión de estudios, no llenan ampliamente las necesidades del Cuerpo Aeronáutico del Perú, por resultar muy onerosos los envíos en la escala necesaria. <br/>
    Que el proyecto del Programa Anual de Estudios de Estado Mayor, reúne las condiciones necesarias para satisfacer la necesidad sentida en el primer párrafo de este considerando, en dicha rama de Estado Mayor. <br/>
    Que dicho Centro de Estudios Militares podría funcionar con el título de Academia de Guerra Aérea; y estando a lo opinado por el Jefe del Estado Mayor de Aeronáutica y a lo acordado por el Señor Ministro del Ramo. <br/>
    <br/>
    DECRETA: <br/>
    1º.- Créase, en el Cuerpo Aeronáutico del Perú y dependiente del Estado Mayor General de Aeronáutica, un Centro Superior de Estudios Militares para Jefes y Oficiales de Aeronáutica, denominado Academia de Guerra Aérea (AGA). <br/>
    2º.- Las actividades de dicho Centro deberán comenzar a funcionar a partir del año académico de 1947, con una duración anual de diez meses. <br/>
    3º.- La referida escuela tendrá como sede la Base Aérea "Alférez Huguet" (Ancón). <br/>
    4º.- El Estado Mayor General de Aeronáutica, queda encargado de asegurar la preparación, puesta en ejecución y reglamentaciones de lo dispuesto en el presente Decreto. <br/>
    Dado en la Casa de Gobierno, en Lima, a los veinte días del mes de Setiembre de mil novecientos cuarenta y seis.
    <br/> <br/>
    (Fdo.) DOCTOR JOSE LUIS BUSTAMANTE Y RIVERO <br/>
    Presidente Constitucional del Perú <br/>
    </TabPane>
    <TabPane tab=" El Castillo " key="3">
        <p>
        En pleno corazón de Lima exactamente en la cuarta cuadra del Jirón Manuel Segura en Lince, ocupando casi toda una manzana, se yergue majestuoso un castillo de estilo medioeval con sus murallas, miradores, torreones y barbacanas de líneas arquitectónicas al estilo de las grandes edificaciones feudales. <br/>

Se trata del "Castillo Rospigliosi", construido contra viento y marea en 1929, la construcción de la colosal obra fue idea del doctor Carlos J. Rospigliosi Vigil, doctor en ciencias naturales y medicina, distinguido estudioso de los problemas en el campo de la investigación científica. <br/>

Original, excéntrico y millonario, el doctor Rospigliosi entusiasmado por la anunciada visita al Perú del Rey Alfonso XIII (con quien entabló amistad al igual que con elementos de los círculos científicos más distinguidos, durante su viaje a Europa en 1922), se empeño en concretar la construcción del castillo en pleno siglo veinte. <br/>

El proyecto tuvo desde el principio oposición de los arquitectos, quienes se negaron a dar el visto bueno por considerar la obra un capricho. Pero después de estos primeros tropiezos, el Dr. Rospigliosi logró la aprobación de las autoridades, para lo cual tuvo que "mover cielo y tierra". <br/>
Sus esfuerzos tenían una finalidad concreta: proporcionar un castillo para un ilustre huésped como el Rey Alfonso XIII durante su estadía en Lima, y atraer la admiración de todos aquellos que lo visitaran.

El mismo Rospigliosi realizó los planos de su imponente obra y además ofició de maestro de obras. Su excentricidad llegó al colmo cuando solicito al municipio cavar una fosa alrededor de la construcción, para de esta manera justificar la instalación del puente levadizo que formaba parte de su proyecto lo cual, naturalmente, le fue negado. <br/>

Cuando la obra ya llegaba a su fin a pesar de la muchas dificultades que se le presentaron, entre ellas la escasez de cemento que obligó a construir algunas paredes de adobe revestidas solamente por una capa de cemento, llegó la noticia de la Revolución española. <br/>

Surgió la República y Alfonso XIII ya no era más monarca de España, motivo por el cual su proyectado viaje al Perú se frustró y el Dr. Rospigliosi tuvo que conformarse con habitarlo y convertir el castillo en su vivienda familiar. <br/>

El médico limeño vivió en su castillo por algunos años, era una especie de museo tanto por sus acabados en la fachada como en el interior. <br/>

En sus amplios y espaciosos salones resalta con nitidez el cielo raso cubierto de madera con diseños al estilo barroco, que refleja un prolijo trabajo de los carpinteros, como lo demuestra el hermoso pasamanos de motivos coloniales en la escalera que comunica a la planta alta. Sus grandes ventanales tanto del primer piso como del segundo, reflejan la luz a través de sus vitrales de colores, que proporcionan a los salones un ambiente acogedor. <br/>

El cuarto de baño es otro de los rincones curiosos que posee el castillo, donde se observan la tina y el lavatorio, cada uno de éstos tiene como vertedores rostros de seres mitológicos, de cuyas bocas fluye el agua, todos hechos de mármol y lo que es más, se encuentran en buen estado de conservación. También sobresalen la glorieta en el patio principal y una pileta de elegante diseño. <br/>
Desde 1949, el "Castillo Rospigliosi" fue sede de la Academia de Guerra Aérea (AGA), siendo Director el Coronel FAP Guillermo Van Oordt. Era Ministro de Aeronáutica el General FAP Armando Revoredo Iglesias y en el gobierno estaba el Presidente José Bustamante y Rivero. <br/>

Fue sede de la AGA y posterior de la Escuela Superior de Guerra Aérea hasta Abril de 1991.
        </p>
    </TabPane>
  </Tabs>

</div>
 
  </Layout>
)

export default Historia
