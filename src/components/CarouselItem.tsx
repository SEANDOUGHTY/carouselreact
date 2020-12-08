import React from 'react';

const CarouselItem = (props: any) => {
  return (
    <div className={`carousel-item py-3 ${props.active === "true" ? "active" : ""}`}>
        <div className="row carousel-row">
          <div className="col-sm-5 corousel-image-col">
            <img
              className="img-rounded border px-0 carousel-image"
              src={require("../assets/desk-photos/" + props.image + ".jpg").default}
              alt="carousel"
            />
          </div>
          <div className="col-sm-7 carousel-image-caption">
            <h1>{props.title}</h1>
            <h4>{props.body}</h4>
            <a className="btn btn-lg btn-primary mt-4" href="/#purchase" role="button">{props.button}</a>
          </div>
        </div>
      </div>
  );
}

export default CarouselItem


{/* <div className={`carousel-item ${props.active === "true" ? "active" : ""}`}>
      <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
           preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
        <rect width="100%" height="100%" fill="#777"/>
      </svg>
      <div className="container">
        <div className={`carousel-caption text-right row`}>
          
          <div className="col">
            
          </div>
        </div>
      </div>
    </div> */}