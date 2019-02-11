import _ from 'underscore';

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

export default function Calendar(props) {
  return (
    <div className="calendar-box calendar-border">
      <div className="calendar-header">
        <button data-direction="left" onClick={props.handleButtonClick}>&lt;--</button>{props.moment.format("MMMM YYYY")}<button data-direction="right" onClick={props.handleButtonClick}>--&gt;</button>
      </div>
      {calendarHeaderItems}
      {_.map(Object.values(props.grid), (row) => <CalendarRow row={row} handleDateClick={props.handleDateClick} month={props.month} year={props.year} />)}
    </div>
  )
}
