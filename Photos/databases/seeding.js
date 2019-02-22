var db = require('./index.js');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var arr = []
var photoId = 1
// var header = [true,false]
// var listingId = getRndInteger(1,100)
var description = ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Urna neque viverra justo nec ultrices dui', 'Vel elit scelerisque mauris pellentesque pulvinar', 'Malesuada proin libero nunc consequat interdum varius', 'Turpis egestas integer eget aliquet nibh praesent tristique magna sit', 'Orci phasellus egestas tellus rutrum tellus pellentesque. Sit amet facilisis magna etiam tempor orci eu', 'Morbi tristique senectus et netus et malesuada fames ac', 'Adipiscing tristique risus nec feugiat in fermentum posuere urna', 'Placerat in egestas erat imperdiet sed euismod nisi porta', 'Eu ultrices vitae auctor eu', 'Sollicitudin aliquam ultrices sagittis orci a', 'Nisl purus in mollis nunc sed id semper', 'Laoreet id donec ultrices tincidunt arcu non', 'Arcu bibendum at varius vel pharetra vel', 'Diam phasellus vestibulum lorem sed risus', 'Scelerisque purus semper eget duis at tellus', 'Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor', 'Eget felis eget nunc lobortis mattis aliquam', 'Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum']
var url = ['https://s3-us-west-1.amazonaws.com/lcchou2/1599px-Market_house_mon_inside.jpg','https://s3-us-west-1.amazonaws.com/lcchou2/pexels-photo-106399.jpeg','https://s3-us-west-1.amazonaws.com/lcchou2/4890_31545668957_0c2d8d3b0c_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/4901_44667545000_c212a61222_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/1978_45565626261_8ee7b64200_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/7822_39848517843_410babbe10_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/7850_32610033418_0b8b117734_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/7901_44720346120_df44207f5e_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/1785_42902792541_56dca45c1d_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/4863_46482641971_84e23e6601_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/4888_46971945091_6b888f939b_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/765_21205244765_0aece4bfec_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/7073_7358894236_aaaf97293c_b_954_636_nofilter.jpg', 'https://s3-us-west-1.amazonaws.com/lcchou2/7102_7178006777_b432995e9d_b_954_636_nofilter.jpg']


var generate = function(){
  var obj = {
    // isHeader: header[getRndInteger(0,1)],
    photoId: photoId++,
    listingId: getRndInteger(1,100),
    description: description[getRndInteger(1,20)],
    url: url[getRndInteger(0,13)]
  }
  arr.push(obj)
}

for (var i=0; i < 1000; i ++) {
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

