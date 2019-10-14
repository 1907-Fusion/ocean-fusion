import React from 'react'
import {connect} from 'react-redux'

class Fish extends React.Component {
  render() {
    const {score} = this.props

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
          <div className="fish">
            {score > 0 ? (
              <div>
                <span style={{animationDuration: '5s'}} />
                <span style={{animationDuration: '9s'}} />
                <span style={{animationDuration: '8s'}} />
                <span style={{animationDuration: '10s'}} />
                <span style={{animationDuration: '7s'}} />
              </div>
            ) : (
              ''
            )}
          </div>
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
