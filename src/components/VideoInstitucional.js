import React from 'react'
import './videoInstitucional.css'
 
export default function VideoInstitucional() {
    return (
        <>
         
        




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
                <iframe  src="https://www.youtube.com/embed/pA6RttM2uPk" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                </div>
    </>
    );
}