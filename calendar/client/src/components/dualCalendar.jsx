import moment from 'moment';
import { Calendar } from './calendar.jsx';

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

export {DualCalendar};