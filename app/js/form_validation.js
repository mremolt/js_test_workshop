define(['exports', 'jquery', 'app/validation'], function(exports, $, validation) {
  'use strict';

  exports.required = function($formInput) {
    $formInput = $($formInput);

    $formInput.on('change blur', function(event) {
      var $target = $(event.target);
      var val = $target.val();

      if (validation.notEmpty(val)) {
        $target.removeClass('invalid').addClass('valid');
      } else {
        $target.removeClass('valid').addClass('invalid');
      }
    });
  };

  exports.email = function($formInput) {
    $formInput = $($formInput);

    $formInput.on('change blur', function(event) {
      var $target = $(event.target);
      var val = $target.val();

      if (validation.isEmail(val)) {
        $target.removeClass('invalid').addClass('valid');
      } else {
        $target.removeClass('valid').addClass('invalid');
      }
    });
  };

});
