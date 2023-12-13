import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './redux/Store/Store';

const root = document.getElementById('root');

// Використовуйте React.StrictMode для обгортання додатку
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
