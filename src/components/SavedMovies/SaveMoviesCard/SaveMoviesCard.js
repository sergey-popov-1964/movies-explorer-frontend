import React from 'react';
import './SaveMoviesCard.css';
import closeButton from "../../../images/close-button.svg";

function SaveMoviesCard({card, onDelete}) {

  function handleDeleteFilm() {
    onDelete(card._id)
  }

  const lengthHour = (card.duration - card.duration % 60) / 60
  const lengthMinute = card.duration % 60

  return (
    <li className="element">
      <a href={card.trailer} target="_blank" rel="noopener noreferrer">
      <img src={card.image}
           alt={card.nameRU}
           className="image"/>
      </a>
      <div className="description">
        <div className="content">
          <p className="content__text">{card.nameRU}</p>
          <p className="content__duration">{`${lengthHour}ч `}{lengthMinute !== 0 ? `${lengthMinute}м` : ""}</p>
        </div>
        <img src={closeButton}
             className="content__close"
             onClick={handleDeleteFilm}
             alt="Кнопка удаления фильма из сохраненных"/>
      </div>
    </li>
  );

}
export default SaveMoviesCard;
