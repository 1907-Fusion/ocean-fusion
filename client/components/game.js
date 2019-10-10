/* eslint-disable complexity */
import React from 'react'
import Camera from './camera'
import Question from './question'
import Ocean from './ocean'

class Game extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-left">
          <Camera />
        </div>
        <div className="main-right">
          <Question />
          <Ocean />
        </div>
      </div>
    )
  }
}
export default Game
