import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './SaveCardListShow.css';
import {displayCards} from "../../../utils/utils"
import SaveMoviesCard from "../SaveMoviesCard/SaveMoviesCard";

function SaveCardListShow({currentBase, type}) {


  // useEffect(() => {
  //   const position = displayCards()
  //   setCurrentPosition(position.init)
  //   setStepIncrementPosition(position.step)
  //   if (currentBase.length <= currentPosition) {
  //     setIsShowButton(false)
  //   } else {
  //     setIsShowButton(true)
  //   }
  // }, [currentBase])

  // function handleClick() {
  //   const i = currentPosition + stepIncrementPosition
  //   setCurrentPosition(i)
  //   if (i >= currentBase.length) {
  //     setIsShowButton(false)
  //   }
  // }

  return (
    <div className="block movies__list">
      <section className="elements">
        <ul className="elements__list">
          {
            currentBase.map((item, index) => (
                <SaveMoviesCard card={item}
                            // type={type}
                            key={item.id}
                />
            ))
          }
        </ul>

      </section>
    </div>
  )
}

export default SaveCardListShow;
