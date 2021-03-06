import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './SaveMoviesCardList.css';
import SaveMoviesCard from "../SaveMoviesCard/SaveMoviesCard";

function SaveMoviesCardList({currentBase, isShortFilms, searchFilm, isShowList, onDelete}) {

  const [filterFilm, setFilterFilm] = useState([]);

  useEffect(() => {
    const filteredAllFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
    });
    const filteredShortFilms = filteredAllFilms.filter(item => {
      return (item.duration <= 40)
    })

    // if(isShowList) {
    //   localStorage.setItem('saveFilms', JSON.stringify(filteredAllFilms));
    // }
    setFilterFilm(isShortFilms ? filteredShortFilms : filteredAllFilms)
  }, [searchFilm])

  useEffect(() => {
      const filteredAllFilms = currentBase.filter(item => {
        return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
      });
      const filteredShortFilms = filterFilm.filter(item => {
        return item.duration <= 40
      });
      setFilterFilm(isShortFilms ? filteredShortFilms : filteredAllFilms)
  }, [isShortFilms])

  function handleClickDelete(card) {
    const filmsToSave = filterFilm.filter(item => {
      return item._id !== card._id
    });
    setFilterFilm(filmsToSave)
    onDelete(card)
  }

  if (isShowList) {
    return (
      <div className="block movies__list">
        <section className="elements">
          <ul className="elements__list">
            {
              filterFilm.map((item) => (
                <SaveMoviesCard card={item}
                                onDelete={handleClickDelete}
                                key={item._id}
                />
              ))
            }
          </ul>
        </section>
      </div>
    )
  } else  {
    return (
      <p className="movies__message">Ничего не найдено. Введите данные в строку поиска</p>
    )
  }
}

export default SaveMoviesCardList;

