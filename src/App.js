import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import saga from './sagas/';
import { sagaMiddleware } from './middleware';
import TopBarContainer from './components/TopBar/TopBarContainer';
import MapContainer from './components/Map/MapContainer';
import GeolocateButtonContainer from './components/buttons/GeolocateButton/GeolocateButtonContainer';
import StatisticsModalContainer from './components/StatisticsModal/StatisticsModalContainer';
import ObservationDetailsModalContainer from './components/modals/ObservationDetailsModal/ObservationDetailsModalContainer';
import MapLayerButtonContainer from './components/buttons/MapLayerButton/MapLayerButtonContainer';
import FiltersContainer from "./components/observation/Filters/FiltersContainer";
import ObservationCreationModalContainer from "./components/modals/ObservationCreationModal/ObservationCreationModalContainer";
import ToastListContainer from "./components/common/toast/ToastList/ToastListContainer";
import Headband from "./components/Headband";

import './App.css';
import './styles/import.scss';

const App = () => (
  <Provider store={store}>
    <Headband />
    <TopBarContainer />
    <ToastListContainer />
    <MapContainer />
    <ObservationDetailsModalContainer />
    <StatisticsModalContainer />
    <GeolocateButtonContainer />
    <MapLayerButtonContainer />
    <FiltersContainer />
    <ObservationCreationModalContainer />
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
