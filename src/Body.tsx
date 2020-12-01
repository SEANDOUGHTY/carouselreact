import React from 'react';
import Carousel from './Carousel';
import Featurette from './Featurette';
import Card from './Card';

function Body() {
  return (
    <div>
    <Carousel />
    <div className="container marketing">
      <div className="row">
            <Card />
            <Card />
            <Card />
      </div>

      <Featurette align="left" />
      <Featurette align="right" />
      <Featurette align="left" />
      <hr className="featurette-divider" />
      </div>
    </div>
    )
}
export default Body;