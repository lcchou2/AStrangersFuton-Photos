

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
          
            <img src = {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hb-luxury-airbnbs-santorini-1531317651.png?crop=1.00xw:1.00xh;0,0&resize=4296:*'}></img>
          </div>

          <div className = 'phosmallers'>
                <button className="phobtnMid" onClick={(e) => { this.props.shareHandler(e) }}><i className="fa fa-upload"></i>  Share</button>
                <button className="phobtnTop" onClick={(e) => { this.props.saveHandler(e) }}><i className="far fa-heart"></i>                  Save</button>

                <button className="phobtnBot" onClick={() => { this.props.modalHandler() }}>View Photos</button>
            <div className = 'phoinnercontainer'>
              <div className = 'phosmaller'>
                <img src = {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lakecomo-gallio-01-1529341903.jpg?crop=0.536xw:1.00xh;0.211xw,0&resize=980:*'}></img>
              </div>
      
              <div className = 'phosmaller'>
                <img src = {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lakecomo-gallio-01-1529341903.jpg?crop=0.536xw:1.00xh;0.211xw,0&resize=980:*'}></img>
              </div>
            </div>
  
            <div className = 'phoinnercontainer'>
              <div className = 'phosmaller'>
                <img src = {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lakecomo-gallio-01-1529341903.jpg?crop=0.536xw:1.00xh;0.211xw,0&resize=980:*'}></img>
               
              </div>
      
              <div className = 'phosmaller'>
                <img src = {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lakecomo-gallio-01-1529341903.jpg?crop=0.536xw:1.00xh;0.211xw,0&resize=980:*'}></img>
                
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