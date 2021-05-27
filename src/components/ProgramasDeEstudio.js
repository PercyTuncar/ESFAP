import React, { Component } from 'react';

import './ProgramasDeEstudio.css'


const img01 = {
    backgroundImage: 'url(//source.unsplash.com/300x401)',
  };
  
const img02 = {
    backgroundImage: 'url(//source.unsplash.com/300x402)',
  };
  
const img03 = {
    backgroundImage: 'url(//source.unsplash.com/300x403)',
  };

class ProgramasDeEstudio extends Component {
  render() {
    return (
      <div  className="section_programas">
          
<div class="content">
  <h1 class="heading">PROGRAMAS DE ESTUDIO</h1>
  <a class="card" href="#!">
    <div class="front" style={img01}>
      <p>PROGRAMAS DE POST GRADO</p>
    </div>
    <div class="back">
      <div>
        <p> Maestria PAM </p>
        <p>Dirigida a Oficiales de grado de Coronel.</p>
        <button class="button">SEGUIR LEYENDO</button>
      </div>
    </div></a><a class="card" href="#!">
    <div class="front" style={img02}>
      <p>PROGRAMAS DOCTRINARIOS.</p>
    </div>
    <div class="back">
      <div>
        <p>PROGRAMAS DOCTRINARIOS </p>
        <p>Programa Alto Mando - PAM</p>
        <p>Programa Comando y Estado Mayor - PCEM</p>
        <p>Comando y Estado Mayor Oficiales Servicios - PEMOS</p>
        <p>Programa Táctico - PT</p>
        <button class="button">SEGUIR LEYENDO</button>
      </div>
    </div></a><a class="card" href="#!">
    <div class="front" style={img03}>
      <p>PROGRAMAS DE ESPECIALIZACIÓN</p>
    </div>
    <div class="back">
      <div>
        <p> PROGRAMAS DE ESPECIALIZACIÓN </p>
        <button class="button">SEGUIR LEYENDO</button>
      </div>
    </div></a>
</div>
      </div>
    );
  }
}

export default ProgramasDeEstudio;