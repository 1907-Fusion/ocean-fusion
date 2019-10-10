/* eslint-disable complexity */
import React from 'react'
import Camera from './camera'
import Question from './question'
import Ocean from './ocean'

class Game extends React.Component {
  render() {
    return (
      <div className="main">
        <Camera />
        <div>
          <Ocean />
          <Question />
        </div>
      </div>
    )
  }
}
export default Game
