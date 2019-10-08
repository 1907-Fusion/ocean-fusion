import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Card, Button, Nav} from 'react-bootstrap'

/**
 * COMPONENT
 */
class AuthForm extends React.Component {
  constructor() {
    super()
    this.state = {show: false}
  }
  showTrue = () => {
    this.setState({show: true})
  }
  showFalse = () => {
    this.setState({show: false})
  }
  render() {
    const {handleSubmit, error, name} = this.props
    const {show} = this.state
    const register = () => {
      return (
        <Card.Body style={{textAlign: 'center'}}>
          <Card.Text>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  style={{
                    width: '600px',
                    height: '43px',
                    borderRadius: '4px'
                  }}
                />
              </div>
              <br />
              <div>
                <input
                  name="email"
                  type="text"
                  placeholder="User Email"
                  style={{
                    width: '600px',
                    height: '43px',
                    borderRadius: '4px'
                  }}
                />
              </div>
              <br />
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  style={{
                    width: '600px',
                    height: '43px',
                    borderRadius: '4px'
                  }}
                />
              </div>
              {error && error.response && <div> {error.response.data} </div>}
              <br />
              <Button
                type="submit"
                style={{backgroundColor: '#32a842', border: 'white'}}
              >
                Register
              </Button>
            </form>
          </Card.Text>
        </Card.Body>
      )
    }

    const login = () => {
      return (
        <Card.Body style={{textAlign: 'center'}}>
          <Card.Text>
            <form onSubmit={handleSubmit} name={name}>
              <div>
                <input
                  name="email"
                  type="text"
                  placeholder="User Email"
                  style={{
                    width: '600px',
                    height: '43px',
                    borderRadius: '4px'
                  }}
                />
              </div>
              <br />
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  style={{
                    width: '600px',
                    height: '43px',
                    borderRadius: '4px'
                  }}
                />
              </div>
              {error && error.response && <div> {error.response.data} </div>}
              <br />
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </form>
          </Card.Text>
          <div>
            <a className="googleBtn" href="/auth/google">
              <img
                width="20px"
                alt="Google &quot;G&quot; Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              Login with Google
            </a>
          </div>
        </Card.Body>
      )
    }
    return (
      <div
        style={{display: 'flex', justifyContent: 'center', marginTop: '70px'}}
      >
        <Card style={{width: '79%'}}>
          <Card.Header>
            <Nav
              variant="tabs"
              defaultActiveKey="#first"
              className="justify-content-center"
            >
              <Nav.Item>
                <Nav.Link
                  className="loginBtn"
                  href="#first"
                  onClick={this.showFalse}
                  style={{fontSize: '20px'}}
                >
                  Login
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#link"
                  onClick={this.showTrue}
                  style={{fontSize: '20px'}}
                >
                  Register
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          {show ? register() : login()}
        </Card>
      </div>
    )
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      if (evt.target.name === 'login') {
        const formName = evt.target.name
        const email = evt.target.email.value
        const password = evt.target.password.value
        dispatch(auth(email, password, formName))
      } else {
        const email = evt.target.email.value
        const password = evt.target.password.value
        dispatch(auth(email, password, 'signup'))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
