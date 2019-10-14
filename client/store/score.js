import axios from 'axios'

const GET_SCORE = 'GET_SCORE'
// const INCREASE_SCORE = 'INCREASE_SCORE'
const RESET_SCORE = 'RESET_SCORE'

export const getScore = score => ({
  type: GET_SCORE,
  score
})

// const increaseScore = (pointValue, score) => ({
//   type: INCREASE_SCORE,
//   pointValue,
//   score
// })

export const gotScore = score => async dispatch => {
  await dispatch(getScore(score))
}

// export const isAnswerCorrect = (id, answer, score) => async dispatch => {
//   try {
//     const res = await axios.get(`/api/questions/${id}`)
//     const question = res.data
//     if (answer === question.answer) {
//       dispatch(increaseScore(question.pointValue, score))
//     } else {
//       dispatch(gotScore(score))
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

const defaultScore = 0

const score = (state = defaultScore, action) => {
  switch (action.type) {
    case GET_SCORE:
      return action.score
    // case INCREASE_SCORE:
    //   return action.score + action.pointValue
    case RESET_SCORE:
      return defaultScore
    default:
      return state
  }
}

export default score
