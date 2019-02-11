class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {/* <form>
        <input type="text" placeholder="Search reviews" value={this.props.value} onChange={this.props.handleSearch}/>
      </form> */}
      <form className="order">
        <select>
            <option value="relevant">Most relevant</option>
            <option value="recent">Most recent</option>
          </select>
     </form>
     </div>
    );
  }
}

export default Order;