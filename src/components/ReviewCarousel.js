import React from 'react';
import { Carousel } from 'react-bootstrap';

import './css/ReviewCarousel.css';

class ReviewCarousel extends React.Component {
  render() {
    return (
      <Carousel style={{height: "250px"}}>
        <Carousel.Item>
          <Carousel.Caption className="no-image">
            <h3>This is great!</h3>
            <p>React Bootstrap is really easy to work with!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="no-image">
            <h3>So easy to use!</h3>
            <p>I love how simple it is.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="no-image">
            <h3>Really easy to set up</h3>
            <p>Some more text could go in here!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ReviewCarousel;