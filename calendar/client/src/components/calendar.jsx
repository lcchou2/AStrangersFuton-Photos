import _ from 'underscore';
import React from 'react';
import moment from 'moment';
import { buildCalGrid } from '../utils';

const calendarHeaderItems = (
  <div className="calendar-row">
    {_.map(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], (dow) => <div className="calendar-header-item">{dow}</div>)}
  </div>
  );

function EmptyCalendarItem(props) {
  return (
    <div className="empty-calendar-item">
    </div>
  )
}

function CalendarItem(props) {
  var itemCss = 'calendar-item-' + props.view;
  var takenCss = ( props.isTaken ? ' calendar-item-taken-' + props.view : '');
  return (
    <div className={itemCss + takenCss}>
      <div className="calendar-text" onClick={( props.isTaken ? ()=>{} : props.handleDateClick)} data-datestring={props.dateString} data-month={props.month} data-date={props.date} data-year={props.year}>
        {props.text}
      </div>
    </div>
  )
};

function CalendarRow(props) {
  var cols = [];
  for (var i=0; i<7; i++){
    if (props.row[i]) {
      cols.push(<CalendarItem text={props.row[i][0]} handleDateClick={props.handleDateClick} month={props.month} date={props.row[i][0]} year={props.year} dateString={props.row[i][1]} isTaken={props.row[i][2]} view={props.view} />);
    } else {
      cols.push(<EmptyCalendarItem />);
    }
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
    <div className="calendar-box">
      <div className="calendar-header">
        {calendarBody}
      </div>
      {calendarHeaderItems}
      {_.map(Object.values(buildCalGrid(props.moment.month(), props.moment.year(), props.takenSchedule)), (row) => <CalendarRow row={row} handleDateClick={props.handleDateClick} month={props.moment.month()} year={props.moment.year()} view={props.view} />)}
    </div>
  )
}

const DualCalendar = function(props) {
  return (
    <div className="calendar-container">
      <Calendar view={props.view} moment={props.moment}
       handleLeftArrowClick={props.handleArrowClick} handleDateClick={props.handleDateClick} takenSchedule={props.takenSchedule} />
      <Calendar view={props.view} moment={moment(props.moment).add(1, 'month')}
       handleRightArrowClick={props.handleArrowClick} handleDateClick={props.handleDateClick} takenSchedule={props.takenSchedule} />
    </div>
  )
}

export {Calendar, DualCalendar};
