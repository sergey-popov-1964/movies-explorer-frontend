import React, {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import {CurrentUserContext} from '../../context/CurrentUserContext';
import {BeatFilmContext} from '../../context/BeatFilmContext';
import './App.css';
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Notfound from "../Notfound/Notfound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [beatFilms, setBeatFilms] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if(isLoggedIn) {
      moviesApi.getBeatFilms()
        .then(data => {
          setBeatFilms(data)
        })
        .catch(() => console.log(`Ошибка загрузки данных с сервера`));
    }
  }, [isLoggedIn])

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (!jwt) {
      setIsReady(true);
      return;
    }
    onMain(jwt);
  }, [history])

  function onMain(data) {
    mainApi.checkToken(data)
      .then(res => {
        setCurrentUser(res);
        moviesApi.currentToken = data;
        onGetSaveFilms();
        setLoggedIn(true);
        setIsReady(true);
        history.push('/movies');
      })
      .catch((error) => {
        console.log("Что-то пошло не так", error);
      });
  }

  function onGetSaveFilms() {
    if (!localStorage.getItem('saveFilms')) {
      moviesApi.getSaveFilms()
        .then(data => {
          localStorage.setItem('saveFilms', JSON.stringify(data.data));
        })
        .catch(() => console.log(`Ошибка загрузки данных с сервера`));
    }

  }

  function onRegister(data, typeError) {
    mainApi.registration(data)
      .then(() => {
        setLoggedIn(true);
        history.push('/signin');
      })
      .catch((error) => {
        typeError(error)
        console.log("Что-то пошло не так", error)
      });
  }

  function onLogin(data) {
    mainApi.authorization(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        moviesApi.currentToken = res.token;
        onMain(res.token)
        setIsReady(true);
      })
      .catch((error) => {
        console.log("Что-то пошло не так", error)
      });
  }

  function onSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('saveFilms');
    localStorage.removeItem('token');
    localStorage.removeItem('beatFilms');
    setIsReady(true);
    moviesApi.currentToken = '';
    history.push('/');
  }

  if (!isReady) {
    return (
      <div className="root">
        <Preloader/>
      </div>
    )
  } else {
    return (
      <BeatFilmContext.Provider value={beatFilms}>
        <CurrentUserContext.Provider value={currentUser}>
          <div className="root">
            <Switch>

              <ProtectedRoute
                path="/movies"
                isLoggedIn={isLoggedIn}
                component={Movies}
              />

              <ProtectedRoute
                path="/saved-movies"
                isLoggedIn={isLoggedIn}
                component={SavedMovies}
              />

              <ProtectedRoute
                path="/profile"
                onSignOut={onSignOut}
                isLoggedIn={isLoggedIn}
                component={Profile}
              />

              <Route path="/signin">
                <Login onLogin={onLogin}/>
              </Route>

              <Route path="/signup">
                <Register onRegister={onRegister}/>
              </Route>

              <Route exact path="/">
                <Main/>
              </Route>

              <Route path="*">
                <Notfound/>
              </Route>

            </Switch>

            <Footer/>
          </div>

        </CurrentUserContext.Provider>
      </BeatFilmContext.Provider>
    )
  }
}

export default App;
