import { Calendar } from './calendar.jsx';
import { isoDateStringToReadable } from './utils.jsx';

const Booking = function(props){
  return (
    <div className="calendar-box">
      <div>
        <div>Dates</div>
        <div>
          {isoDateStringToReadable(props.selectedStartDate)}
        </div>
        <div>
          {isoDateStringToReadable(props.selectedEndDate)}
        </div>
      </div>
      <div>
        <div>Guests</div>
        <div>Here</div>
      </div>
    </div>
  );
};

const BookingView = function(props){
  if (!props.displayBookingView) {
    return (
      <Calendar
      view={props.view} moment={props.moment}
      handleLeftArrowClick={props.handleLeftArrowClick} handleRightArrowClick={props.handleRightArrowClick}
      handleDateClick={props.handleDateClick} schedule={props.schedule} handleHover={props.handleHover} handleHoverExit={props.handleHoverExit} />
    );
  } 

  return (
    <Booking selectedStartDate={props.selectedStartDate} selectedEndDate={props.selectedEndDate} />
  );
};

export {BookingView};
