import React from 'react';
import { Provider } from 'react-redux';
import Router from './routes';
import store from './core/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
