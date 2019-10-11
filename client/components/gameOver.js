import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class GameOver extends React.Component {
  render() {
    return (
      <div className="game-over">
        <div className="game-over-text">
          <h1>GAME OVER!</h1>
          <h4>Want to try again? Click the button below.</h4>
        </div>
        <Button className="button" id="mainPageBtn">
          <Link to="/game">Start Over</Link>
        </Button>
      </div>
    )
  }
}

export default GameOver
