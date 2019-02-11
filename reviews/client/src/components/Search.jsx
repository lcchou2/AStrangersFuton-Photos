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
        {/* <span className="fa fa-search"></span> */}
        <input placeholder="Search reviews" />
     </div>
     </div>
    );
  }
}

export default Search;