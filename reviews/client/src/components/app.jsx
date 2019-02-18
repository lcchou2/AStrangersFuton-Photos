import React from 'react';
import Search from './Search.jsx';
import Sort from './Sort.jsx';
import Reviews from './Reviews.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId: 5,
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
      searchValue: '',
      reviewPage: 1,
      commentPerPage: 7
    }
    this.getListingData = this.getListingData.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.backToReviews = this.backToReviews.bind(this);
    this.changePage = this.changePage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
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
        this.setState({reviews: relevantReviews, reviewPage: 1});
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
        this.setState({reviews: this.state.reviews, reviewPage: 1});
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
      this.setState({reviews: reviewsToRender, reviewPage: 1});
    });
  }

  backToReviews() {
    this.setState({
      reviews: this.state.allReviews,
      searchValue: ''
    });
  }

  changePage(event) {
    this.setState({reviewPage: Number(event.target.innerHTML)});
  }
  
  nextPage() {
    this.setState({reviewPage: this.state.reviewPage + 1});
  }

  previousPage() {
    this.setState({reviewPage: this.state.reviewPage - 1});
  }

  render() {
    return (<div>
      <div>
        <span className="numOfReviews">{this.state.numOfReviews} Reviews</span>
        <span className={"stars-container stars-" + this.state.rating}>★★★★★</span>
      </div>
      <br/>
      <hr/>
      <div className="container">
        <div className="left-container">
          <div className="left-text-container">
            <div className="left-rating">Accuracy</div>
            <div className="left-rating">Communication</div>
            <div className="left-rating">Cleanliness</div>
          </div>
          <div className="left-star-container">
            <div className={"stars-container stars-" + this.state.accuracy + " left-stars"}>★★★★★</div>
            <div className={"stars-container stars-" + this.state.communication + " left-stars"}>★★★★★</div>
            <div className={"stars-container stars-" + this.state.cleanliness + " left-stars"}>★★★★★</div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-text-container">
              <div className="right-rating">Location</div>
              <div className="right-rating">Check-in</div>
              <div className="right-rating">Value</div>
          </div>
          <div className="right-star-container">
            <div className={"stars-container stars-" + this.state.location + " right-stars"}>★★★★★</div>
            <div className={"stars-container stars-" + this.state.checkin + " right-stars"}>★★★★★</div>
            <div className={"stars-container stars-" + this.state.value + " right-stars"}>★★★★★</div>
          </div>
        </div>
      </div>
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
      <Reviews reviews={this.state.reviews} sort={this.state.sort} value={this.state.searchValue} backToReviews={this.backToReviews} allReviews={this.state.allReviews} reviewPage={this.state.reviewPage} commentPerPage={this.state.commentPerPage} changePage={this.changePage} nextPage={this.nextPage} previousPage={this.previousPage}/>
    </div>);
  }
}

export default App;