import React from 'react';

import styled from 'styled-components';

const BookingButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px; 
  font-size: 16px;
  line-height: 24px;
  border-color: transparent;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  width: 100%;
  color: #FFF3FF;
  background-color: #FF3F50;
`;

const BookingBorder = styled.div`
`;

const CalendarHeader = styled.div`
  font-size: large;
  font-weight: bold;
`;

const OffsetCalendarHeader = styled(CalendarHeader)`
  position: absolute;
`;

const CenteredCalendarHeader = styled(CalendarHeader)`
  margin: auto;
`;

const CalendarContainer = styled.div`
  background-color: white;
  position: absolute;
  z-index: 1;
  max-height: 350px;
  max-width: 350px;
  display: ${props => props.isHidden ? 'none' : 'block'};
`;

const CalendarBox = styled.div`
  display: ${props => props.isHidden ? 'none' : 'inline-block'};
  margin: 1%;
  padding: 2%;
  max-width: 300px;
  min-height: 400px;
`;

const BaseStyledCalendarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCalendarItem = styled(BaseStyledCalendarItem)`
`;

export {CalendarBox, CalendarContainer, OffsetCalendarHeader, CenteredCalendarHeader, BookingButton};
