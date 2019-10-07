import React from 'react'
import * as posenet from '@tensorflow-models/posenet'
import 'p5/lib/addons/p5.dom'
import Loading from './loading'
class Camera extends React.Component {
  constructor() {
    super()
    this.state = {cameraSet: false}
  }
  async componentDidMount() {
    this.posenet = await posenet.load({
      architecture: 'ResNet50',
      outputStride: 32,
      inputResolution: 193,
      quantBytes: 1
    })
    await this.setupCamera()
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
          width: 600,
          height: 800
        }
      })
      this.setState({cameraSet: true})
      this.video.srcObject = stream
    } catch (err) {
      console.error(err)
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
    let rightWX = poses.keypoints[10].position.x
    let rightWY = poses.keypoints[10].position.y
    let leftWX = poses.keypoints[9].position.x
    let leftWY = poses.keypoints[9].position.y

    if (leftWX > 0 && leftWX < 300 && (leftWY > 0 && leftWY < 200)) {
      console.log('A', leftWX, leftWY)
    }
    if (rightWX > 400 && rightWX < 600 && (rightWY > 0 && rightWY < 200)) {
      console.log('B', rightWX, rightWY)
    }
    if (leftWX > 0 && leftWX < 300 && (leftWY > 600 && leftWY < 800)) {
      console.log('C', leftWX, leftWY)
    }
    if (rightWX > 400 && rightWX < 600 && (rightWY > 600 && rightWY < 800)) {
      console.log('D', rightWX, rightWY)
    }
  }
  getVideo = element => {
    this.video = element
  }

  getCanvas = element => {
    this.canvas = element
  }

  render() {
    return (
      <div>
        {this.state.cameraSet ? '' : <Loading />}
        <video
          playsInline
          id="webcam"
          width="600"
          height="800"
          autoPlay={true}
          ref={this.getVideo}
        />
        <canvas
          className="canvas"
          width="600"
          height="800"
          ref={this.getCanvas}
        />
      </div>
    )
  }
}

export default Camera