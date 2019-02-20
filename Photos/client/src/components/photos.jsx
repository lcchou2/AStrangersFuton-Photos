

import React from 'react'

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(

      <div>
        <div className = 'share' style = {{display: this.props.displayShare}}>
          <div className = 'modalSS' onClick = {()=> {this.props.switchBack()}}>
            
          <div className = 'picShare' onClick={(e) => { this.props.shareHandler(e) }}>
            
            <img src = 'https://s3-us-west-1.amazonaws.com/lcchou2/Screen+Shot+2019-02-17+at+3.45.46+PM.png'></img>
            <button className="btnShare" onClick = {(e) => {this.props.shareXHandler(e)}}>Heh</button>
          </div>
          </div>
        </div>

        <div className = 'save' style = {{display: this.props.displaySave}}>
          <div className = 'modalSS' onClick = {()=> {this.props.switchBack()}}>
            <div className = 'picSave' onClick={(e) => { this.props.saveHandler(e) }}>

              <img src = 'https://s3-us-west-1.amazonaws.com/lcchou2/save.png'></img>
              <button class="btnSave" onClick = {(e) => {this.props.shareXHandler(e)}}>Heh</button>
            </div>
          </div>
        </div>

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
            <button className="btnMid" onClick={(e) => { this.props.shareHandler(e) }}><i className="fa fa-upload"></i>  Share</button>
            <button className="btnTop" onClick={(e) => { this.props.saveHandler(e) }}><i className="far fa-heart"></i>                  Save</button>
          </div>
  
          <div className = 'smaller'>
            <img src = {this.props.list[4].url}></img>
            <button className="btnBot" onClick={() => { this.props.modalHandler() }}>View Photos</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Photos

// MIGHT not need to use placeholder for now