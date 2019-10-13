const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

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
