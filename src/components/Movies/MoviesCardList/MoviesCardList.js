import React, {useEffect, useState} from 'react';
import '../../App/App.css';
import './MoviesCardList.css';
import CardListShow from "../CardListShow/CardListShow";
import moviesApi from "../../../utils/MoviesApi";

function MoviesCardList({currentBase, isShortFilms, searchFilm, isShowList, savedFilms}) {

  const [filterAllFilm, setIsFilterAllFilm] = useState([]);
  const [filterShortFilm, setIsFilterShortFilm] = useState([]);
  const [saveFilms, setSaveFilms] = useState(savedFilms);

  useEffect(() => {
    setSaveFilms(JSON.parse(localStorage.getItem("saveFilms")))
    const filteredAllFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
    });
    const filteredShortFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`) && item.duration <= 40
    });
    setIsFilterAllFilm(filteredAllFilms)
    setIsFilterShortFilm(filteredShortFilms)
  }, [searchFilm])

  function handleSaveFilms(data) {
    // console.log(data)
    // setSaveFilms(saveFilms.push(data))
    // console.log(saveFilms)
    setSaveFilms(data)
    localStorage.setItem('saveFilms', JSON.stringify(data));
  }

  function handleDeleteSaveFilms(data) {
    const filmsToSave = saveFilms.filter(item => {
      return item.movieId !== data
    });

    saveFilms.forEach((element) => {
      if(element.movieId === data) {
       console.log(element._id)
        moviesApi.deleteSaveFilm(element._id)
          .then(data => {
            // setSaveFilms(filmsToSave)
            // localStorage.setItem('saveFilms', JSON.stringify(filmsToSave));
          })
          .catch((error) => console.log("Ошибка загрузки данных с сервера", error));
      }

      setSaveFilms(filmsToSave)
      localStorage.setItem('saveFilms', JSON.stringify(filmsToSave));
    })




    // moviesApi.deleteSaveFilm(data)
    //   .then(data => {
    //     setSaveFilms(filmsToSave)
    //     localStorage.setItem('saveFilms', JSON.stringify(filmsToSave));
    //   })
    //   .catch((error) => console.log("Ошибка загрузки данных с сервера", error));
    //
    // setSaveFilms(filmsToSave)
    // localStorage.setItem('saveFilms', JSON.stringify(filmsToSave));
  }

  if (isShowList) {
    return (
      <CardListShow
        currentBase={isShortFilms ? filterShortFilm : filterAllFilm}
        saveFilms={saveFilms}
        onSaveFilms={handleSaveFilms}
        onDeleteFilms={handleDeleteSaveFilms}
      />
    )
  } else {
    return (
      <p className="movies__message">Ничего не найдено. Введите данные в строку поиска</p>
    )
  }
}

export default MoviesCardList;
