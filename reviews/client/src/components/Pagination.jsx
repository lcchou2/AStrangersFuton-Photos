import React from 'react';

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
    var numOfPages = pagesArr.map((pageNum, index) => {
      if (this.props.reviewPage === pageNum) {
        return <span className="rev-pageNum rev-currentPage" key={index} onClick={this.props.changePage}>{pageNum}</span>
      } else {
        return <span className="rev-pageNum" key={index} onClick={this.props.changePage}>{pageNum}</span>
      }
    });

    var right = (<i className="fa fa-chevron-right"></i>);
    var left = (<i className="fa fa-chevron-left"></i>);
    
    if (this.props.reviews.length < this.props.commentPerPage) {
      return (
        <div></div>
        );
    }

    if (this.props.reviewPage >= pagesArr.length) {
      return (
        <div>
           <span className="rev-navPage" onClick={this.props.previousPage}>{left}</span> 
           {numOfPages} 
        </div>
        );
    } else if (this.props.reviewPage > 1) {
        return (
          <div>
             <span className="rev-navPage" onClick={this.props.previousPage}>{left}</span> 
             {numOfPages} 
             <span className="rev-navPage" onClick={this.props.nextPage}>{right}</span>
          </div>
          );
    } else {
      return (
      <div>
        {numOfPages} 
        <span className="rev-navPage" onClick={this.props.nextPage}>{right}</span>
      </div>
      );
    }
  }
}

export default Pagination;