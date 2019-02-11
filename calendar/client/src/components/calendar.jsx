import _ from 'underscore';

function CalendarItem(props) {
  if(!props.text) {
    return (
      <div className="empty-calendar-item">
      </div>
    )
  } else {
    return (
      <div className="calendar-item">
        <div className="calendar-text">
          {props.text}
        </div>
      </div>
    )
  }
}

function CalendarRow(props) {
  var cols = [];
  for (var i=0; i<7; i++){
    cols.push(<CalendarItem text={props.row[i]} />);
  }
  return (
    <div className="calendar-row">
      {rows}
    </div>
  )
}

export default function Calendar(props) {
  return (
    <div className="calendar-box calendar-border">
      <div className="calendar-header">
        <button data-direction="left" onClick={props.handleClick}>&lt;--</button>{props.moment.format("MMMM YYYY")}<button data-direction="right" onClick={props.handleClick}>--&gt;</button>
      </div>
      {_.map(Object.values(props.grid), (row) => <CalendarRow row={row} />)}
    </div>
  )
}
