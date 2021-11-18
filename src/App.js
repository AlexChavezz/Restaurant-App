import React from 'react';
import { AppRouter } from './Router/AppRouter';
import { store } from './store/store';
import { Provider } from 'react-redux'

const App = () => {
    return (
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    )
}

export default App;
