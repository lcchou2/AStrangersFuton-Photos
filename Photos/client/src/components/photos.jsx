



class Photos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(

      <div className = "outside">
        <img src = {this.props.photos.url}></img>
      </div>
    )
  }
}

export default Photos

// MIGHT not need to use placeholder for now