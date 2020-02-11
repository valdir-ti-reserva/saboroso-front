import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
