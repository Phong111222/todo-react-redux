import React from 'react';
import InputTodo from './components/inputTodo';
import TodoList from './components/TodoList';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  return (
    <div className='App container'>
      <h2 style={{ textAlign: 'center' }}>Todo list</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <InputTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
