import React from 'react'

class Carouselpic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(

      <div className = 'phoimage' >

        <img src = {this.props.list.list[this.props.currentIndex].url} style = {{width: '720.3',height: '482.59', backgroundSize: 'cover', backgroundPosition: 'center'}} onClick = {this.props.clickFunction}></img>
        
        
        <div className = 'phoslider'>
          {this.props.currentIndex + 1}/{this.props.list.list.length}                    {this.props.list.list[this.props.currentIndex].description}
        </div>
    
      </div>

    
    )
  }
}



// backgroundImage: this.props.list.list[this.props.currentIndex].url,

export default Carouselpic









