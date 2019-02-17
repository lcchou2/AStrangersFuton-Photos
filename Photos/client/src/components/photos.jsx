

import React from 'react'

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(

      <div className = "outside" onClick={() => { this.props.modalHandler() }}>
        <div className = 'container'>
        
        <div className = 'bigger'>
        
          <img src = {this.props.list[0].url}></img>
        </div>
  
        <div className = 'innerContainer'>
          <div className = 'smaller'>
            <img src = {this.props.list[1].url}></img>
          </div>
  
          <div className = 'smaller'>
            <img src = {this.props.list[2].url}></img>
          </div>
        </div>
  
        <div className = 'innerContainer'>
          <div className = 'smaller'>
            <img src = {this.props.list[3].url}></img>
          </div>
  
          <div className = 'smaller'>
            <img src = {this.props.list[5].url}></img>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Photos

// MIGHT not need to use placeholder for now