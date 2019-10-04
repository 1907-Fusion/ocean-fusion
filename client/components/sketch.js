import * as p5 from 'p5'

export default function sketch(p) {
  console.log('-------', p)
  // let rotation = 0;
  let video

  p.setup = function() {
    p.createCanvas(600, 400)
    video = p5.prototype.createCapture(p.VIDEO)
  }

  p.draw = function() {
    p.image(video, 0, 0)
  }
}
