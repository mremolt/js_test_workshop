define(['chai', 'jquery', 'fixtures', 'app/form_validation'], function(chai, jQuery, Fixtures, formValidation) {
  var expect = chai.expect;
  var fixtures = new Fixtures();
  fixtures.path = 'fixtures';

  describe('form validation', function() {
    var formElement,
      $;

    beforeEach(function() {
      fixtures.load('form_validation.html');
      $ = chai.jQueryWrapped(fixtures.window());
    });

    afterEach(function() {
      fixtures.cleanUp();
    });


    describe('#required', function() {
      beforeEach(function() {
        formElement = $("#required-field");
        formValidation.required(formElement);
      });

      it("adds the 'invalid' class if the field is empty", function() {
        formElement.change();
        expect(formElement).to.have.class('invalid');
        expect(formElement).to.not.have.class('valid');
      });

      it("does not add the 'invalid' class if the field is empty", function() {
        formElement.val("hallo");
        formElement.change();
        expect(formElement).to.not.have.class('invalid');
        expect(formElement).to.have.class('valid');
      });

      it("switches from invalid to valid", function() {
        formElement.change();
        formElement.val("hallo");
        formElement.change();
        expect(formElement).to.have.class('valid');
        expect(formElement).to.not.have.class('invalid');
      });
    });

    describe('#email', function() {
      beforeEach(function() {
        formElement = $("#required-field");
        formValidation.email(formElement);
      });

      it("adds the 'invalid' class if the field is empty", function() {
        formElement.change();
        expect(formElement).to.have.class('invalid');
        expect(formElement).to.not.have.class('valid');
      });

      it("adds the 'invalid' class if the email adress is not valid", function() {
        formElement.val("test@");
        formElement.change();
        expect(formElement).to.have.class('invalid');
        expect(formElement).to.not.have.class('valid');
      });

      it("adds the 'valid' class if the email adress is valid", function() {
        formElement.val("test@example.com");
        formElement.change();
        expect(formElement).to.have.class('valid');
        expect(formElement).to.not.have.class('invalid');
      });

      it("switches from invalid to valid", function() {
        formElement.val("hallo");
        formElement.change();
        expect(formElement).to.have.class('invalid');
        expect(formElement).to.not.have.class('valid');

        formElement.val("hallo@test.com");
        formElement.change();
        expect(formElement).to.have.class('valid');
        expect(formElement).to.not.have.class('invalid');
      });
    });

  });

});

