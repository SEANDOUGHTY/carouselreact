import React from 'react';

const CarouselItem = (props: any) => (
    <div className={`carousel-item ${props.active === "true" ? "active" : ""}`}>
      <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
        <rect width="100%" height="100%" fill="#777" />
      </svg>
      <div className="container">
        <div className={`carousel-caption ${props.align}`}>
          <h1>{props.title}</h1>
          <p>{props.body}</p>
          <p><a className="btn btn-lg btn-primary" href="/#" role="button">{props.button}</a></p>
        </div>
      </div>
    </div>
  );

export default CarouselItem