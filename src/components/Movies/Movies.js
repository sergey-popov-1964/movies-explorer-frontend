import React, {useEffect, useState} from 'react';
import './Movies.css';
import '../App/App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";

function Movies() {

  // console.log(props.beatFilms)
  const [isShortFilms, setIsShortFilms] = useState(false);

  function handleShortFilms(data) {
    setIsShortFilms(!data)
  }
  const [beatFilms, setBeatFilms] = useState([]);
  const [isReadyBeat, setIsReadyBeat] = useState(false);

  useEffect(() => {
    if(!isReadyBeat) {
      moviesApi.getBeatFilms()
        .then(data => {
          setBeatFilms(data)
          setIsReadyBeat(true)
        })
        .catch(() => console.log(`Ошибка загрузки данных с сервера`));
    }
  }, [])

  if (!isReadyBeat) {
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
          <MoviesCardList
            isNextButton={true}
            isTypeList={'movies'}
            isShortFilms={isShortFilms}
            currentBase={beatFilms}
          />
          <Footer/>
        </div>
      </div>
    )
  }

}

export default Movies;
