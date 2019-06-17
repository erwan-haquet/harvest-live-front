import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import saga from './sagas/';
import { sagaMiddleware } from './middleware';
import TopBarContainer from './components/TopBar/TopBarContainer';
import MapContainer from './components/Map/MapContainer';
import GeolocateButtonContainer from './components/buttons/GeolocateButton/GeolocateButtonContainer';
import StatisticsModalContainer from './components/StatisticsModal/StatisticsModalContainer';
import ObservationDetailsContainer from './components/ObservationDetails/ObservationDetailsContainer';
import MapLayerButtonContainer from './components/buttons/MapLayerButton/MapLayerButtonContainer';
import ColorLegendButtonContainer from "./components/buttons/ColorLegendButton/ColorLegendButtonContainer";

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
    <ColorLegendButtonContainer />
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
