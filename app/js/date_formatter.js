define(['module', 'moment'], function(module, moment) {
  'use strict';

  // alternative style:
  //   exports.bla = function ...
  // or
  //   module.exports = {}
  module.exports = {
    formatDate: function(value) {
      return moment(value).format('D.M.YYYY');
    },

    formatTime: function(value) {
      return moment(value).format('HH:mm');
    },

    formatDateTime: function(value) {
      return moment(value).format('D.M.YYYY HH:mm');
    }
  };

});

