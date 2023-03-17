const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const api = supertest(app)
const helper = require('./test_helper')

beforeEach(async () => {
  await Blog.deleteMany({})
  for (const blog of helper.initialBlogs) {
    const noteObject = new Blog(blog)
    await noteObject.save()
  }
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 20000) // this is async wait times for not get error

test('blogs are recorded as json', async () => {
  const newBlog = {
    title: 'React patterns',
    author: 'Michael Chanellll',
    url: 'https://reactpatterns.com/',
    likes: 7
  }
  const blogs1 = await helper.blogsInDb()

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)    
    .expect('Content-Type', /application\/json/)

  const blogs = await helper.blogsInDb()
  expect(blogs).toHaveLength(blogs1.length + 1)
}, 20000) // this is async wait times for not get error

test('a specific blog can be viewed', async () => {
  const blogsatStart = await helper.blogsInDb()

  const blogstoView = blogsatStart[0]
  const resultNote = await api
    .get(`/api/blogs/${blogstoView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)
    
  expect(resultNote.body._id).toEqual(blogstoView._id)
  console.log("1",resultNote.body.id,"2",blogstoView.id)
}, 20000)

test('blog without likes is added as 0', async () => {
  const newBlog = {
    title: 'React patterns',
    author: 'Michael Chanljh',
    url: 'https://reactpatterns.com/'
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)

    const notesAtEnd = await helper.blogsInDb()
    expect(notesAtEnd[notesAtEnd.length-1].likes).toEqual(0)
})

test('blog with wrong url or title is not added', async () => {
  const newBlog = {
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/'
  }
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})


afterAll(async () => {
  await mongoose.connection.close()
})
