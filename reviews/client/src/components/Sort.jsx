import React from 'react';

class Sort extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <form>
        <select className="rev-sort" value={this.props.sort} onChange={this.props.handleSort}>
          <option value="relevant">Most relevant</option>
          <option value="recent">Most recent</option>
        </select>
     </form>
     </div>
    );
  }
}

export default Sort;