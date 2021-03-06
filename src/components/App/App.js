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

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    id: "",
  });
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [beatFilms, setBeatFilms] = useState([]);
  const [saveFilms, setSaveFilms] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
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
        const name = res.data.name
        const email = res.data.email
        const id = res.data._id
        setCurrentUser({name, email, id});
        moviesApi.currentToken = data;
        mainApi.currentToken = data;
        setLoggedIn(true);
        setIsReady(true);
        history.push('/movies');
      })
      .catch((error) => {
        console.log("Что-то пошло не так", error);
      });
  }

  // function setStorage(data) {
  //   localStorage.setItem('saveFilms', JSON.stringify(data));
  // }

  function onRegister(data, typeError) {
    mainApi.registration(data)
      .then(() => {
        setLoggedIn(true);
        onLogin(data, typeError)
      })
      .catch((error) => {
        typeError(error)
        console.log("Что-то пошло не так", error)
      });
  }

  function onLogin(data, typeError) {
    mainApi.authorization(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('saveFilms', []);
        moviesApi.currentToken = res.token;
        mainApi.currentToken = res.token;
        onMain(res.token)
        setIsReady(true);
      })
      .catch((error) => {
        typeError(error)
        console.log("Что-то пошло не так", error)
      });
  }

  function handleUpdateUser(data, typeError) {
    mainApi.setUserInfo(data)
      .then(response => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        typeError(error)
        console.log("Что-то пошло не так", error)
      });
  }

  function onSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('saveFilms');
    localStorage.removeItem('token');
    setIsReady(true);
    moviesApi.currentToken = '';
    mainApi.currentToken = '';
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
                onProfile={handleUpdateUser}
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
                <Main isLoggedIn={isLoggedIn}/>
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
