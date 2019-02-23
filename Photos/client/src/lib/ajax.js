import $ from 'jquery';

export default {
  getAjax: (listingId, callback) => {
    $.get({
      url: `http://ec2-13-56-13-87.us-west-1.compute.amazonaws.com/api/photos/${listingId}`,
      success: (data) => {
        callback(data);
      },
      error: (err) => {
        callback(err);
      }
    })
  }
  // ,
  // postAjax: (photos, callback) => {
  //   $.post({
  //     url:'http://localhost:3001/api/photos',
  //     contentType: 'application/json',
  //     data: JSON.stringify(photos),
  //     success: (data) => {
  //       callback(null, data);
  //     },
  //     error: (err) => {
  //       callback(err);
  //     }
  //   })
  // }
}
