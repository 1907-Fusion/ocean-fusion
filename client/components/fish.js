import React from 'react'
import {connect} from 'react-redux'

// let arr=[]
class Fish extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {arr: []}
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.score !== prevProps.score) {
  //     for (let i = 0; i < this.props.score; i++) {
  //       const time = Math.round(Math.random() * 5) * 10;
  //       arr.push(<span key={time} style={{animationDuration: `${time}s`}} />)
  //       // this.setState({
  //       //   arr: [
  //       //     ...this.state.arr,
  //       //     <span key={time} style={{animationDuration: `${time}s`}} />
  //       //   ]
  //       // })
  //     }
  //   }
  // }

  render() {
    const {score} = this.props
    // const fishes = new Array(5).fill(0).map((x, index) => {
    //   const time = Math.round(Math.random() * 10)
    //   return <span key={index} style={{animationDuration: `${time}s`}} />
    // })

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
  score: state.user.score
})

export default connect(mapStateToProps, null)(Fish)
