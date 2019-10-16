/* eslint-disable complexity */
import React from 'react'
import Camera from './camera'
import Question from './question'
import Ocean from './ocean'
import {connect} from 'react-redux'
import {scoreReset} from '../store'

class Game extends React.Component {
  componentDidMount() {
    this.props.resetScore()
  }

  render() {
    return (
      <div className="main">
        <div className="main-left">
          <Camera />
        </div>
        <div className="main-right">
          <Ocean />
          <Question />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  resetScore: () => dispatch(scoreReset())
})

export default connect(null, mapDispatchToProps)(Game)
