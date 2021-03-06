import React from 'react';

const CarouselItem = (props: any) => {
  return (
    <div className={`carousel-item py-3 ${props.active === "true" ? "active" : ""}`}>
        <div className="row carousel-row">
          <div className="col-md-5 carousel-image-caption my-auto">
            <h1>{props.title}</h1>
            <h2>{props.body}</h2>
            <br />
            <a className="btn btn-default border-warning mt-4" href="/#purchase" role="button">{props.button}</a>
          </div>
          <div className="col-md-7 corousel-image-col text-center">
            <img
              className="px-0 carousel-image"
              src={require("../assets/desk-photos/" + props.image + ".jpg").default}
              alt="carousel"
            />
          </div>
        </div>
      </div>
  );
}

export default CarouselItem;
