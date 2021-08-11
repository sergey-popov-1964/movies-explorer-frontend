import React, {useEffect, useState} from 'react';
import './SavedMovies.css';
import Header from "../Header/Header";
import {CurrentUserContext} from '../../context/CurrentUserContext';
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SaveMoviesCardList from "./SaveMoviesCardList/SaveMoviesCardList";
import moviesApi from "../../utils/MoviesApi";

function SavedMovies() {

  const currentUser = React.useContext(CurrentUserContext);
  const [isShortFilms, setIsShortFilms] = useState(false);
  const [saveFilms, setSaveFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');
  const [isShowList, setIsShowList] = useState(false);
  const [showMessage, setShowMessage] = useState('Введите данные в строку поиска');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    moviesApi.getSaveFilms()
      .then(data => {
        const allFilms = data.data.filter(item => {
          return item.owner === currentUser.id
        });
          setSaveFilms(allFilms)
        setIsReady(true)
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

  function handleClickDeleteFilm(card) {
    const filmsToSave = saveFilms.filter(item => {
      return item._id !== card._id
    });
    moviesApi.deleteSaveFilm(card._id)
      .then(data => {
        setSaveFilms(filmsToSave)
      })
      .catch((error) => console.log("Ошибка загрузки данных с сервера", error));
  }

  if (!isReady) {
    return null
  } else {
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
            user={currentUser.id}
            onSetShowList={handleSetShowList}
            onDelete={handleClickDeleteFilm}
          />
        </div>
      </div>
    )
  }
}

export default SavedMovies;
