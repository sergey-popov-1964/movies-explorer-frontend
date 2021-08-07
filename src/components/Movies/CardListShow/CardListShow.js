import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './CardListShow.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {displayCards} from "../../../utils/utils"

function CardListShow({currentBase, saveFilms, onSaveFilms, onDeleteFilms}) {

  const [currentPosition, setCurrentPosition] = useState(0);
  const [stepIncrementPosition, setStepIncrementPosition] = useState(3);
  const [isShowButton, setIsShowButton] = useState(true);

  useEffect(() => {
    const position = displayCards()
    setCurrentPosition(position.init)
    setStepIncrementPosition(position.step)
    if (currentBase.length <= currentPosition) {
      setIsShowButton(false)
    } else {
      setIsShowButton(true)
    }
  }, [currentBase])

  function handleClick() {
    const i = currentPosition + stepIncrementPosition
    setCurrentPosition(i)
    if (i >= currentBase.length) {
      setIsShowButton(false)
    }
  }

  return (
    <div className="block movies__list">
      <section className="elements">
        <ul className="elements__list">
          {
            currentBase.map((item, index) => (
              index < currentPosition && index <= currentBase.length
                ?
                <MoviesCard card={item}
                            saveFilms={saveFilms}
                            onSaveFilms={onSaveFilms}
                            onDeleteFilms={onDeleteFilms}
                            key={item.id}
                />
                :
                ""
            ))
          }
        </ul>
        <div className={isShowButton ? "movies__next" : "movies__next_nonactive"}>
          <button type="button"
                  className="movies__button"
                  onClick={handleClick}
          >Еще
          </button>
        </div>
      </section>
    </div>
  )
}

export default CardListShow;
