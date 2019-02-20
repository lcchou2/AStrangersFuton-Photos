

import React from 'react'
import ReactDOM from 'react-dom'

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(

      <div>
        <div className = 'phoshare' style = {{display: this.props.displayShare}}>
          <div className = 'phomodalSS' onClick = {()=> {this.props.switchBack()}}>
            
          <div className = 'phopicShare' onClick={(e) => { this.props.shareHandler(e) }}>
            
            <img src = 'https://s3-us-west-1.amazonaws.com/lcchou2/Screen+Shot+2019-02-17+at+3.45.46+PM.png'></img>
            <button className="phobtnShare" onClick = {(e) => {this.props.shareXHandler(e)}}>Heh</button>
          </div>
          </div>
        </div>

        <div className = 'phosave' style = {{display: this.props.displaySave}}>
          <div className = 'phomodalSS' onClick = {()=> {this.props.switchBack()}}>
            <div className = 'phopicSave' onClick={(e) => { this.props.saveHandler(e) }}>

              <img src = 'https://s3-us-west-1.amazonaws.com/lcchou2/save.png'></img>
              <button class="phobtnSave" onClick = {(e) => {this.props.shareXHandler(e)}}>Heh</button>
            </div>
          </div>
        </div>

      <div className = "phooutside" onClick={() => { this.props.modalHandler() }}>
        <div className = 'phocontainer'>
        
          <div className = 'phobigger'>
          
            <img src = {this.props.list[0].url}></img>
          </div>

          <div className = 'phosmallers'>
  
            <div className = 'phoinnerContainer'>
              <div className = 'phosmaller'>
                <img src = {this.props.list[1].url}></img>
              </div>
      
              <div className = 'phosmaller'>
                <img src = {this.props.list[2].url}></img>
              </div>
            </div>
  
            <div className = 'phoinnerContainer'>
              <div className = 'phosmaller'>
                <img src = {this.props.list[3].url}></img>
                <button className="phobtnMid" onClick={(e) => { this.props.shareHandler(e) }}><i className="fa fa-upload"></i>  Share</button>
                <button className="phobtnTop" onClick={(e) => { this.props.saveHandler(e) }}><i className="far fa-heart"></i>                  Save</button>
              </div>
      
              <div className = 'phosmaller'>
                <img src = {this.props.list[4].url}></img>
                <button className="phobtnBot" onClick={() => { this.props.modalHandler() }}>View Photos</button>
              </div>
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