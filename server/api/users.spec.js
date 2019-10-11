const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  // describe('/api/users/', () => {
  //   it('redirects the user to home page for logged in users', async () => {
  //     const codysEmail = 'cody@puppybook.com'
  //     const codysPassword = 'password'
  //     User.create({
  //       email: codysEmail,
  //       password: codysPassword
  //     })
  //     const postData = {
  //       email: codysEmail,
  //       password: codysPassword
  //     }
  //     const loggedinUser = await request(app)
  //       .post('/auth/login')
  //       .type('form') //browsers have form
  //       .send(postData) // log in cody
  //     const cookie = loggedinUser.headers['set-cookie'] //we need to mimic a successfull login when we run the test we actually don`t use a browser so I mimic the login cookie.
  //     await request(app)
  //       .get('/api/users')
  //       .set('cookie', cookie) // when we use browser it explicitly done otomatically.
  //       .expect(302)
  //   })
  // })
  it('shows all users for logged in admin users', async () => {
    const codysEmail = 'cody@puppybook.com'
    const codysPassword = 'password'
    User.create({
      email: codysEmail,
      password: codysPassword,
      isAdmin: true
    })
    const postData = {
      email: codysEmail,
      password: codysPassword
    }
    const loggedinUser = await request(app)
      .post('/auth/login')
      .type('form')
      .send(postData) // log in cody
    const cookie = loggedinUser.headers['set-cookie']

    const res = await request(app)
      .get('/api/users')
      .set('cookie', cookie)
      .expect(200)
    expect(res.body).to.be.an('array')
    expect(res.body[0].email).to.be.equal(codysEmail)
  })
})
