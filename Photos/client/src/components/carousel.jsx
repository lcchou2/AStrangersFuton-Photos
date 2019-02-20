import CarouselPic from './carouselPic.jsx'
import Arrow from './arrow.jsx'
import React from 'react'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex : 0
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = this.props.list.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
      
    });
  }

  nextSlide () {
    const lastIndex = this.props.list.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return(

      <div className = 'phocarousel' style = {{display: this.props.display}}>

        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
           />

        <CarouselPic list = {this.props} currentIndex = {this.state.currentImageIndex} clickFunction={ this.nextSlide }/>

        <div>
          
        <div>
          <a href="#" className = 'phoclose' onClick = {this.props.switchBack}></a>
        </div>
        </div>

        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
           />

        
      
      </div>

    
    )
  }
}
// for X button this.props.switchBack
export default Carousel