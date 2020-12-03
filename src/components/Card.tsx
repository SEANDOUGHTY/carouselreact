import React from 'react';

const Card = (card: any) => (
  <div className="col-lg-4">

      {
          card.image ? <img src={require("../assets/cards/" + card.image + ".jpg").default} height="140" alt="card"/> :
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                 xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                <rect width="100%" height="100%" fill="#777"/>
                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
            </svg>
      }
    <h2>{card.title}</h2>
    <p>{card.body}</p>
  </div>
);

export default Card;