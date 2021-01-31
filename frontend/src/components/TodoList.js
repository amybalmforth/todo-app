import React from 'react';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  return(
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo._id} id="list">
            <span className={todo.completed ? 'completed' : ''}>{todo.task + ' ~ '}
            {todo.description + ' '}
            {todo.date ? ' ~ ' + todo.date.slice(0, -14) : todo.date} </span>
            <button id="complete" onClick={() => completeTodo(todo._id)}>complete</button>
            <button id="delete" onClick={() => deleteTodo(todo._id)}>delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
