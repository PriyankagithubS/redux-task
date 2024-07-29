// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CartPage from './Components/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CartPage />
      </div>
    </Provider>
  );
};

export default App;
