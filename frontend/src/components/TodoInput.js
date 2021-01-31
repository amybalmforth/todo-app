import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/todos/'

class TodoInput extends Component {

  constructor () {
    super();
    this.state = {
      task: "",
      description: "",
      date: ""
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
          date: ""
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
          <input type="text" placeholder="enter a task name" onChange={(event)=>this.handleChange(event, "task")} value={this.state.task} /><br></br>
          <input type="text" placeholder="enter a task description" onChange={(event)=>this.handleChange(event, "description")} value={this.state.description} /><br></br>
          <input type="date" onChange={(event)=>this.handleChange(event, "date")} value={this.state.date} /><br></br>
          <button onClick={this.addTodo}>add todo</button>
          <br></br>
        </form>
      </div>
    )
  }

}

export default TodoInput
