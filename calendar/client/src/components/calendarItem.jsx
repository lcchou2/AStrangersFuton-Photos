
const CalendarItem = function(props) {
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

const EmptyCalendarItem = function(props) {
  return (
    <div className="empty-calendar-item">
    </div>
  )
}

export {CalendarItem, EmptyCalendarItem};
