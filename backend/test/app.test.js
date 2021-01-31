const mongoose = require('mongoose');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const {app} = require('../server');
const Todo = require('../models/todo');

let todo;

describe('post route', () => {
  it('should post a todo', (done) => {
    request('http://localhost:5000')
    .post('/todos')
    .send({
      completed: false,
      _id: '60159d96366c3b1205484c2a',
      task: 'test task name',
      description: 'test task description',
      date: '2021-01-31T00:00:00.000Z',
    })
    .end((err, res) => {
      todo = res.body;
      expect(res.status).to.eq(200);
      expect(res.body.task).to.eq('test task name');
      expect(res.body.description).to.eq('test task description');
      done();
    })
  })
})

describe('get route', () => {
  it('should get todos', (done) => {
    request('http://localhost:5000')
    .get('/todos')
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body[0].task).to.eq('test task name');
      expect(res.body[0].description).to.eq('test task description');
      done();
    })
  })
})

describe('get by id route', () => {
  it('should get todos', (done) => {
    request('http://localhost:5000')
    .get('/todos/60159d96366c3b1205484c2a')
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body.task).to.eq('test task name');
      expect(res.body.description).to.eq('test task description');
      done();
    })
  })
})

describe('put route', () => {
  it('should complete a todo', (done) => {
    request('http://localhost:5000')
    .put(`/todos/${todo._id}`)
    .send({
      completed: true,
    })
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body.completed).to.eq(true);
      done();
    })
  })
})

describe('delete route', () => {
  it('should delete a todo', (done) => {
    request('http://localhost:5000')
    .delete(`/todos/${todo._id}`)
    .end((err, res) => {
      expect(res.body).to.eq('todo deleted');
      done();
    })
  })
})

after((done) => {
  Todo.remove({})
  .then(() => done())
});
