import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {scoreReset, saveScore} from '../store'

class GameOver extends React.Component {
  componentDidMount() {
    this.props.saveScore(this.props.score, this.props.user.id)
    this.props.resetScore()
  }

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
const mapStateToProps = state => ({
  user: state.user,
  score: state.score
})

const mapDispatchToProps = dispatch => ({
  saveScore: (score, id) => dispatch(saveScore(score, id)),
  resetScore: () => dispatch(scoreReset())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameOver)
