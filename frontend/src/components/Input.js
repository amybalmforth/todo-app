import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/todos/'

class Input extends Component {

  constructor () {
    super();
    this.state = {
      task: "",
      description: "",
      date: "",
      completed: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  addTodo = (e) => {
    e.preventDefault()
    const newTask = {
      task: this.state.task,
      description: this.state.description,
      date: this.state.date
    }
    if (!newTask.task || !newTask.description) {
      alert('task name and description required')
      return
    }
    axios.post(API_URL, newTask)
    .then(res => {
      if (res.data) {
        this.props.getTodos();
        this.setState({
          task: "",
          description: "",
          date: "",
          completed: ""
        })
      }
    })
    .catch(err => console.log(err))
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={(event)=>this.handleChange(event, "task")} />
          <input type="text" onChange={(event)=>this.handleChange(event, "description")} />
          <input type="date" onChange={(event)=>this.handleChange(event, "date")} />
          <button onClick={this.addTodo}>add todo</button>
        </form>
      </div>
    )
  }

}

export default Input
