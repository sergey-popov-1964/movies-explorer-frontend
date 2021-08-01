import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './CardListShow.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function CardListShow({currentBase}) {

  const [currentPosition, setCurrentPosition] = useState(3);
  const [isShowButton, setIsShowButton] = useState(true);

  useEffect(() => {
    setCurrentPosition(3)
    if (currentBase.length <= currentPosition) {
      setIsShowButton(false)
    } else {
      setIsShowButton(true)
    }
  }, [currentBase])

  function handleClick() {
    const i = currentPosition + 3
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
