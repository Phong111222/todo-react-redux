import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
import { addTodo, removeTodo } from "./actions/actions";
import thunk from "redux-thunk";
import callAPI from "./API/callAPI";

// import { addTodo } from './actions/actions';

const store = createStore(reducer, applyMiddleware(thunk));
// console.log(store.getState());
// store.dispatch(addTodo('go shopping'));
// console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

// store.dispatch(addTodo('go shopping'));
// store.dispatch(addTodo('go home'));
// store.dispatch(addTodo('go swimming'));
// store.dispatch(removeTodo('41943c40-741e-4e07-be7a-b9acc959d4a7'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
