import React from 'react'
import ReactDOM from 'react-dom'

let poseNet
let video
let leftWX = 0
let leftWY = 0
let rightWX = 0
let rightWY = 0

const videoWidth = 900
const videoHeight = 700

class Game extends React.Component {
  setUp = () => {
    p5.createCanvas(640, 480)
    video = createCapture(VIDEO)
    poseNet = ml5.poseNet(video, modelReady)
    poseNet.on('pose', gotPoses)
  }

  gotPoses = poses => {
    if (poses.length > 0) {
      let LX = poses[0].pose.keypoints[9].position.x
      let LY = poses[0].pose.keypoints[9].position.y
      let RX = poses[0].pose.keypoints[10].position.x
      let RY = poses[0].pose.keypoints[10].position.y

      leftWX = lerp(leftWX, LX, 0.5)
      leftWY = lerp(leftWY, LY, 0.5)
      rightWX = lerp(rightWX, RX, 0.5)
      rightWY = lerp(rightWY, RY, 0.5)
    }
  }

  render() {
    return (
      <div id="camera" ref={this.setUp}>
        <h2>ml5</h2>
      </div>
    )
  }
}

export default Game
