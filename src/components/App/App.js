import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Notfound from "../Notfound/Notfound";

function App() {

  return (
    <div className="root">
      <Switch>

        <Route path="/signin">
          <Login/>
        </Route>

        <Route path="/signup">
          <Register/>
        </Route>

        <Route path="/movies">
          <Movies/>
        </Route>

        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>

        <Route path="/profile">
          <Profile/>
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
