import React, {useState} from 'react';
import './MoviesCard.css';
import heartRed from "../../../images/heart-red.svg";
import heartTransparent from "../../../images/heart-transparent.svg";
import closeButton from "../../../images/close-button.svg";
import {BEAT_FILMS_IMAGE_URL} from "../../../utils/constants"

function MoviesCard({card, type}) {

  const [isFilmSaved, setIsFilmSaved] = useState(card.saved)
  const isType = type

  function handleChangeSaved() {
    if (isFilmSaved) {
      setIsFilmSaved(false)
    } else {
      setIsFilmSaved(true)
    }
  }

  const lengthHour = (card.duration - card.duration % 60) / 60
  const lengthMinute = card.duration % 60

  return (
    <li className="element">
      {/*<img src={`https://api.nomoreparties.co${card.image.url}`}*/}
      <img src={`${BEAT_FILMS_IMAGE_URL}${card.image.url}`}
           alt={card.nameRU}
           className="image"/>
      <div className="description">
        <div className="content">
          <p className="content__text">{card.nameRU}</p>
          <p className="content__duration">{`${lengthHour}ч `}{lengthMinute !== 0 ? `${lengthMinute}м` : ""}</p>
        </div>
        <img src={heartRed}
             className={isType === "movies" && isFilmSaved ? "content__heart" : "content__heart_nonactive"}
             onClick={handleChangeSaved}
             alt="Сохраненный фильм"/>
        <img src={heartTransparent}
             className={isType === "movies" && !isFilmSaved ? "content__heart" : "content__heart_nonactive"}
             onClick={handleChangeSaved}
             alt="Кнопка сохранения фильма"/>
        <img src={closeButton}
             className={isType === "saved" ? "content__close" : "content__close_nonactive"}
             alt="Кнопка удаления фильма из сохраненных"/>
      </div>
    </li>
  );
}

export default MoviesCard;
