import React, {useEffect, useState} from 'react';
import './SavedMovies.css';
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SaveMoviesCardList from "./SaveMoviesCardList/SaveMoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";


function SavedMovies() {

  const [didMount, setDidMount] = useState(false);
  const [isShortFilms, setIsShortFilms] = useState(false);
  const [saveFilms, setSaveFilms] = useState([]);
  const [isReady, setIsReady] = useState(false);
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

  useEffect(() => {
    setDidMount(true);
    moviesApi.getSaveFilms()
      .then(data => {
        setSaveFilms(data.data)
        setIsReady(true)
      })
      .catch(() => console.log(`Ошибка загрузки данных с сервера`));
    return () => setDidMount(false);
  }, [])

  if(!didMount) {
    return null;
  } else if (isReady) {
    return (
      <div className="page">
        <div className="block">
          <Header isFilms={true}
                  isLogin={false}
                  isAccount={true}
                  currentSection={"saved-movies"}
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
          <Footer/>
        </div>
      </div>
    )
  } else {
    return (
      <div className="page">
        <div className="block">
          <Header isFilms={true}
                  isLogin={false}
                  isAccount={true}
                  currentSection={"saved-movies"}
          />
          <Preloader/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default SavedMovies;
