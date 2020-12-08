import React from 'react';

const CarouselItem = (props: any) => {
  return (
    <div className={`carousel-item py-3 ${props.active === "true" ? "active" : ""}`}>
        <div className="row carousel-row">
          <div className="col-lg-7 carousel-image-caption">
            <h1>{props.title}</h1>
            <h4>{props.body}</h4>
            <a className="btn btn-lg btn-primary mt-4" href="/#purchase" role="button">{props.button}</a>
          </div>
          <div className="col-lg-5 corousel-image-col text-center" style={{paddingLeft: 0}}>
            <img
              className="img-rounded border px-0 carousel-image"
              src={require("../assets/desk-photos/" + props.image + ".jpg").default}
              alt="carousel"
            />
          </div>
        </div>
      </div>
  );
}

export default CarouselItem;
