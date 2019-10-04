const router = require('express').Router()
const {Question} = require('../db/models')
module.exports = router

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.findAll()
    res.json(questions)
  } catch (err) {
    next(err)
  }
})

router.get('/random', async (req, res, next) => {
  try {
    let randomNumber = getRandomInt(1, 34)
    const question = await Question.findByPk(randomNumber)
    res.json(question)
  } catch (err) {
    next(err)
  }
})