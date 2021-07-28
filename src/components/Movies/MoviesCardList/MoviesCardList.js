import React from 'react';
import '../../App/App.css';
import './MoviesCardList.css';
import {catalog} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  if (props.isTypeList === "movies") {
    return (
      <div className="block movies__list">
        <section className="elements">
          <ul className="elements__list">
            {
              catalog.map((item) => (
                <MoviesCard card={item}
                            type = {props.isTypeList}
                            key={item._id}/>))
            }
          </ul>
          <div className= "movies__next" >
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
              catalog.map((item) => (
                item.saved === true
                  ? <MoviesCard card={item}
                                type = {props.isTypeList}
                                key={item._id}/>
                  : ""
              ))
            }
          </ul>
        </section>
      </div>
    )



  }


}

export default MoviesCardList;
