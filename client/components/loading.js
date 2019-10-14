import React from 'react'

class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <h1 id="loading-top">Loading...</h1>
        <img
          id="earth"
          src="http://sannenijboer.nl/wp-content/uploads/2018/01/wereldbol.png"
        />
        <h1 id="loading-bottom">📷 Get ready for the camera!</h1>
      </div>
    )
  }
}
export default Loading
