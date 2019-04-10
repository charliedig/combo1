import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Carousels extends Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://ichef.bbci.co.uk/news/976/cpsprodpb/12405/production/_97175747_supreme1.jpg"
            alt="First slide"
            style={imgstyle}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.off---white.com/images/156374/large_OMIA066S188000161001_1.jpg?1529315886"
            alt="Third slide"
            style={imgstyle}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/adidas-yeezy-boost-350-pirate-black_jf6gh2.jpg"
            alt="Third slide"
            style={imgstyle}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
const imgstyle = {
  objectFit: 'cover',
  height: '850px'
}
export default Carousels;
