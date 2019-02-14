import React from 'react';
import Search from './Search.jsx';
import Sort from './Sort.jsx';
import Reviews from './Reviews.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId: 10,
      rating: 0,
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0, 
      checkin: 0,
      value: 0,
      reviews: [],
      allReviews: [],
      numOfReviews: 0,
      sort: 'relevant',
      searchValue: ''
    }
    this.getListingData = this.getListingData.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.backToReviews = this.backToReviews.bind(this);
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
        allReviews: data[0].reviews
      });
      this.setState({numOfReviews: this.state.reviews.length});
    });
  }

  handleSort(event) {
    this.setState({sort: event.target.value}, () => {
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
        var months = {January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7, August: 8, September: 9, October: 10, November: 11, December: 12};

        for (var i = 0; i <= this.state.reviews.length; i++) {
          for (var j = i; j < this.state.reviews.length; j++) {
            var currentReview = this.state.reviews[i];
            var nextReview = this.state.reviews[j];
            if (nextReview.year > currentReview.year) {
              this.state.reviews[i] = nextReview;
              this.state.reviews[j] = currentReview;
            } else if (nextReview.year === currentReview.year) {
              if (months[nextReview.month] > months[currentReview.month]) {
                this.state.reviews[i] = nextReview;
                this.state.reviews[j] = currentReview;
              }
            }
          }
        }
        this.setState({reviews: this.state.reviews});
      }
    })
  }

  handleSearch(event) {
    this.setState({searchValue: event.target.value}, () => {
      var reviewsToRender = [];
      for (var i = 0; i < this.state.allReviews.length; i++) {
        if (this.state.allReviews[i].review.includes(this.state.searchValue)) {
          reviewsToRender.push(this.state.allReviews[i]);
        }
      }
      this.setState({reviews: reviewsToRender});
    });
  }

  backToReviews() {
    this.setState({
      reviews: this.state.allReviews,
      searchValue: ''
    });
  }

  render() {
    return (<div>
      <div>
        <span className="numOfReviews">{this.state.numOfReviews} Reviews</span>
        <span className={"stars-container stars-" + this.state.rating}>★★★★★</span>
      </div>
      <hr/>
      <div className="left-ratings">
        <div>
          <span>Accuracy</span>
          <span className={"stars-container stars-" + this.state.accuracy + " center-stars"}>★★★★★</span>
        </div>
        <div>
          <span>Communication</span>
          <span className={"stars-container stars-" + this.state.communication + " center-stars"}>★★★★★</span>
        </div>
        <div>
          <span>Cleanliness</span>
          <span className={"stars-container stars-" + this.state.cleanliness + " center-stars"}>★★★★★</span>
        </div>
      </div>
      <div className="right-ratings">
        <div>
          <span className="right-rating">Location</span>
          <span className={"stars-container stars-" + this.state.location + " right-stars"}>★★★★★</span>
        </div>
        <div>
          <span className="right-rating">Check-in</span>
          <span className={"stars-container stars-" + this.state.checkin + " right-stars"}>★★★★★</span>
        </div>
        <div>
          <span className="right-rating">Value</span>
          <span className={"stars-container stars-" + this.state.value + " right-stars"}>★★★★★</span>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <div className="search-container">
          <Search handleSearch={this.handleSearch} value={this.state.searchValue}/>
        </div>
        <div className="search-container">
          <Sort sort={this.state.sort} handleSort={this.handleSort}/>
        </div>
      </div>
      <br/>
      <br/>
      <hr/>
      <Reviews reviews={this.state.reviews} sort={this.state.sort} value={this.state.searchValue} backToReviews={this.backToReviews} allReviews={this.state.allReviews}/>
    </div>);
  }
}

export default App;