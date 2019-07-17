import React from 'react'

class Carouselpic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div className = 'phomodalcon'> 
        <div className = 'phoempty'></div>
        <div className = 'phoimage' >

          <div className = 'phofill'></div>
          <div className = 'photarget'>
          <img src = {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hb-luxury-airbnbs-santorini-1531317651.png?crop=1.00xw:1.00xh;0,0&resize=4296:*'}  onClick = {this.props.clickFunction}></img>
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









