import moment from 'moment';
import React from 'react';
import { BookingView } from './booking.jsx';
import { DualCalendar } from './dualCalendar.jsx';
import { cleanSchedule, dateRange } from './utils.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
      sidebarMoment: moment().startOf('month'),
      mainMoment: moment().startOf('month'),
      schedule: {},
      dropdown: {
        isActive: false,
        adults: 1,
        children: 0,
        infants: 0
      },
      calendarViewHidden: true
    }
    this.resetCalendarState     = this.resetCalendarState.bind(this);
    this.handleArrowClick       = this.handleArrowClick.bind(this);
    this.handleDateClick        = this.handleDateClick.bind(this);
    this.handleHover            = this.handleHover.bind(this);
    this.handleHoverExit        = this.handleHoverExit.bind(this);
    this.displaySidebarCalendar = this.displaySidebarCalendar.bind(this);
  }
  displaySidebarCalendar() {
    this.setState({calendarViewHidden: false});
  }
  componentDidMount() {
    fetch('/api/schedule/1')
    .then((resp) => resp.json())
    .then((jsonResp) => this.setState({schedule: cleanSchedule(jsonResp)}))
  }
  handleHover(event) {
    var dateString = event.target.children[0].dataset.datestring;
    var hoverableDates = dateRange(this.state.selectedStartDate, dateString);
    var newScheduleState = this.state.schedule;
    for(var dateKey of hoverableDates) {
      newScheduleState[dateKey].isHighlighted = true;
    }
    this.setState({schedule: newScheduleState});
  }
  handleHoverExit(event) {
    if (this.state.selectedStartDate !== null && this.state.selectedEndDate === null) {
      var dateString = event.target.children[0].dataset.datestring;
      var hoverableDates = dateRange(this.state.selectedStartDate, dateString);
      var newScheduleState = this.state.schedule;
      for(var dateKey of hoverableDates) {
        newScheduleState[dateKey].isHighlighted = false;
      }
      this.setState({schedule: newScheduleState});
    }
  }
  handleDateClick(event) {
    var date = event.target.dataset.datestring;
    var currentView = event.target.dataset.view;

    if (this.state.selectedStartDate === null) {
      var newState = this.state;
      newState.selectedStartDate = date;
      if (currentView === 'main') {
        newState.calendarViewHidden = true;
      }
      newState.schedule[date].isSelected = true;
      this.setState(newState, function() {
        this.temporaryBlockout(date);
      });
    } else {
      this.setState({selectedEndDate: date, calendarViewHidden: true});
    }
  }
  resetCalendarState(){
    var newState = this.state;
    newState.selectedStartDate = null;
    newState.selectedEndDate = null;
    newState.calendarViewHidden = false;
    
    for(var k of Object.keys(newState.schedule)) {
      newState.schedule[k].isSelected = false;
      newState.schedule[k].isHoverable = false;
      newState.schedule[k].isHighlighted = false;
      newState.schedule[k].isTmpTaken = false;
    }
    this.setState(newState);
  }
  temporaryBlockout(selectedStartDate){
    var newSchedState = this.state.schedule;
    var firstTakenDate = null;
    for (var k of Object.keys(this.state.schedule)) {
      if (k < selectedStartDate) {
        newSchedState[k].isTmpTaken = true;
      } else {
        if (firstTakenDate) {
          newSchedState[k].isTmpTaken = true;
        } else {
          if (newSchedState[k].isTaken) {
            firstTakenDate = k;
          } else {
            newSchedState[k].isHoverable = true;
          }
        }
      }
    }
    this.setState({schedule: newSchedState});
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
        <BookingView
          calendarViewHidden={this.state.calendarViewHidden}
          view={'sidebar'} moment={this.state.sidebarMoment}
          handleLeftArrowClick={this.handleArrowClick} handleRightArrowClick={this.handleArrowClick}
          handleDateClick={this.handleDateClick} schedule={this.state.schedule} handleHover={this.handleHover} handleHoverExit={this.handleHoverExit}
          selectedStartDate={this.state.selectedStartDate} selectedEndDate={this.state.selectedEndDate}
          dropdownState={this.state.dropdown} displaySidebarCalendar={this.displaySidebarCalendar} />
        <br></br><button onClick={this.resetCalendarState}>Clear Dates</button><br></br>
        {<DualCalendar
        view={'main'} moment={this.state.mainMoment}
        handleArrowClick={this.handleArrowClick}
        handleDateClick={this.handleDateClick} schedule={this.state.schedule} handleHover={this.handleHover} handleHoverExit={this.handleHoverExit} />}
      </div>
    );
  }
}

export default App;