import IndReviewText from './IndReviewText.jsx';
import Flag from './Flag.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var listOfReviews = this.props.reviews.map((review, index) =>
      <div key={index}>
        <div>
          <img className="avatar" src={review.profile}/>
          <div className="profileInfo">
            <div className="username">{review.name}</div>
            <br/>
            <div className="date">{review.month} {review.year}</div>
          </div>
          <Flag />
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