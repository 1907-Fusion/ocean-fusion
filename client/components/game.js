/* eslint-disable complexity */
import React from 'react'
import Camera from './camera'
import Question from './question'

class Game extends React.Component {
  render() {
    return (
      <div className="main">
        <Camera />
        <Question />
      </div>
    )
  }
}
export default Game
