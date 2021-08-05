import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './SaveMoviesCardList.css';
import SaveCardListShow from "../SaveCardListShow/SaveCardListShow";
import moviesApi from "../../../utils/MoviesApi";

function SaveMoviesCardList({currentBase, isShortFilms, searchFilm, isShowList}) {

  const [AllFilm, setIsAllFilm] = useState([]);
  const [filterAllFilm, setIsFilterAllFilm] = useState([]);
  const [filterShortFilm, setIsFilterShortFilm] = useState([]);
  const [isReady, setIsReady] = useState([]);

  useEffect(() => {
    setIsAllFilm(currentBase)
    const filteredAllFilms = AllFilm.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
    });
    // const filteredShortFilms = AllFilm.filter(item => {
    //   return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`) && item.duration <= 40
    // });
    setIsFilterAllFilm(filteredAllFilms)
    // setIsFilterShortFilm(filteredShortFilms)
  }, [searchFilm])


  function onClickDeleteFilm(cardID) {
    console.log(cardID)
    moviesApi.deleteSaveFilm(cardID)
      .then(data => {
        const excludeFilms = AllFilm.filter((item) => item._id !== cardID);
        setIsAllFilm(excludeFilms)
        console.log("Успешно")
        localStorage.setItem('saveFilms', JSON.stringify(excludeFilms));
      })
      .catch((error) => console.log("Ошибка загрузки данных с сервера", error));
  }


  if (!isReady) {
    return null;
  } else {
    if (isShowList) {
      return (
        <SaveCardListShow
          currentBase={filterAllFilm}
          // currentBase={isShortFilms ? filterShortFilm : filterAllFilm}
          // type={"movies"}
          onDelete={onClickDeleteFilm}
          isShortFilms={isShortFilms}
        />
      )
    } else {
      return (
        <p className="movies__message">Ничего не найдено. Введите данные в строку поиска</p>
      )
    }
  }
}
export default SaveMoviesCardList;
