import React from 'react'

class Carouselpic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(

      <div className = 'image' >

        <img src = {this.props.list.list[this.props.currentIndex].url} style = {{width: '720.3',height: '482.59', backgroundSize: 'cover', backgroundPosition: 'center'}} onClick = {this.props.clickFunction}></img>
        
        
        <div className = 'slider'>
          {this.props.list.list[this.props.currentIndex].description}
        </div>
    
      </div>

    
    )
  }
}



// backgroundImage: this.props.list.list[this.props.currentIndex].url,

export default Carouselpic









