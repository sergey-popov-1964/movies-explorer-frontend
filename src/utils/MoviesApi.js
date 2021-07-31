class	MoviesApi {
  constructor(beatFilmsUrl, imageBeatFilmsUrl, saveFilmsUrl) {
    this._moviesUrl = beatFilmsUrl;
    this._imageMoviesUrl = imageBeatFilmsUrl;
    this._saveFilmsUrl = saveFilmsUrl;

  }

  _currentToken = '';

  set currentToken(value) {
    this._currentToken = value;
  }

  handleResponse = (res) => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }

  getBeatFilms() {
    return fetch(this._moviesUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(this.handleResponse);
  }

  getSaveFilms() {
    return fetch(this._saveFilmsUrl, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._currentToken}`
      },
    })
      .then(this.handleResponse);
  }

}

const beatFilmsUrl = 'https://api.nomoreparties.co/beatfilm-movies';
const imageBeatFilmsUrl = 'https://api.nomoreparties.co';
const saveFilmsUrl = 'https://api.sergeypopov.nomoredomains.rocks/movies';
const moviesApi = new MoviesApi(beatFilmsUrl, imageBeatFilmsUrl, saveFilmsUrl);
export default moviesApi;
