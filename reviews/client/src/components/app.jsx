import Search from './Search.jsx';

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
      <div>
        <span className="numOfReviews">{this.state.numOfReviews} Reviews </span>
        <span className="stars-container stars-90">★★★★★</span>
      </div>
      <hr/>
      <div>
        <span className="left-rating">Accuracy</span>
        <span className="stars-container stars-100 center-stars">★★★★★</span>
        <span className="right-rating">Location</span>
        <span className="stars-container stars-90 right-stars">★★★★★</span>
      </div>
      <div>
        <span className="left-rating">Communication</span>
        <span className="stars-container stars-100 center-stars">★★★★★</span>
        <span className="right-rating">Check-in</span>
        <span className="stars-container stars-90 right-stars">★★★★★</span>
      </div>
      <div>
      <span className="left-rating">Cleanliness</span>
        <span className="stars-container stars-100 center-stars">★★★★★</span>
        <span className="right-rating">Value</span>
        <span className="stars-container stars-90 right-stars">★★★★★</span>
      </div>
      <br/>
        <div className="search-container">
          <Search handleSearch={this.handleSearch} value={this.state.value}/>
        </div>
    </div>
    );
  }
}

export default App;