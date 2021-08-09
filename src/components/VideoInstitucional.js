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




                <div className="video_container">
                <div class="wrapper">
           <h1 className="video_title">CONSULTAS VIRTUALES</h1>

                <section class="columns">
                    
                    <div class="column">
                        <div class="paper"><img class="poster" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Icons%2Fvirtual-reality.png?alt=media&token=38320102-5c36-41a9-a756-b767473bffdc"/>
                            <h1>CAMPUS VIRTUAL</h1>
                                <a class="btn_virtual">Ver página</a>
                            <div class="space"></div>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="paper"><img class="poster" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Icons%2Fbooks.png?alt=media&token=745c3661-fddb-4fbf-a896-42a1e883ae93"/>
                            <h1>BIBLIOTECA VIRTUAL FAP</h1>
                                <a class="btn_virtual">Ver página</a>
                            <div class="space"></div>
                        </div>
                    </div>
                
                <div class="column">
                        <div class="paper"><img class="poster" src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Icons%2Fdocument.png?alt=media&token=ceb2a2e5-c8e5-4b9f-9a39-549c090aa109"/>
                            <h1>VER NOTAS DE LOS DOCENTES</h1>
                                <a class="btn_virtual">Ver página</a>
                            <div class="space"></div>
                        </div>
                    </div>
                    
                </section>	
                    
          

                </div>
           </div>


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