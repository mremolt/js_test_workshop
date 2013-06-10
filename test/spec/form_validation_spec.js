define(['chai', 'jquery', 'lib/fixtures', 'app/form_validation'], function(chai, jQuery, Fixtures, formValidation) {
  var expect = chai.expect;
  var fixtures = new Fixtures();
  fixtures.path = 'fixtures';

  // workaround: as mocha runs in an iframe, the default jQuery doesn't see the fixtures
  // this function helps wrapping jQuery to the fixture context, see beforeEach below
  var jQueryWrapped = function(defaultContext) {
    return function(selector, context) {
      return new jQuery.fn.init( selector, context || defaultContext );
    };
  };

  describe('form validation', function() {

    describe('validating a required field', function() {
      beforeEach(function() {
        fixtures.load('required.html');
        $ = jQueryWrapped(fixtures.window());
      });

      afterEach(function() {
        fixtures.cleanUp();
      });

      it("adds the 'invalid' class if the filed is empty", function() {
        var formElement = $("#required-field");
        formValidation.required(formElement);
        formElement.change();
        expect(formElement).to.have.class('invalid');
        expect(formElement).to.not.have.class('valid');
      });

      it("does not add the 'invalid' class if the filed is empty", function() {
        var formElement = $("#required-field");
        formValidation.required(formElement);
        formElement.val("hallo");
        formElement.change();
        expect(formElement).to.not.have.class('invalid');
        expect(formElement).to.have.class('valid');
      });

      it("switches from invalid to valid", function() {
        var formElement = $("#required-field");
        formValidation.required(formElement);
        formElement.change();
        formElement.val("hallo");
        formElement.change();
        expect(formElement).to.have.class('valid');
        expect(formElement).to.not.have.class('invalid');
      });
    });

  });

});

