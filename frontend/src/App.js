import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

// const API_URL = 'http://localhost:3000/todos/';
//
// function App() {
//   const [todos, setTodos] = useState([])
//
//   useEffect(() => {
//     const fetchTodoAndSetTodos = async () => {
//       const { data: todos } = await axios.get(API_URL)
//       setTodos(todos)
//     }
//     fetchTodoAndSetTodos()
//   }, [])
//
//   return (
//     <div className="App">
//       <div className="todoList">
//         <ul>
//           {todos.map(({ _id, task, desc, date, completed }, i) => (
//             <li key={i}>
//             {task} | {desc} {date ? '| ' + date.slice(0, -14) : date}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default App;
