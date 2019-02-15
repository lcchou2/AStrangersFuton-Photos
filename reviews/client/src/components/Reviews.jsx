import IndReviewText from './IndReviewText.jsx';
import Flag from './Flag.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    }

    this.changePage = this.changePage.bind(this);
  }

  changePage(event) {
    this.setState({page: Number(event.target.innerHTML)});
  }

  render() {
    var totalPages = Math.ceil(this.props.reviews.length / 7);
    var pagesArr = [];
    for (var i = 1; i <= totalPages; i++) {
      pagesArr.push(i);
    }
    var numOfPages = pagesArr.map((pageNum, index) =>
      <span className="pageNum" key={index} onClick={this.changePage}>{pageNum}</span>
    )
    var start = (this.state.page - 1) * 7;
    var end = this.state.page * 7;
    console.log(start, end)
    var listOfReviews = this.props.reviews.slice(start, end).map((review, index) =>
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
      );
    } else if (this.props.reviews.length < this.props.allReviews.length) {
      return (<div>
        <span className="someReviews">{this.props.reviews.length} guests have mentioned "<strong>{this.props.value}</strong>"</span>
        <span className="backToReviews" onClick={this.props.backToReviews}><u>Back to all reviews</u></span>
        <hr/>
        <div>{listOfReviews} {numOfPages}</div>
      </div>
      );
    } else {
      return (
      <div>{listOfReviews} {numOfPages}</div>
      );
    }
  }
}

export default Reviews;