import React from 'react';
import '../../App/App.css';
import './SaveMoviesCardList.css';
import MoviesCard from "../../Movies/MoviesCard/MoviesCard";

function SaveMoviesCardList({isNextButton, isTypeList, isShortFilms, currentBase}) {

  if (isShortFilms) {
    return (
      <div className="block movies__list">
        <section className="elements">
          <ul className="elements__list">
            {
              currentBase.map((item) => (
                item.duration <= 40
                  ? <MoviesCard card={item}
                                type={isTypeList}
                                key={item._id}/>
                  : ""
              ))
            }
          </ul>
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
              currentBase.map((item) => (
                <MoviesCard card={item}
                            type={isTypeList}
                            key={item.id}/>
              ))
            }
          </ul>
        </section>
      </div>
    )
  }
  // }
}

export default SaveMoviesCardList;
