import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
import { requestTodo } from './actions/actions';

const store = configureStore({ reducer: reducer, middleware: [thunk] });
store.subscribe(() => console.log(store.getState()));
store.dispatch(requestTodo());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
