import React from 'react';
// @ts-ignore
import CarouselItem from './CarouselItem';

function createCarouselItem(carouselItem: any, index: number, carouselLength: any) { 
  const active = (index: number) => (index === 0 ? "true" : "false");
  const align = (index: number) => (index === 0 ? "text-left" : (
    index === (carouselLength.length - 1) ? "text-right" : ""));

  return (<CarouselItem active={active(index)} align={align(index)} {...carouselItem}/>)
}

function createCarouselIndicator(carouselItem:any, index:number) {
  return (<li data-target="#myCarousel" data-slide-to={index} className={index === 0 ? "active" : ""}></li>)
}

const Carousel = (data: any) => {
  var carouselLength = data.carousel.length;
  console.log(data.carousel.length)
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {data.carousel.map(createCarouselIndicator)}
      </ol>
      <div className="carousel-inner">
        {data.carousel.map(createCarouselItem, { carouselLength: carouselLength })}         

      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
};
export default Carousel;