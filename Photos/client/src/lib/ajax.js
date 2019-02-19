import $ from 'jquery';

export default {
  getAjax: (listingId, callback) => {
    $.get({
      url: `http://localhost:3001/api/photos/${listingId}`,
      success: (data) => {
        callback(null, data);
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
