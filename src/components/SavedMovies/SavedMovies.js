import React, {useEffect, useState} from 'react';
import './SavedMovies.css';
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SaveMoviesCardList from "./SaveMoviesCardList/SaveMoviesCardList";
import moviesApi from "../../utils/MoviesApi";

// import Preloader from "../Preloader/Preloader";

function SavedMovies() {

  const [isShortFilms, setIsShortFilms] = useState(false);
  const [saveFilms, setSaveFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');
  const [isShowList, setIsShowList] = useState(false);
  const [showMessage, setShowMessage] = useState('Введите данные в строку поиска');

  useEffect(() => {
    moviesApi.getSaveFilms()
      .then(data => {
        localStorage.setItem('saveFilms', JSON.stringify(data.data));
        setSaveFilms(data.data)
      })
      .catch(() => console.log(`Ошибка загрузки данных с сервера`));
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

  function handleClickDeleteFilm(cardID) {
    const filmsToSave = saveFilms.filter(item => {
      return item._id !== cardID
    });
    moviesApi.deleteSaveFilm(cardID)
      .then(data => {
        setSaveFilms(filmsToSave)
        localStorage.setItem('saveFilms', JSON.stringify(filmsToSave));
      })
      .catch((error) => console.log("Ошибка загрузки данных с сервера", error));
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
          onDelete={handleClickDeleteFilm}
          message={showMessage}
        />
      </div>
    </div>
  )
}

export default SavedMovies;
