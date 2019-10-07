import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Main extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="main">
        <img
          style={{marginLeft: '5%'}}
          id="earth"
          src="http://sannenijboer.nl/wp-content/uploads/2018/01/wereldbol.png"
        />
        <div className="summary">
          <h1>Ocean Fusion</h1>
          <br />
          <h3>
            <i>How to play:</i>
          </h3>
          <br />
          <li>
            <p>
              1. A trivia question with multiple choice answers will appear on
              the screen
            </p>
            <p>2. Player will choose the answer using their arms</p>
            <p>
              3. If the correct answer is chosen, a new fish will appear on the
              animation
            </p>
            <p>4. If the wrong answer is chosen, a fish will be killed</p>
            <p>
              5. The game ends when there are no more fish in the ocean or when
              time runs out
            </p>
          </li>
          <Button className="button">
            <Link to="/game">Play Game</Link>
          </Button>
        </div>
      </div>
    )
  }
}

export default Main
