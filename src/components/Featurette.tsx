import React from 'react';


const Featurette = (props: any) => (
    <div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className={`col-md-7 ${props.align === "right" ? "order-md-2" : ""}`}>
          <h2 className="featurette-heading">{props.title[0]} <span
            className="text-muted">{props.title[1]}</span></h2>
          <p className="lead">{props.body}</p>
        </div>
        <div className={`col-md-5 ${props.align === "right" ? "order-md-1" : ""}`}>
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
            height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
            role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>
    </div>
  )
export default Featurette;