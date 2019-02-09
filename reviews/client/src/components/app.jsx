class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfReviews: 0
    }
  }

  render() {
    return (
    <div>
      <div className="rating">
        <span className='numOfReviews'>{this.state.numOfReviews} Reviews </span>
        <span className="stars-container stars-90">★★★★★</span>
      </div>
      <hr/>

    </div>
    );
  }
}

export default App;