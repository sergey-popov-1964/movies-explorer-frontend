import React, {useEffect, useState} from 'react';
import './Movies.css';
import '../App/App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import SearchForm from "./SearchForm/SearchForm";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {

  const [isShortFilms, setIsShortFilms] = useState(false);
  const [beatFilms, setBeatFilms] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [searchFilm, setSearchFilm] = useState('');
  const [isShowList, setIsShowList] = useState(false);

  function handleShortFilms(data) {
    setIsShortFilms(!data)
  }

  function handleSearchFilms(data) {
    setSearchFilm(data)
  }

  function handleIsShowList(data) {
    setIsShowList(data)
  }

  useEffect(() => {
    moviesApi.getBeatFilms()
      .then(data => {
        setBeatFilms(data)
        setIsReady(true)
      })
      .catch(() => console.log(`Ошибка загрузки данных с сервера`));
  }, [])

  if (isReady) {
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
            onShowList={handleIsShowList}
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
                  currentSection={"movies"}
          />
          <Preloader/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Movies;
