import React, {useEffect, useState} from 'react';
import './SavedMovies.css';
import Header from "../Header/Header";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SaveMoviesCardList from "./SaveMoviesCardList/SaveMoviesCardList";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";


function SavedMovies(props) {

  // console.log(props.beatFilms)
  const [isShortFilms, setIsShortFilms] = useState(false);

  function handleShortFilms(data) {
    setIsShortFilms(!data)
  }
  const [saveFilms, setSaveFilms] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if(!isReady) {
      moviesApi.getSaveFilms()
        .then(data => {
          setSaveFilms(data.data)
          console.log(data)
          setIsReady(true)
        })
        .catch(() => console.log(`Ошибка загрузки данных с сервера`));
    }
  }, [])

  if (!isReady) {
    return (
      <Preloader/>
    )
  } else {
    return (
      <div className="page">
        <div className="block">
          <Header isFilms={true}
                  isLogin={false}
                  isAccount={true}
                  currentSection={"movies"}
          />
          <SearchForm/>
          <FilterCheckbox
            onCheck={handleShortFilms}
          />
          <SaveMoviesCardList
            isNextButton={true}
            isTypeList={'movies'}
            isShortFilms={isShortFilms}
            currentBase={saveFilms}
          />
          <Footer/>
        </div>
      </div>
    )
  }

}

export default SavedMovies;
