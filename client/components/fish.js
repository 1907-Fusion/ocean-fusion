import React from 'react'
import {connect} from 'react-redux'

class Fish extends React.Component {
  render() {
    let count = 0
    const {score} = this.props
    const fishes = new Array(score).fill(0).map(x => {
      count++
      const time = Math.round(Math.random() * 5)
      return <span key={count} style={{animationDuration: `${time}s`}} />
    })

    return (
      <div className="animationContainer">
        <div className="sun" />
        <div className="clouds">
          <div />
          <div />
          <div />
        </div>
        <div className="birds" />
        <div className="sea">
          <div className="wave w-1" />
          <div className="wave w-2" />
          <div className="fish">{fishes}</div>
        </div>
        <div className="bottom">
          <div className="grass">
            <span />
            <span />
            <span> </span>
          </div>
          <div className="grass">
            <span> </span>
            <span> </span>
            <span> </span>
          </div>
          <div className="grass">
            <span> </span>
            <span> </span>
            <span> </span>
          </div>
          <div className="grass">
            <span> </span>
            <span> </span>
            <span> </span>
          </div>
          <div className="circle">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="circle">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="circle">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="circle">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="grass_tw" />
          <div className="grass_tw" />
          <div className="grass_tw" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  score: state.score
})

export default connect(mapStateToProps, null)(Fish)
