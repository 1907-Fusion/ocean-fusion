import axios from 'axios'

const GET_SCORE = 'GET_SCORE'

export const setScore = score => ({
  type: GET_SCORE,
  score
})

export const scoreIsSet = score => async dispatch => {
  await dispatch(setScore(score))
}

export const scoreReset = () => async dispatch => {
  await dispatch(setScore(0))
}

export const saveScore = (newScore, id) => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${id}`)
    let oldScore = res.data.score
    if (oldScore < newScore) {
      axios.put(`/api/users/${id}`, {score: newScore})
    }
    await dispatch(setScore(newScore))
  } catch (error) {
    console.log(error)
  }
}

const defaultScore = 0

const score = (state = defaultScore, action) => {
  switch (action.type) {
    case GET_SCORE:
      return action.score
    default:
      return state
  }
}

export default score
