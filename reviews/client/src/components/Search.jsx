import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {/* <form>
        <input type="text" placeholder="Search reviews" value={this.props.value} onChange={this.props.handleSearch}/>
      </form> */}
      <div className="search">
        <span className="fa fa-search"></span>
        {/* <img src="http://download.seaicons.com/icons/icons8/ios7/512/Very-Basic-Search-icon.png"/> */}
        <input placeholder="Search reviews" />
     </div>
     </div>
    );
  }
}

export default Search;