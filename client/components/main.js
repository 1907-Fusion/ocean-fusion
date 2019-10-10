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
      <div className="mainPage">
        <img
          style={{marginLeft: '5%', margin: '90px'}}
          id="earth"
          src="http://sannenijboer.nl/wp-content/uploads/2018/01/wereldbol.png"
        />
        <div className="summary">
          <h1>Let's Play Ocean Fusion</h1>
          <h3>🌎 Do you know how to save the world? We'll ask a question...</h3>
          <h3>
            👋 <b>WAVE YOUR HAND</b> over your answer!
          </h3>
          <h3>🐟 If you pick the right answer, more fish will appear!</h3>
          <h3>
            🎣 If you pick the wrong answer, the ocean's fish will disappear...
          </h3>
          <h3>😵 It's GAME OVER if all the fish are gone!</h3>

          <h4>Can you save the world in 5 minutes?</h4>
          <Button className="button" id="mainPageBtn">
            <Link to="/login">Play Game</Link>
          </Button>
        </div>
      </div>
    )
  }
}

export default Main
