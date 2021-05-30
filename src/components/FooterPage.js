import React from 'react'
import './footerPage.css'

export default () => (
  <div>
      <footer class="footer">
            <div class="footer__addr">
                <h1 class="footer__logo"><img src="https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Logo%2Fesfap_cabezera_solax60a.png?alt=media&token=b82a289a-7ae2-4b47-9c90-ec65d3de72f5" alt="Logo de la esfap"/></h1>
                    
                <h2>Escuela Superior de Guerra Aerea</h2>
                
                <address>
                Av. Manuel Prado Ugarteche y
                Calle 3 S/N
                Rinconada Baja - LA MOLINA
                </address>
            </div>
            
            <ul class="footer__nav">
                <li class="nav__item">
                <h2 class="nav__title">Servicios</h2>

                <ul class="nav__ul">
                    <li>
                    <a href="#">PAM</a>
                    </li>

                    <li>
                    <a href="#">PCEM</a>
                    </li>
                        
                    <li>
                    <a href="#">PEMOS</a>
                    </li>       
                    <li>
                    <a href="#">PT</a>
                    </li>
                           
                    <li>
                    <a href="#">logeo</a>
                    </li>
                </ul>
                </li>
                
                <li class="nav__item">
                <h2 class="nav__title">Nosotros</h2>

                <ul class="nav__ul">
                    <li>
                    <a href="#">Av. Manuel Prado Ugarteche y
                                Calle 3 S/N Rinconada Baja - LA MOLINA
                    </a>
                    </li>
                    <li>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2319.8555900387487!2d-76.93568957679506!3d-12.076751963692232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6d937f3ed37%3A0x71b45a0bcff8f08c!2sEsfap!5e0!3m2!1ses-419!2spe!4v1622320409302!5m2!1ses-419!2spe" width="600" height="450"   loading="lazy"></iframe>
                    </li>
                  
                </ul>
                </li>
                
                <li class="nav__item">
                <h2 class="nav__title">Sitios de Interes</h2>
                
                <ul class="nav__ul">
                    <li>
                    <a href="#">Estado Peruano</a>
                    </li>
                    
                    <li>
                    <a href="#">Ministerio de Defensa</a>
                    </li>
                    
                    <li>
                    <a href="#">Comando Conjunto</a>
                    </li>
                    <li>
                    <a href="#">Marina de Guerra</a>
                    </li>
                    <li>
                    <a href="#">Fuerza Aérea del Perú</a>
                    </li>
                    <li>
                    <a href="#">Ejercito del Perú</a>
                    </li>
                    <li>
                    <a href="#">Escuela de Oficiales FAP</a>
                    </li>
                    <li>
                    <a href="#">Biblioteca Nacional del Peru</a>
                    </li>
                </ul>
                </li>
                
            </ul>
            
            <div class="legal">
                <p>&copy; 2021 Something. All rights reserved.</p>
                
                <div class="legal__links">
                <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
                </div>
            </div>
            </footer>
  </div>
)
