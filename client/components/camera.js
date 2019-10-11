/* eslint-disable max-statements */
/* eslint-disable react/no-unused-state */
/* eslint-disable complexity */
import React from 'react'
import * as posenet from '@tensorflow-models/posenet'
import 'p5/lib/addons/p5.dom'
import Loading from './loading'
import {connect} from 'react-redux'
import {gotQuestion, getScore} from '../store'
import {ToastsContainer, ToastsStore} from 'react-toasts'

// let percentage = 0

class Camera extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cameraSet: false,
      videoHeight: window.innerHeight * 0.8,
      videoWidth: window.innerWidth * 0.5,
      answer: '',
      score: 0,
      check: false,
      wrongAnswer: 0
    }
  }
  async componentDidMount() {
    this.props.getQuestion()
    this.posenet = await posenet.load({
      architecture: 'ResNet50',
      outputStride: 32,
      inputResolution: 193,
      quantBytes: 1
    })

    await this.setupCamera()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.score !== prevState.score) {
      this.setState({check: false})
      this.props.getScore(this.state.score)
      this.props.getQuestion()
    }
  }

  async setupCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        'Browser API navigator.mediaDevices.getUserMedia not available'
      )
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user',
          width: this.state.videoWidth,
          height: this.state.videoHeight
        }
      })
      this.setState({cameraSet: true})
      this.video.srcObject = stream
    } catch (err) {
      console.error(err)
    } finally {
      this.detectPose()
    }
  }

  async detectPose() {
    const poses = await this.posenet.estimateSinglePose(this.video, {
      flipHorizontal: false
    })
    this.gotPoses(poses)

    setTimeout(() => {
      this.detectPose()
    }, 100)
  }

  gotPoses(poses) {
    let width = this.state.videoWidth
    let height = this.state.videoHeight
    let rightWX = poses.keypoints[10].position.x
    let rightWY = poses.keypoints[10].position.y
    let leftWX = poses.keypoints[9].position.x
    let leftWY = poses.keypoints[9].position.y
    if (
      leftWX > 0 &&
      leftWX < width * 0.2 &&
      (leftWY > 0 && leftWY < height * 0.2)
    ) {
      this.setState({answer: 'B'})
      let correctAnswer = this.props.question.answer
      let userAnswer = this.state.answer
      if (correctAnswer === userAnswer && !this.state.check) {
        this.setState({score: this.state.score + 5, check: true})
        ToastsStore.success('GREAT JOB! B is the correct answer.')
      } else {
        this.setState({wrongAnswer: this.state.wrongAnswer + 1, check: true})
        console.log('THIS IS THE WRONG ANSWER COUNT', this.state.wrongAnswer)
        ToastsStore.success('OOPS! WRONG ANSWER!')
      }
    }
    if (
      rightWX > width * 0.8 &&
      rightWX < width &&
      (rightWY > 0 && rightWY < height * 0.2)
    ) {
      this.setState({answer: 'A'})
      let correctAnswer = this.props.question.answer
      let userAnswer = this.state.answer
      console.log('A', userAnswer, correctAnswer)
      if (correctAnswer === userAnswer && !this.state.check) {
        this.setState({score: this.state.score + 5, check: true})
        ToastsStore.success('A is the correct answer')
      } else {
        this.setState({wrongAnswer: this.state.wrongAnswer + 1, check: true})
        console.log('THIS IS THE WRONG ANSWER COUNT', this.state.wrongAnswer)
        ToastsStore.success('OOPS! WRONG ANSWER!')
      }
    }
    if (
      leftWX > 0 &&
      leftWX < width * 0.2 &&
      (leftWY > height * 0.8 && leftWY < height)
    ) {
      this.setState({answer: 'D'})
      let correctAnswer = this.props.question.answer
      let userAnswer = this.state.answer
      if (correctAnswer === userAnswer && !this.state.check) {
        this.setState({score: this.state.score + 5, check: true})
        ToastsStore.success('GREAT JOB! D is the correct answer.')
      } else {
        this.setState({wrongAnswer: this.state.wrongAnswer + 1, check: true})
        console.log('THIS IS THE WRONG ANSWER COUNT', this.state.wrongAnswer)
        ToastsStore.success('OOPS! WRONG ANSWER!')
      }
    }
    if (
      rightWX > width * 0.8 &&
      rightWX < width &&
      (rightWY > height * 0.8 && rightWY < height)
    ) {
      this.setState({answer: 'C'})
      let correctAnswer = this.props.question.answer
      let userAnswer = this.state.answer
      console.log('B', userAnswer, correctAnswer)
      if (correctAnswer === userAnswer && !this.state.check) {
        this.setState({score: this.state.score + 5, check: true})
        ToastsStore.success('YOU GOT IT! C is the correct answer.')
      } else {
        this.setState({wrongAnswer: this.state.wrongAnswer + 1, check: true})
        console.log('THIS IS THE WRONG ANSWER COUNT', this.state.wrongAnswer)
        ToastsStore.success('OOPS! WRONG ANSWER!')
      }
    }
  }
  getVideo = element => {
    this.video = element
  }

  getCanvas = element => {
    this.canvas = element
  }

  render() {
    const {cameraSet} = this.state
    return (
      <div className="camera">
        <ToastsContainer className="toasts" store={ToastsStore} />
        {cameraSet ? (
          <div id="answer-circle-container">
            <div className="answer-circle" id="answer-circle-a">
              <h1>A</h1>
            </div>
            <div className="answer-circle" id="answer-circle-b">
              <h1>B</h1>
            </div>
            <div className="answer-circle" id="answer-circle-c">
              <h1>C</h1>
            </div>
            <div className="answer-circle" id="answer-circle-d">
              <h1>D</h1>
            </div>
          </div>
        ) : (
          <Loading />
        )}
        <video
          playsInline
          id="webcam"
          width={this.state.videoWidth}
          height={this.state.videoHeight}
          autoPlay={true}
          ref={this.getVideo}
        />
        <canvas className="canvas" ref={this.getCanvas} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    question: state.question
  }
}

const mapDispatchToProps = dispatch => ({
  getQuestion: () => dispatch(gotQuestion()),
  getScore: scores => dispatch(getScore(scores))
})

export default connect(mapStateToProps, mapDispatchToProps)(Camera)
