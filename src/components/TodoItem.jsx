import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, completeTodo } from '../actions/actions';

const TodoItem = ({ props }) => {
  const { Todo, id, isCompleted } = props;
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    dispatch(removeTodo(id));
  };
  const handleComplete = (e) => {
    dispatch(completeTodo(id));
  };
  return (
    <li className='d-flex justify-content-between mt-2' id='item' value={id}>
      <h5 style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {Todo}
      </h5>
      <div>
        <button
          type='button'
          className='btn btn-success mr-2'
          onClick={(e) => handleComplete(e)}
        >
          Complete
        </button>
        <button
          type='button'
          className='btn btn-danger mr-2'
          onClick={(e) => handleDelete(e)}
        >
          Delete
        </button>
        <button type='button' className='btn btn-danger'>
          Change
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
