class	MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
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

  authorization({email, password}) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then(this.handleResponse);
  }

  registration({name, email, password}) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })
      .then(this.handleResponse);
  }

  checkToken(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${data}`
      },
    })
      .then(this.handleResponse);
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._currentToken}`
      },
      body: JSON.stringify(data)
    })
      .then(this.handleResponse);
  }

}

// const baseUrl = 'http://localhost:3001';
const baseUrl = 'https://api.sergeypopov.nomoredomains.rocks';
const mainApi = new MainApi(baseUrl);
export default mainApi;
