var db = require('./index.js');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var arr = []
var photoId = 1
// var header = [true,false]
// var listingId = getRndInteger(1,100)
var description = ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Urna neque viverra justo nec ultrices dui', 'Vel elit scelerisque mauris pellentesque pulvinar', 'Malesuada proin libero nunc consequat interdum varius', 'Turpis egestas integer eget aliquet nibh praesent tristique magna sit', 'Orci phasellus egestas tellus rutrum tellus pellentesque. Sit amet facilisis magna etiam tempor orci eu', 'Morbi tristique senectus et netus et malesuada fames ac', 'Adipiscing tristique risus nec feugiat in fermentum posuere urna', 'Placerat in egestas erat imperdiet sed euismod nisi porta', 'Eu ultrices vitae auctor eu', 'Sollicitudin aliquam ultrices sagittis orci a', 'Nisl purus in mollis nunc sed id semper', 'Laoreet id donec ultrices tincidunt arcu non', 'Arcu bibendum at varius vel pharetra vel', 'Diam phasellus vestibulum lorem sed risus', 'Scelerisque purus semper eget duis at tellus', 'Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor', 'Eget felis eget nunc lobortis mattis aliquam', 'Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum']
var url = ['https://s3-us-west-1.amazonaws.com/lcchou2/1599px-Market_house_mon_inside.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/Amazing_Beautiful_Images_of_Inside_Home_Interior.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/Elizas-dream-home-2nd-inside-view.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/inside-house-7.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/pexels-photo-106399.jpeg']


var generate = function(){
  var obj = {
    // isHeader: header[getRndInteger(0,1)],
    photoId: photoId++,
    listingId: getRndInteger(1,100),
    description: description[getRndInteger(1,20)],
    url: url[getRndInteger(0,4)]
  }
  arr.push(obj)
}

for (var i=0; i < 500; i ++) {
  generate()
}



// {ordered:false} as second argument for insertMany

db.saveListings(arr, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('saved to database', data);
  }
});

