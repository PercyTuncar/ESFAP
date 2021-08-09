import React, { Component } from 'react';

import './ProgramasDeEstudio.css'


const img01 = {
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/WhatsApp%20Image%202021-08-08%20at%209.45.25%20PM.jpeg?alt=media&token=e37e093e-9385-4b3d-9a39-f18f05b43e40)',
  };
  
const img02 = {
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/WhatsApp%20Image%202021-08-08%20at%209.45.51%20PM.jpeg?alt=media&token=efa15eac-991f-413f-a296-c84151d5de2b)',
  };
  
const img03 = {
    backgroundImage: 'url(//source.unsplash.com/300x403)',
  };

class ProgramasDeEstudio extends Component {
  render() {
    return (
      <div  className="section_programas">
          
<div class="content">
  <h1 class="heading">PROGRAMAS ACADÉMICOS</h1>
  <a class="card" href="#!">
    <div class="front" style={img01}>
      <p>PROGRAMAS DE ESPECIALIZACIÓN Y PERFECCIONAMIENTO PARA OFICIALES FAP</p>
    </div>
    <div class="back">
      <div>
        <p> Maestria PAM </p>
        <p>Dirigida a Oficiales de grado de Coronel.</p>
        <button class="button">SEGUIR LEYENDO</button>
      </div>
    </div></a><a class="card" href="#!">
    <div class="front" style={img02}>
      <p>PROGRAMAS DE ESPECIALIZACIÓN Y PERFECCIONAMIENTO PARA PUBLICO EN GENERAL.</p>
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
    </div></a>
</div>





<div class="container">
<h1 class="heading">ÚLTIMAS NOTICIAS</h1>
	<div class="cards">
		<a class="card" href="#">
			<span class="card-header bg01" >
				<span class="card-title">
					<h3>DÍA INTERNACIONAL DE LA MUJER</h3>
				</span>
			</span>
			<span class="card-summary">
			ESCUELA SUPERIOR DE GUERRA AÉREA LLEVO A CABO LA CEREMONIA DEL DÍA INTERNACIONAL DE LA MUJER


			</span>
			<span class="card-meta">
				Published: date
			</span>
		</a>

		<a class="card" href="#">
			<span class="card-header bg02">
				<span class="card-title">
					<h3>ESCUELA SUPERIOR DE GUERRA AÉREA</h3>
				</span>
			</span>
			<span class="card-summary">
			ESCUELA SUPERIOR DE GUERRA AÉREA LLEVO A CABO LAS PRIMERAS SUSTENTACIONES DE TESIS DEL PRESENTE AÑO DE LOS BACHILLERES EDUARDO FERNANDO RIOS SOSA Y JAVIER BARRANTES CARRASCO.
			</span>
			<span class="card-meta">
				Published: date
			</span>
		</a>
		
		<a class="card" href="#">
			<span class="card-header bg03" >
				<span class="card-title">
					<h3>Webinar LAS 4 LÍNEAS DE INVESTIGACIÓN DE LA FAP</h3>
				</span>
			</span>
			<span class="card-summary">
			Como parte de las actividades académicas de la Escuela Superior de Guerra Aérea, los invitamos al Webinar: “LAS 4 LÍNEAS DE INVESTIGACIÓN DE LA FAP”
			</span>
			<span class="card-meta">
				Published: date
			</span>
		</a>

		
	</div>
</div>


      </div>
    );
  }
}

export default ProgramasDeEstudio;