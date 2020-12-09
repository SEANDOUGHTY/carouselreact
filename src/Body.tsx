import React from 'react';
import Carousel from './components/Carousel';
import Featurette from './components/Featurette';
import Card from './components/Card';
import ContactForm from './components/ContactForm';

function createCard(card: any){
  return (<Card {...card}/>)
}

function createFeaturette(featurette: any, index: number) {
  return (<Featurette align={index % 2 ? "right" : "left"} {...featurette}/>)
}

const Body = (data: any) => (
  <body className="text-right" dir="rtl">
    <Carousel {...data}/>
    <br />
    <div className="container marketing">
      <div className="row">
        {data.cards.map(createCard)}
      </div>
        {data.featurettes.map(createFeaturette)}
      <hr className="featurette-divider"/>
      <h2 className="h1-responsive font-weight-bold text-center my-4">{data.info.contactTitle}</h2>
      <p className="text-center w-responsive mx-auto mb-5">{data.info.contactMessage}</p>
      <ContactForm />
    </div>
    <br />
  </body>
);

export default Body;