import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './SaveMoviesCardList.css';
import SaveMoviesCard from "../SaveMoviesCard/SaveMoviesCard";

function SaveMoviesCardList({currentBase, isShortFilms, searchFilm, isShowList}) {

  const [filterFilm, setFilterFilm] = useState([]);

  useEffect(() => {
    const filteredAllFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
    });
    const filteredShortFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`) && item.duration <= 40
    });
    setFilterFilm(isShortFilms ? filteredShortFilms : filteredAllFilms)
  }, [searchFilm])

  useEffect(() => {
    const filteredAllFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
    });
    const filteredShortFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`) && item.duration <= 40
    });
    setFilterFilm(isShortFilms ? filteredShortFilms : filteredAllFilms)
  }, [isShortFilms])

  function onClickDeleteFilm(cardID) {
    console.log(cardID)
    // moviesApi.deleteSaveFilm(cardID)
    //   .then(data => {
    //     const excludeFilms = AllFilm.filter((item) => item._id !== cardID);
    //     setIsAllFilm(excludeFilms)
    //     console.log("Успешно")
    //     localStorage.setItem('saveFilms', JSON.stringify(excludeFilms));
    //   })
    //   .catch((error) => console.log("Ошибка загрузки данных с сервера", error));
  }

  if (isShowList) {
    return (
      <div className="block movies__list">
        <section className="elements">
          <ul className="elements__list">
            {
              filterFilm.map((item) => (
                <SaveMoviesCard card={item}
                                key={item._id}
                />
              ))
            }
          </ul>
        </section>
      </div>
    )
  } else {
    return (
      <p className="movies__message">Ничего не найдено. Введите данные в строку поиска</p>
    )
  }
}

export default SaveMoviesCardList;
