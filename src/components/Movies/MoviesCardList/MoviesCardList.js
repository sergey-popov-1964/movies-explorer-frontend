import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './MoviesCardList.css';
import {catalog} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import {getFilms} from "../../../utils/utils";
import {BEAT_FILMS_URL} from "../../../utils/constants"
import Preloader from "../../Preloader/Preloader";

function MoviesCardList({isNextButton, isTypeList, isShortFilms}) {

  console.log("isShortFilms_1", isShortFilms)

  const [beatFilms, setBeatFilms] = useState([]);
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    if (isTypeList === "movies") {
      getFilms(BEAT_FILMS_URL)
        .then(data => {
          setBeatFilms(data)
          setIsReady(true)
        })
    }


  }, [])

  if (!isReady) {
    return (
      <Preloader/>
    )
  } else {
    if (isShortFilms) {
      return (
        <div className="block movies__list">
          <section className="elements">
            <ul className="elements__list">
              {
                beatFilms.map((item) => (
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
                beatFilms.map((item) => (
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


    // if (isTypeList === "movies") {
    //   // console.log(11111111111)
    //   //   const newCatalog = beatFilms.map((item) => item.duration <= 40)
    //   //   setCatalogFilms(newCatalog)
    //   return (
    //     <div className="block movies__list">
    //       <section className="elements">
    //         <ul className="elements__list">
    //           {
    //             beatFilms.map((item) =>  (
    //               item.duration <= 40
    //               ? <MoviesCard card={item}
    //                           type={isTypeList}
    //                           key={item.id}/>
    //             : ""
    //             ))
    //           }
    //         </ul>
    //         <div className="movies__next">
    //           <button type="button" className="movies__button">Еще</button>
    //         </div>
    //       </section>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div className="block movies__list">
    //       <section className="elements">
    //         <ul className="elements__list">
    //           {
    //             catalog.map((item) => (
    //               item.saved === true
    //                 ? <MoviesCard card={item}
    //                               type={isTypeList}
    //                               key={item._id}/>
    //                 : ""
    //             ))
    //           }
    //         </ul>
    //       </section>
    //     </div>
    //   )


    // }
  }


  // if (props.isTypeList === "movies") {
  //   return (
  //     <div className="block movies__list">
  //       <section className="elements">
  //         <ul className="elements__list">
  //           {
  //             beatFilms.map((item) => (
  //               <MoviesCard card={item}
  //                           type = {props.isTypeList}
  //                           key={item.id}/>))
  //           }
  //         </ul>
  //         <div className= "movies__next" >
  //           <button type="button" className="movies__button">Еще</button>
  //         </div>
  //       </section>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className="block movies__list">
  //       <section className="elements">
  //         <ul className="elements__list">
  //           {
  //             catalog.map((item) => (
  //               item.saved === true
  //                 ? <MoviesCard card={item}
  //                               type = {props.isTypeList}
  //                               key={item._id}/>
  //                 : ""
  //             ))
  //           }
  //         </ul>
  //       </section>
  //     </div>
  //   )
  //
  //
  //
  // }


}

export default MoviesCardList;
