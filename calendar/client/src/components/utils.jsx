import moment from 'moment';
import _ from 'underscore';

export const calendarHeaderItems = (
  <div className="calendar-row">
    {_.map(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], (dow) => <div className="calendar-header-item">{dow}</div>)}
  </div>
  );

export const cleanTakenSchedule = function (jsonResp) {
  var cleaned = {};
  for (var row of jsonResp[0].datesTaken) {
    cleaned[row.timestamp] = row.taken;
  }
  return cleaned;
}

export const buildDateString = function (date, month, year) {
  return moment().month(month).year(year).date(date).startOf('day').toDate().toIsoString();
}

export const buildCalGrid = function (month, year, takenSchedule) {
  var grid = {0: {}};
  var m = moment().month(month).year(year).startOf('month');

  for (var i=0; i<m.day(); i++) {
    grid[0][i] = null;
  }

  var currWeek = 0;
  while (m.month() === month) {
    if (!grid[currWeek]) grid[currWeek] = {};
    if (takenSchedule) {
      grid[currWeek][m.day()] = [m.date(), m.toDate().toISOString(), !!takenSchedule[m.toDate().toISOString()]];
    } else {
      grid[currWeek][m.day()] = [m.date(), m.toDate().toISOString()]
    }
    m = m.add(1, 'day');

    if (m.day() === 0) {
      currWeek++;
    }
  }
  return grid;
};
