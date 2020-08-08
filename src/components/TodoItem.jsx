import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, completeTodo, changeTodo } from '../actions/actions';

const TodoItem = ({ props }) => {
  const { title, id, completed, edited } = props;

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeTodo(id));
  };
  const handleComplete = () => {
    dispatch(completeTodo(id));
  };
  const handleEdit = () => {
    if (!edited) dispatch(changeTodo(id, title));
  };
  return (
    <li className='d-flex justify-content-between mt-2' id='item' value={id}>
      <h5 style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
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
        <button type='button' className='btn btn-danger' onClick={handleEdit}>
          EDIT
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
