import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <div>
        <span className="rev-numOfReviews">{this.props.numOfReviews} Reviews</span>
        <span className={"rev-stars-container rev-stars-" + this.props.rating}>★★★★★</span>
      </div>
      <br/>
      <hr/>
      <div className="rev-ratings-container">
        <div className="rev-left-container">
          <div className="rev-left-text-container">
            <div className="rev-left-rating">Accuracy</div>
            <div className="rev-left-rating">Communication</div>
            <div className="rev-left-rating">Cleanliness</div>
          </div>
          <div className="rev-left-star-container">
            <div className={"rev-stars-container rev-stars-" + this.props.accuracy + " rev-left-stars"}>★★★★★</div>
            <div className={"rev-stars-container rev-stars-" + this.props.communication + " rev-left-stars"}>★★★★★</div>
            <div className={"rev-stars-container rev-stars-" + this.props.cleanliness + " rev-left-stars"}>★★★★★</div>
          </div>
        </div>
        <div className="rev-right-container">
          <div className="rev-right-text-container">
              <div className="rev-right-rating">Location</div>
              <div className="rev-right-rating">Check-in</div>
              <div className="rev-right-rating">Value</div>
          </div>
          <div className="rev-right-star-container">
            <div className={"rev-stars-container rev-stars-" + this.props.location + " rev-right-stars"}>★★★★★</div>
            <div className={"rev-stars-container rev-stars-" + this.props.checkin + " rev-right-stars"}>★★★★★</div>
            <div className={"rev-stars-container rev-stars-" + this.props.value + " rev-right-stars"}>★★★★★</div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Ratings;