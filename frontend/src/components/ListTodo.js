import React from 'react';

const ListTodo = ({ todos, deleteTodo }) => {

  return(
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo._id} onClick={() => deleteTodo(todo._id)}>
            {todo.task}
            {todo.description}
            {todo.date ? ' | ' + todo.date.slice(0, -14) : todo.date}
            {todo.completed}
          </li>
        )
      })}
    </ul>
  )
}

export default ListTodo
