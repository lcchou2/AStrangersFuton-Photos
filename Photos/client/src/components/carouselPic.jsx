import React from 'react'

class Carouselpic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div className = 'phomodalCon'> 
        <div className = 'phoempty'></div>
        <div className = 'phoimage' >

          <div className = 'phofill'></div>
          <div className = 'photarget'>
          <img src = {this.props.list.list[this.props.currentIndex].url}  onClick = {this.props.clickFunction}></img>
          </div>

          <div className = 'phoslider'>
            {this.props.currentIndex + 1}/{this.props.list.list.length}                    {this.props.list.list[this.props.currentIndex].description}
          </div>

        </div>
        <div className = 'phoempty'></div>

      </div>
      

    
    )
  }
}



// backgroundImage: this.props.list.list[this.props.currentIndex].url,

export default Carouselpic









