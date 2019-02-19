import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <div>
        <span className="numOfReviews">{this.props.numOfReviews} Reviews</span>
        <span className={"stars-container stars-" + this.props.rating}>★★★★★</span>
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
            <div className={"stars-container stars-" + this.props.accuracy + " left-stars"}>★★★★★</div>
            <div className={"stars-container stars-" + this.props.communication + " left-stars"}>★★★★★</div>
            <div className={"stars-container stars-" + this.props.cleanliness + " left-stars"}>★★★★★</div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-text-container">
              <div className="right-rating">Location</div>
              <div className="right-rating">Check-in</div>
              <div className="right-rating">Value</div>
          </div>
          <div className="right-star-container">
            <div className={"stars-container stars-" + this.props.location + " right-stars"}>★★★★★</div>
            <div className={"stars-container stars-" + this.props.checkin + " right-stars"}>★★★★★</div>
            <div className={"stars-container stars-" + this.props.value + " right-stars"}>★★★★★</div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Ratings;