import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import saga from './sagas/';
import { sagaMiddleware } from './middleware';
import TopBar from './components/TopBar';
import MapContainer from './components/Map/MapContainer';

import './App.css';
import './styles/import.scss';

const App = () => (
  <Provider store={store}>
    <TopBar />
    <MapContainer />
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
