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

  render() {
    let { todos } = this.state;

    return(
      <div>
        <Input getTodos={this.getTodos}/>
        <ListTodo todos={todos}/>
      </div>
    )
  }
}

export default Todo;
