import _ from 'underscore';
import React from 'react';
import moment from 'moment';
import { buildCalGrid } from '../utils';

const calendarHeaderItems = (
  <div className="calendar-row">
    {_.map(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], (dow) => <div className="calendar-header-item">{dow}</div>)}
  </div>
  );

function CalendarItem(props) {
  if(!props.text) {
    return (
      <div className="empty-calendar-item">
      </div>
    )
  } else {
    return (
      <div className="calendar-item">
        <div className="calendar-text" onClick={props.handleDateClick} data-month={props.month} data-date={props.date} data-year={props.year}>
          {props.text}
        </div>
      </div>
    )
  }
}

function CalendarRow(props) {
  var cols = [];
  for (var i=0; i<7; i++){
    cols.push(<CalendarItem text={props.row[i]} handleDateClick={props.handleDateClick} month={props.month} date={props.row[i]} year={props.year} />);
  }
  return (
    <div className="calendar-row">
      {cols}
    </div>
  )
}

const Calendar = function(props) {
  var calendarBody = [];
  if (props.handleLeftArrowClick) {
    calendarBody.push(<button data-view={props.view} data-direction="left" onClick={props.handleLeftArrowClick}>&lt;--</button>)
  }
  calendarBody.push(props.moment.format("MMMM YYYY"));
  if (props.handleRightArrowClick) {
    calendarBody.push(<button data-view={props.view} data-direction="right" onClick={props.handleRightArrowClick}>--&gt;</button>)
  }

  return (
    <div className="calendar-box calendar-border">
      <div className="calendar-header">
        {calendarBody}
      </div>
      {calendarHeaderItems}
      {_.map(Object.values(buildCalGrid(props.moment.month(), props.moment.year())), (row) => <CalendarRow row={row} handleDateClick={props.handleDateClick} month={props.moment.month()} year={props.moment.year()} />)}
    </div>
  )
}

const DualCalendar = function(props) {
  return (
    <div>
      <Calendar view={'main'} moment={props.moment}
       handleLeftArrowClick={props.handleArrowClick} handleDateClick={props.handleDateClick} />
      <Calendar view={'main'} moment={moment(props.moment).add(1, 'month')}
       handleRightArrowClick={props.handleArrowClick} handleDateClick={props.handleDateClick} />
    </div>
  )
}

export {Calendar, DualCalendar};
