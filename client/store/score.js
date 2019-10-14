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
