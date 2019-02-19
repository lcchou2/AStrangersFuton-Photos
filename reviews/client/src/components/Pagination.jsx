class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var totalPages = Math.ceil(this.props.reviews.length / this.props.commentPerPage);
    var pagesArr = [];
    for (var i = 1; i <= totalPages; i++) {
      pagesArr.push(i);
    }
    var numOfPages = pagesArr.map((pageNum, index) =>
      <span className="pageNum" key={index} onClick={this.props.changePage}>{pageNum}</span>
    )

    var right = (<i className="fa fa-chevron-right"></i>);
    var left = (<i className="fa fa-chevron-left"></i>);
    
    if (this.props.reviews.length < this.props.commentPerPage) {
      return (
        <div> {numOfPages} </div>
        );
    }

    if (this.props.reviewPage > 1) {
      return (
        <div>
           <span className="navPage" onClick={this.props.previousPage}>{left}</span> 
           {numOfPages} 
           <span className="navPage" onClick={this.props.nextPage}>{right}</span>
        </div>
        );
    } else {
      return (
      <div>
        {numOfPages} 
        <span className="navPage" onClick={this.props.nextPage}>{right}</span>
      </div>
      );
    }
  }
}

export default Pagination;