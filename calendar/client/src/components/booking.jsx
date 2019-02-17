import { Calendar } from './calendar.jsx';
import { Dropdown } from './dropdown.jsx';
import { CalendarContainer, BookingButton } from './styledComponents.jsx';
import { isoDateStringToReadable } from './utils.jsx';
import { Pricing } from './pricing.jsx';

const BookingView = function(props){
  var guestCount = props.dropdownState.adults + props.dropdownState.children;
  return (
    <div className="calendar-box calendar-border">
      <div>
        ${props.price} per night
      </div>
      <hr></hr>
      <div>
        <div>Dates</div>
        <div className="booking-row calendar-border" onClick={props.displaySidebarCalendar}>
          <div className="booking-date">
            {isoDateStringToReadable(props.selectedStartDate)}
          </div>
          <div className="booking-date">
            {isoDateStringToReadable(props.selectedEndDate, false)}
          </div>
        </div>
        <CalendarContainer isHidden={props.calendarViewHidden}>
          <Calendar
            view={props.view} moment={props.moment}
            handleLeftArrowClick={props.handleLeftArrowClick} handleRightArrowClick={props.handleRightArrowClick}
            handleDateClick={props.handleDateClick} schedule={props.schedule} handleHover={props.handleHover} handleHoverExit={props.handleHoverExit}
            />
        </CalendarContainer>
      </div>
      <Dropdown dropdownState={props.dropdownState} displayBookingGuestDropdown={props.displayBookingGuestDropdown} hideBookingGuestDropdown={props.hideBookingGuestDropdown}
      handleDropdownButtonClick={props.handleDropdownButtonClick} />
      <Pricing price={props.price} selectedStartDate={props.selectedStartDate} selectedEndDate={props.selectedEndDate} guests={guestCount} />
      <BookingButton role="button">Request to Book</BookingButton>
      <p>You won't be charged yet</p>
    </div>
  );
};

export {BookingView};
