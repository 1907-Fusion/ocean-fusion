import React from 'react'
// import * as p5 from 'p5'
import * as posenet from '@tensorflow-models/posenet'
import 'p5/lib/addons/p5.dom'

class Game extends React.Component {
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
      console.log('stream', stream)
      this.video.srcObject = stream
    } catch (err) {
      console.error(err)
    } finally {
      this.detectPose()
    }
  }

  async detectPose() {
    const pose = await this.posenet.estimateSinglePose(this.video, {
      flipHorizontal: true
    })

    setTimeout(() => {
      this.detectPose()
    }, 100)
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

export default Game
