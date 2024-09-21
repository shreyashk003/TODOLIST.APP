import React, { useState, useRef } from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ListApp() {
  const task = useRef(''); 
  const [todos, setTodos] = useState([]); 
  const [filter, setFilter] = useState('all'); // For filtering tasks

  // Function to add a new task
  const addTodo = () => {
    const newTodo = {
      text: task.current.value.trim(),
      completed: false, // Task completion status
      priority: 'low' // Default priority is low
    };
    if (newTodo.text) {
      setTodos([...todos, newTodo]); 
      task.current.value = ''; 
    }
  };

  // Function to toggle task completion
  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed }; 
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function to set task priority
  const setPriority = (index, priority) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, priority: priority };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function to delete a task
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); 
    setTodos(updatedTodos);
  };

  // Function to filter tasks
  const getFilteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed);
    } else if (filter === 'incomplete') {
      return todos.filter((todo) => !todo.completed);
    } else {
      return todos;
    }
  };

  return (
    <div className='box'>
      <h3>TODO ListApp</h3>
      <input ref={task} type='text' placeholder='Enter a task' />
      <button onClick={addTodo}>Add</button>

      <div className='filter-options'>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <ul>
        {getFilteredTodos().map((todo, index) => (
          <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(index)}>
              {todo.text}
            </span>
            <span className='priority'>
              Priority:
              <select
                value={todo.priority}
                onChange={(e) => setPriority(index, e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </span>
            <button onClick={() => handleDelete(index)}>
              <i className='bi bi-trash3-fill'></i>
              <span>Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListApp;

