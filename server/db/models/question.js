const Sequelize = require('sequelize')
const db = require('../db')

const Question = db.define('question', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  choices: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  answer: {
    type: Sequelize.STRING
  },
  pointValue: {
    type: Sequelize.INTEGER,
    defaultValue: 200
  }
})

module.exports = Question
