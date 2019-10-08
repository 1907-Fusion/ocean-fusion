import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, name}) => (
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
            <h3 style={{color: 'white', margin: '14px'}}>Hello, {name}</h3>
            {/* <button className="button" type="button">
              Score:
            </button> */}
            <Link to="/game" onClick={handleClick}>
              <button className="button" type="button">
                New Game
              </button>
            </Link>
            <Link to="/logout" onClick={handleClick}>
              <button className="button" type="button">
                Logout
              </button>
            </Link>
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
          {/* <div id="nav-right">
            <Link to="/login">
              <button className="button" type="button">
                Play Game
              </button>
            </Link>
          </div> */}
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
    name: state.user.email
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
