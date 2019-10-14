const {expect} = require('chai')
const db = require('../db')
const Question = require('./question')

describe('Question model', () => {
  beforeEach(() => db.sync({force: true}))

  describe('column definitions and validations', () => {
    it('has a `content`,`choices`,`answer`,`pointValue`', async () => {
      const questionTest = await Question.create({
        content: 'some good stuff',
        choices: ['a,b,c,d'],
        answer: 'a',
        pointValue: 600
      })

      expect(questionTest.content).to.equal('some good stuff')
      expect(Array.isArray(questionTest.choices)).to.equal(true)
      expect(questionTest.answer).to.equal('a')
      expect(questionTest.pointValue).to.equal(600)
    })

    it('has a `default point value`', async () => {
      const questionTest = await Question.create({
        content: 'some good stuff',
        choices: ['a,b,c,d'],
        answer: 'a'
      })
      expect(questionTest.content).to.equal('some good stuff')
      expect(Array.isArray(questionTest.choices)).to.equal(true)
      expect(questionTest.answer).to.equal('a')
      expect(questionTest.pointValue).to.equal(5)
    })
  })
})
