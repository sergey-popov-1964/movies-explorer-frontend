import React, {useEffect, useState} from 'react';
import {BeatFilmContext} from '../../context/BeatFilmContext';
import './Movies.css';
import '../App/App.css';
import Header from "../Header/Header";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {

  const beatFilms = React.useContext(BeatFilmContext);

  const [isShortFilms, setIsShortFilms] = useState(false);
  const [searchFilm, setSearchFilm] = useState('');
  const [isShowList, setIsShowList] = useState(false);
  const [showMessage, setShowMessage] = useState('Введите данные в строку поиска');

  function handleShortFilms(data) {
    setIsShortFilms(!data)
  }

  function handleSearchFilms(data) {
    setSearchFilm(data)
  }

  function handleSetShowList(data) {
    setIsShowList(data)
  }

  function handleSetMessage(data) {
    setShowMessage(data)
  }

  return (
    <div className="page">
      <div className="block">
        <Header isFilms={true}
                isLogin={false}
                isAccount={true}
                currentSection={"movies"}
        />
        <SearchForm
          onSubmit={handleSearchFilms}
          onShowList={handleSetShowList}
          onSetMessage={handleSetMessage}
        />
        <FilterCheckbox
          onCheck={handleShortFilms}
        />
        <MoviesCardList
          isNextButton={true}
          isTypeList={'movies'}
          isShortFilms={isShortFilms}
          isShowList={isShowList}
          currentBase={beatFilms}
          searchFilm={searchFilm}
          onSetShowList={handleSetShowList}
          message={showMessage}
        />
      </div>
    </div>
  )
}

export default Movies;
