import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import C1 from "../images/C1.jpg";
import C2 from "../images/C2.jpg";
import C3 from "../images/C3.jpg";
import "../styles/Carousels.css";

function Carousels() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="cpics"
          src={C1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="fir">
          <h5>Pixel Alchemy</h5>
          <p>Generate Images as you Generate them in your mind</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="cpics"
          src={C2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="sec">
          <h5>Neural Notes</h5>
          <p>Where words fall, music speaks</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="cpics"
          src={C3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="thir">
          <h5>Robo Cinematics</h5>
          <p>
            A camera is a save button for mind's eye
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels