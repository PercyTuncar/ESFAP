import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
export default class Carousel extends Component {
  render() {
 
    return (
    
        <MDBCarousel showIndicators showControls fade className="carousel_home">
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src='https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/slider%2FWhatsApp%20Image%202021-08-08%20at%209.41.46%20PM.jpeg?alt=media&token=be7d7f7a-bf05-44a7-876c-334d76e7cf93' alt='...' />
          <MDBCarouselCaption>
            <h1> MISIÓN DE LA ESFAP
</h1>
            <p>Especializar y perfeccionar profesionalmente al personal de Oficiales de la Fuerza Aérea del Perú, en concordancia con los objetivos institucionales y educativos, mediante una cultura de calidad, investigación e innovación educativa, a fin de lograr líderes con valores y competencias adecuadas, capaces de conducir la Institución en todos sus niveles de comando y otros organismos integrantes del poder aeroespacial, militar y nacional.
.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src='https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/slider%2FWhatsApp%20Image%202021-08-08%20at%209.42.02%20PM.jpeg?alt=media&token=746273ec-34b6-42b9-97b6-85f35a0487b9' alt='...' />
          <MDBCarouselCaption>
            <h1> MISIÓN DE LA ESFAP
</h1>
            <p>Especializar y perfeccionar profesionalmente al personal de Oficiales de la Fuerza Aérea del Perú, en concordancia con los objetivos institucionales y educativos, mediante una cultura de calidad, investigación e innovación educativa, a fin de lograr líderes con valores y competencias adecuadas, capaces de conducir la Institución en todos sus niveles de comando y otros organismos integrantes del poder aeroespacial, militar y nacional.
.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src='https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/slider%2FWhatsApp%20Image%202021-08-08%20at%209.42.21%20PM.jpeg?alt=media&token=7c08eeed-882d-48e6-a67d-0d4d58cb6c25' alt='...' />
          <MDBCarouselCaption>
            <h1> MISIÓN DE LA ESFAP
</h1>
            <p>Especializar y perfeccionar profesionalmente al personal de Oficiales de la Fuerza Aérea del Perú, en concordancia con los objetivos institucionales y educativos, mediante una cultura de calidad, investigación e innovación educativa, a fin de lograr líderes con valores y competencias adecuadas, capaces de conducir la Institución en todos sus niveles de comando y otros organismos integrantes del poder aeroespacial, militar y nacional.
.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    );
  }
}