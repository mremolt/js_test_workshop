define(['exports'], function(exports) {
  'use strict';

  var normalizeNumber = function(value) {
    var val = null;

    if (typeof value === 'function') {
      val = value();
    } else if (typeof value === 'string') {
      val = parseFloat(value);
    } else if (typeof value === 'boolean') {
      val = NaN;
    } else if (value === null) {
      val = NaN;
    } else {
      val = value;
    }

    return val;
  };

  exports.bla = function() {
    return "bla";
  };

  exports.notEmpty = function(value) {
    var result;

    if (typeof value === 'string') {
      result = value.length > 0;
    } else {
      result = false;
    }

    return result;
  };

  exports.min = function(value, border) {
    return value >= border;
  };

  exports.max = function(value, border) {
    return value <= border;
  };

  exports.isNumeric = function(value) {
    return isFinite(normalizeNumber(value));
  };

  exports.isEmail = function(value) {
    // stolen from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };

});
