import {
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_TODO,
  COMPLETE_TODO,
  RESET,
} from './types';
import { v4 as uuidv4 } from 'uuid';
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: { Todo: todo, id: uuidv4(), isCompleted: false },
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
