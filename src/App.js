import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import saga from './sagas/';
import { sagaMiddleware } from './middleware';
import './App.css';
import TopBar from './components/TopBar';
import './styles/import.scss';

const App = () => (
  <Provider store={store}>
    <TopBar />
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
