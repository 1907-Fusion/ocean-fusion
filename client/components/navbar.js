import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div className="nav">
          {/* The navbar will show these links after you log in */}
          <div id="nav-left">
            <Link to="/home">
              <h1>Ocean Fusion</h1>
            </Link>
          </div>
          <div id="nav-right">
            <button className="nav-button" type="button">
              Score:
            </button>
            <a href="#" onClick={handleClick}>
              <button className="nav-button" type="button">
                New Game
              </button>
            </a>
            <a href="#" onClick={handleClick}>
              <button className="nav-button" type="button">
                Logout
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="nav">
          {/* The navbar will show these links before you log in */}
          <div id="nav-left">
            <Link to="/home">
              <h1>Ocean Fusion</h1>
            </Link>
          </div>
          <div id="nav-right">
            <Link to="/login">
              <button className="nav-button" type="button">
                Play Game
              </button>
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
    isLoggedIn: !!state.user.id
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
