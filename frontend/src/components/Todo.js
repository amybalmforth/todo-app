import React, {Component} from 'react';
import axios from 'axios';
import Input from './Input';
import ListTodo from './ListTodo';

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

  // TO ADD: CHECK FOR TODO ALREADY WITH SAME TASK OR DESC

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
        <Input getTodos={this.getTodos}/>
        <ListTodo todos={todos} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
      </div>
    )
  }
}

export default Todo;
