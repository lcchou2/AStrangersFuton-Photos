import { pluralize } from './utils.jsx';

const Dropdown = function(props) {
  var totalGuests = props.dropdownState.adults + props.dropdownState.children + props.dropdownState.infants;
  var items = [];
  if (props.dropdownState.isActive) {
    items.push((
    <div className="dropdown-items" onMouseLeave={props.hideBookingGuestDropdown}>
      <div className="dropdown-item">
        <div className="dropdown-text">Adults</div>
        <div className="dropdown-tracker">
          <button onClick={props.handleDropdownButtonClick} data-increment="-1" data-guesttype="adults">-</button>
          <p>{props.dropdownState.adults}</p>
          <button onClick={props.handleDropdownButtonClick} data-increment="1" data-guesttype="adults">+</button>
        </div>
      </div>
      <div className="dropdown-item">
        <div className="dropdown-text">Children</div>
        <div className="dropdown-tracker">
          <button onClick={props.handleDropdownButtonClick} data-increment="-1" data-guesttype="children">-</button>
          <p>{props.dropdownState.children}</p>
          <button onClick={props.handleDropdownButtonClick} data-increment="1" data-guesttype="children">+</button>
        </div>
      </div>
      <div className="dropdown-item">
        <div className="dropdown-text">Infants</div>
        <div className="dropdown-tracker">
          <button onClick={props.handleDropdownButtonClick} data-increment="-1" data-guesttype="infants">-</button>
          <p>{props.dropdownState.infants}</p>
          <button onClick={props.handleDropdownButtonClick} data-increment="1" data-guesttype="infants">+</button>
        </div>
      </div>
    </div>
    ));
  }
  return (
    <div className="dropdown">
      <div>Guests</div>
      <div className="booking-row calendar-border" onClick={props.displayBookingGuestDropdown}>
        {totalGuests} {pluralize('guest', totalGuests)}
      </div>
      {items}
    </div>
  );
};

export {Dropdown};
