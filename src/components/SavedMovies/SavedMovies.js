import React, {useEffect, useState} from 'react';
import './SavedMovies.css';
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SaveMoviesCardList from "./SaveMoviesCardList/SaveMoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies() {

  const [isShortFilms, setIsShortFilms] = useState(false);
  const [saveFilms, setSaveFilms] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [searchFilm, setSearchFilm] = useState('');
  const [isShowList, setIsShowList] = useState(false);
  const [showMessage, setShowMessage] = useState('Введите данные в строку поиска');

  useEffect(() => {
    setSaveFilms(JSON.parse(localStorage.getItem("saveFilms")))
  }, [])

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
        <SaveMoviesCardList
          isNextButton={true}
          isTypeList={'movies'}
          isShortFilms={isShortFilms}
          isShowList={isShowList}
          currentBase={saveFilms}
          searchFilm={searchFilm}
          onSetShowList={handleSetShowList}
          message={showMessage}
        />
      </div>
    </div>
  )
}

export default SavedMovies;
