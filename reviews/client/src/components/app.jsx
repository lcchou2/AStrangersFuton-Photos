import Search from './Search.jsx';
import Sort from './Sort.jsx';
import Reviews from './Reviews.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId: 11,
      rating: 0,
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0, 
      checkin: 0,
      value: 0,
      reviews: [],
      numOfReviews: 0,
      sort: 'relevant'
    }
    this.getListingData = this.getListingData.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  getListingData(listingId, successCB) {
    $.ajax({
      url: `http://localhost:3003/api/reviews/${listingId}`,
      method: 'GET',
      success: successCB
    });
  }

  componentDidMount() {
    this.getListingData(this.state.listingId, (data) => {
      this.setState({
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
    });
  }

  handleSort(event) {
    this.setState({sort: event.target.value}, () => {
      console.log('sorted by?? ', this.state.sort)

      if (this.state.sort === 'relevant') {
        var relevantReviews = [];
        for (var i = 1; i <= this.state.reviews.length; i++) {
          for (var j = 0; j < this.state.reviews.length; j++) {
            if (this.state.reviews[j].reviewId === i) {
              relevantReviews.push(this.state.reviews[j]);
            }
          }
        }
        this.setState({reviews: relevantReviews});
      } else if (this.state.sort === 'recent') {
        var recentReviews = [];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


        this.setState({reviews: recentReviews});
      }
    })
    console.log(this.state.reviews)
  }

  render() {
    return (<div>
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
        <Sort sort={this.state.sort} handleSort={this.handleSort}/>
      </div>
      <br/>
      <br/>
      <hr/>
      <Reviews reviews={this.state.reviews} sort={this.state.sort}/>
    </div>);
  }
}

export default App;