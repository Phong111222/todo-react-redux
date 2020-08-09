import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, reset } from '../actions/actions';

const InputTodo = () => {
  const dispatch = useDispatch();
  const { item, edited } = useSelector((state) => state);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (edited) setInput(item);
    else setInput('');
  }, [item, edited]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.length) {
      alert('EMPTY TODO ');
      return;
    }
    dispatch(addTodo(input));
    e.target.reset();
    setInput('');
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <form className='form-inline' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            style={{ width: 800 }}
            placeholder='Add Todo'
            value={input}
            onChange={handleChange}
          />
        </div>

        <button
          type='submit'
          className={`btn ${!edited ? 'btn-primary' : 'btn-danger'}`}
        >
          {!edited ? 'ADD' : 'EDIT'}
        </button>
        <button
          type='button'
          className='btn btn-secondary ml-2'
          onClick={() => handleReset()}
        >
          RESET
        </button>
      </form>
    </div>
  );
};
export default InputTodo;
