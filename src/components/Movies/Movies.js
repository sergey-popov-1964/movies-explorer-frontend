import React, {useEffect, useState} from 'react';
import {BeatFilmContext} from '../../context/BeatFilmContext';
import './Movies.css';
import '../App/App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import SearchForm from "./SearchForm/SearchForm";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import {CurrentUserContext} from "../../context/CurrentUserContext";

function Movies() {

  const beatFilms = React.useContext(BeatFilmContext);
  const [didMount, setDidMount] = useState(false);

  const [isShortFilms, setIsShortFilms] = useState(false);
  // const [beatFilms, setBeatFilms] = useState([]);
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
    moviesApi.getBeatFilms()
      .then(data => {
        // setBeatFilms(data)
        setIsReady(true)
      })
      .catch(() => console.log(`Ошибка загрузки данных с сервера`));
    return () => setDidMount(false);
  }, [])

  // if(!didMount) {
  //   return null;
  // } else if (isReady) {
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
          <Footer/>
        </div>
      </div>
    )
//   } else {
//     return (
//       <div className="page">
//         <div className="block">
//           <Header isFilms={true}
//                   isLogin={false}
//                   isAccount={true}
//                   currentSection={"movies"}
//           />
//           <Preloader/>
//           <Footer/>
//         </div>
//       </div>
//     )
//   }
}

export default Movies;
