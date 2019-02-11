import moment from 'moment';

var buildCalGrid = function (month, year) {
  var grid = {0: {}};
  var m = moment().month(month).year(year).startOf('month');

  for (var i=0; i<m.day(); i++) {
    grid[0][i] = null;
  }

  var currWeek = 0;

  while (m.month() === month) {
    if (!grid[currWeek]) grid[currWeek] = {};
    grid[currWeek][m.day()] = m.date();
    m = m.add(1, 'day');

    if (m.day() === 0) {
      currWeek++;
    }
  }
  return grid;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moment: moment().startOf('month')
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
  }
  handleDateClick(event) {
    console.log(event.target);
  }
  handleButtonClick(event) {
    if (event.target.dataset.direction === 'left') {
      this.setState({moment: this.state.moment.subtract(1, 'months')});
    } else if (event.target.dataset.direction === 'right') {
      this.setState({moment: this.state.moment.add(1, 'months')});
    }
  }
  render() {
    return (
      <div>
        {<this.props.Calender moment={this.state.moment} month={this.state.moment.month()} year={this.state.moment.year()} grid={buildCalGrid(this.state.moment.month(), this.state.moment.year())} handleButtonClick={this.handleButtonClick} handleDateClick={this.handleDateClick} />}
      </div>
    );
  }
}

export default App;