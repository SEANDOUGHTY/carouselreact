import React from 'react';

const CarouselItem = (props: any) => {
  return (
    <div className={`carousel-item ${props.active === "true" ? "active" : ""}`}>
      <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
           preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
        <rect width="100%" height="100%" fill="#777"/>
      </svg>
      <div className="container">
        <div className={`carousel-caption text-right row`}>
          <img
            className="col-3 img-rounded border px-0"
            src={require("../assets/desk-photos/" + props.image + ".jpg").default}
            alt="carousel"
          />
          <div className="col">
            <h1>{props.title}</h1>
            <h4>{props.body}</h4>
            <a className="btn btn-lg btn-primary mt-4" href="/#purchase" role="button">{props.button}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem