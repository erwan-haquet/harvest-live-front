import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import saga from './sagas/';
import { sagaMiddleware } from './middleware';
import TopBarContainer from './components/TopBar/TopBarContainer';
import MapContainer from './components/Map/MapContainer';
import GeolocateButtonContainer from './components/GeolocateButton/GeolocateButtonContainer';
import StatisticsModalContainer from './components/StatisticsModal/StatisticsModalContainer';
import ObservationDetailsContainer from './components/ObservationDetails/ObservationDetailsContainer';
import MapLayerButtonContainer from './components/MapLayerButton/MapLayerButtonContainer';

import './App.css';
import './styles/import.scss';

const App = () => (
  <Provider store={store}>
    <TopBarContainer />
    <MapContainer />
    <ObservationDetailsContainer />
    <StatisticsModalContainer />
    <GeolocateButtonContainer />
    <MapLayerButtonContainer />
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
