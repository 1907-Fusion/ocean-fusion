/* eslint-disable no-unused-vars */
/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Question = db.model('question')

describe('Question routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/questions/', () => {
    const testContent = 'How does the cat feel?'
    const testChoices = [
      'meowtastic',
      'meowpressed',
      'good right meow',
      'meowwy'
    ]
    const testAnswer = 'good right meow'

    beforeEach(() => {
      return Question.create({
        content: testContent,
        choices: testChoices,
        answer: testAnswer
      })
    })

    // it('GET /api/questions', async () => {
    //   const res = await request(app)
    //     .get('/api/questions')
    //     .expect(200)

    //   expect(res.body).to.be.an('array')
    //   expect(res.body[0].content).to.be.equal(testContent)
    // })

    it('GET /api/questions/random', async () => {
      const res = await request(app)
        .get('/api/questions/random')
        .expect(200)
    })
  })
})
