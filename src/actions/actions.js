import {
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_TODO,
  COMPLETE_TODO,
  RESET,
  FETCH_TODO,
} from './types';
import { v4 as uuidv4 } from 'uuid';
import callAPI from '../API/callAPI';
export const requestTodo = () => {
  return (dispatch) => {
    return callAPI().then((res) =>
      dispatch(
        fetchTodo(
          res.data.map((item) => {
            return {
              ...item,
            };
          })
        )
      )
    );
  };
};
export const fetchTodo = (data) => {
  return {
    type: FETCH_TODO,
    data,
  };
};
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: { title: todo, id: uuidv4(), completed: false },
  };
};
export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};
export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    id,
  };
};
export const changeTodo = (id) => {
  return {
    type: CHANGE_TODO,
    id,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
