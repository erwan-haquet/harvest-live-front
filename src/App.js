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
import ColorLegendContainer from "./components/ColorLegend/ColorLegendContainer";
import ObservationFormModalContainer from "./components/ObservationFormModal/ObservationFormModalContainer";
import ToastListContainer from "./components/common/toast/ToastList/ToastListContainer";

import './App.css';
import './styles/import.scss';

const App = () => (
  <Provider store={store}>
    <TopBarContainer />
    <ToastListContainer />
    <MapContainer />
    <ObservationDetailsContainer />
    <StatisticsModalContainer />
    <GeolocateButtonContainer />
    <MapLayerButtonContainer />
    <ColorLegendContainer />
    <ObservationFormModalContainer />
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
