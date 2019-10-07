/* eslint-disable complexity */
import React from 'react'
import Loading from './loading'
import Camera from './camera'
import Question from './question'

class Game extends React.Component {
  render() {
    return (
      <div id="main">
        <div id="main-left">
          <Camera />
        </div>
        <div id="main-right">
          <Question />
        </div>
      </div>
    )
  }
}
export default Game
