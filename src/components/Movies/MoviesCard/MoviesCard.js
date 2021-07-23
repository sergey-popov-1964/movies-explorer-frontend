import React from 'react';
import './MoviesCard.css';

function MoviesCard(card) {

  console.log(card)
  return (
    <li className="element">
        <img src={card.card.image} alt="" className="image"/>
        <div className="description">
          <div className="content">
            <p className="content__text">{card.card.nameRU}</p>
            <p className="content__duration">{card.card.duration}</p>
          </div>
          <p className="text">X</p>
      </div>
    </li>
  );
}

export default MoviesCard;
