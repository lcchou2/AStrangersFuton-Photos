
var db = require('./index.js');

var DAY = 24 * 60 * 60;
var MONTH = DAY * 30;
var YEAR = MONTH * 12;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function nearestTs() {
  var d = new Date();
  d.setHours(0, 0, 0, 0);
  return Math.floor(d.getTime() / 1000);
}

function coinFlip(odds=2) {
  return getRndInteger(1, odds) === 1;
}

var buildMinimum = function(listingId=1, minimumStay=3, takenOdds=3, endOdds=2) {
  var obj = {
    listingId: listingId,
    minimumStay: minimumStay,
    datesTaken: []
  };
  var startTs = nearestTs() - MONTH;
  var endTs = nearestTs() + YEAR;
  var daysInARow = 0;

  while (startTs <= endTs) {
    var isTaken = false;
    if (daysInARow === 0) {
      if (coinFlip(takenOdds)) isTaken = true; 
    } else if (daysInARow <= minimumStay && daysInARow !== 0) {
      isTaken = true;
    } else {
      isTaken = coinFlip(endOdds);
    }

    if (isTaken) {
      daysInARow ++;
    } else {
      daysInARow = 0;
    }

    obj.datesTaken.push({timestamp: startTs, taken: isTaken});
    startTs += DAY;
  }
  return obj;
}

for (var i=1; i<=100; i++) {
  var obj = buildMinimum(listingId=i);
  db.saveSchedule(obj, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('created', result)
  });
}
