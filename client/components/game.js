import React from 'react'
import * as p5 from 'p5'
import * as posenet from '@tensorflow-models/posenet'
import 'p5/lib/addons/p5.dom'

class Game extends React.Component {
  constructor() {
    super()
    this.video = React.createRef()
  }
  componentDidMount() {
    this.setup()
  }

  async setup() {
    const sketch = new p5()
    sketch.createCanvas(640, 580)
    const video = sketch.createCapture(p5.VIDEO)
    video.size(sketch.width, sketch.height)
    const net = await posenet.load({
      architecture: 'MobileNetV1',
      outputStride: 16,
      inputResolution: 513,
      multiplier: 0.75
    })
    const pose = await net.estimateSinglePose(this.video.current, {
      flipHorizontal: false
    })
    console.log(pose)
  }

  gotPoses = () => {
    console.log('got poses')
  }

  modelReady = () => {
    console.log('model is ready')
  }

  render() {
    return (
      <div>
        <video ref={this.video} width="640" height="580" />
      </div>
    )
  }
}

export default Game
