/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {scoreIsSet, scoreReset} from './score'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators for score reducer', () => {
  let store

  const initialState = 0

  beforeEach(() => {
    store = mockStore(initialState)
  })

  afterEach(() => {
    store.clearActions()
  })

  describe('scoreIsSet', () => {
    it('eventually dispatches the GET SCORE action', async () => {
      const scoreInput = 20
      await store.dispatch(scoreIsSet(scoreInput))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SCORE')
      expect(actions[0].score).to.be.deep.equal(20)
    })
  })

  describe('scoreReset', () => {
    it('scoreReset: sets score to 0', async () => {
      await store.dispatch(scoreReset())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SCORE')
      expect(actions[0].score).to.be.deep.equal(0)
    })
  })
})
