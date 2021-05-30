import React, { Component } from 'react';
import { ButtonToolbar } from 'rsuite';
import { Button } from 'rsuite';

import './courses.css'

const colorStart = {
    color: '#FFEB3B'
}

class Courses extends Component {
  render() {
    return (
      <div className="section-courses">
       
            <div className="section-heading">
                <h1>PERFECCIONAMIENTO ESPECIALIZADO</h1>
                <p className="lead">Cursos y diplimados</p>
            </div>
    
        <section class="columns course_card_columns">
                    
                    <div class="column course_card">
                    <div className="card__image card__image--1"></div>
                            <div className="card__content">
                                <div className="card__title">SAR</div>
                                <p className="card__text">Administración del sistema de búsqueda y salvamento aeronáutico (sar)</p>
                                <span  className="card__titleUno">   <Button color="yellow" appearance="ghost" >Ver más</Button></span>
                             
                         
                            </div>
                    </div>
                    
                    <div class="column course_card">
                    <div className="card__image card__image--2"></div>
                            <div className="card__content">
                            <div className="card__title">INVAC</div>
                            <p className="card__text">Diplomado en investigación de accidentes (invac).</p>
                            <span>   <Button color="yellow" appearance="ghost" >Ver más</Button></span>
                            </div>
                    </div>
                
                <div class="column course_card">
                <div className="card__image card__image--3"></div>
                            <div className="card__content">
                            <div className="card__title">PREVAC</div>
                            <p className="card__text">Diplomado en prevención de accidentes (prevac).</p>
                            <span>   <Button color="yellow" appearance="ghost" >Ver más</Button></span>
                            </div>
                    </div>
                    
                </section>	



                
           
      </div>
    );
  }
}

export default Courses;