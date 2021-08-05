import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './SaveCardListShow.css';
import SaveMoviesCard from "../SaveMoviesCard/SaveMoviesCard";

function SaveCardListShow({currentBase, onDelete, isShortFilms}) {

  // const [AllFilm, setIsAllFilm] = useState([]);
  // const [isShort, setIsShort] = useState(false);
  //
  // useEffect(() => {
  //   setIsShort(isShortFilms)
  // }, [isShort])


  if (isShortFilms) {
    return (
      <div className="block movies__list">
        <section className="elements">
          <ul className="elements__list">
            {
              currentBase.map((item) => (
                item.duration <= 40
                  ?
                  <SaveMoviesCard card={item}
                                  onDelete={onDelete}
                                  key={item._id}
                  />
                  :
                  ""
              ))
            }
          </ul>
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
                item.duration > 40
                  ?
                  <SaveMoviesCard card={item}
                                  onDelete={onDelete}
                                  key={item._id}
                  />
                  :
                  ""
              ))
            }
          </ul>
        </section>
      </div>
    )
  }
}

export default SaveCardListShow;
