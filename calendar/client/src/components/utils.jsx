import moment from 'moment';
import _ from 'underscore';

export const calendarHeaderItems = (
  <div className="calendar-row">
    {_.map(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], (dow) => <div className="calendar-header-item">{dow}</div>)}
  </div>
  );

export const cleanSchedule = function (jsonResp) {
  var cleaned = {};
  for (var row of jsonResp[0].datesTaken) {
    var dateString = row.timestamp;
    var date = new Date(dateString);
    cleaned[dateString] = {text: date.getDate(), isTaken: row.taken, dateString: dateString, isSelected: false, isTmpTaken: false};
  }
  return cleaned;
}

export const buildCalGrid = function (month, year, schedule) {
  var grid = {0: {}};
  var m = moment().month(month).year(year).startOf('month');

  for (var i=0; i<m.day(); i++) {
    grid[0][i] = null;
  }

  var currWeek = 0;
  while (m.month() === month) {
    if (!grid[currWeek]) grid[currWeek] = {};
    grid[currWeek][m.day()] = schedule[m.toDate().toISOString()];

    m = m.add(1, 'day');

    if (m.day() === 0) {
      currWeek++;
    }
  }
  return grid;
};


export const buildDateString = function (date, month, year) {
  return moment().month(month).year(year).date(date).startOf('day').toDate().toIsoString();
}
