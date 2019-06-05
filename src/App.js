import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import saga from './sagas/';
import { sagaMiddleware } from './middleware';
import logo from './logo.svg';
import './App.css';
import GeolocateButtonContainer from './components/geolocation/GeolocateButton/GeolocateButtonContainer';

const App = () => (
  <Provider store={store}>
    <GeolocateButtonContainer />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.er
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
