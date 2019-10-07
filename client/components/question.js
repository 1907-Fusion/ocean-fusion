import React from 'react'
import {connect} from 'react-redux'
import {gotQuestion} from '../store'

class Question extends React.Component {
  componentDidMount() {
    this.props.getRandomQuestion()
  }

  render() {
    console.log('THIS HAS REACHED THE QUESTION COMPONENT')
    return (
      <div id="question-container">
        <h2>WE ARE INSIDE THE QUESTION COMPONENT!</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  getRandomQuestion: () => dispatch(gotQuestion())
})

export default connect(mapStateToProps, mapDispatchToProps)(Question)
