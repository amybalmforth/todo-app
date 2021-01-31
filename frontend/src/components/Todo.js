import React, {Component} from 'react';
import axios from 'axios';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const API_URL = 'http://localhost:3000/todos/'

class Todo extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios.get(API_URL)
    .then(res => {
      if (res.data) {
        this.setState({
          todos: res.data
        })
      }
    })
    .catch(err => console.log(err))
  }

  completeTodo = (id) => {
    let payload = {completed: ''}
    const completion = this.state.todos.find(todo => todo._id === id).completed
    completion ? payload = {completed: false} : payload = {completed: true};
    axios.put(`${API_URL}/${id}`, payload)
    .then(res => {
      if (res.data) {
        this.getTodos()
      }
    })
    .catch(err => console.log(err))
  }

  deleteTodo = (id) => {
    axios.delete(`${API_URL}/${id}`)
    .then(res => {
      if (res.data) {
        this.getTodos()
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    let { todos } = this.state;

    return(
      <div>
        <TodoInput getTodos={this.getTodos}/>
        <TodoList todos={todos} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
      </div>
    )
  }
}

export default Todo;
