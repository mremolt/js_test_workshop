define(['exports', 'jquery', 'app/validation'], function(exports, $, validation) {

  exports.required = function($formInput) {
    $formInput = $($formInput);

    $formInput.on('change', function(event) {
      var $target = $(event.target);
      var val = $target.val();

      if (validation.notEmpty(val)) {
        $target.removeClass('invalid').addClass('valid');
      } else {
        $target.removeClass('valid').addClass('invalid');
      }
    });
  };

});
