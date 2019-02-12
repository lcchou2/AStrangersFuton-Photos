import Search from './Search.jsx';
import Order from './Order.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId: 0,
      rating: 0,
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0, 
      checkin: 0,
      value: 0,
      reviews: [],
      numOfReviews: 0
    }
    this.getListingData = this.getListingData.bind(this);
  }

  getListingData(listingId, successCB) {
    $.ajax({
      url: 'http://localhost:3003/api/reviews',
      method: 'POST',
      data: JSON.stringify({listingId: listingId}),
      contentType: 'application/json',
      success: successCB
    });
  }

  componentDidMount() {
    this.getListingData('1', (data) => {
      this.setState({
        listingId: data[0].listingId, 
        rating: Math.round(data[0].rating * 2),
        accuracy: Math.round(data[0].accuracy * 2),
        communication: Math.round(data[0].communication * 2),
        cleanliness: Math.round(data[0].cleanliness * 2),
        location: Math.round(data[0].location * 2), 
        checkin: Math.round(data[0].checkin * 2),
        value: Math.round(data[0].value * 2),
        reviews: data[0].reviews,
      });
      this.setState({numOfReviews: this.state.reviews.length});
      console.log(this.state)
    });
  }

  renderReviews(reviews) {
    
  }

  render() {
 
    var listOfReviews = this.state.reviews.map((review, index) =>
      <div key={index}>
        <br/>
        <div>
          <img className="avatar" src="http://i.pravatar.cc/50"/>
          <div className="profileInfo">
            <div className="username">{review.name}</div>
            <br/>
            <div className="date">{review.month} {review.year}</div>
          </div>
          <img className="flag" src="http://download.seaicons.com/icons/icons8/ios7/512/Very-Basic-Flag-icon.png"/>
        </div>
        <br/>
        <div className="review">{review.review}</div>
        <br/>
        <hr/>
      </div>
    );

    return (
    <div>
      <div>
        <span className="numOfReviews">{this.state.numOfReviews} Reviews </span>
        <span className={"stars-container stars-" + this.state.rating}>★★★★★</span>
      </div>
      <hr/>
      <div>
        <span className="left-rating">Accuracy</span>
        <span className={"stars-container stars-" + this.state.accuracy + " center-stars"}>★★★★★</span>
        <span className="right-rating">Location</span>
        <span className={"stars-container stars-" + this.state.location + " right-stars"}>★★★★★</span>
      </div>
      <div>
        <span className="left-rating">Communication</span>
        <span className={"stars-container stars-" + this.state.communication + " center-stars"}>★★★★★</span>
        <span className="right-rating">Check-in</span>
        <span className={"stars-container stars-" + this.state.checkin + " right-stars"}>★★★★★</span>
      </div>
      <div>
      <span className="left-rating">Cleanliness</span>
        <span className={"stars-container stars-" + this.state.cleanliness + " center-stars"}>★★★★★</span>
        <span className="right-rating">Value</span>
        <span className={"stars-container stars-" + this.state.value + " right-stars"}>★★★★★</span>
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
      {listOfReviews}
    </div>
    );
  }
}

export default App;