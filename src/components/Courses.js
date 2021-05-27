import React, { Component } from 'react';
import { ButtonToolbar } from 'rsuite';
import { Button } from 'rsuite';

import './courses.css'

class Courses extends Component {
  render() {
    return (
      <div className="section-courses">
       
            <div className="section-heading">
                <h1>PERFECCIONAMIENTO ESPECIALIZADO</h1>
                <p className="lead">Cursos y diplimados</p>
            </div>
    
            <div  className="cards_container">
                <ul className="cards">
                        <li className="cards__item">
                        <a href="#">
                            <div className="card">
                            <div className="card__image card__image--1"></div>
                            <div className="card__content">
                                <div className="card__title">SAR</div>
                                <p className="card__text">Administración del sistema de búsqueda y salvamento aeronáutico (sar)</p>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li className="cards__item">
                        <a href="#">
                        <div className="card">
                            <div className="card__image card__image--2"></div>
                            <div className="card__content">
                            <div className="card__title">INVAC</div>
                            <p className="card__text">Diplomado en investigación de accidentes (invac).</p>
                            </div>
                        </div>
                        </a>
                    </li>
                    <li className="cards__item">
                        <a href="#">
                        <div className="card">
                            <div className="card__image card__image--3"></div>
                            <div className="card__content">
                            <div className="card__title">PREVAC</div>
                            <p className="card__text">Diplomado en prevención de accidentes (prevac).</p>
                            </div>
                        </div>
                        </a>
                    </li>
                    </ul>
            </div>
            <ButtonToolbar className="btn">
                <Button color="yellow" appearance="ghost" >Ver más</Button>
            </ButtonToolbar>
           
      </div>
    );
  }
}

export default Courses;