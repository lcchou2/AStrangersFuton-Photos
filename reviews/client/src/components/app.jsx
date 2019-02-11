import Search from './Search.jsx';
import Order from './Order.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingData: null,
      numOfReviews: 0
    }
    this.getListingData = this.getListingData.bind(this);
  }

  componentDidMount() {
    this.getListingData('1', (data) => {
      this.setState({listingData: data[0]})
      // console.log('data', this.state.listingData.listingId);
    });
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
        {/* <div className="flag">Flag</div> */}
        <img className="flag" src="http://download.seaicons.com/icons/icons8/ios7/512/Very-Basic-Flag-icon.png"/>
      </div>
      <br/>
      <div className="review">Actual review... This place is great... etc</div>
      <br/>
      <hr/>
    </div>
    );
  }
}

export default App;