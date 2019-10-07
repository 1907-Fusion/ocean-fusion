import React from 'react'

class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <h1 className="loadingEarth">Saving the Earth...</h1>
        <img
          id="earth"
          src="http://sannenijboer.nl/wp-content/uploads/2018/01/wereldbol.png"
        />
      </div>
    )
  }
}
export default Loading
