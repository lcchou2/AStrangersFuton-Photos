
const Dropdown = function(props) {
  var items = [];
  if (props.dropdownState.isActive) {
    items.push((
    <div className="dropdown-items">
      <div className="dropdown-item">
        <div className="dropdown-text">Adults</div>
        <div className="dropdown-tracker"></div>
      </div>
      <div className="dropdown-item">
        <div className="dropdown-text">Children</div>
        <div className="dropdown-tracker"></div>
      </div>
      <div className="dropdown-item">
        <div className="dropdown-text">Infants</div>
        <div className="dropdown-tracker"></div>
      </div>
    </div>
    ));
  }
  return (
    <div className="dropdown">
      <div>Guests</div>
      <div className="booking-row">
        {props.dropdownState.adults + props.dropdownState.children + props.dropdownState.infants} guests
      </div>
      {items}
    </div>
  );
};

export {Dropdown};
