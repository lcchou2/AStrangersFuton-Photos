import IndReviewText from './IndReviewText.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var listOfReviews = this.props.reviews.map((review, index) =>
      <div key={index}>
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
        <IndReviewText reviewText={review.review}/>
        <br/>
        <hr/>
      </div>
    );

    if (this.props.reviews.length === 0) {
      return (<div>
          <span className="noReviews">None of our guests have mentioned "<strong>{this.props.value}</strong>"</span>
          <span className="backToReviews" onClick={this.props.backToReviews}><u>Back to all reviews</u></span>
        </div>
      )
    } else if (this.props.reviews.length < this.props.allReviews.length) {
      return (<div>
        <span className="someReviews">{this.props.reviews.length} guests have mentioned "<strong>{this.props.value}</strong>"</span>
        <span className="backToReviews" onClick={this.props.backToReviews}><u>Back to all reviews</u></span>
        <hr/>
        <div>{listOfReviews}</div>
      </div>
    )
    } else {
      return (
      <div>{listOfReviews}</div>
      );
    }
  }
}

export default Reviews;