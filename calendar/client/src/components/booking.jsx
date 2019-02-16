import { Calendar } from './calendar.jsx';
import { Dropdown } from './dropdown.jsx';
import { isoDateStringToReadable } from './utils.jsx';

const BookingView = function(props){
  return (
    <div className="calendar-box calendar-border">
      <div>
        <div>Dates</div>
        <div className="booking-row calendar-border" onClick={props.displaySidebarCalendar}>
          <div className="booking-date">
            {isoDateStringToReadable(props.selectedStartDate)}
          </div>
          <div className="booking-date">
            {isoDateStringToReadable(props.selectedEndDate)}
          </div>
        </div>
        <Calendar
          view={props.view} moment={props.moment}
          handleLeftArrowClick={props.handleLeftArrowClick} handleRightArrowClick={props.handleRightArrowClick}
          handleDateClick={props.handleDateClick} schedule={props.schedule} handleHover={props.handleHover} handleHoverExit={props.handleHoverExit}
          calendarViewHidden={props.calendarViewHidden} />
      </div>
      <Dropdown dropdownState={props.dropdownState} />
    </div>
  );
};

export {BookingView};
