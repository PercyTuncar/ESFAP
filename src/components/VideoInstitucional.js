import React from 'react'
import './videoInstitucional.css'
 
export default function VideoInstitucional() {
    return (
        <>
         
         <div className="revistas_home">
    <br></br>
    <br></br>
    <div className="contenedorDos"> 
    <div className="DosColumnas">
     
       <h1 className="title">REVISTAS CIENTIFICAS</h1>
    <p className="p">
    "La revista Ad Majorem Patriae Gloriam de la Escuela Superior de Guerra Aérea de la FAP, es una publicación con fines académicos, busca fomentar la investigación, el pensamiento reflexivo y el dialogo alturado” “Todas los articulos y opiniones vertidas en la presente publicación son responsabilidad exclusiva de los autores”
</p>

    </div>
    <div className="DosColumnas revista">
        <a href="https://esfap.edu.pe/media/attachments/2021/02/05/revista-esfap-20201.pdf"><img  src="https://esfap.edu.pe/images/2021/01/23/revista-esfap-2020.png"></img></a>
        <a href="https://esfap.edu.pe/images/revista/revista_esfap_2019.pdf">  <img  src="https://esfap.edu.pe/images/2021/01/23/revista-esfap-2020.png"></img></a>
        <a href="https://esfap.edu.pe/images/revista/revista_esfap_2018.pdf"><img  src="https://esfap.edu.pe/images/2021/01/23/revista-esfap-2020.png"></img></a>
    </div>

    </div>
</div>



<br/>
<br/>
<br/>
<br/>


           <h1 className="video_title">VIDEO INSTITUCIONAL</h1>
                <div className="video-responsive">

                <div class="container">
	<div class="cards">
		<a class="card card_iframe" href="#">
        <iframe className="videoYT" src="https://www.youtube.com/embed/pA6RttM2uPk" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

		</a>

		<a class="card card_iframe" href="#">

		</a>
		
		<a class="card card_iframe" href="#">
  
		</a>

		
	</div> 
</div>
  
              
                </div>



    </>
    );
}