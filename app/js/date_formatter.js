define(['exports', 'moment'], function(exports, moment) {

  exports.formatDate = function(value) {
    return moment(value).format('D.M.YYYY');
  };

  exports.formatTime = function(value) {
    return moment(value).format('HH:mm');
  };

  exports.formatDateTime = function(value) {
    return moment(value).format('D.M.YYYY HH:mm');
  };


});

