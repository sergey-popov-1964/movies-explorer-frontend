import React, {useEffect, useState} from 'react';
import {CurrentUserContext} from '../../../context/CurrentUserContext';
import '../../App/App.css';
import './MoviesCardList.css';
import CardListShow from "../CardListShow/CardListShow";
import moviesApi from "../../../utils/MoviesApi";

function MoviesCardList({currentBase, isShortFilms, searchFilm, isShowList, onStorage}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [filterAllFilm, setIsFilterAllFilm] = useState([]);
  const [filterShortFilm, setIsFilterShortFilm] = useState([]);
  const [saveFilms, setSaveFilms] = useState([]);

  useEffect(() => {
    moviesApi.getSaveFilms()
      .then(data => {
        const ownerFilms = data.data.filter(item => {
          return item.owner === currentUser.id
        });
        setSaveFilms(ownerFilms)
      })
      .catch(() => console.log(`Ошибка загрузки данных с сервера`));
    const filteredAllFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`)
    });
    const filteredShortFilms = currentBase.filter(item => {
      return item.nameRU.toLowerCase().includes(`${searchFilm.toLowerCase()}`) && item.duration <= 40
    });
    setIsFilterAllFilm(filteredAllFilms)
    setIsFilterShortFilm(filteredShortFilms)

    onStorage(filteredAllFilms)
  }, [searchFilm])

  function handleSaveFilms(data) {
    setSaveFilms([data.data, ...saveFilms]);
  }

  function handleDeleteSaveFilms(data) {
    const filmsToDelete = saveFilms.filter(item => {
      return item.movieId === data
    });

    filmsToDelete.forEach((element) => {
        if (element.movieId === data) {
          moviesApi.deleteSaveFilm(element._id)
            .then(data => {
              const filmsToSave = saveFilms.filter(item => {
                return item._id !== element._id
              });
              setSaveFilms(filmsToSave)
            })
            .catch((error) => console.log("Ошибка загрузки данных с сервера", error));
        }
      }
    )

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
