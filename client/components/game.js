// import P5Wrapper from 'react-p5-wrapper';
// import sketch from './sketch';
import React from 'react'
import * as p5 from 'p5'
import 'p5/lib/addons/p5.dom'

class Game extends React.Component {
  constructor() {
    super()
    this.video = React.createRef()
  }
  componentDidMount() {
    const sketch = new p5()
    sketch.createCanvas(640, 480)
    const video = sketch.createCapture(p5.VIDEO)
    video.size(sketch.width, sketch.height)
  }

  render() {
    return (
      <div>
        <video ref={this.video} width="500" height="500" />
      </div>
    )
  }
}

export default Game
