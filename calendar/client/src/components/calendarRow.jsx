import {CalendarItem, EmptyCalendarItem} from './calendarItem.jsx';

const CalendarRow = function(props) {
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

export {CalendarRow};
