let poseNet
let video
let leftWX = 0
let leftWY = 0
let rightWX = 0
let rightWY = 0

function modelReady() {
  console.log('Model is ready!!')
}

function setup() {
  createCanvas(640, 480)
  video = createCapture(VIDEO)
  poseNet = ml5.poseNet(video, modelReady)
  poseNet.on('pose', gotPoses)
}

function poses(poses) {
  console.log('POSES ', poses)
  if (poses.length > 0) {
    let LX = poses[0].pose.keypoints[9].position.x
    let LY = poses[0].pose.keypoints[9].position.y
    let RX = poses[0].pose.keypoints[10].position.x
    let RY = poses[0].pose.keypoints[10].position.y

    // leftWX = lerp(leftWX, LX, 0.5)
    // leftWY = lerp(leftWY, LY, 0.5)
    // rightWX = lerp(rightWX, RX, 0.5)
    // rightWY = lerp(rightWY, RY, 0.5)
  }
}
