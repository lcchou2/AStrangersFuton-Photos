import moment from 'moment';
import React from 'react';
import { Calendar, DualCalendar } from './calendar.jsx';
import { cleanTakenSchedule } from '../utils';

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
    .then((jsonResp) => this.setState({takenSchedule: cleanTakenSchedule(jsonResp)}))
  }
  handleDateClick(event) {
    this.setState({selectedStartDate: event.target.dataset.datestring}, function() {
      console.log(this.state);
    });
  }
  handleArrowClick(event) {
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
        {<Calendar
        view={'sidebar'} moment={this.state.sidebarMoment}
        handleLeftArrowClick={this.handleArrowClick} handleRightArrowClick={this.handleArrowClick}
        handleDateClick={this.handleDateClick} takenSchedule={this.state.takenSchedule} />}
        {<DualCalendar
        view={'main'} moment={this.state.mainMoment}
        handleArrowClick={this.handleArrowClick}
        handleDateClick={this.handleDateClick} takenSchedule={this.state.takenSchedule}/>}
      </div>
    );
  }
}

export default App;