import React, {useState} from 'react';
import './MoviesCard.css';
import heartRed from "../../../images/heart-red.svg";
import heartTransparent from "../../../images/heart-transparent.svg";
import closeButton from "../../../images/close-button.svg";
import {BEAT_FILMS_IMAGE_URL} from "../../../utils/constants"
import MoviesApi from "../../../utils/MoviesApi"

function MoviesCard({card, type}) {

  const [isFilmSaved, setIsFilmSaved] = useState(false)

  function handleSaveFilm() {
    if (!isFilmSaved) {
      const data = {
        country: !card.country ? "Empty" : card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: BEAT_FILMS_IMAGE_URL+card.image.url,
        trailer: card.trailerLink,
        nameRU: card.nameRU,
        nameEN: card.nameEN === "" ? "Empty" : card.nameEN,
        thumbnail: BEAT_FILMS_IMAGE_URL+card.image.formats.thumbnail.url,
        movieId: card.id,
      }
      MoviesApi.addSaveFilm(data)
        .then(() => {
          setIsFilmSaved(true)
        })
        .catch((error) => {
          console.log("Что-то пошло не так", error)
        });
    }
  }


  const lengthHour = (card.duration - card.duration % 60) / 60
  const lengthMinute = card.duration % 60

  return (
    <li className="element">
      <img src={`${BEAT_FILMS_IMAGE_URL}${card.image.url}`}
           alt={card.nameRU}
           className="image"/>
      <div className="description">
        <div className="content">
          <p className="content__text">{card.nameRU}</p>
          <p className="content__duration">{`${lengthHour}ч `}{lengthMinute !== 0 ? `${lengthMinute}м` : ""}</p>
        </div>
        <img src={heartRed}
             className={type === "movies" && isFilmSaved ? "content__heart" : "content__heart_nonactive"}
             // onClick={handleChangeSaved}
             alt="Сохраненный фильм"/>
        <img src={heartTransparent}
             className={type === "movies" && !isFilmSaved ? "content__heart" : "content__heart_nonactive"}
             onClick={handleSaveFilm}
             alt="Кнопка сохранения фильма"/>
        <img src={closeButton}
             className={type === "saved" ? "content__close" : "content__close_nonactive"}
             alt="Кнопка удаления фильма из сохраненных"/>
      </div>
    </li>
  );
}

export default MoviesCard;
