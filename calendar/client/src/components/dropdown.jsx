import { pluralize } from './utils.jsx';
import { DropdownButton } from './styledComponents.jsx';

const Dropdown = function(props) {
  var totalGuests = props.dropdownState.adults + props.dropdownState.children;
  var [adults, children, infants] = [props.dropdownState.adults, props.dropdownState.children, props.dropdownState.infants];
  var items = [];
  if (props.dropdownState.isActive) {
    items.push((
    <div className="dropdown-items" onMouseLeave={props.hideBookingGuestDropdown}>
      <div className="dropdown-item">
        <div className="dropdown-text">Adults</div>
        <div className="dropdown-tracker">
          <DropdownButton isActive={adults + children > 1 && adults >= 2} onClick={props.handleDropdownButtonClick} data-increment="-1" data-guesttype="adults" disabled={!(adults + children > 1 && adults >= 2)}>-</DropdownButton>
          <p>{props.dropdownState.adults}</p>
          <DropdownButton isActive={adults + children < 4} onClick={props.handleDropdownButtonClick} data-increment="1" data-guesttype="adults" disabled={!(adults + children < 4)}>+</DropdownButton>
        </div>
      </div>
      <div className="dropdown-item">
        <div className="dropdown-text">Children</div>
        <div className="dropdown-tracker">
          <DropdownButton isActive={adults + children > 1 && children >= 1} onClick={props.handleDropdownButtonClick} data-increment="-1" data-guesttype="children" disabled={!(adults + children > 1 && children >= 1)}>-</DropdownButton>
          <p>{props.dropdownState.children}</p>
          <DropdownButton isActive={adults + children < 4} onClick={props.handleDropdownButtonClick} data-increment="1" data-guesttype="children" disabled={!(adults + children < 4)}>+</DropdownButton>
        </div>
      </div>
      <div className="dropdown-item">
        <div className="dropdown-text">Infants</div>
        <div className="dropdown-tracker">
          <DropdownButton isActive={infants > 0} onClick={props.handleDropdownButtonClick} data-increment="-1" data-guesttype="infants" disabled={!(infants > 0)}>-</DropdownButton>
          <p>{props.dropdownState.infants}</p>
          <DropdownButton isActive={infants < 5} onClick={props.handleDropdownButtonClick} data-increment="1" data-guesttype="infants" disabled={!(infants < 5)}>+</DropdownButton>
        </div>
      </div>
    </div>
    ));
  }
  var infantText = (infants > 0 ? `, ${infants} ${pluralize('infant', infants)}` : '')
  return (
    <div className="dropdown">
      <div>Guests</div>
      <div className="booking-row calendar-border" onClick={props.displayBookingGuestDropdown}>
        {totalGuests} {pluralize('guest', totalGuests)}{infantText}
      </div>
      {items}
    </div>
  );
};

export {Dropdown};
