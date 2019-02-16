import _ from 'underscore';
import React from 'react';
import { buildCalGrid, calendarHeaderItems } from './utils.jsx';
import { CalendarRow } from './calendarRow.jsx';


const Calendar = function(props) {
  var calendarBody = [];
  if (props.handleLeftArrowClick) {
    calendarBody.push(<button data-view={props.view} data-direction="left" onClick={props.handleLeftArrowClick}>&lt;--</button>)
  }
  calendarBody.push(props.moment.format("MMMM YYYY"));
  if (props.handleRightArrowClick) {
    calendarBody.push(<button data-view={props.view} data-direction="right" onClick={props.handleRightArrowClick}>--&gt;</button>)
  }
  var sidebarCss = '';
  if (props.view === 'sidebar') {
    if (props.calendarViewHidden) {
      sidebarCss += ' calendar-box-hidden';
    } else {
      sidebarCss += ' calendar-box-pop';
    }
  }
  return (
    <div className={"calendar-box" + sidebarCss}>
      <div className="calendar-header">
        {calendarBody}
      </div>
      {calendarHeaderItems}
      {_.map(Object.values(buildCalGrid(props.moment.month(), props.moment.year(), props.schedule)), (row) => <CalendarRow row={row} handleDateClick={props.handleDateClick} month={props.moment.month()} year={props.moment.year()} view={props.view} handleHover={props.handleHover} handleHoverExit={props.handleHoverExit} />)}
    </div>
  )
}

export {Calendar};
