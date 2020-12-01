import React from 'react';
import Carousel from './components/Carousel';
import Featurette from './components/Featurette';
import Card from './components/Card';

const Body = () => (
  <div>
    <Carousel/>
    <div className="container marketing">
      <div className="row">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Featurette align="left"/>
      <Featurette align="right"/>
      <Featurette align="left"/>
      <hr className="featurette-divider"/>
    </div>
  </div>
);

export default Body;