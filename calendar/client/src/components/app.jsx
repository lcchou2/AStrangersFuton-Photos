import moment from 'moment';
import React from 'react';
import { Calendar, DualCalendar } from './calendar.jsx';
import { buildDateString, cleanTakenSchedule } from '../utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
      sidebarMoment: moment().startOf('month'),
      mainMoment: moment().startOf('month'),
      takenSchedule: {},
    }
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
  }
  componentDidMount() {
    fetch('/api/schedule/1')
    .then((resp) => resp.json())
    .then((jsonResp) => this.state.takenSchedule = cleanTakenSchedule(jsonResp))
  }
  handleDateClick(event) {
    var [date, month, year] = [event.target.dataset.date, event.target.dataset.month, event.target.dataset.year];
    console.log(buildDateString(date, month, year));
    console.log(this.state);
  }
  handleArrowClick(event) {
    console.log(event.target);
    if (event.target.dataset.direction === 'left') {
      if (event.target.dataset.view === 'sidebar') {
        this.setState({sidebarMoment: this.state.sidebarMoment.subtract(1, 'months')});
      } else if (event.target.dataset.view === 'main') {
        this.setState({mainMoment: this.state.mainMoment.subtract(1, 'months')});
      }
    } else if (event.target.dataset.direction === 'right') {
      if (event.target.dataset.view === 'sidebar') {
        this.setState({sidebarMoment: this.state.sidebarMoment.add(1, 'months')});
      } else if (event.target.dataset.view === 'main') {
        this.setState({mainMoment: this.state.mainMoment.add(1, 'months')});
      }
    }
  }
  render() {
    return (
      <div>
        {<DualCalendar
        moment={this.state.mainMoment} handleArrowClick={this.handleArrowClick} handleDateClick={this.handleDateClick}/>}

        {<Calendar
        view={'sidebar'}
        moment={this.state.sidebarMoment} handleLeftArrowClick={this.handleArrowClick} handleRightArrowClick={this.handleArrowClick} handleDateClick={this.handleDateClick} />}
      </div>
    );
  }
}

export default App;