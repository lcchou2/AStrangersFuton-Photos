import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    // this.newBorder = this.newBorder.bind(this);
  }

  // newBorder(event) {
  //   event.target.classList.add('newBorder');
  // }

  render() {
    return (
    <div>
      <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"/>
      <div className="rev-input-wrapper">
        <input className="rev-search" placeholder="Search reviews" value={this.props.value} onChange={this.props.handleSearch}/>
        <label className="fa fa-search rev-input-icon"></label>
      </div>
    </div>
    );
  }
}

export default Search;