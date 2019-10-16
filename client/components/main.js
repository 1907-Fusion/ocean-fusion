import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    console.log()
    return (
      <div className="mainPage">
        <img
          style={{marginLeft: '5%', margin: '90px'}}
          id="earth"
          src="http://sannenijboer.nl/wp-content/uploads/2018/01/wereldbol.png"
        />
        <div className="summary">
          <h1>Let's Play Ocean Fusion</h1>
          <h3>
            🌎 Do you know how to save our oceans? We'll ask a question...
          </h3>
          <h3>
            👋 <b>WAVE YOUR WRIST</b> over your answer!
          </h3>
          <h3>
            ⏲️ How many questions can you answer correctly in <b>1 minute</b>?
          </h3>
          <h3>
            😵 If you can't answer at least 5 questions correctly{' '}
            <b>it's GAME OVER</b>
          </h3>

          <h4>Can you save the world in 1 minute?</h4>
          <Button className="button" id="mainPageBtn">
            <Link to={this.props.email ? '/game' : '/login'}>Play Game</Link>
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapStateToProps, null)(Main)
