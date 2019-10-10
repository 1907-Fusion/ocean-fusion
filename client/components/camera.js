/* eslint-disable max-statements */
/* eslint-disable react/no-unused-state */
/* eslint-disable complexity */
import React from 'react'
import * as posenet from '@tensorflow-models/posenet'
import 'p5/lib/addons/p5.dom'
import Loading from './loading'
import {connect} from 'react-redux'
import {gotQuestion, me, setScore} from '../store'

let percentage = 0

class Camera extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cameraSet: false,
      waterFilter: {},
      videoHeight: window.innerHeight * 0.8,
      videoWidth: window.innerWidth * 0.5
    }
  }
  async componentDidMount() {
    this.props.getUser()
    this.props.getQuestion()
    this.posenet = await posenet.load({
      architecture: 'ResNet50',
      outputStride: 32,
      inputResolution: 193,
      quantBytes: 1
    })

    await this.setupCamera()
    setTimeout(() => {
      this.timer()
    }, 10000)
  }

  timer() {
    if (percentage < 101) {
      setTimeout(() => {
        percentage += 25
        // this.setState({
        //   waterFilter: {
        //     backgroundColor: 'rgb(0, 109, 170, 0.5)',
        //     position: 'absolute',
        //     width: '38%',
        //     top: '10%',
        //     height: `${percentage}%`
        //   }
        // })
        this.timer()
      }, 500)
    } else {
      percentage = 0
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
      console.log('B')
      let correctAnswer = this.props.question.answer
      let userAnswer = this.props.question.choices[1]
      if (correctAnswer === userAnswer) {
        console.log(this.props.user.score)
        this.props.user.score += 200
        this.props.setScore(this.props.user.score)
      }
    }
    if (
      rightWX > width * 0.8 &&
      rightWX < width &&
      (rightWY > 0 && rightWY < height * 0.2)
    ) {
      this.setState({answer: 'A'})
      console.log('A')
      let correctAnswer = this.props.question.answer
      let userAnswer = this.props.question.choices[0]
      if (correctAnswer === userAnswer) {
        console.log(this.props.user.score)
        this.props.user.score += 200
        this.props.setScore(this.props.user.score)
      }
    }
    if (
      leftWX > 0 &&
      leftWX < width * 0.2 &&
      (leftWY > height * 0.8 && leftWY < height)
    ) {
      this.setState({answer: 'D'})
      console.log('D')
      let correctAnswer = this.props.question.answer
      let userAnswer = this.props.question.choices[3]
      if (correctAnswer === userAnswer) {
        console.log(this.props.user.score)
        this.props.user.score += 200
        this.props.setScore(this.props.user.score)
      }
    }
    if (
      rightWX > width * 0.8 &&
      rightWX < width &&
      (rightWY > height * 0.8 && rightWY < height)
    ) {
      this.setState({answer: 'C'})
      console.log('C')
      let correctAnswer = this.props.question.answer
      let userAnswer = this.props.question.choices[2]
      if (correctAnswer === userAnswer) {
        console.log(this.props.user.score)
        this.props.user.score += 200
        this.props.setScore(this.props.user.score)
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
    const {cameraSet, waterFilter} = this.state
    return (
      <div className="camera">
        {cameraSet ? (
          <div id="answer-circle-container">
            <div className="answer-circle" id="answer-circle-a">
              <h2 className="answer-circle-text">A</h2>
            </div>
            <div className="answer-circle" id="answer-circle-b">
              <h2 className="answer-circle-text">B</h2>
            </div>
            <div className="answer-circle" id="answer-circle-c">
              <h2 className="answer-circle-text">C</h2>
            </div>
            <div className="answer-circle" id="answer-circle-d">
              <h2 className="answer-circle-text">D</h2>
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
        {/* <div style={waterFilter} /> */}
        <canvas className="canvas" ref={this.getCanvas} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  question: state.question,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getQuestion: () => dispatch(gotQuestion()),
  getUser: () => dispatch(me()),
  setScore: score => dispatch(setScore(score))
})

export default connect(mapStateToProps, mapDispatchToProps)(Camera)
