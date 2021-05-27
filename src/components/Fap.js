import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './fap.css'

class Fap extends Component {
  render() {
    return (
      <div>
        <Fade bottom>
            <div className="section-heading">
                <h2>FUERZA AÉREA DEL PERÚ</h2>
                <p className="lead">La Fuerza de todos los peruanos</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Logo%2Ffap.png?alt=media&token=5f9c33eb-3e5f-4dbb-a093-2416c7bd0fae" alt="Logo Fuerza Aera del Peru"/>
            </div>
        </Fade>
        
                    <div className="wrapper_content">
                        <div className="product-img">
                        <img src="https://esfap.edu.pe/images/2021/04/23/whatsapp-image-2020-01-24-at-16.26.20.jpeg" height="420" width="327"/>
                        </div>
                        <div className="product-info"> 
                      
                                <h1>ESCUELA SUPERIOR DE GUERRA AÉREA</h1>
                                <h2>Nuestra misión</h2>
                                <p>Especializar y perfeccionar profesionalmente al 
                                    personal de Oficiales de la Fuerza Aérea del Perú, en 
                                    concordancia con los objetivos institucionales y 
                                    educativos, mediante una cultura de calidad, investigación e 
                                    innovación educativa, a fin de lograr líderes con valores y 
                                    competencias adecuadas, capaces de conducir la Institución en 
                                    todos sus niveles de comando y otros organismos integrantes del 
                                    poder aeroespacial, militar y nacional.</p>
                        </div>
                    </div>
      </div>
    );
  }
}

export default Fap;