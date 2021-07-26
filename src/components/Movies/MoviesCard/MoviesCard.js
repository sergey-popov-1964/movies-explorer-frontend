import React from 'react';
import './MoviesCard.css';
import heartRed from "../../../images/heart-red.svg";

function MoviesCard(card) {

  const lengthHour = (card.card.duration - card.card.duration % 60) / 60
  const lengthMinute = card.card.duration % 60
  return (
    <li className="element">
      <img src={card.card.image} alt={card.card.nameRU} className="image"/>
      <div className="description">
        <div className="content">
          <p className="content__text">{card.card.nameRU}</p>
          <p className="content__duration">{`${lengthHour}ч `}{lengthMinute !== 0 ? `${lengthMinute}м` : ""}</p>
        </div>
        <img src={heartRed} className="content__heart" alt="Кнопка сохранения фильма"/>
      </div>
    </li>
  );
}

export default MoviesCard;
