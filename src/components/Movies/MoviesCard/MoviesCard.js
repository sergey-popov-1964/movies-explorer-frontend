import React, {useEffect, useState} from 'react';
import './MoviesCard.css';
import heartRed from "../../../images/heart-red.svg";
import heartTransparent from "../../../images/heart-transparent.svg";
import {BEAT_FILMS_IMAGE_URL} from "../../../utils/constants"
import MoviesApi from "../../../utils/MoviesApi"

function MoviesCard({card, saveFilms, onSaveFilms, onDeleteFilms}) {

  const [isFilmSaved, setIsFilmSaved] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [stateSaved, setStateSaved] = useState(saveFilms)

  useEffect(() => {
    let findSave = saveFilms.find(o => o.movieId === card.id);
    findSave ? setIsSaved(true) : setIsSaved(false)
  }, [])

  function handleSaveFilm() {
    if (!isFilmSaved) {
      const data = {
        country: !card.country ? "Empty" : card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: BEAT_FILMS_IMAGE_URL + card.image.url,
        trailer: card.trailerLink,
        nameRU: card.nameRU,
        nameEN: card.nameEN === "" ? "Empty" : card.nameEN,
        thumbnail: BEAT_FILMS_IMAGE_URL + card.image.formats.thumbnail.url,
        movieId: card.id,
      }
      MoviesApi.addSaveFilm(data)
        .then((data) => {
          setStateSaved(stateSaved.push(data))
          setIsSaved(true)
          onSaveFilms(stateSaved)
        })
        .catch((error) => {
          console.log("Что-то пошло не так", error)
        });
    }
  }

  function handleDeleteFilm() {
    setIsSaved(false)
    onDeleteFilms(card.id)
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
             className={isSaved ? "content__heart" : "content__heart_nonactive"}
             onClick={handleDeleteFilm}
             alt="Сохраненный фильм"/>
        <img src={heartTransparent}
             className={isSaved ? "content__heart_nonactive" : "content__heart"}
             onClick={handleSaveFilm}
             alt="Кнопка сохранения фильма"/>
      </div>
    </li>
  );
}

export default MoviesCard;
