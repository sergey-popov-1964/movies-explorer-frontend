import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesApi from "../../../utils/MoviesApi";
import Preloader from "../../Preloader/Preloader";

function MoviesCardList({isNextButton, isTypeList, isShortFilms, currentBase}) {

  // const [beatFilms, setBeatFilms] = useState([]);
  // const [isReadyBeat, setIsReadyBeat] = useState(false);

  // useEffect(() => {
  //   if(!isReadyBeat) {
  //     moviesApi.getBeatFilms()
  //       .then(data => {
  //         setBeatFilms(data)
  //         setIsReadyBeat(true)
  //       })
  //       .catch(() => console.log(`Ошибка загрузки данных с сервера`));
  //   }
  // }, [])

  // if (!isReadyBeat) {
  //   return (
  //     <Preloader/>
  //   )
  // } else {

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
                                  key={item.id}/>
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

export default MoviesCardList;
