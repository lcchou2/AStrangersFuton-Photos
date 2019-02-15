import CarouselPic from './carouselPic.jsx'
import Arrow from './arrow.jsx'


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

      <div className = 'carousel' style = {{display: this.props.display}}>

        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

        <CarouselPic list = {this.props} currentIndex = {this.state.currentImageIndex}/>

        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
      
      </div>

    
    )
  }
}

export default Carousel