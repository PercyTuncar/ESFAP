import React from 'react'
import './videoInstitucional.css'
 
export default function VideoInstitucional() {
    return (
        <>
         
           <h1 className="video_title">VIDEO INSTITUCIONAL</h1>
                <div className="video-responsive">
                <iframe  src="https://www.youtube.com/embed/pA6RttM2uPk" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                </div>




                <div className="video_container">
                <div class="wrapper">
           <h1 className="video_title">CONSULTAS VIRTUALES</h1>

                <section class="columns">
                    
                    <div class="column">
                        <div class="paper"><img class="poster" src="https://esfap.edu.pe/images/WhatsAppImage2021-02-02at0823341.jpeg"/>
                            <h1>CAMPUS VIRTUAL</h1>
                                <a class="btn_virtual">Ver página</a>
                            <div class="space"></div>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="paper"><img class="poster" src="https://esfap.edu.pe/images/WhatsAppImage2020-02-19at1641421.jpeg"/>
                            <h1>BIBLIOTECA VIRTUAL FAP</h1>
                                <a class="btn_virtual">Ver página</a>
                            <div class="space"></div>
                        </div>
                    </div>
                
                <div class="column">
                        <div class="paper"><img class="poster" src="https://esfap.edu.pe/images/WhatsAppImage2021-02-02at0823331.jpeg"/>
                            <h1>CONSULTA DE NOTAS PARA DOCENTES</h1>
                                <a class="btn_virtual">Ver página</a>
                            <div class="space"></div>
                        </div>
                    </div>
                    
                </section>	
                    
          

                </div>
           </div>
    </>
    );
}