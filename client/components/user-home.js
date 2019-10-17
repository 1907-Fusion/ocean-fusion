import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {email, score} = this.props.user
    return (
      <div className="home">
        <div id="home">
          <h4>Welcome, {email}</h4>
          <h4>Can you beat your highest score of {score}?</h4>
          <Button className="button" id="mainPageBtn">
            <Link to="/game">Play Game</Link>
          </Button>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
