/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {gotQuestion} from './question'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators for question reducer', () => {
  let store
  let mockAxios

  const initialState = {}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('gotQuestion', () => {
    it('eventually dispatches the GET QUESTION action', async () => {
      mockAxios.onGet('/api/questions/random').replyOnce(200)
      await store.dispatch(gotQuestion())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_QUESTION')
    })
  })
})
