import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
                          isNextButton,
                          isTypeList,
                          isShortFilms,
                          currentBase,
                          searchFilm,
                          isShowList,
                        }) {

  const [filterAllFilm, setIsFilterAllFilm] = useState([]);
  const [filterShortFilm, setIsFilterShortFilm] = useState([]);

  useEffect(() => {
    const filteredAllFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
    });
    const filteredShortFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`) && item.duration <= 40
    });
    setIsFilterAllFilm(filteredAllFilms)
    setIsFilterShortFilm(filteredShortFilms)
  }, [searchFilm])


  if (isShortFilms) {
    return (
      <div className="block movies__list">
        <section className="elements">
          <ul className="elements__list">
            {
              filterShortFilm.map((item) => (
                isShowList
                  ?
                  <MoviesCard card={item}
                              type={isTypeList}
                              key={item.id}
                  />
                  :
                  ""
              ))
            }
          </ul>
          {filterShortFilm.length === 0 ? <div>Ничего не найдено</div> : ""}
          {!isShowList ? <div>Введите данные в строку поиска</div> : ""}
          <div className="movies__next">
            <button type="button" className="movies__button">Еще</button>
          </div>
        </section>
      </div>
    )
  } else {
    return (
      <div className="block movies__list">
        <section className="elements">
          <ul className="elements__list">
            {
              filterAllFilm.map((item) => (
                isShowList
                  ?
                  <MoviesCard card={item}
                              type={isTypeList}
                              key={item.id}
                  />
                  :
                  ""
              ))
            }
          </ul>
          {filterAllFilm.length === 0 ? <div>Ничего не найдено</div> : ""}
          {!isShowList ? <div>Введите данные в строку поиска</div> : ""}
          <div className="movies__next">
            <button type="button" className="movies__button">Еще</button>
          </div>
        </section>
      </div>
    )
  }
}

export default MoviesCardList;
