import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './MoviesCardList.css';
import CardListShow from "../CardListShow/CardListShow";

function MoviesCardList({currentBase, isShortFilms, searchFilm, isShowList,}) {

  const [filterAllFilm, setIsFilterAllFilm] = useState([]);
  const [filterShortFilm, setIsFilterShortFilm] = useState([]);

  useEffect(() => {
    const filteredAllFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
    });
    const filteredShortFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`) && item.duration <= 40
    });
    setIsFilterAllFilm(filteredAllFilms)
    setIsFilterShortFilm(filteredShortFilms)
  }, [searchFilm])

  if (isShowList) {
    return (
      <CardListShow
        currentBase={isShortFilms ? filterShortFilm : filterAllFilm}
        type={"movies"}
      />
    )
  } else {
    return (
      <p className="movies__message">Ничего не найдено. Введите данные в строку поиска</p>
    )
  }
}

export default MoviesCardList;
