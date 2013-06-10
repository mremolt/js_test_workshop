define(['chai', 'jquery', 'app/validation'], function(chai, $, validation) {
  var expect = chai.expect;

  describe('validation specs', function() {
    it('bla spec', function() {
      expect( validation.bla() ).to.equal('bla');
    });

    describe('#notEmpty', function() {
      it('is true for a not empty string', function() {
        expect( validation.notEmpty('hallo') ).to.be.true;
      });

      it('is false for an empty string', function() {
        expect( validation.notEmpty('') ).to.be.false;
      });

      it('is false for a null value', function() {
        expect( validation.notEmpty(null) ).to.be.false;
      });

      it('is false for a undefined value', function() {
        expect( validation.notEmpty(undefined) ).to.be.false;
      });
    });

    describe('#min', function() {
      it('is true if value is bigger than border', function() {
        expect( validation.min(4, 2) ).to.be.true;
      });

      it('is true if value is equal to border', function() {
        expect( validation.min(5, 5) ).to.be.true;
      });

      it('is false if value is smaller than border', function() {
        expect( validation.min(3, 4) ).to.not.be.true;
      });
    });

    describe('#max', function() {
      it('is true if value is smaller than border', function() {
        expect( validation.max(2, 4) ).to.be.true;
      });

      it('is true if value is equal to border', function() {
        expect( validation.max(5, 5) ).to.be.true;
      });

      it('is false if value is smaller than border', function() {
        expect( validation.max(4, 3) ).to.not.be.true;
      });
    });

    describe('#isNumeric', function() {
      it('is true for an integer', function() {
        expect( validation.isNumeric(42) ).to.be.true;
        expect( validation.isNumeric(0) ).to.be.true;
        expect( validation.isNumeric(-5) ).to.be.true;
      });

      it('is true for a float', function() {
        expect( validation.isNumeric(3.44) ).to.be.true;
      });

      it('is true for a string starting with a number', function() {
        expect( validation.isNumeric('42') ).to.be.true;
      });

      it('is true for a function returning a number', function() {
        var func = function() {
          return 42;
        };

        expect( validation.isNumeric(func) ).to.be.true;
      });

      it('is false for null', function() {
        expect( validation.isNumeric(null) ).to.be.false;
      });

      it('is false for undefined', function() {
        expect( validation.isNumeric(undefined) ).to.be.false;
      });

      it('is false for a boolean', function() {
        expect( validation.isNumeric(true) ).to.be.false;
      });

      it('is false for a string not starting with a number', function() {
        expect( validation.isNumeric('hello') ).to.be.false;
      });

      it('is false for an array', function() {
        expect( validation.isNumeric([3, 4]) ).to.be.false;
      });

      it('is false for an object', function() {
        expect( validation.isNumeric({ key: 'value' }) ).to.be.false;
      });

    });

    describe('isEmail', function() {

      it('is true for a valid email', function() {
        expect( validation.isEmail('marc@dcs-fuerth.de') ).to.be.true;
      });

      it('is false if an @ is missing', function() {
        expect( validation.isEmail('marc') ).to.be.false;
      });

      it('is false if there is nothing after the @', function() {
        expect( validation.isEmail('marc@') ).to.be.false;
      });

      it('is false if there is no dot after the @', function() {
        expect( validation.isEmail('marc@bla') ).to.be.false;
      });

      it('is false if there are two @ inside', function() {
        expect( validation.isEmail('marc@bla@test') ).to.be.false;
      });

      it('is false if there is nothing before the @', function() {
        expect( validation.isEmail('@example.com') ).to.be.false;
      });

    });

  });

});
