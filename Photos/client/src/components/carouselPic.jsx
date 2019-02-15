
class Carouselpic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(

      <div className = 'image' >

        <img src = {this.props.list.list[this.props.currentIndex].url} style = {{width: '340px',
  height: '189px'}}></img>

      </div>

    
    )
  }
}

// backgroundImage: this.props.list.list[this.props.currentIndex].url,

export default Carouselpic









