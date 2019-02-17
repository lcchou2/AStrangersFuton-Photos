import React from 'react';
import moment from 'moment';

export function Pricing(props) {
  if (props.selectedStartDate === null || props.selectedEndDate === null) {
    return (<div></div>);
  }
  var startMoment = moment(props.selectedStartDate);
  var endMoment = moment(props.selectedEndDate);
  var days = endMoment.diff(startMoment, 'days') + 1;
  return (
    <div>
      <div>
        ${props.price} x {days}
      </div>
      <div>
        ${props.price * days}
      </div>
    </div>
  )
}

