import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, name, score}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div className="navbar">
          {/* The navbar will show these links after you log in */}
          <div id="nav-left">
            <Link to="/">
              <h1>Ocean Fusion</h1>
            </Link>
          </div>
          <div id="nav-right" style={{display: 'flex'}}>
            <h3 style={{color: 'white'}}>Hello, {name}</h3>
            <Link to="/game" style={{padding: '18px'}}>
              <button className="button" type="button" style={{height: '30px'}}>
                New Game
              </button>
            </Link>
            <Link to="/" onClick={handleClick} style={{paddingRight: '16px'}}>
              <button className="button" type="button" style={{height: '30px'}}>
                Logout
              </button>
            </Link>
            <h1 className="score-title">Score: {score}</h1>
          </div>
        </div>
      ) : (
        <div className="navbar">
          {/* The navbar will show these links before you log in */}
          <div id="nav-left">
            <Link to="/">
              <h1>Ocean Fusion</h1>
            </Link>
          </div>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    name: state.user.email,
    score: state.score
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
