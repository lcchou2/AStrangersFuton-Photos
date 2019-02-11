import Search from './Search.jsx';
import Order from './Order.jsx';

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
      <div className="search-container">
        <Order />
      </div>
      <br/>
      <br/>
      <hr/>
      <br/>
      <div>
        <img className="avatar" src="http://i.pravatar.cc/50"/>
        <div className="profileInfo">
          <div className="username">Shilpi</div>
          <br/>
          <div className="date">October 2018</div>
        </div>
        <div className="flag">Flag</div>
      </div>
      <br/>
      <div className="review">Actual review... etc. This place is great.</div>
      <br/>
      <hr/>
    </div>
    );
  }
}

export default App;