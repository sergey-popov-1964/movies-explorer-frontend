import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './SaveMoviesCardList.css';
import MoviesCard from "../../Movies/MoviesCard/MoviesCard";
import CardListShow from "../../Movies/CardListShow/CardListShow";
import SaveMoviesCard from "../SaveMoviesCard/SaveMoviesCard";
import SaveCardListShow from "../SaveCardListShow/SaveCardListShow";

function SaveMoviesCardList({currentBase, isShortFilms, searchFilm, isShowList}) {

  const [filterAllFilm, setIsFilterAllFilm] = useState([]);
  const [filterShortFilm, setIsFilterShortFilm] = useState([]);
  const [filterFilm, setIsFilterFilm] = useState([]);

  useEffect(() => {
    console.log(currentBase)
    const filteredAllFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
    });
    const filteredShortFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`) && item.duration <= 40
    });
    setIsFilterAllFilm(filteredAllFilms)
    setIsFilterShortFilm(filteredShortFilms)
    setIsFilterFilm(isShortFilms ? filterShortFilm : filterAllFilm)


  }, [searchFilm])


  console.log(isShortFilms ? filterShortFilm : filterAllFilm)

  if (isShowList) {
    return (
      <SaveCardListShow
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

export default SaveMoviesCardList;
