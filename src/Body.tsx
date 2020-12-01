import React from 'react';
import Carousel from './components/Carousel';
import Featurette from './components/Featurette';
import Card from './components/Card';

function createCard(card: any){
  return (<Card {...card}/>)
}

function createFeaturette(featurette: any, index: number) {
  return (<Featurette align={index % 2 ? "right" : "left"} {...featurette}/>)
}

const Body = (data: any) => (
  <div>
    <Carousel {...data}/>
    <div className="container marketing">
      <div className="row">
        {data.cards.map(createCard)}
      </div>
        {data.featurettes.map(createFeaturette)}    
      <hr className="featurette-divider"/>
    </div>
  </div>
);

export default Body;