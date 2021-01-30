import React from 'react';

const ListTodo = ({ todos, deleteTodo, completeTodo }) => {

  return(
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo._id}>
            <span className={todo.completed ? 'completed' : ''}>{todo.task + ' | '}
            {todo.description + ' | '}
            {todo.date ? todo.date.slice(0, -14) : todo.date}</span>
            <span id="complete" onClick={() => completeTodo(todo._id)}>complete</span>
            <span id="delete" onClick={() => deleteTodo(todo._id)}>delete</span>
          </li>
        )
      })}
    </ul>
  )
}

export default ListTodo
