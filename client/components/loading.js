import React from 'react'

class Loading extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <h2 className="loadingEarth">Saving the Earth</h2>
        <img
          id="earth"
          src="http://sannenijboer.nl/wp-content/uploads/2018/01/wereldbol.png"
        />
      </div>
    )
  }
}
export default Loading
