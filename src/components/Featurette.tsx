import React from 'react';


const Featurette = (props: any) => (
  <div>
    <hr className="featurette-divider"/>
    <div className="row featurette">
      <div className={`col-md-7 ${props.align === "right" ? "order-md-2" : ""}`}>
        <h2 className="featurette-heading">{props.title[0]} <span
          className="text-muted">{props.title[1]}</span></h2>
        <p className="lead">{props.body}</p>
      </div>
      <div className={`col-md-5 ${props.align === "right" ? "order-md-1" : ""}`}>
        <img
          className="img-rounded border px-0"
          src={require("../assets/desk-photos/" + props.img + ".jpg").default}
          alt="carousel"
          width="400px"
        />
      </div>
    </div>
  </div>
)
export default Featurette;