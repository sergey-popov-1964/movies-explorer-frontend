import React from 'react';
import '../../App/App.css';
import './MoviesCardList.css';
import {catalog} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {

    return (
        <div className="block movies__list">
          <section className="elements">
            <ul className="elements__list">
              {catalog.map((item) => (
                <MoviesCard card={item}
                  // onCardClick={props.onCardClick}
                  // onCardLike={props.onCardLike}
                  // onCardDelete={props.onCardDelete}
                            key={item._id}/>
              ))}
            </ul>
          </section>
        </div>
    )
}

export default MoviesCardList;
