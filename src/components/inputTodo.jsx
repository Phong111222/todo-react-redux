import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo, reset } from '../actions/actions';

const InputTodo = () => {
  let input = '';
  const dispatch = useDispatch();
  const handleChange = (e) => {
    input = e.target.value;
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <form
        className='form-inline'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(input));
          e.target.reset();
          input = '';
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            style={{ width: 600 }}
            placeholder='Add Todo'
            ref={(node) => (node.value = input)}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          ADD
        </button>
        <button
          type='button'
          className='btn btn-secondary ml-2'
          onClick={(e) => handleReset(e)}
        >
          RESET
        </button>
      </form>
    </div>
  );
};
export default connect()(InputTodo);
