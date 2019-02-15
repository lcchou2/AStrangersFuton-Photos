import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    // this.newBorder = this.newBorder.bind(this);
  }

  // newBorder(event) {
  //   event.target.classList.add('newBorder');
  //   console.log(event.target)
  // }

  render() {
    return (
    <div>
      <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"/>
      <div className="input-wrapper">
        <input placeholder="Search reviews" value={this.props.value} onChange={this.props.handleSearch}/>
        <label className="fa fa-search input-icon"></label>
      </div>
    </div>
    );
  }
}

export default Search;