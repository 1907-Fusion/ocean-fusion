import React from 'react'
import {connect} from 'react-redux'

class Fish extends React.Component {
  constructor() {
    super()
    this.state = {arr: []}
  }
  componentDidMount() {
    console.log(this.props.score)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.score !== prevProps.score) {
      console.log(this.props.score)
      for (let i = 0; i < this.props.score; i++) {
        const time = Math.round(Math.random() * i) * 10
        this.state.arr.push(
          <span key={time} style={{animationDuration: `${time}s`}} />
        )
      }
    }
  }

  render() {
    const {arr} = this.state

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
            {arr.length > 0
              ? arr.map(fish => {
                  return fish
                })
              : ''}
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
  score: state.user.score
})

export default connect(mapStateToProps, null)(Fish)
