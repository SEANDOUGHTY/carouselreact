import React from 'react';

const Card = (card: any) => (
  <div className="col-lg-4">
    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#777"/>
      <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
    </svg>
    <h2>{card.title}</h2>
    <p>{card.body}</p>
    <p><a className="btn btn-secondary" href="/#" role="button">{card.button} &raquo;</a></p>
  </div>
);

export default Card;