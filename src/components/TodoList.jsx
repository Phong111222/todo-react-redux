import React from 'react';
import { connect, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
const TodoList = () => {
  const list = useSelector((state) => state);

  return (
    <ul className='mt-3'>
      {list.map((item) => {
        return <TodoItem props={item} key={item.id} />;
      })}
    </ul>
  );
};
export default TodoList;
