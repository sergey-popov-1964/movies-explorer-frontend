import React from 'react';
import '../../App/App.css';
import './MoviesCardList.css';
import {catalog} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <div className="block movies__list">
      <section className="elements">
        <ul className="elements__list">
          {catalog.map((item) => (
            <MoviesCard card={item}
                        key={item._id}/>
          ))}
        </ul>
        <div className = { props.isNextButton ? "movies__next" : "movies__next_nonactive" }>
          <button type="button" className="movies__button">Еще</button>
        </div>
      </section>
    </div>
  )
}

export default MoviesCardList;
