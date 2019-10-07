import axios from 'axios'

const GET_QUESTION = 'GET_QUESTION'

const getQuestion = question => ({
  type: GET_QUESTION,
  question
})

const defaultQuestion = {}

export const gotQuestion = () => async dispatch => {
  try {
    const res = await axios.get('/api/questions/random')
    dispatch(getQuestion(res.data))
  } catch (error) {
    console.log(error)
  }
}

const question = (state = defaultQuestion, action) => {
  switch (action.type) {
    case GET_QUESTION:
      return action.question
    default:
      return state
  }
}

export default question
