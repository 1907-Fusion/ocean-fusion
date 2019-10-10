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
                  <h4>A. {question.choices[0]}</h4>
                </div>
                <div id="choice-b">
                  <h4>B. {question.choices[1]}</h4>
                </div>
                <div id="choice-c">
                  <h4>C. {question.choices[2]}</h4>
                </div>
                <div id="choice-d">
                  <h4>D. {question.choices[3]}</h4>
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
