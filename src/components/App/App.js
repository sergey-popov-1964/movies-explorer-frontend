import React, {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Notfound from "../Notfound/Notfound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";


function App() {

  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = useState(false)
  // const [readyResponse, setReadyResponse] = useState(false)


  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (!jwt) {
      // setReadyResponse(true)
      return
    }
    mainApi.checkToken(jwt)
      .then(res => {
        setLoggedIn(true);
        // setReadyResponse(true)
        moviesApi.currentToken = jwt;
        history.push('/movies');
      })
      .catch((error) => {
        localStorage.removeItem('token');
        console.log("Что-то пошло не так", error)
        // setReadyResponse(true)
      });
  }, [history])


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
        setLoggedIn(true);
        moviesApi.currentToken = res.token;

        history.push('/movies');
      })
      .catch((error) => {
        console.log("Что-то пошло не так", error)
      });
  }

  function onSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    moviesApi.currentToken = '';
    history.push('/');
  }

  return (
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
          onSignOut = {onSignOut}
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

    </div>
  )
}

export default App;
