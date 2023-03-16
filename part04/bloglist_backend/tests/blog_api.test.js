const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Note = require('../models/blog')
const api = supertest(app)

test('notes are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  },10000) // this is async wait times for not get error


afterAll(async () => {
    await mongoose.connection.close()
  })