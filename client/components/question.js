import React from 'react'
import {connect} from 'react-redux'
import {gotQuestion} from '../store'

class Question extends React.Component {
  componentDidMount() {
    this.props.getRandomQuestion()
  }
  render() {
    const {question} = this.props
    //console.log(this.props)
    return (
      <div id="question-container">
        {question ? (
          <div id="question-inner-container">
            <div id="question-content">
              <h2 id="question-title">{question.content}</h2>
            </div>
            {question.choices && question.choices.length > 0 ? (
              <div id="question-choices">
                <div id="choice-a">
                  <h3>A. {question.choices[0]}</h3>
                </div>
                <div id="choice-b">
                  <h3>B. {question.choices[1]}</h3>
                </div>
                <div id="choice-c">
                  <h3>C. {question.choices[2]}</h3>
                </div>
                <div id="choice-d">
                  <h3>D. {question.choices[3]}</h3>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
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
